#!/usr/bin/env bash

display_usage() {
    echo "Usage: new_post.sh TITLE"
}

todays_date() {
    date "+%Y-%m-%d"
}

template() {
    local title=$1
    cat << EOF
---
layout: post
category: post
title: $1
subtitle: 
place: London
---
EOF
}

main() {
    local title=$1
    local the_date=`todays_date`
    local name="_posts/"$the_date"-"$title".md"
    template $title > $name
    vi $name
}

[ $# -eq 0 ] && { display_usage; exit 1; }
main $1



