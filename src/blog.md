---
title: Blog
layout: layouts/blog-index.html
description: Writings about a UX, a career in tech, and inclusive research and design.
pagination:
  data: collections.blog
  size: 15
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: Newer posts
paginationNextText: Older posts
---