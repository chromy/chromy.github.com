---
layout: post
title: Generators in Lua
byline: (via coroutines)
place: Cambridge
category: post
---
Python has a nice generator syntax:

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

for x in unique({1, 1, 2, 3, 2}) do
    print(x)
end
{% endhighlight %}

This is not nearly as nice.
We've had to explicitly create a closure, use the 'next' function to iterate 
over the elements and embedded a repeat loop to skip seen elements. 
The result is really difficult to read.

We can get something closer to the Python syntax in Lua using coroutines.

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

