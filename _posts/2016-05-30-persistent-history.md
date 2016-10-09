---
layout: post
category: post
title: Persistent History
subtitle:
place: London
---

[Eli Bendersky](http://eli.thegreenplace.net/) has [a neat script](http://eli.thegreenplace.net/2013/06/11/keeping-persistent-history-in-bash)
for keeping a persistent record of all commands run in bash.
I was covetous and wanted the same thing but for zsh which turned out to be surprisingly easy:

{% highlight bash %}
# Insert into your .zshrc
log_persistent_history() {
    echo $(history -i -1) >> $HOME/.persistent_history
}

touch $HOME/.persistent_history
add-zsh-hook precmd log_persistent_history
{% endhighlight %}

This is a lot simpler than Eli's script mostly because it doesn't de-duplicate
the commands (I'm actually kind of interested to see if I ever run `ls` twenty
times in a row).



