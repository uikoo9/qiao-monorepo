# qiao-monorepo

[https://code.insistime.com/](https://code.insistime.com/)

## lerna
[qiao-monorepo](https://github.com/uikoo9/qiao-monorepo)使用[lerna](https://lerna.js.org/)管理npm包，建议全局安装lerna
```shell
npm i -g lerna
```

## usage
### clean
```shell
# 清空所有包下的node_modules
npm run clean
```

### init
```shell
# 安装所有包下的依赖包
npm run init
```

### check
通过[npm-check-updates](https://www.npmjs.com/package/npm-check-updates)检查所有包下的依赖是否有更新
```shell
npm run check
```

### dc
```shell
# 列出文件夹下所有npm包上一个月的下载量
npm run dc
```

### pkg
```shell
# 列出所有包下的dependencies
npm run pkg
```

### dpkg
```shell
# 列出所有包下的devDependencies
npm run dpkg
```

### ls
```shell
# 列出所有包信息
npm run ls
```

### show
```shell
# 列出所有包详细信息
npm run show
```