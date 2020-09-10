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
```

### add todo item
```
# dishi a hello
88ms | add todo success

# dishi l
84ms | list todo success
5	nihao
4	hello
1	haha
```

### update todo item
```
# dishi u 5 nihaoyayaya
80ms | update todo success

# dishi l
81ms | list todo success
5	nihaoyayaya
4	hello
1	haha
```

### delete todo item
```
# dishi d 5,4
77ms | delete todo success

# dishi l
80ms | list todo success
1	haha
```

### change todo group
```
# node dishi use 9
64ms | todo group use success
```

### set rows
```
# node dishi rows 10
set rows to 10
```

### done todo item
```
# dishi done 7
113ms | done success

# dishi l
83ms | list todo success

todo group 1:
id	todo-status	todo-name
7	done		heihei
1	todo		haha
```

## version
### 0.0.6.20200910
1. move

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
