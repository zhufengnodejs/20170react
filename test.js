let listeners = [];
let subscribe = (listener)=>{
  listeners.push(listener);
  return function(){
    listeners = listeners.filter(function(item){
      return item != listener;
    });
  }
}
let un = subscribe(function (){console.log('a')});
console.log(listeners);
un();
console.log(listeners);