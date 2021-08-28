# develop
======

## npm start
    Starts the development server.

## npm run build
    Bundles the app into static files for production.

## npm test
    Starts the test runner.

## npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

# release process

```
$ git checkout master
$ make build
$ git checkout gh-pages
$ make copy
$ git commit -m "new version"
$ git push origin gh-pages
```
