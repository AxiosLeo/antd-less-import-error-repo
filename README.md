# antd-less-import-error-repo

```bash
cd reproduction

yarn install

yarn build
// or yarn start
```

Error message

```text
 ERROR  Failed to compile with 1 errors                                                                                                                                 上午11:08:32

 error  in ./src/.umi/plugin-layout/layout/layout/style.less

Module build failed (from ./node_modules/@umijs/bundler-webpack/lib/webpack/plugins/mini-css-extract-plugin/src/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/@umijs/deps/compiled/less-loader/cjs.js):


// @import './variable.less';
@import './@{root-entry-name}.less';
      ^
Variable @root-entry-name is undefined
      in /Users/hanxu/workspace/nodejs/antd-less-import-error-repo/reproduction/node_modules/antd/es/style/themes/index.less (line 7, column 8)
    at processResult (/Users/hanxu/workspace/nodejs/antd-less-import-error-repo/reproduction/node_modules/@umijs/deps/compiled/webpack/5/bundle5.js:115794:19)
    at /Users/hanxu/workspace/nodejs/antd-less-import-error-repo/reproduction/node_modules/@umijs/deps/compiled/webpack/5/bundle5.js:115900:5
    at /Users/hanxu/workspace/nodejs/antd-less-import-error-repo/reproduction/node_modules/@umijs/deps/compiled/webpack/5/bundle5.js:35125:11
    at /Users/hanxu/workspace/nodejs/antd-less-import-error-repo/reproduction/node_modules/@umijs/deps/compiled/webpack/5/bundle5.js:34977:18
    at context.callback (/Users/hanxu/workspace/nodejs/antd-less-import-error-repo/reproduction/node_modules/@umijs/deps/compiled/webpack/5/bundle5.js:34850:13)
```
