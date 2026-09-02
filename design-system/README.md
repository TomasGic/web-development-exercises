# Design System
## Project overview
The goal of this project was to create a small design system and use it to build a responsive products page of a ficticious brand 'CottonMania'. The project contains three main folders `01-tokens/`, `02-component/` and `03-page-from-figma`. The first folder contains `tokens.css` where I define the tokens which are used to style visual elements in the whole project. 

In `02-component/` we showcase a button component in 3 variants (primary, secondary, destructive) and 3 sizes (small, medium, large), built entirely on top of the token set defined in `tokens.css`. 

The third folder `03-page-from-figma` contains the files for a responsive products page built from a Figma design mock-up. The page has been built using semantic HTML, CSS which only uses the tokens and components defined in the other two folders, and Vanilla Javascript. 

## What are design tokens? 
Desgin tokens are small, reusable design decisions that make up a design system's visual style. They store visual design attributes for colors, font-sizes, spacing scale, border-radius and box-shadows. When we want to style the components of the page, such as buttons, we simply reference the token name in the css file using custom properties. 

## Why design tokens matter
* Design tokens make it possible for a design system to have a single source of truth - in our project that single source of truth is the `tokens.css` file where the tokens are defined using CSS custom properties. 

* Design tokens make it much easier to update styles across the whole website or application. Updating a single variable in `tokens.css` automatically updates all components that use that variable across the entire project.

* Tokens make communication between designers and developers easier since they establish a clear shared naming convention. 

