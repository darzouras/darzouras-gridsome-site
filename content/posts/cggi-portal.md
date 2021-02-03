---
title: CGGI Portal
date: 2020-06-18T16:02:57.834Z
summary: Pushing MODX to its limits to bring a user portal to CGGI
header: /uploads/screen-shot-2020-06-18-at-11.04.11-am.png
tags:
  - case study
  - 160over90
  - work
---
## The ask:

The Friedkin Group's Congaree Foundation came to our team with a unique request compared to the usual website builds from other Friedkin Group projects: to build a user portal where participants and team members involved in the Congaree Global Golf Initiative can share information and post messages. Typically our [MODX](https://modx.com/) build situations only involve taking advantage of it's CMS options with really minimal dealing with user management and page permissions. Executing this project would require investing a lot of time in diving deeper into MODX capabilities and testing what was and was not possible based on the tools.

These were the requirements:

* Participant users must be able to access the portal, be able to update their profiles, and be able to view a message board between CGGI staff and be able to post messages to it.
* Staff must be able to access the portal, view a list of all participants, access a profile page for each participant, view a message board for each participant, and also view staff-only reports unique to participants. Staff must be able to export data about each participant and all participants as CSVs from these pages.

## The tech:

MODX is the go-to CMS that we use for projects like this and we knew right away that we would have to fit the requirements within its capabilities. A lot of research and experimentation went into this project but we managed to work with some MODX Plugins to meet requirements.

Details regarding this project cannot be shared but these are some of the plugins that we were able to take advantage of:

* All messaging / reporting is done with [Quip](https://docs.modx.com/current/en/extras/quip/index), a comment plugin. Message boards are identified as threads based on participant username.
* User management (login, password retrieval, etc) is done through the [Login](https://docs.modx.com/current/en/extras/login/login) plugin. This plugin was also a must-have for updating and returning profile data.
* [Peoples](https://docs.modx.com/current/en/extras/peoples) was used to organize and fetch users that were part of specific user groups.
* Quite a few custom snippets were made as well to protect particular pages, reroute users based on their user group, and in some data retrieval.

The CGGI Portal is of course not available to people outside of the program but you can visit the Foundation website at [congareefoundation.org](http://congareefoundation.org).