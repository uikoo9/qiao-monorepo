# qiao-lerna
lerna tools

## cli
### dc
```shell
# 列出文件夹下所有npm包上一个月的下载量
qlerna dc ./packages
```

### ncu
使用[ncu](https://www.npmjs.com/package/npm-check-updates)检查文件夹下所有npm包是否有更新
```shell
qlerna ncu ./packages
```

### pkg
```shell
# 列出文件夹下所有npm包的dependencies
qlerna pkg ./packages

# 列出文件夹下所有npm包的devDependencies
qlerna pkg ./packages dev
```

## version
### 0.0.7.20220518
1. multi ncu
2. pkg

### 0.0.6.20220517
1. handler by parallel
2. handler by fork

### 0.0.5.20220516
1. lerna

### 0.0.4.20210604
1. npm publish
2. add cli

### 0.0.3.20210531
1. 相对路径

### 0.0.2.20210520
1. fork

### 0.0.1.20210519
1. init project
2. get sub folders
3. fs
4. ncu
5. util ncu
6. console