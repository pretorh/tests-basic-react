# Basic React

Setup a react site from scratch

## Setup

### The basics: react, react-dom, babel, browserify

- Install the base react node modules
- create `index.html`, `index.jsx`
- Install babel, browserify
- Setup scripts to run bable, jsx
- build using babel, then browserify

### convert to typescript

- Install typescript
- Convert `index.jsx` to typescript (tsx)
- babel not really needed anymore, since tsc can convert tsx -> jsx directly
- build using tsc, babel, then browserify

### More files, linting

- Install tslint
- extract `lib/hello.ts` file
- building: same as above, but lint as first command

### styling

- install browserify-css
- add simple app.cs with basic styling
- change output paths
- same build (but with `-t browserify-css` option for browserify)

### setup prod

- install envify, uglifyify, uglify-js
- use cdns for react
- index.prod.html is copy of normal index, but with this cdn and the prod bundle
- build prod releases with bundle-prod (instead of bundle)

### browserify build.js file

- create a file to handle the browserify building
- split css out into own minified file in prod builds

#### links

- https://reactjs.org/docs/add-react-to-an-existing-app.html
