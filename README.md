# test-program

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#把px转为rem
安装px2rem-loader插件，是为了将代码里的px转为rem(F12查看styles时，所有的样式都是以rem为单位的)；添加rem.js文件，这个是根据不同的分辨率设置不同的fontSize,这样，浏览器渲染是，实际的样式大小为 X( rem) * fontSize =Y (px)
