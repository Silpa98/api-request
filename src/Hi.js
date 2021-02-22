import React from 'react'

const Hi = (props)=> {
   
    // console.log(props.value)
    const item= props.value.map(post=> <div key={post.id}>{post.id} {post.name}</div>)
    console.log(item)
        
    return (
        <div>
          {item}
        </div>
    )
}

export default Hi
