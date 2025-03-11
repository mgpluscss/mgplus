# MgPlus (*Mg+*)

![](/demo/images/logo.svg)

## A micro css library to build elegant web pages efficiently

### Build pretty websites with just a few drops of css

**[doc and demo](https://www.mgpluscss.com)**

![Latest release on NPM](https://img.shields.io/npm/v/mgplus)

[CDN direct link](https://cdn.mgpluscss.com/v1.4.0/mgplus.css)

Striking the perfect balance between features and simplicity

The project began in early 2021 with the goal of providing a more robust and feature-rich alternative while maintaining the minimalistic approach of Milligram

Mgplus is specially designed to quickly create a website or a small page with minimal dependencies for better performance and higher productivity

****Only one css file, around 70 KB minified****

### Integration example

**[mgplus portal](https://www.mgpluscss.com)**

**[corporate website integration](https://www.evodim.com)**

### Why mgplus ?

* Easy to use: components are just html markups, no css skills required
* Easy to integrate: just add only one css file in your page
* Easy to extend through css variables
* Lightweight with only essentials features
* Responsive and mobile first design
* Pure css, js only required to handle user interactivity

### Features

* Theming with css variables
* Dark mode
* Navs
* Tabs
* Pretty forms inputs
* Badges
* Modals
* Responsive flex grid system
* Responsive display helpers
* Icon helper including embedded css icons
* Styling helpers like tailwindcss for positioning and sizing
* And more ...

## Getting started

### Quick start

1- Include the Mg+ CSS file in the section of your HTML file to apply the default styles:

```html
 <link rel="stylesheet" href="https://cdn.mgpluscss.com/$PACKAGE_VERSION/mgplus.css">
```

2-  Include Mg+ plugins at the end of your page to allow user ui interactions (optional) styles:

```html
<script src="https://cdn.mgpluscss.com/$PACKAGE_VERSION/mgplus-vanilla.js?register=all"></script>
```

3-  Start using the predefined classes in your HTML elements. For example, to create a button, you can use:

```html
<button class="mg-button">Click me</button>
```
## Customize

### Css variables
```css
:root {
  --mg-color-dark: hsl(255deg 0% 5%);
  --mg-color-light: hsl(255deg 0% 95%);
  --mg-color-primary: #475dca;
  --mg-control-radius: 1rem;
  --mg-input-radius: 1rem;
  --mg-color-red: #dc3545;
  --mg-color-orange: #fd7e14;
  --mg-color-blue: #007bff;
  --mg-color-green: #28a745;
  --mg-control-shadow: 0 0 2px rgb(0 0 0 / 20%), 0 3px 4px rgb(0 0 0 / 15%);
  --mg-control-active-shadow: inset 0 0 100px 100px rgb(0 0 0 / 10%);
  --mg-base-font-size: 1.6rem;

  //default secondary colors 
  --mg-color-initial: var(--mg-color-light);
  --mg-color-secondary: hsl(255deg 0% 20%);
  --mg-color-tertiary: hsl(255deg 0% 40%);
  --mg-color-quaternary: hsl(255deg 0% 60%);
  --mg-color-quinary: hsl(255deg 0% 90%);

  //dark-colors 
  --mg-dark-color-initial: var(--mg-color-dark);
  --mg-dark-color-secondary: hsl(255deg 0% 80%);
  --mg-dark-color-tertiary: hsl(255deg 0% 70%);
  --mg-dark-color-quaternary: hsl(255deg 0% 50%);
  --mg-dark-color-quinary: hsl(255deg 0% 25%);
}

```

## Developing

### Start demo page locally with enabled hot reload

* Clone the repository

```sh
git clone https://github.com/Evodim/mgplus.git
```

Install packages (with yarn, npm, on pnpm)

```sh
npm install
```

Build demo page

```sh
npm run build
```
Run debug demo page with hot reload

```sh
npm run dev
```

### Build only the library

Output library will be copied in dist folder

```sh
npm run build:lib
``` 

## License

Licensed under the [MIT License](https://raw.githubusercontent.com/Evodim/mgplus/master/LICENSE).

*This library is in active development, some breaking may occurs until next major release including a new documentation portal.*

A complete documentation page will be available soon
