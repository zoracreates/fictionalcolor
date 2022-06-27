---
published: true
date: 2020-01-01
categories: Experience Design, Visual Design, Design Engineering
title: UX Facilitation, visual design, and website theming for Harvard’s Mahindra Center for Humanities 
description: I redesigned the visual experience of Mahindra Center for the Humanities (MCH) website within the OpenScholar CMS and used CSS and JavaScript to apply new styles to the site.
featuredImage: ../../images/work/2020-mahindra/mahindra-project-card-2.png
featuredImageAlt: Mahindra Center for the Humanities website on a laptop and on a phone
importance: 4
---
<ProjectOverview 
    summary={props.frontmatter.description}
    teamAndTimeline="6 months start to finish with a 6-person team working on Harvard’s campus."
    responsabilitiesList={
        [
            "Experience and Visual Design",
            "Website Theming and Design Engineering",
            "Mobile and Accessibility Testing"
        ]
    }
    toolsList={
        [
            "Sketch",
            "InVision",
            "OpenScholar",
            "CSS",
            "JavaScript"
        ]
    }
    outcome="MCH’s new website theme became a model for 3 other Harvard humanities initiatives."
/>

## Problem and Context
MCH aims to bring forward insights from the humanities within and outside of Harvard. To meet their goals, they needed a new website that:
- Better showcased their upcoming events and recent news
- Highlighted past event videos that their audience valued for academic purposes
- Engaged undergraduate students with available opportunities
- Complied with Harvard’s new digital accessibility guidelines

## What I did
<h3 id="experience-and-visual-design">Experience and Visual Design</h3>

#### I facilitated 9 design ideation sessions, during which I asked questions and sketched ideas based on MCH’s needs. 
After each session, I created low-fidelity wireframes to present to the team for feedback. Presenting the designs through wireframes allowed the team to see the direction of the project more clearly. I showed the wireframe one week after the sketching session, giving the team time to process what we discussed and return with a more objective stance.
![whiteboards showing sketches for the new Mahindra website](../../images/work/2020-mahindra/sketching.png)
![low fidelity wireframes for the Mahindra website](../../images/work/2020-mahindra/wireframing.png)

#### Once we had the layout in order, I focused on the visual design. 
I created high-fidelity mockups for 3 pages (Home, Seminars, and Get Involved) to establish the style patterns of the site.
When selecting the fonts, I made accessibility and readability a priority. 
Most of MCH’s print materials used all-caps for event titles, but using all-caps for long headings could make them less readable.
![Comparison of headings  using all-caps, and headings using title case](../../images/work/2020-mahindra/fonts.png)
![3 high fidelity mock-ups for the Mahindra website](../../images/work/2020-mahindra/visual-design-3.png)

#### To highlight events, I made sure to include them in several relevant pages across the website.
Events appeared on the Events page, the Homepage, the Seminars landing page, and individual seminar pages. It was also important for scholars to reference past events, so we included past seminars on individual seminar pages and created a Videos page for event recordings.
![screenshot of the Seminars landing page showing upcoming events, and of an individual seminar page showing upcoming and past events for that seminar](../../images/work/2020-mahindra/seminar-events.png)
![Videos page wireframe and screenshot of the final Videos page](../../images/work/2020-mahindra/videos.png)

#### To increase engagement, I designed a Get Involved page meant to promote opportunities, primarily for students. 
We spent most of a workshop session discussing the language for the page, wanting to represent what MCH has to offer properly. 

MCH wanted to steer away from the language commonly used in STEM fields to indicate innovation and collaboration. Many humanities fields deal with the past, and collaborative projects are not very frequent within the humanities. 

Instead, we focused on emphasizing actions people could take to participate in MCH, and we featured a few opportunities adjacent to the organization.

![whiteboard sketch and highfidelity mockup for the Get Involved page](../../images/work/2020-mahindra/get-involved.png)


<h3 id="website-theming-and-design-engineering">Website Theming and Design Engineering</h3>

#### Next, I used CSS and JavaScript to theme the website. During this process, I had to adjust the styles for the Seminar page due to the markup.
We built the website using a content management system (CMS) called OpenScholar. As a CMS, OpenScholar offers a variety of widgets. On the Seminar page, we used a List of Posts widget to load a dynamic list of seminars and reduce content creation overhead. Unfortunately, this approach placed the title of the seminar above the seminar’s featured image. Per design, the title needed to be below the image. 

Due to the widget markup, I could not find a CSS solution to reverse this order, and a JavaScript solution meant potential negative performance and maintenance implications. Therefore I opted for placing the title above the image.
![using Chrome Dev Tools to inspect a seminar card](../../images/work/2020-mahindra/seminar-card.png)

<h3 id="mobile-and-accessibility-testing">Mobile and Accessibility Testing</h3>

#### I made sure the design worked well for mobile devices by using Chrome Dev Tools and BrowserStack for testing. 
Because most people view Harvard sites on large screens, we focused on wireframing the site’s desktop version. However, while theming, I refined the design so accommodated mobile website visitors as well.
![using Chrome Dev Tools for mobile testing](../../images/work/2020-mahindra/mobile.png)

#### I also conducted accessibility audits using the Wave and Site Improve Chrome Extensions to assure the site met with AA guidelines. 
While I fixed the errors I could, some errors were platform issues that I could not solve. The OpenScholar platform has various accessibility issues, including using first-level headings for all items in a list of post widgets. At the time of this project, Harvard was working with them to resolve some of these issues.
![using Wave for accessibility testing](../../images/work/2020-mahindra/accessibility.png)

## Learnings
Working with the creative and design-driven MCH staff, I learned to receive feedback gracefully from a design-aware and detail-oriented team.

## Outcome
MCH’s new website inspired 3 other Harvard humanities initiatives, thus giving my team 3 new clients.
Around launch time, the Harvard Arts and Humanities Division contacted my team, Harvard Web Publishing, to say they wanted to use the MCH website theme for their new student experience website. Later on, the project sparked even more interest and inspired the Office for the Arts at Harvard website and the Korea Institute at Harvard.


