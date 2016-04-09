# Get started
This is a template to start building a React project

## Preparation
Install modules via npm

```
$ npm install
```

Then let's transpile JS

```
$ webpack
```

## Let's launch web server
Thanks to npm, `"webpack-dev-server --content-base src --inline --hot"` in `package.json` runs in this way

```
$ npm run dev
```

## Do you want to launch Sass compiler?
gulp helps you watching sass files. Please don't forget installing [Compass](http://compass-style.org/install/)

```
$ gulp
```

Just one concern myself... Should we use Sass on ReactJS? Because I think React should use atomic design, inline styling is more proper. Thus, I think Sass should be used for only theming.
