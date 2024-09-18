# MgPlus (*Mg+*)

![](/demo/images/logo.svg)

## Mg+ micro CSS library

### Build pretty websites with just a few drops of css

![Latest release on NPM](https://img.shields.io/npm/v/mgplus)

Striking the perfect balance between features and simplicity

Mg+ (Milligram Plus) was built on top of [milligram](https://github.com/milligram/milligram) and provides a minimal setup of styles for a fast and clean starting point without any dependencies

Mg+ is specially designed to quickly create a website or a small page with minimal dependencies for better performance and higher productivity

****Only one css file, around 58 KB minified****

### Live integration

**[Demo page](https://demo.mgpluscss.com)**

**[Corporate website integration](https://www.evodim.com)**

### Advantages

* Lightweight and many components implemented
* Reponsive and mobile first design
* Sass sources could be extended or composed for your custom needs
* Optional: use js plugins to interact with some component, it's straightforward: you don't have to run any custom js code in your website
* Components are juste html markups, it could be integrated easily in any web framework like php, react, vue or angular

#### Features

* Custom variables
* Theming (dark mode)
* Navs
* Tabs
* Pretty forms inputs
* Badges
* Modals
* Responsive grid system
* Icon helper including some css icons
* Styling helpers like tailwindcss for positionning and sizing

## Getting started

### Quick start

Import mgplus.css to your website from our CDN

```html
 <link rel="stylesheet" type="text/css" href="https://cdn.mgpluscss.com/v1.2.9/css/mgplus.css" />
```

Import mgplus-dom.js to your website from our CDN and register required components as query params

```html
<script src="https://cdn.mgpluscss.com/v1.2.9/js/mgplus-dom.js?register_plugins=dropdowns,tabs,modals,collapses,darkmode"></script>
```

### Use JS plugins without additional coding

mgplus-dom.js plugin allows to handle UI interaction for some components (toggle classes on dom events)
They are mainly used to toggle visibility of content inside a component

To register automatically all or specific plugins on page load, use "register_plugins"  query param when you import mgplus-dom.js

#### Example

##### Register all plugins

```html
<script src="https://cdn.mgpluscss.com/v1.2.9/js/mgplus-dom.js?
register_plugins=dropdowns,tabs,modals,collapses,darkmode" ></script>
```

##### Register only darkmode

```html
<script src="https://cdn.mgpluscss.com/v1.2.9/js/mgplus-dom.js?
register_plugins=darkmode" ></script>
```

#### To allow plugin works for your mgplus css components

Add html attribute data-toggle=["plugin_name"] in your html components

Example:

```html
 <div class="mg-dropdown" >
      <button title="choose a car" class="mg-dropdown--icon" data-toggle="dropdown">
        Choose a car
      </button>
      <div class="mg-dropdown--content">
        <div class="mg-nav">
          <ul>
            <li data-value="audi">Audi</li>
            <li data-value="bmw">BMW</li>
            <li data-value="toyota">Toyota</li>
          </ul>
        </div>
      </div>
    </div>
```

#### To configure darkmode plugin

In your main html document page, add attribute data-theme=["dark" | "light" |  "auto" ]

```html
<!DOCTYPE html>
<html lang="en" data-theme="auto">

<head>
</head>
```

"auto" mode will use your system browser preference to choose dark or light mode

*Js extensions are required only to handle interactions with dom events for navs, tabs, dropdowns, modals, etc.
It could be replaced by creating a wrapped UI components with react, angular or other any UI framework*

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
