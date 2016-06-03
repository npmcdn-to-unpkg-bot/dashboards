<p style="text-align:center">
  <a href="#" target="_blank">
    ![Webpack and Angular 2](/src/image/angular2-webpack.png?raw=true "Optional Title")
  </a>
</p>

# Angular2 Webpack Starter


> An Angular 2 starter kit featuring [Angular 2](https://angular.io) with [DynamicComponentLoader], [TypeScript](http://www.typescriptlang.org/), [Typings](https://github.com/typings/typings) and [Webpack](http://webpack.github.io/).

This seed repo serves as an Angular 2 starter for anyone looking to work with Webpack and also DynamicComponentLoader. Using a [Webpack](http://webpack.github.io/) for building our files and assisting with boilerplate.

### Quick start
**Make sure you have Node version >= 4.0 and NPM >= 3**
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/debasispanda/angular2-webpack.git

# change directory to our repo
cd angular2-webpack

# add required global libraries
npm install typings webpack bower http-server -g

# install the repo with npm
npm install

# install the bower components
bower install

# start the server
npm webpack

# Start the http-server
cd src
http-server

```
go to [http://localhost:8080](http://localhost:8080) in your browser

