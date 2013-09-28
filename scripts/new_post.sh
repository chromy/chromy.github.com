#!/usr/bin/env bash

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
byline: 
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

main $1



