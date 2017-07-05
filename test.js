let obj = {a:0,b:0}
for(var attr in obj){
  obj[attr] = obj[attr]+1;
}
console.log(obj);