---
layout: post
title: Generators in Lua
byline: (via coroutines)
place: Cambridge
category: post
---
Python has a nice generator syntax as below.

{% highlight python %}
def unique(alist):
    seen = set()
    for x in alist:
        if x not in seen:
            yield x
            seen.add(x)

for x in unique([1, 1, 2, 3, 2]):
    print x
{% endhighlight %}

Lua has the ability to do something similar like this:

{% highlight lua %}
local unique = function(alist)
    local seen = {}
    return function(last)
        local last, x
        repeat
            last, x = next(alist, last)
        until x == nil or not seen[x]
        if x == nil then
            return nil
        else
            seen[x] = true
            return x
        end
    end
end
{% endhighlight %}

This is okay but not nearly as nice.
We've had to
explicitly create a closure which can be awkward sometimes.
We also had to use the 'next' function to explicitly iterate over the elements.
Finally the embedded repeat loop to skip seen elements is quite ugly.

We can get something closer to the Python syntax in Lua by (ab)using coroutines.

{% highlight lua %}
function make_iter(f)
    return function(...)
        local args = ...
        local co = coroutine.create(f)
        return function()
            if coroutine.status(co) == "dead" then
                return nil
            end
            _, result = coroutine.resume(co, args)
            return result
        end
    end
end

local unique = make_iter(function(alist)
    local seen = {}
    for _, x in ipairs(alist) do
        if not seen[x] then
            yield(x)
            seen[x] = true
        end
    end
end)

for x in unique({1, 1, 2, 3, 2}) do
    print(x)
end
{% endhighlight %}

