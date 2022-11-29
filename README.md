# qiao-monorepo

[https://code.insistime.com/](https://code.insistime.com/)

## lerna

[qiao-monorepo](https://github.com/uikoo9/qiao-monorepo)使用[lerna](https://lerna.js.org/)管理 npm 包，建议全局安装 lerna

```shell
npm i -g lerna
```

## use

### check

通过[npm-check-updates](https://www.npmjs.com/package/npm-check-updates)检查所有包下的依赖是否有更新

```shell
npm run check
```

### ncu

更新所有包下的依赖

```shell
npm run ncu
```

### clean

清空所有包下的 node_modules

```shell
npm run clean
```

### init

安装所有包下的依赖包

```shell
npm run init
```

### dc

列出文件夹下所有 npm 包上一个月的下载量

```shell
npm run dc
```

### pkg

列出所有包下的 dependencies

```shell
npm run pkg
```

### dpkg

列出所有包下的 devDependencies

```shell
npm run dpkg
```

### ls

列出所有包信息

```shell
npm run ls
```

### show

列出所有包详细信息

```shell
npm run show
```
