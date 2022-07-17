---
title: Why I went from Gatsby to Eleventy
tags: [ "design engineering", "front-end development" ]
date: 2022-07-16
description: While I enjoyed using Gatsby, I wanted a more lightweight solution that let me use HTML instead of JSX. 
---
I’m a big fan of React. I find JSX to be a great tool for creating reusable components and writing readable JavaScript. When I heard of Gatsby as tool for creating a blog or personal website, I was instantly in. But the more I’ve used it over the years, the more I realized that perhaps Gatsby was overcomplicating my life. That’s when I came across Eleventy, and decided to rebuild.

## Here’s why I switched.
### HTML please! 
JSX works well for encapsulating complex components, and it can help establish a common language and consistency across an application. It works great if you’re building something big and complex. For a personal website, it felt like overkill.

Why did I need to keep writing “className” when I could just write “class”? And using map functions every time I wanted to create a simple list of items felt like I was doing too much. 

I kept asking myself if I could go back to the good old days when my portfolio consisted of HTML and Sass. But I knew that would mean writing a lot of the same code over and over, and it made no sense if I wanted to also have a blog.  I considered going to a CMS like Wordpress, but hosting was more expensive than simply putting my site up in Github and Netlify. 

I decided to try Elevently, because it is built on the premise of being able to write HTML, and only incorporating JavaScript when needed, such as templating and conditionals. I realized this was the happy-medium I sought.

### No GraphQL for querying
One aspect about Gatsby that I always found cumbersome was using GraphQL. While I was eventually always able to figure out what I needed, I was never quite comfortable with the GraphQL syntax. Some day, I intend to polish my GraphQL skills. But to be honest, most of the time I work on my website, I just want to make a small quick change.

Elevently, didn’t require familiarity with a querying language. Instead, I could use basic JavaScript to create Collections. Then I could use Nunjucks (or another templating language) and HTML to create lists of files and page templates. I had never used Nunjucks before, but  I needed minimal knowledge of the syntax to get started.  The [Elevently Collections](https://www.11ty.dev/docs/collections/)  documentation provided all the information I needed.

### Less plugins and dependencies
Keeping my Gatsby website up-to-date was starting to feel like a big to-do. There were too many dependencies associated with supporting React and all of Gatsby’s plugins. Because I was focusing on posting content, I wasn’t making updates frequently enough. You could call it laziness, and perhaps you are right.  But what’s wrong with wanting simplicity? I wanted a website that worked for me, not one that I needed to adjust my whole mindset around. While Elevently does use plugins and does require some dependencies, compared to Gatsby they are minimal and easier to hand-pick and configure.

## The draw backs…
Elevently is considered less “out-of-the-box” than Gatsby. Some would argue that this makes it more complicated to work with if you don’t know what you are doing. However, I would argue that because you have more flexibility to hand-pick what you need to start, Elevntly can be easier to manage when you have limited programming experience. If you find that the Eleventy docs are a little harder to get through, here’s a two resources that helped me build my site:
- [Learn Eleventy From Scratch by Andy Bell](https://learneleventyfromscratch.com/#about-your-instructor)
- [A Deep Dive Into Eleventy Static Site Generator by Stephanie Eckles on Smashing Magazine](https://www.smashingmagazine.com/2021/03/eleventy-static-site-generator/)

Additionally, if helped me to looked at the GitHub Repos of some projects built on Eleventy, including:
- [Stephanie Eckles Sass starter](https://github.com/5t3ph/11ty-sass-skeleton)
- [The A11y Project](https://www.a11yproject.com/) 
	- [Repo](https://github.com/a11yproject/a11yproject.com)

## Conclusion
I’m not saying everyone should stop using Gatsby and switch to Eleventy. There are different tools out there because people have different skill-sets and needs. The goal of this post is to provide additional perspective for someone trying to select their next static site generator or trying to build their own personal website. I decided to use Eleventy because it  better matches my skillset and needs. Find what works best for you.