# MgPlus (*Mg+*)

![](/demo/images/logo.svg)

## Do You Enjoy Using the Milligram framework? Check Out Mg+
### Mgplus mini CSS library

**[portal and demo](https://www.mgpluscss.com)**

### Build pretty websites with just a few drops of css

![Latest release on NPM](https://img.shields.io/npm/v/mgplus)

[CDN direct link](https://cdn.mgpluscss.com/v1.3.2/css/mgplus.css)

Striking the perfect balance between features and simplicity

The project began in early 2021 with the goal of providing a more robust and feature-rich alternative while maintaining the minimalistic approach of Milligram

Mgplus is specially designed to quickly create a website or a small page with minimal dependencies for better performance and higher productivity

****Only one css file, around 60 KB minified****

### Integration example

**[mgplus portal](https://www.mgpluscss.com)**

**[corporate website integration](https://www.evodim.com)**

### Why mgplus ?

* Easy to use: components are just html markups
* Easy to integrate: just add only one css file in your page
* Easy to extend
* Lightweight with only essentials features
* Responsive and mobile first design

### Features

* Theming with css variables
* Dark mode
* Navs
* Tabs
* Pretty forms inputs
* Badges
* Modals
* Responsive flex grid system
* Icon helper including ready to use css icons
* Styling helpers like tailwindcss for positionning and sizing
* And more ...

## Getting started

### Quick start

* Import mgplus.css to your website from our CDN

```html
 <link rel="stylesheet" type="text/css" href="https://cdn.mgpluscss.com/$PACKAGE_VERSION/css/mgplus.css" />
```

* Optional: In order to use collapsible components or darkmode, import mgplus-dom.js to your website from our CDN

```html
<script src="https://cdn.mgpluscss.com/$PACKAGE_VERSION/js/mgplus-dom.js"></script>
```

## Developing

### Start demo page locally with enabled hot reload

* Clone the repository

```sh
git clone https://github.com/Evodim/mgplus.git
```

Install packages

```sh
npm install
```

Build demo page

```sh
npm run build:demo
```

Start demo page (hot reload enabled on any change)
  
```sh
npm run start
```

### Build only the library

Output library will be copied in dist folder

```sh
npm run build
```

### Build debug version of the library

Build unminified version with sourcemaps

```sh
npm run build:debug
```

*yarn, pnpm commands are also supported*

## License

Licensed under the [MIT License](https://raw.githubusercontent.com/Evodim/mgplus/master/LICENSE).

*This library is in active development, some breaking may occurs until next major release including a new documentation portal.*

A complete documentation page will be available soon
