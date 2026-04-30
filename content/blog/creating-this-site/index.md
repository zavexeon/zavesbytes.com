+++
title = 'Creating This Website'
date = '2026-04-26T22:24:41-04:00'
draft = true

summary = "I've been intending to create a new personal website for a couple of years now but haven't had the inspiration to actually get working on one. Suddenly struck by motivation to actually get one built, I jumped in and got to work. Not all went as smoothly as I had hoped though..."
+++

*Note: I apologize if this current version of this post isn't terribly coherent! I will likely refine it to be more readable. - zave* 

## Inspiration

I've been spending a lot of time reading documentation from various sites that use very dated design. One of those is the website for [OpenAFS](https://openafs.org/). It's extremely simplistically styled but despite that it's easy to navigate and structured quite well. It's not the most pleasant on the eyes but I think it has charm in it's own unique way. I wanted to capture that feeling but to put my own spin on it.

## Goals

I didn't have a ton of goals starting out, but I knew I wanted a few basic things:

- Simplistic design
- No JavaScript requirement 
- Maintanable and fun to work on
- True to myself. I want it to be a digital representation of who I am. 

## Jumping in Blind

I kind of just started throwing a page together with no real end goal. I knew that I wanted my header to be made using ASCII word art, I thought that was cool, but for the actual page structure I wasn't entirely sure what I wanted to go with. I actually don't have a ton to write in this section because I've forgotten my thoughts during this process. I felt inspired and things just kept happening. Very quickly I went from nothing to a static version of my home page - quite similar to how it currently is at the time of writing.

Shortly after getting the home page in a state that I was mostly happy with though I realized something, how do I get shared UI components to be rendered on each page? I *could* just copy and paste it into every single page's file but that would be dumb and become very difficult to maintain as the site grows. After looking at my options I decided that a static site generator would likely be the best pick for my needs. I had never used one before so I did some research and found that 11ty was often suggested online. It was written in NodeJS which I've worked with pretty extensively in the past and seemed simple enough so I jumped in without much further research.

## Trying out 11ty

Initially things went fairly smoothly with 11ty after gaining my bearings. It was fairly straightforward once configured and most of my effort seemed towards learning the templating language I started with initially. I converted the work I had done so far into something that 11ty could use and in the process I broke up the core components such as the header and navbar out into their own files. I also did a *ton* of refactoring and optimization on the CSS side, what I had quickly thrown together initially was very messy.


## Templating Language Hell

11ty allows you to choose from a selection of multiple templating languages, most of the documentation is written with Nunjucks so I decided to use that. It worked great, it did all I had asked it to do, but for some reason I got it into my head that it wasn't *modern* enough. Oh no! It hasn't been updated for 2 years! Maybe I should use something else?

So after that I found an article about Webc, and how people using 11ty should switch from Nunjucks to Webc for their sites. Naturally, I decided to go ahead and refactor for Webc and installed the Webc plugin for 11ty got to work. That was a mistake.

I *hated* Webc. It just felt unintuitive and it relied upon invalid HTML elements which felt kind of gross to me. And after much frustration and anger I realized that Webc very well may end up being forgotten as time goes on. It hadn't been updated longer than Nunjucks hadn't, and the whole reason I swapped from Nunjucks was because of my false belief that it was outdated and potentially unsupported.

I briefly considered switching to Liquid, which is very syntactically similar to Nunjucks but has been in use since 2006 and is by far the most popular templating language out of what 11ty natively supports. I'm not sure why I hadn't decided to use that from the beginning, but by this point I was kind of burnt out. 

## Regret

After expending so much time and effort cleaning up and refactoring my site multiple times. I felt kind of burned by 11ty as well, the documentation wasn't the greatest and the development server felt kind of buggy at times. It worked well enough, but maybe it wasn't the right pick? At this point I felt overwhelmed though, I thought about giving up. Maybe I just wasn't good enough? A ton of people were using 11ty perfectly fine, was I just stupid?

## Clarity

Okay, maybe I'm a little stupid. But static site generators are new to me, I was just struggling with things I didn't fully understand yet and the 11ty docs in all honesty aren't great. I decided to take a step back and re-evaluate my options. 11ty wasn't really for me - it was hard to find support online for it and had cryptic error messages when things broke. I did some more research and ended up taking a deeper look at Hugo. Initially I wrote off Hugo because it seemed overkill for my usecase but after spending more time looking in it's documentation I realized it was a much better platform for someone new to SSGs. It's also written in Go, which I do enjoy programming in.

## Moving to Hugo

The transition to Hugo was not painless, just like Go it is very heavy on "convention over configuration". I had to spend a while learning *how* Hugo worked before I could even get anything more complex than a simple "Hello, World" rendered. Hugo follows a pretty ridgid structure and how your files are laid out determine the behaviour of Hugo, which I definitely struggled to wrap my head around initially. After a fair bit of frustration I finally started to understand Hugo enough to start getting my page ported to it.

## Hosting

My previous page was hosted on Github pages, but this time I wanted to self host because I thought it'd be a fun experience. I have access to plenty of hardware and I can definitely set up a webserver like Nginx. I've been playing with FreeBSD lately, so I thought it might be fun to host it on that.

So, with FreeBSD in mind I went ahead and created a VM on a shared Proxmox system I have access to and started to set it up. I quickly diverted from this though, after getting this *mostly* set up I had a better, funnier idea.

![2013 Mac Pro](bytes-the-trash-can.jpg)
