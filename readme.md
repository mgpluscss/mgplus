# MgPlus (*Mg+*)

![](/demo/images/logo.svg)

## Mgplus mini CSS library

### Build pretty websites with just a few drops of css

![Latest release on NPM](https://img.shields.io/npm/v/mgplus)

Striking the perfect balance between features and simplicity

The project began in early 2021 with the goal of providing a more robust and feature-rich alternative while maintaining the minimalistic approach of Milligram

Mgplus is specially designed to quickly create a website or a small page with minimal dependencies for better performance and higher productivity

****Only one css file, around 58 KB minified****

### Live integration

**[Demo page](https://demo.mgpluscss.com)**

**[Corporate website integration](https://www.evodim.com)**

### Advantages

* Easy to use: Components are just html markups
* Easy to integrate: Just put only one css file in your page
* Easy to extend
* Lightweight but many features included
* Responsive and mobile first design

#### Features

* Custom variables
* Theming (dark mode)
* Navs
* Tabs
* Pretty forms inputs
* Badges
* Modals
* Responsive flex grid system
* Icon helper including some css icons
* Styling helpers like tailwindcss for positionning and sizing

## Getting started

### Quick start

* Import mgplus.css to your website from our CDN

```html
 <link rel="stylesheet" type="text/css" href="https://cdn.mgpluscss.com/$PACKAGE_VERSION/css/mgplus.css" />
```

* Import mgplus-dom.js to your website from our CDN

```html
<script src="https://cdn.mgpluscss.com/$PACKAGE_VERSION/js/mgplus-dom.js"></script>
```

## Debugging

### Debugging demo page locally

* Clone the repository

```sh
git clone https://github.com/Evodim/mgplus.git
```

Install packages

```sh
npm install
```

Start demo page
  
```sh
npm run start
```

### Debugging with auto reload

Run watch command to enable hot reload for the scss library

```sh
npm run watch
```

In order to start watch command, you should launch demo page with start command in another process

### Build only the library

```sh
npm run build
```

*yarn, pnpm commands are also supported*

## License

Licensed under the [MIT License](https://raw.githubusercontent.com/Evodim/mgplus/master/LICENSE).

*This library is in active development, some breaking may occurs until next major release including a new documentation portal.*

A complete documentation page will be available soon
