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

## use
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

### list todo group
```
# dishi list|l -g
89ms | list group success
1	todo
```

### add todo group
```
# dishi add|a togoGroupName -g
92ms | add group success

# dishi l -g
84ms | list group success
5	togoGroupName
1	todo
```

### update todo group
```
# dishi update|u 5 todoGroupName -g
84ms | update group success

# dishi l -g
86ms | list group success
5	todoGroupName
1	todo
```

### delete todo group
```
# dishi delete|d 5 -g
85ms | delete group success

# dishi l -g
87ms | list group success
1	todo
```

### list todo item
```
# dishi l
74ms | list todo success
1	haha

# dishi l -g 1
82ms | list todo success
1	haha
```

### add todo item
```
# dishi a hello
88ms | add todo success

# dishi a nihao -g 1
87ms | add todo success

# dishi l
84ms | list todo success
5	nihao
4	hello
1	haha
```

### update todo item
```
# dishi u 5 nihaoyaya
95ms | update todo success

# dishi u 5 nihaoyayaya -g 1
80ms | update todo success

# dishi l
81ms | list todo success
5	nihaoyayaya
4	hello
1	haha
```

### delete todo item
```
# dishi d 5
77ms | delete todo success

# dishi d 4 -g 1
80ms | delete todo success

# dishi l
80ms | list todo success
1	haha
```

## version
### 0.0.2.20200829
1. todo item list
2. todo item add
3. todo item update
4. todo item del
5. md

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
