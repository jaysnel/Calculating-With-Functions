function zero(arg) {
  let num = 0;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}
function one(arg) {
  let num = 1;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}
function two(arg) {
  let num = 2;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}
function three(arg) {
  let num = 3;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}
function four(arg) {
  let num = 4;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}
function five(arg) {
  let num = 5;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}
function six(arg) {
  let num = 6;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}
function seven(arg) {
  let num = 7;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}
function eight(arg) {
  let num = 8;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}
function nine(arg) {
  let num = 9;
  if(!arg) {return num;}
  if(arg.symbol == "+") {return num + arg.param}
  if(arg.symbol == "-") {return num - arg.param}
  if(arg.symbol == "*") {return num * arg.param}
  if(arg.symbol == "/") {return Math.floor(num / arg.param)}
}

function plus(arg) {
  if(typeof arg == "undefined") {return false;}
  let method = {param: arg, symbol: "+"}
  return method;
  }
function minus(arg) {
  if(typeof arg == "undefined") {return false;}
  let method = {param: arg, symbol: "-"}
  return method;
  }
function times(arg) {
  if(typeof arg == "undefined") {return false;}
  let method = {param: arg, symbol: "*"}
  return method;
  }
function dividedBy(arg) {
  if(typeof arg == "undefined") {return false;}
  let method = {param: arg, symbol: "/"}
  return method;
  }
