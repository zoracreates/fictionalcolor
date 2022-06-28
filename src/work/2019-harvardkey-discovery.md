---
published: true
date: 2019-10-14
categories: [ "UX Research" ]
title: Discovery and Exploratory Research for HarvardKey 2.0
description: I participated in the analysis of interviews and in the initial journeymapping of a new login system of Harvard online resources.
featuredImage: ./src/images/work/2019-harvardkey-discovery/hk-discovery-project-card.png
featuredImageAlt: Section of an affinity map created for HarvardKey 2.0
displayOrder: 1
---

<!-- <ProjectOverview 
    summary={props.frontmatter.description}
    teamAndTimeline="HarvardKey  2.0 is a multi-year project, scoped in phases. In this case study, I discuss my involvement in the Usability Testing Phase, which took place from April to May 2021. I was also later involved in the Discovery Research Phase during Oct 2019."
    responsabilitiesList={
        [
            "Interview Data Analysis",
            "Journey Mapping",
            "Competitive Research and Literature Review"
        ]
    }
    toolsList={
        [
            "Miro",
            "Sketch"
        ]
    }
    outcome="The scope of the HarvardKey project expanded from adding a new login for a small Harvard audinece, to a more comprehansive re-design of the HarvardKey system used by eveyrone at Harvard."
/> -->


## Problem and Context
Harvard University degree candidates, full-time staff, and faculty use HarvardKey to access online university resources and software. But what happens when community members have a short-term commitment to Harvard? 
For example, what if they enroll for a short-term online course at the Kennedy School offered to anyone worldwide? 
These members of the Harvard community don’t need access to all Harvard online resources. 
For many years Harvard used a homegrown authentication system called XID. However, this system was difficult to integrate with software, and the process for creating new login identities was often slow, causing confusion and frustration to people interested in Harvard opportunities. 

This is the first part of a 2-part case study. I've also written an article for for the [testing phase of this project](/work/2021-harvardkey-testing/).

## The Team
The HarvardKey 2.0 team started from high leadership in Harvard. However, the core teams working in the project consisted of: the UX Strategy Lead at the Harvard Enterprise UX team, the Harvard Web Publishing (HWP) UX team, the Harvard Digital Accessibility Team (DAS), and the Harvard Identity and Access Management team (IAM).  For the most part, I worked closely with my team, HWP, and we reported research findings to IAM. 

## What I did
### [Interview Data Analysis](#interview-data-analysis)

#### I came into the project mid-discovery and was responsible for transcribing and coding part of the project interviews. These revealed problems with both XID and the larger HarvardKey.
Our team used Miro to organize intterview data.
{% image "./src/images/work/2019-harvardkey-discovery/hk-affinity-2.png", "section of an affinity map for the HarvardKey 2.0 project interviews" %}

Problems with XID included:
1. The system not requiring enough information to keep track of users identities.
<blockquote><p>“Requiring first name, las name and email in XID would be great, so we can get enough identity”</p></blockquote>
2. Users not beng able to update their information on their own
<blockquote><p>“There’s no self-service for changing your username”</p></blockquote>

HarvardKey had some similar issues:
1. Users having to depend too much on administrators for updates.
<blockquote><p>“It’s very difficult to self-service HarvardKey”</p></blockquote>
2. Users not knowing how to create a HarvardKey.
<blockquote><p>“There’s more than one option for claiming your HarvardKey [for new alumni], and its confusing for alumni.”</p></blockquote>
<blockquote><p>“Alumni find the password challenging to create,and remember they don’t use it often.”</p></blockquote>

Furthermore, there was an issue with people differentiating between the two systems:
<blockquote><p>“People don’t realize the HarvardKey tab and the XID tab are different. If that portal was agnostic, so you didn’t have to go to a seperate tab. It should recognize that it’s XID versus HarvardKey.”</p></blockquote>

### [Journey Mapping](#journey-mapping)

#### We used interview data to map out the path of the potential path of someone using a “lighter” version of HarvardKey, at the time dubbed HarvardKeyLight. 

I participated in the journey mapping exercise, along with the two lead researchers and members form the IAM team. We didn’t complete the journey map in one session, but we did uncover three critical patterns:

1. The amount of information we needed amongst users varied immensely as that person’s relationship with Harvard changed. We may not need much information for someone taking a short-term publicly-available course, but if that person decides to enroll in a degree program, they would need to provide more details to access more Harvard resources. 
2. The kind of relationship the person had with Harvard correlated to the effort that person might be willing to spend entering information. Someone applying for a degree might be willing to provide multiple forms of identification, but someone seeking information about a summer course may only want to give a name and an email.
3. People expected a seamless experience as their relationship with Harvard evolved. It made little difference for them to create a HarvardKeyLight account when they took a certificate course and then create a different HarvardKey account when they decided to pursue a full-time degree. Quoting an interview participant:
<blockquote><p>“HarvardKeyLight is Something that could be upgraded to regular HarvardKey.” </p></blockquote>

{% image "./src/images/work/2019-harvardkey-discovery/hk-journey-map-2.png", "The incomplete journey map for Executive Education students wanting to use Harvard online services." %}

### [Competitive Research and Literature Review](#competitive-research-and-literature-review)

#### To better understand how we could make it easier for someone to establish an evolving relationship with Harvard, I looked at how other universities and different industries dealt with the issue.

During my literature review, I asked myself two questions:
1. What is the minimum information we need from a person if they have a loose relationship with Harvard?
2. How can we gather more information if a person’s relationship with Harvard goes from short-term to long-term? 

I learned about AirBnB’s Progressive Authentication model, and to better understand how this model worked, I drew a table on Sketch that outlined the different points at which AirBnB requested more information from its users. The table showed that the more information a person provided, the more access they gained to AirBnB services.  

{% image "./src/images/work/2019-harvardkey-discovery/hk-airbnb-2.png", "Diagram showing the different levels of AriBnB's progressive authentcation model." %}


## Impact
### Research led the IAM team to realize that they needed to do more than just develop something called HarvardKeyLight. 
Instead, they decided to redesign HarvardKey as a whole, and approach Harvard’s authentication as a four-tiered system: Bronze, Silver, Gold, and Platinum. HarvardKeyLight became the Bronze tier. On this tier, users had the least access to services, and we needed to request little information. Based on these concepts, the IAM team created a diagram of requirements for the project. I’ve included the diagram below for demonstration purposes, but I did not make it myself. I've also blurred the image for confidentialy.

{% image "./src/images/work/2019-harvardkey-discovery/hk-levels-2.png", "Partly blurred out diagram of the different levels of authentication for HarvardKey 2.0, only showing the audience for each level." %}

### Thinking about the project in different tiers allowed the IAM team and designers in the project to uncover and systematically solve user pain points across the Harvard authentication system. 
After this research, the project entered an ideation and [testing phase](/work/2021-harvardkey-testing/), finally launching in July 2021. HarvardKey 2.0 is currently in use by the entire Harvard community.
