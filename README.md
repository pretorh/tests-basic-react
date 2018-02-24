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

#### links

- https://reactjs.org/docs/add-react-to-an-existing-app.html
