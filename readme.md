# MgPlus (*Mg+*)

![](/images/logo.svg)

## Mg+ is a micro CSS library 
Formerly called Milligram Plus, Mg+ was based on [milligram](https://github.com/milligram/milligram) which provides a minimal setup of styles for a fast and clean starting point

***_Only one css file, 50KB minified_***

*This library is in active development, some breaking may occurs until next stable release including new documentation portal*

**[LIVE DEMO](https://evodim.github.io/mgplus)**

### Features

* Lightweight and many components
* Reponsive and mobile first design
* Sass sources could be extended or composed for your custom needs
  
Usefull components was included in this library:

* Custom variables
* Theming
* Navs
* Tabs
* Forms inputs
* Badges
* Modals
* Grid system 
* Icon helper
* Styling helpers like tailwindcss
* Optionnal vanilla js plugin to handle ui interaction with some css components

**Mg+ is specially designed to quickly create a website or a small page with minimal dependencies for better performance and higher productivity**
 
## Getting started 

### Install dependencies from [npm](https://www.npmjs.com/package/mgplus) :

**_npm_**
```sh
$ npm install mgplus
```

**_yarn_**
```sh
$ yarn add mgplus
```

### Finaly import mg-plus.css file to your project


### Alternatively, you can import directly the css library without nodejs stack :

**_[mgplus.min.css](https://github.com/Evodim/mgplus/blob/master/dist/mg-plus.min.css)_**

Optionaly: use vanilla js plugin to handle UI interaction for some components (toggle classes on dom events)

[mgplus-extensions.min.js](https://github.com/Evodim/mgplus/blob/master/dist/mgplus-dom.js)

_Js extensions are required only to handle interactions with dom events for navs, tabs, dropdowns, modals, etc.
It could be replaced by creating wrapped UI components with react, angular or other any UI framework_

### For debugging run demo site directly from the repository :

* Clone the repository

```sh
$ git clone https://github.com/Evodim/mgplus.git
```
 
* Install packages
   
```sh
$ npm install
```

* To start demo page in debug :

```sh
$ npm run start 
```
_Hot reload already configured with node sass compiler and browser sync_

 
* To build only the library :
 
```sh
$ npm run build
``` 

_yarn commands are also supported_

## License

Licensed under the [MIT License](https://raw.githubusercontent.com/Evodim/mgplus/master/LICENSE).


