# Vue CSS Objects

A WIP collection of OOCSS Objects written in Vue.

## Installation
---------------
``` bash
npm install --save vue-css-objects
```

## Usage
---------------
``` javascript
import { Media } from 'vue-css-objects'
```

This package provides the necessary CSS styles to render each object properly,
but it's not mandatory to import them: you can use whatever style provider
you want to use. Just make sure to map correctly all the classes generated by `vue-css-objects`.

If you still want to import our generated CSS syles just add

``` javascript
require('vue-css-objects/dist/lib/vue-css-objects.min.css')
```

to your application entry point.


## Contributing
---------------

Want to contribute?

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## How can I add more components to this library?
---------------

Fork the repo, and then:

1. Develop your component in `src/components/` folder.

2. Add your component in `src/lib.js` to make it available to everyone.

3. Add a new file in `src/showcase/components/` with the configuration of your component.
Make sure to define its required props and all the available values and attributes.
This will automagically create a showcase page for your component.

4. Import that file in `src/showcase/index.js` and export it.


