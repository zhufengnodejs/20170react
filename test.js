function getPostData(){
  return new Promise(function(resolve,reject){
     resolve('hello');
  });
}
getPostData().then(function(postContent){
  console.log(postContent);
});