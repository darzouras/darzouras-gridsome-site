---
title: Performance Academy multi-language implementation
date: 2021-04-18T19:56:05.304Z
summary: Planning for a multi-language website has been a unique challenge for
  me as a developer, here's what I learned.
tags:
  - 160over90
  - work
header: /uploads/ua1.jpg
---
I've built a ton of websites over the past four years but this is the first time I've had to manage multiple languages. I knew that it would come with some challenges and it didn't let me down. Here are some things I learned along the way:

## Anticipate needing custom styles for different languages

Adjustments to line height and letter spacing were one of the first adjustments we made. Accent marks in the Spanish and German language sites floated above the characters and sometimes got overlapped or lost in the line above it.

Depending on the languages you're accommodating you might have to expect to have to address long words. For our German site we had to add the option to break words with `word-wrap: break-word; hyphens: auto;`.

In our case we had to make most adjustments for the Korean language site as it was the only one that did not use a Latin alphabet. The characters were quite a bit wider than the very narrow font that was used for headlines which means that font sizes and max widths had to be adjusted. Line spacing had to be adjusted for this language version as well for better readability.

We were able to set custom styles by setting a global variable and assign that as a class to the body, then assigning styles to certain classes that were children of that global language class.

## Be generous (to yourself) when estimating time needed to implement another language

Do this especially if you're new to adding new languages. Getting WPML set up initially was fairly straightforward, but the integration with ACF and came with a lot of adjustments to settings on specific fields. For instance, some of the ACF fields were used to add a class to an element- those kinds of fields should not be translated.

It took some time to figure out a work flow that worked for our team as well. Using the WPML advanced editor really didn't work for us so the best option that we found was to go into the site editor and for each page set the language for the dashboard, then make the edits on the page for that language. Not sure if this is a typical work flow but it worked well for us.