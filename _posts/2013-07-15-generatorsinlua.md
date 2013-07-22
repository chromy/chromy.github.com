---
layout: post
title: Generators in Lua
byline: (via coroutines)
place: Cambridge
---
Python has a nice generator syntax as below.

{% gist 6001722 python_example.py %}

Lua has the ability to do something similar like this:

{% gist 6001722 lua_example.lua %}

This is okay but not nearly as nice.
We've had to
explicitly create a closure which can be awkward sometimes.
We also had to use the 'next' function to explicitly iterate over the elements.
Finally the embedded repeat loop to skip seen elements is quite ugly.

We can get something closer to the Python syntax in Lua by (ab)using coroutines.

{% gist 6001722 generators_in_lua.lua %}

