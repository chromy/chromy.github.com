---
layout: post
category: post
title: A subtle bug
subtitle: Dat trigraph syntax
place: London
---

Spot the bug:

```java
int getAlphaComponent(int color) {
    // color is stored in ARGB format.
    return color >> 24;
}
```

Do you see it? It took we way to long.

In Java `>>` is signed/arithmetic shift
not logical shift so `0xFF000000 >> 24` is `0xFFFFFFFF` (-1) when you
probably wanted `0x000000FF` (255).

Like all the best bugs this one has a single character fix:

```java
int getAlphaComponent(int color) {
    // color is stored in ARGB format.
    return color >>> 24;
}
```

And you get to use the cool triple angle bracket syntax which somehow always
reminds me of merge conflicts...
