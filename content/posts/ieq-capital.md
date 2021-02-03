---
title: IEQ Capital
date: 2020-10-06T20:56:59.810Z
summary: The IEQ Capital project brought a new public-facing website to this
  financial firm.
header: /uploads/screen-shot-2020-10-06-at-3.55.49-pm.png
tags:
  - work
  - 160over90
  - case study
---
## The ask:

As a financial firm the goal for this website was to feel deluxe. I worked closely with our art director, Rich Norton, to produce this site. One way we aimed to achieve this is by adding some subtle animations.

![Two boxes animate over each other, a dark blue square fills in where they overlap.](/uploads/ieq-animation.gif)

Between subtle fade-ins as you reach content on the page, a tag hover states, and a nav bar that scales back as you scroll, this site has more animation than any other site I've built before. I'm excited to report that all animations are made completely in CSS (with some help from jQuery on checking scroll position). Even the image above is animated completely in CSS.

## The tech:

I remember struggling as a junior dev with the idea of animations, spending a lot of time looking into different plugin options or packages. I avoid situations like that as much as possible to keep the websites I ship free of bloated extras. Most of the animations actually are as simple as this: 

```
<style>
@keyframes fadein-up {
    from {
        opacity: 0;
        transform: translateY(5%);
    }
    to {
        opacity: 1;
        transform: none;
    }
}
.scroll-in {
    opacity: 0;
}
.fadein-up {
    animation-name: fadein-up;
    animation-duration: 1s;
    animation-fill-mode: forward;
}
</style>

<script>
$(document).ready(function(){
    $(document).scroll(function(){
        $('.scroll-in').each(function(){
            if ($(this).offset().top - $(window).scrollTop() < $(window).height() * .75) {
                $(this).addClass($(this).data('animate'))
            }
        })
    })
})
</script>

<div class="scroll-in" data-animate="fadein-up">
    I will fade in and up when you scroll to me.
</div>
```

The key to this system is the <i>scroll-in</i> class and the <i>data-animate</i> attribute. Basically what happens is that divs that have the <i>scroll-in</i> are checked as you scroll on the page. Once it's high enough on the page (I have it set so that it triggers when it passes the bottom quarter of the window height) the javascript checks the data attribute, then adds the attribute as a class. When that class style has information about an animation, the animation is triggered.

Many more animation classes exist on the site, but adding this functionality made it easy to call when needed in many situations.

This site launched in October of 2020.