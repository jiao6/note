function test(){
  // for(let i=1;i<3;i++){
  //   console.log(i);
  // }
  // console.log(i);
  let a = 1;
  // let a = 2;
}
/**
1.let命令所在的代码块内有效
2.不存在变量提升
4.暂时性死区
3.let不允许在相同作用域内，重复声明同一个变量。
**/


function last(){
  const PI=3.1415926;
  const k={
    a:1
  }
  k.b=3;
  console.log(PI,k);
}


// test();
last();
/**
 1.const声明一个只读的常量，不能改变
 2.const一旦声明变量，就必须立即初始化，不能留到以后赋值。
 3.ES5 只有两种声明变量的方法：var命令和function命令。
   ES6 let和const命令，import命令和class命令，var命令和function命令。
 */