# Layout Notes for Week 6 Tasks
This document outlines some of the most important layout and styling choices for the html pages from week 5. It focuses predominantly on explaining the flexbox and css grid layouts and some additional styling choices that were made to enhance the accessibility and user experience. It also discusses a few issues/problems encountered during the writing of the css code, how they have eventually been overcome and the most important lessons learnt. All three pages were styled with the mobile-first approach in mind. 

## Task1 - Semantic Profile Page

1. ### Flexbox and CSS grid layout
The semantic profile page uses both flexbox and grid display strategy. The header is styled as flexbox with the h1 heading and adjacent paragraph on the left and the navigation menu on the right on large screesn (min-width: 1024px) and stacked on top of each other on mobile and tablet screens (less than 1024px).

On large screens the body uses a grid display: 
```css
 body {
        display: grid;
        grid-template-columns: 2fr 1fr;
        margin: 0 auto
    }
```

This causes the main element to take up two thirds (2fr) of the body container and the aside element to take up the remaining one third (1fr). Since we want the header and footer to take up the full width of the body we specify a grid-column property:

```css
header, footer {
        grid-column: 1 / -1;
    }
```

The footer itself is a flexbox with its children elements (`<address>`, `<nav>` and `<small>`) displayed next to each other on large screens and stacked on mobile. 

```css
footer {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
    background-color: #ffe593;
    color: #1a1a1a;
    padding: 2rem 1.5rem
}

@media (min-width: 1024px) {
    header {
        flex-direction: row;
        justify-content: space-between;
    }
}
```

2. ### Additional component styling
* Custom timeline - The `#timeline` section uses a `border-left` on the `<ol>` and `::before` pseudo-element on the `<li>` to create a visual progress line with each milestone represented by a custom circular marker. 

```css
#timeline li::before {
  content: '';
  position: absolute;
  left: -47px; 
  top: 6px;
  width: 12px;
  height: 12px;
  background-color: #f6ae81;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(246, 174, 129, 0.6);
}
```
* Tabular data - the page uses `<table>` element to display the Education & Certifications data. The table is wrapped in a div container with class `.table-container` with `overflow-x: auto` to ensure the table remains accessible via a horizontal scrollbar and doesn't break the layout if the screen size gets too small. 

3. ### Accessibility & Interaction
* Skip link - The page has implemented a "Skip to main content" link. It remains hidden off screen (top: -100%), but becomes visible and functional when user presses Tab on keyboard. As already mentioned in "ACCESSIBILITY_NOTES.md", the purpose of the link is for keyboard users to be able to skip the navigation menu after page (re)load.  

4. ### Issues encountered during development
There were two major issues encountered during the styling of the page. 
* Issue 1 - As mentioned above, the header uses a flexbox layout. On large screens it has a default property `flex-direction: row` with the navigation menu pushed to the right of the header. In the default state (flex-basis: auto, flex-grow: 0), the navigation menu wraps onto a second line, which is not the desired visual outcome. In order to fix this, I had to change the flex-basis and flex-grow properties on the `.brand` element.

Before: 
```css
.brand {
    /* default properties */
    flex-basis: auto;
    flex-grow: 0
}

After:
```css
.brand {
    flex-basis: 0;
    flex-grow: 1
}
```

* Issue 2: Just like the footer itself, the footer navigation menu in our page is also a flexbox. 

Even with justify-content being set to center, I couldn't seem to get the flex items to center horizontally. Finally, I found out that this was due to ul elements having a default left-padding due to the bullet points. Even when the bullet points were gone, the default left padding was kept and it prevented the flex items to be centered. 

Before: 
```css
.footer-menu {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
}
```

After: 
```css 
.footer-menu {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    padding: 0
}
```

## Task2 - Multi-Step Form Simulation Page
1. ### Flexbox and CSS grid layout
The page simulates a 3-step course application form and uses both flexbox and grid display strategy. The navigation menu is composed of clickable anchor tags representing the form steps. The menu (`<ol>`) is a flexbox with individual list elements as flex items. On mobile screens the flex items are stacked on top of each other, while on larger screens (laptop and tablet), they are displayed horizontally. Each anchor tag is also a flexbox with `flex-direction: column`. Its flex items are the `::before` pseudo-element (the circular marker representing the step number) and the text of the anchor tag. 

The grid layout is used on the fieldset elements inside the form. On mobile and tablet screens the grid only consists of one column so the input fields are stacked on top of each other `grid-template-columns: 1fr` and on laptop/desktop screens (min-width: 1024px) the grid consists of two columns (`grid-template-columns: 1fr 1fr`). The only input field that takes up both columns is `textarea` which has `grid-column: span 2`. 

2. ### Additional component styling
The circular step indicators in the navigation menu are styled as `::before` pseudo-elements. Instead of having to manually set the pseudo-element's content to 1, 2 and 3, we use the counter function that will set the content automatically. 
```css
.nav-menu a::before {
    counter-increment: step-counter;
    content: counter(step-counter);
}
```

For this to work correctly we also have to apply `counter-reset: step-counter` on the navigation menu, so that the counter can start again from 0 every time the page is reloaded. 

```css
.nav-menu {
    counter-reset: step-counter
}
```

### 3. Accessibility & Interaction
To enhance experience for keyboard-only users and ensure high accessibility standards in general, I added custom focus styles for input fields that fit more the overal colour palette of the page.

```css
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
button:focus-visible,
a:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px
}
```
Furthermore, the input and textarea elements also have `:user-invalid` pseudo-class which add an additional red border and a warning icon if the user input is invalid. It's important to note that this only happens after the user has already interacted with the field. We could have also used `:invalid` pseudo-class, but this would be a much worse UX experience for the user, because all the required input fields would turn red upon page reload. 

4. ### Issues encountered during development 
* The main issue encountered during the development of this multi-step form simulation page was trying to get both the button elements and the anchor tags to have the same height. Even though the button elemetns and anchor tags had the same padding and same font size, the height of the anchor tags was slightly bigger. After a thorough research, I finally found out that the reason for this was the line height. By default, button elements do not inherit the line height from the body but their line height is set by the browser and is usually lower than 1.6. The way to solve this issue was to simply set the line-height property for both button elements and anchor tags to inherit. This way the button element will inherit the line-height from the body instead of "listening" to the browser default settings. 

Before:
```css
button, nav[aria-label="Form navigation"] a{
    padding: 0.8rem 2.4rem;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    font-size: inherit;
    text-decoration: none;
    text-align: center;
}
```

After: 
```css
button, nav[aria-label="Form navigation"] a{
    padding: 0.8rem 2.4rem;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    font-size: inherit;
    text-decoration: none;
    text-align: center;
    line-height: inherit
}
```

## Task3 - Learning Hub
1. ### Flexbox and CSS grid layout
The page uses a combination of flexbox and grid layout. On mobile screens the content elements inside the body are simply stacked on top of each other, while on larger screens (min-width: 1024px), the body has `display: grid` with `grid-template-columns: 2fr 1fr`. This means that the main element takes up two thirds of the body container's width and the aside takes up the remaining one third. 

