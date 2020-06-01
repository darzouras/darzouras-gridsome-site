---
title: Now brought to you by Gridsome
date: 2020-05-23T16:33:44.199Z
summary: Spending Memorial Day weekend rebuilding this website in Gridsome
tags:
  - jamstack
header: /uploads/screenshot_2020-05-23-modern-site-generator-for-vue-js-gridsome.png
---
If you're reading this then it means that you're on a website built by [Gridsome](https://gridsome.org), a Vue-based static site generator. A branch of the 160over90 digital team apparently has used it at some point so trying it out is a good way to get a better feel for Vue and make all the beginner mistakes on this project instead of a client project.

Tried out GraphQL ages ago while playing around with Gatsby, still not sure whether or not it's right for most of our projects since it crashes when unable to find data. It's been hard for me to get used to? Had to step back when trying to tackle Tags in blog posts because I just couldn't get the query to work out.

Pretty impressed with myself that I managed to figure out how to update state to change the Header image. Not sure whether that's the best way but it's so far the best option I found to have two components talk to each other. A big perk that convinced me to make the switch is that Gridsome has built in pagination.

About to look into their plugin library so I can shove some unnecessary functionality to this site for the sake of learning or something.

## TODO:

* ~~Get OG data in head working ([try this?](https://timdeschryver.dev/blog/gridsome-social-cards))~~
* ~~Figure out how to add a Service-worker, make this a PWA ([this plugin?](https://gridsome.org/plugins/gridsome-plugin-pwa) or [this plugin?](https://gridsome.org/plugins/gridsome-plugin-service-worker))~~
* Get blog tags working
* Get all 100s in Lighthouse audit
* ~~Put Google Analytics back ([plugin?](https://gridsome.org/plugins/@gridsome/plugin-google-analytics))~~
* ~~Update queries so that they don't pull in huge images ([reference?](https://gridsome.org/docs/images/))~~ trying out the netlify plugin that compresses images instead!
* ~~Look into partial builds on Netlify so that it doesn't take forever to build???~~
* Write up notes based on things that were not made obvious by Gridsome + NetlifyCMS docs