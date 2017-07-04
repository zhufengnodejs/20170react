import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//defaultStyle 默认的样式对象
//props.style  传进来的样式对象
function getDefaultStyledPost(defaultStyle){
   function Post(props){
     return <p style={{...defaultStyle,...props.style}}>{props.content}</p>
   }
   return Post;
}
const Post = getDefaultStyledPost({ color: 'red' })

/*  <Post style={{ color: 'blue', fontSize: '13px' }} />
<Post style={{ fontSize: '12px' }} />*/

ReactDOM.render(<Post content="任意内容" style={{ fontSize: '13px' }} />, root);