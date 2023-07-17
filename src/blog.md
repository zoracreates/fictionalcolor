---
title: Blog Archive
layout: layouts/blog-index.html
description: A blog about infrared photography
pagination:
  data: collections.blog
  size: 15
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: Newer posts
paginationNextText: Older posts
---