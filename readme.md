# Jay Bauer - Foundation Starter Site

This is the Foundation ZURB template, bastardized and customized by Jay Bauer for use at Elite Digital. Designed to be a starting point for all non-Wordpress sites. It includes the following:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

### Installing the template via Git

This template is designed to be easily distributed through Git, using a few simple commands. This README will focus on the CLI method.

First, the repo must be cloned and dependencies installed:
```bash
git clone git@github.com:JayBauer/FoundationZURBCustom.git
cd FoundationZURBCustom
npm install
```

This will install the dependencies described in ```package.json```. Your project is now ready to start.

## Working with the CLI

Foundation makes use of several commands in order to streamline the development and distribution process.

```bash
foundation watch
```
- This command will look through your SASS files and create a CSS map rather than spend time compiling and minifying a production-ready CSS file, as well as begin watching your working folders for changes. After the command runs, it will open a tab in your browser with the current build of the website. Any changes made to any tracked folders will immediately be pushed through the BrowserSync process and update the view, allowing you to see changes made in real time.


```bash
foundation build
```
- This command will properly compile and minify all your SASS files, uglify/concatenate your JS files, and optimize your images. This will be moved to a "dist" folder in the root of your project. The contents of this folder are what should ultimately be delivered to the live or staging website.

### Styles

* `assets/scss/app.scss`: Make imports for all your styles here. Comment out unnecessary modules.
* `assets/scss/global/*.scss`: Global settings.
* `assets/scss/components/*.scss`: Buttons etc.
* `assets/scss/modules/*.scss`: Navbar, footer etc.
* `assets/scss/templates/*.scss`: Page template specific styling


### Scripts

* `assets/js/`: Location for all your custom JS files. These will be minified and concatenated to one ```app.js``` file in production.
* `assets/js/app.js`: Has options to import all Foundation modules, or to customize them via the ```lib``` folder. The latter is recommended.
* `assets/js/lib/foundation-explicit-pieces.js`: Comment out any Foundation modules that are not in use to save project filesize.


## How to customize and build this template

### Handlebars with panini

[Panini](http://foundation.zurb.com/sites/docs/panini.html)
The folder structure of the ```src``` directory is important to understand in order to make use of Handlebars with Panini.
* `src/layouts`: These are your main template files that all pages on your site will share. Generally you will not need more than the one provided, however the option is there if necessary to use more complex templating for larger websites.
* `src/pages`: Using the ```{{> PARTIAL_NAME}}``` declaration, your template file will pull partial HTML templates from this folder. The default ```{{> body}}``` declaration will pull the partial with the same name as your current URL.
* `src/data`: This is a generic folder for storing your JSON or YAML files to be read by Panini with compiling your HTML files.
* `src/helpers`: You can read about Helpers at the link above, but they are essentially custom functions used to manipulate page content. They can be extremely useful if you want to make full use of Panini, but can be safely ignored.


## Some things to watch out for
- FontAwesome in included in the ```assets/fonts``` folder and configured to be available by default, however the font-family will need to be declared when necessary.
- Using regular HTML comments will still output the comments to the DOM. Therefore, Panini will still throw errors if commented code has problems. Use ```{{! }}``` to comment out code instead.
- HTTP file server is required to serve files to Javascript, for security purposes. This will not work on localhost, which is the default server location for this setup. If a proper HTTP server is not available, a Python server can be run using the following command, assuming Python is installed on the host machine:
```bash
python -m SimpleHTTPServer
```
This will start a server on port 8000 that is able to properly serve files. This command should be run from inside the ```dist``` folder, after creating a production build.

- Webpack, when compiling your JS files, will try not to litter the global scope, so functions will not be made available globally by default. You can make functions global by manually adding it in one of two ways:
```
function someFunction() {
  ...
}
window.someFunction = someFunction;
```
```
window.someFunction = function() {
  ...
}
```

- Webpack/Babel will compile all JS files and require "use strict". If you are getting any unexplained errors in your custom Javascript files that you are only getting once Webpack gets ahold of them, this is where you should look.
