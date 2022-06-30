---
title: 'Blog Tag: '
layout: 'layouts/blog-index.html'
description: Writings about a UX, a career in tech, and inclusive research and design.
pagination:
  data: collections
  size: 1
  alias: tag
  filter: [ "all","work", "uxr", "uxd", "rss", "de", "vd", "fe"]
permalink: 'blog/tag/{{ tag | slug }}/'
eleventyExcludeFromCollections: true
---