# Design System
## Project Overview
The goal of this project was to create a small design system and use it to build a responsive products page of a ficticious brand 'CottonMania'. The project contains three main folders `01-tokens/`, `02-component/` and `03-page-from-figma`. The first folder contains `tokens.css` where I define the tokens which are used to style visual elements in the whole project. 

In `02-component/` we showcase a button component in 3 variants (primary, secondary, destructive) and 3 sizes (small, medium, large), built entirely on top of the token set defined in `tokens.css`. 

The third folder `03-page-from-figma` contains the files for a responsive products page built from a Figma design mock-up ([Link](https://www.figma.com/design/RE3j6EI3Mz2rA86oIHgWxR/Product-Page?node-id=0-1&p=f&t=r8u3XpmFrzBSnAqD-0)). The page has been built using semantic HTML, CSS which only uses the tokens and components defined in the other two folders, and Vanilla Javascript. 

## What Are Design Tokens? 
Desgin tokens are small, reusable design decisions that make up a design system's visual style. They store visual design attributes for colors, font-sizes, spacing scale, border-radius and box-shadows. When we want to style the components of the page, such as buttons, we simply reference the token name in the css file using custom properties. 

## Why Design Tokens Matter
* Design tokens make it possible for a design system to have a single source of truth - in our project that single source of truth is the `tokens.css` file where the tokens are defined using CSS custom properties. 

* Design tokens make it much easier to update styles across the whole website or application. Updating a single variable in `tokens.css` automatically updates all components that use that variable across the entire project.

* Tokens make communication between designers and developers easier since they establish a clear shared naming convention. 

## Token System Structure
Token set for this design system is defined in `01-tokens/tokens.css` under the `:root` pseudo-class and organised into five structured categories: 

1. **Colors (`--color-{palette}-{shade}`)**
   * **Primary Palette (`50–900`):** Core brand color used for active states, CTA buttons, and highlights. 
   * **Neutral Palette (`0–900`):** Greys and whites for text and body and header background.
   * **Error Palette (`500–900`):** Dark red for warnings, error messages and destructive buttons.
2. **Typography (`--font-*`)**
   * **Font Sizes (`--font-size-{scale}`):** A modular scale ranging from `xs` (`0.75rem` / `12px`) to `5xl` (`4rem` / `64px`).
   * **Font Weights (`--font-weight-*`):** Ranging from `normal` (`400`) to `bold` (`700`).
   * **Line Heights (`--line-height-*`):** Ranging from `tight` (`1.25`) for display headings to `relaxed` (`1.75`) for long-form text.
3. **Spacing (`--spacing-{step}`)**
   * Based on a strict `4px`/`8px` grid system (`--spacing-1` = `4px` through `--spacing-12` = `48px`) to maintain vertical and horizontal rhythm.
4. **Border Radius (`--radius-{size}`)**
   * Pre-defined surface curvatures ranging from `sm` (`4px`) for small tags up to `full` (`9999px`) for pill buttons.
5. **Shadows (`--shadow-{size}`)**
   * Layered elevation levels (`sm`, `md`, `lg`) providing visual depth on cards and active states.


## Figma vs Code: Design Decisions
As mentioned above I first designed the products page in Figma and then built it using HTML, CSS and Javascript. Even though the specs provided by my mentor only specified to design the page at 1440px screen width, I decided to also create a mobile version design with a screen width of 393px. In the mobile design I decreased the font-size of the headings in the hero section from 48px to 32px for h1 and from 24px to 18px for h2. I originally set the smaller font-size to the exact same value from the Figma mock-up via a media query, but then I learned about `vw` measurement units and `clamp` css function. When using `vw` units for font-size, the font-size will change relative to the viewport width without having to define it at specific screen sizes via media query. The `clamp` function can then be used to define a minimum and maximum threshold within which the font-size has to stay. 

This means that the actual font-size value calculated by the clamp function at a 393px-wide viewport will deviate slightly from the Figma mock-up, but I believe this is a better approach since it allows for a much more fluid scaling of the headings between screen sizes. 

[Link to the Figma mock-up](https://www.figma.com/design/your-file-id-here)