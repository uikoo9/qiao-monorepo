# dishi-server

## init database
1. create database db_dishi character set utf8 collate utf8_general_ci;
2. source server/node_modules/qiao.cell.user/_sql/*.sql;
3. source server/node_modules/dishi.cell.todo/_sql/*.sql;

## npm install
1. cd server
2. sudo npm i

## tencent cloud sms
1. modify server/config/config.json
2. add sms 

## version
### 0.0.7.20210901
1. qiao.cell.user update

### 0.0.6.20210830
1. todo add userid

### 0.0.5.20210818
1. qiao.cell.user
2. dishi.cell.todo

### 0.0.4.20200904
1. todo list

### 0.0.3.20200829
1. get todo group by userid
2. todo item

### 0.0.2.20200828
1. add mit
2. add todo group

### 0.0.1.20200827
1. init project
2. ucenter user ok
3. api ok
