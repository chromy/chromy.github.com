---
layout: project
title: PostItOnFridge.com
category: project
---

PostItOnFridge.com
==================

[PostItOnFridge.com](http://postitonfridge.com) was webapp I built with
Xueqi&nbsp;Chen, Kritaphat&nbsp;Songsri-In and Felix&nbsp;de&nbsp;Souza
as part of my second year at university.

![Screen Shot](/static/img/inserts/postitonfridge.png 'aka ourfridge.us')

PostItOnFridge [was in the top 6](http://www3.imperial.ac.uk/computing/teaching/ug/webapps-distinguished-projects/2013) of the 38 Web App group projects in \'12/\'13.


What?
-----

From our marketing copy:

>"PostItOnFridge.com gives users a shared online space where they and their friends can post notes, pictures, documents, video and audio. The application uses real-time updates and built-in chat to make the digital space feel like a physical space where you can hang out with your friends."

How?
----

With free choice over our stack we used a host of technologies, some we knew and some we had to pick up as we went along:
* Javascript (JQuery)
* Python (Flask)
* Redis 
* SQL (SQLite[^1])
* Gunicorn
* Nginx
* AWS

Although we all had a hand in everything I was principally responsible for the backend and operations.
I implemented the majority of the backend code which was written Python on top the Flask framework.
I also handled the deployment and running of our application on an AWS server, this included setting up Nginx, Gunicorn and Redis.



[^1]: Yes, I know, but this was after wading though the Nginx and Gunicorn docs and I was getting tired of setting up big moving pieces.
