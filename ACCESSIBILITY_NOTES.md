# Accessibility Notes for Week 5 Tasks
This document outlines the 10 fundamental accessibility principles and how they have been implemented in my week 5 tasks.

## Task 1 - Semantic Profile Page
* Rule 1 - Use semantic elements:
The page contains semantic HTML5 elements, including `<header>`, `<nav>`, `<main>`, `<article>` and `<aside>`. `<div>` elements are used only to wrap semantic elements in a container for styling and layout purposes. For example, in order to display our `<header>` element as flexbox with the main `<h1>` heading and the `<p>` paragraph on the left and the `<nav>` on the right, we wrap the heading and the paragraph in a div and give it a class of brand. 

* Rule 2 - Set `<lang>` on `<html>`
In the page the language is set to English by adding an attribute to the root html element: `<html lang="en">` This is crucial for the screen reading technology to choose the correct voice profile for reading the page content. 

* Rule 3 - One `<h1>` per page, correct hierarchy
In our html page, the only `<h1>` element is inside the header. The subsequent headings follow a clear hierarchy.  
```html
    <main id="main">
        <article id="profile">
            <h2>About Me</h2>
            
            <!--Bio section-->
            <section id="bio">
                <h3>Bio</h3>   
```

* Rule 4 - Every `<img>` has meaningful `alt` text
This html page does not contain any `<img>` elements

* Rule 5 - Every form input has a `<label>`
The page does not contain any form inputs.

* Rule 6 - Use `<fieldset>` + `<legend>` for groups
Not applicable in this page.

* Rule 7 - Interactive elements are keyboard accessible
All `<button>` and `<a>` elements on this page can be triggered using keyboard only.

* Rule 8 - Don't rely on colour alone to convey info


* Rule 9 - Use table only for tabular data
The page uses `<table>` element to display the education & certifications section data. Since the data is tabular(provides information about institution, program, period and status of the certification), using `<table>` element is the right choice. The table has a `<caption>` element to provide a context for the user and each `<th>` element has a scope attribute that specifies whether the element is a row header or a column header. If we didn't provide this attribute, the screen reader would just read out the data in the cell and the user wouldn't know which header the data belongs to. 

* Rule 10 - Provide skip navigation link
The page contains a link which allows users to skip to the main content.
`<a href="#main" class="skip-link">Skip to main content</a>`
While this is useful for all users, it is especially targeted for keyboard-only users who would normally have to tab through every navigation menu item every time they load a new page. 


## Task 2 - Multi-Step Form Simulation Page
* Rule 1 - Use semantic elements:
The page contains semantic HTML5 elements, including `<header>`, `<nav>`, `<main>`, `<form>` and multiple `<fieldset>` elements. `<div>` elements are used only to wrap semantic elements in a container for styling and layout purposes. For example, in order to display each `<fieldset>` as a grid, we wrap each input and its corresponding label in a div and give it a class field-wrapper. 

* Rule 2 - Set `<lang>` on `<html>`
In the page the language is set to English by adding an attribute to the root html element. `<html lang="en">` This is crucial for the screen reading technology to choose the correct voice profile for reading the page content. 

* Rule 3 - One `<h1>` per page, correct hierarchy
In our html page, the only `<h1>` element is inside the header. In the step 3 page, the headings follow a clear hierarchy - The `<main>` element contains `<h2>` heading and each `<section>` inside `<main>` has `<h3>` heading. 

* Rule 4 - Every `<img>` has meaningful `alt` text
This html page does not contain any `<img>` elements

* Rule 5 - Every form input has a `<label>`
Every input uses a `<label>` with a for attribute that matches the input id. This ensures that clicking the label focuses the input and that screen readers announce the label correctly.

* Rule 6 - Use `<fieldset>` + `<legend>` for groups
The page uses `<fieldset>` and `<legend>` to group "Personal Details" and "Address", which provides context for screen reader users. 

* Rule 7 - Interactive elements are keyboard accessible
All `<button>` and `<a>` elements on this page can be triggered using keyboard only.

* Rule 8 - Don't rely on colour alone to convey info
When user incorrectly fills out an input field, the border of the input element turns red, which indicates invalid field. While this might be sufficient for most users, users who are colour blind for instance, might not understand what's going on. Therefore I added some extra css that will show a warning icon in the invalid input field.

* Rule 9 - Use table only for tabular data
The page does not contain any `<table>` elements.

* Rule 10 - Provide skip navigation link
The page does not contain a skip navigation link since the navigation bar only contains the 3 form steps, and if the user is navigating the page with a screen reader, it might actually be beneficial to hear the step they are currently on. 

## Task 3 - Learning Hub
* Rule 1 - Use semantic elements:
The page contains semantic HTML5 elements, including `<header>`, `<nav>`, `<main>`, `<article>` and `<aside>`. `<div>` elements are used only to wrap semantic elements in a container for styling and layout purposes. For example, in order to make the `<table>` element horizontally scrollable, we wrap the table in `<div class="table-container">` and in the css file we set the overflow-x property to auto: 
```css
.table-container {
    width: 100%;
    overflow-x: auto
}  
```

* Rule 2 - Set `<lang>` on `<html>`
In the page the language is set to English by adding an attribute to the root html element. `<html lang="en">` This is crucial for the screen reading technology to choose the correct voice profile for reading the page content. 

* Rule 3 - One `<h1>` per page, correct hierarchy
In our html page, the only `<h1>` element is inside the header. The subsequent headings follow a clear hierarchy with sections containing `<h2>` and `<h3>` headings.

```html
<section id="goals">
                <h2>Learning goals</h2>
                <h3>Short-term goals (next 3 months)</h3>
```

* Rule 4 - Every `<img>` has meaningful `alt` text
The page contains one image which has an alt atribute with a short and clear image description: `<img alt="Front cover of the book Clean Architecture by Robert C. Martin>`

* Rule 5 - Every form input has a `<label>`
Every input uses a `<label>` with a for attribute that matches the input id. This ensures that clicking the label focuses the input and that screen readers announce the label correctly.

* Rule 6 - Use `<fieldset>` + `<legend>` for groups
The page uses `<fieldset>` and `<legend>` to group input fields related to "Personal Information", "Message" and "Preferences", which provides context for screen reader users. 

* Rule 7 - Interactive elements are keyboard accessible
All `<button>` and `<a>` elements on this page are accessible and can be triggered using keyboard only.

* Rule 8 - Don't rely on colour alone to convey info
When user incorrectly fills out an input field, the border of the input element turns red, which indicates invalid field. While this might be sufficient for most users, users who are colour blind for instance, might not understand what's going on. Therefore I added some extra css that will show a warning icon in the invalid input field.

* Rule 9 - Use table only for tabular data
The page contains three `<table>` elements to display tabular data ("Skills % Technologies", "Weekly Study Schedule" and "Development tools I use"). Each table has a `<caption>` element to provide a context for the user and each `<th>` element has a scope attribute that specifies whether the element is a row header or a column header. If we didn't provide this attribute, the screen reader would just read out the data in the cell and the user wouldn't know which header the data belongs to. 

* Rule 10 - Provide skip navigation link
The page contains a link which allows users to skip to the main content.
`<a href="#main" class="skip-link">Skip to main content</a>`
While this is useful for all users, it is especially targeted for keyboard-only users who would normally have to tab through every navigation menu item every time they load a new page. 
