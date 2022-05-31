# dishi
dishi todo

## install
```
npm i -g dishi
```

## help
```
dishi -h
```

## ucenter
### login
```
# dishi login
? mobile: 11111111111
? password: ********
70ms | login success
```

### logout
```
# dishi logout
already logout
```

### whoami
```
# dishi whoami
login as 11111111111
```

### reg
```
# dishi reg
? mobile: 11111111111
418ms | send code success
? code: 805383
? password: ******
? confirm password: ******
61ms | register success
```

## config
### change todo group
```
dishi use todoGroupId
```

### set rows
```
dishi rows 10
```

## todo group
### list todo group
```
dishi group|g
```

### add todo group
```
dishi group-add|ga togoGroupName
```

### update todo group
```
dishi group-update|gu todoGroupId todoGroupName
```

### delete todo group
```
dishi group-delete|gd todoGroupIds
```

## todo item
### list todo item
```
dishi list|l
```

### add todo item
```
dishi add|a hello
```

### update todo item
```
dishi update|u todoItemId todoItemName
```

### delete todo item
```
dishi del|d todoItemIds
```

## operate
### done todo item
```
dishi done todoItemId
```

### move todo item
```
dishi move|mv todoItemId todoGroupId
```

## show
### dishi show all todo items
```
dishi show [6]
```

## version
### 0.0.7.20201104
1. add dishi show
2. default show num

### 0.0.6.20200910
1. move
2. bin dishi modify
3. dishi group

### 0.0.5.20200909
1. get group
2. dishi log

### 0.0.4.20200904
1. check group id
2. command help
3. dishi rows
4. todo and done items

### 0.0.3.20200901
1. dishi use

### 0.0.2.20200829
1. todo item list
2. todo item add
3. todo item update
4. todo item del
5. md
6. todo done

### 0.0.1.20200828
1. init
2. dishi login
3. dishi logout
4. dishi whoami
5. dishi register
6. todo group list
7. todo group add
8. todo group update
9. todo grorup del
