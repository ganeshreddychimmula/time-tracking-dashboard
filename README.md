# Time Tracking Dashboard

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-component-PEQNxT2QQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

**Live Site URL:** [https://ganeshreddychimmula.github.io/time-tracking-dashboard/](https://ganeshreddychimmula.github.io/time-tracking-dashboard/)

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

The challenge was to build out this time tracking dashboard component and get it looking as close to the design as possible. Users should be able to switch between viewing daily, weekly, and monthly stats.

### Screenshot

*Note: Replace the placeholder above with an actual screenshot of your completed project.*

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CUBE CSS methodology (for structure and organization)
- Mobile-first workflow

### What I Learned

This project was a great opportunity to practice and explore the **CUBE CSS methodology**. I focused on breaking down the interface into:
- **Composition (C):** Defining the overall layout and structure of the dashboard.
- **Utility (U):** Creating reusable utility classes for common styling needs (e.g., font weights, colors, spacing - though this can be an area for further refinement).
- **Block (B):** Identifying distinct components like the profile card and the individual time tracking cards.
- **Exception (E):** Handling variations, such as the different colors and icons for each activity card.

I also focused on creating a responsive design that adapts to different screen sizes, primarily using CSS Grid and Flexbox for layout.

### Continued Development

In future development, I would like to focus on:

- **Further refining utility classes:** Extracting more granular utilities for typography, spacing, and colors to make the CSS even more modular.
- **Implementing fluid typography and spacing:** Using techniques like `clamp()` or viewport units to make the design scale more smoothly across all screen sizes, rather than relying solely on breakpoints.
- **Adding interactivity with JavaScript:** Currently, the timeframe switching (Daily, Weekly, Monthly) is visual. The next step would be to implement JavaScript to dynamically change the displayed data based on the selected timeframe.

### Useful Resources

During this project, the principles and ideas from the following resources were particularly helpful in shaping my approach to CSS and responsive design:

- [**CUBE CSS**](https://cube.css.com)**:** The core methodology I aimed to explore for structuring the CSS. Its principles of Composition, Utility, Block, and Exception were a key focus.
- [**Frontend Mentor**](https://www.frontendmentor.io)**:** The platform that provided the challenge and design.
- [**CSS-Tricks**](https://css-tricks.com)**:** A constant source of excellent articles and tips for all things CSS and web development.
- **"Be the browser’s mentor, not its micromanager" (Concept):** This idea (often discussed by Andy Bell, related to CUBE CSS) about building flexible, resilient layouts was a guiding principle.
- [**Utopia - Fluid Space Calculator**](https://utopia.fyi/space/calculator)**:** While perhaps not fully implemented in this version, resources like Utopia are invaluable for understanding and generating fluid typographic and spacing scales, which is a target for continued development.
- [**Custom variable guide**](https://css-tricks.com/a-complete-guide-to-custom-properties/)**:** They help DRY up your CSS. That is “Don’t Repeat Yourself.” Custom properties can make code easier to maintain because you can update one value and have it reflected in multiple places. Careful though, overdoing abstraction can make have the opposite effect and make code less understandable.They are particularly helpful for things like creating color themes on a website.
They unlock interesting possibilities in CSS. In no small part because they cascade.
The fact that they can be updated in JavaScript opens up even more interesting possibilities.
- [**Modular Scale**](https://www.modularscale.com/)**:** A modular scale is a mathematical rule that one can use to create intentional and harmonious typography sizing. A scale is represented as a number that gets multiplied against a base size again and again, creating 'steps'.
- [**CSS LOCKS - Precise control over responsive typography**](https://www.madebymike.com.au/writing/precise-control-responsive-typography/)**:** Creating fluid responsive typography with calc and viewport units. 

## Author

- **Ganesh Reddy Chimmula**
- GitHub - [@ganeshreddychimmula](https://github.com/ganeshreddychimmula)
- Frontend Mentor - [@ganeshreddychimmula](https://www.frontendmentor.io/profile/ganeshreddychimmula)

## Acknowledgments

- Thanks to Frontend Mentor for providing this challenge.
- The CUBE CSS methodology by Andy Bell provided a great framework for thinking about CSS architecture.
- The broader web development community and resources like CSS-Tricks for continuous learning.
- CSS-only fluid modular type scales By Trys Mudford**
- 