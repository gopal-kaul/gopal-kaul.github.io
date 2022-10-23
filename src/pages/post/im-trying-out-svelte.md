---
title: "My Experience with Svelte and how I used it on this site"
draft: false
date: 22/10/2022
layout: ../../layouts/BlogLayout.astro
description: "Here's why I think Svelte is better than React."
featured: true
---

# My Experience with Svelte and how I used it on this site

Written on 22nd October, 2022  

So I was remaking the mobile view for this blog and I realised the Navbar was broken. I decided to add a hamburger menu to fix it on mobile view. How would I do that? **Easy.** I'd just use Tailwind's breakpoints and create a hamburger menu to display for mobile devices.  

However, I felt it was ugly since the menu items showed up rather suddenly. I thought I'd try and add transitions to the height, which was successful but the elements were still in the DOM. The main issue is, if I'd use `visibile` and `hidden`, the animations would fail. I tried a lot of workarounds, and then I got frustated.  

Suddenly, I realised that Svelte had inbuilt transitions! I immediately looked into the syntax, and oh God, it was a moment of euphoria! All I had to do was to import the transition I needed from the preinstalled svelte transitions and use it to the corresponding element. Super Easy! Svelte's state management is much simpler than React - due to the fact that we use plain old JavaScript variables. Conditionals were a bit new to me, but it wasn't difficult at all to figure them out.  

I really like how Svelte works, and it compiles down to plain ol' JavaScript! That means it's performance is amazing! I'll be making more components of this site in Svelte from now. I don't know if Svelte can be the React killer, but I'm excited for the future of Svelte.  

Also, if you're wondering how I'm mixing and matching React and Svelte, then I'd like to introduce you to the wonderful <a href="https://astro.build/" target="_blank">Astro</a>, which is a JavaScript framework which lets you create blazingly fast sites.