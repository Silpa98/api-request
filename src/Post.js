import React, { Component } from 'react';
import './Buttons.css';
import axios from 'axios';
import Update from './Update'



class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             posts:[],
             errormsg:'',
             id:'',
             names:'',
             isSuccess:false
            
            
        }
    }

   
    componentDidMount(){

        axios.get('http://95.111.193.87/PerpApi/public/api/v1/units?limit=100&offset=0&order=desc&sort=name&token=12345678' ,
        {headers:{token:12345678}}
        )
        .then(res=>{
            
         
            this.setState({posts:res.data.items})
            console.log(this.state.posts)
            
            
        })
        .catch(err=>{
            
            this.setState({errormsg:'error retriving data'})
        })
        
      }

    
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    submitHandler =(e)=>{
        e.preventDefault()
      
        console.log(this.state)
        const val = Object.values(this.state)
        const key = Object.keys(this.state)
      
        const h= key[0] + '=' +val[0]
       
       

        fetch('http://95.111.193.87/PerpApi/public/api/v1/units' ,
       { method:'POST',
        headers:{
                token:12345678,
                'Content-Type' : 'application/x-www-form-urlencoded'},
        body:h
       })
        .then(response=>
            response.json())
        .then(json =>
            console.log(json));

    this.setState({
        name:''
    })

    axios.get('http://95.111.193.87/PerpApi/public/api/v1/units?limit=100&offset=0&order=desc&sort=name&token=12345678' ,
    {headers:{token:12345678}}
    )
    .then(res=>{
        
     
        this.setState({posts:res.data.items})
        console.log(this.state.posts)
        
        
    })
    .catch(err=>{
        // console.log(err)
        this.setState({errormsg:'error retriving data'})
    })

           
    }

    //dlt item

    dltItem=(id)=>
    {
      fetch('http://95.111.193.87/PerpApi/public/api/v1/units/'+id,
     { method:'DELETE',
      headers:{
              token:12345678,
              'Content-Type' : 'application/x-www-form-urlencoded'}
      
     })
      .then(response=>
        
          response.json())
      .then(json =>
          console.log(json))
     

                
      const posts=[...this.state.posts]
     
      const updatedPosts=posts.filter(item => item.id != id);
      this.setState({posts: updatedPosts});

      console.log(this.state.posts)
      }

      
  textChange=()=>{

    this.setState({
        isSuccess:true
    })

    
      
  }
        
        
    
    render() {
        const {name} = this.state 
        const value=<input placeholder='Name'>
        </input>
        return (
            <div>

                 <div>
                           no.of items:{this.state.posts.length}
                           </div>
                <b>
                 POST DATA
                </b>
               
                 <form   onSubmit={this.submitHandler} >
                    <div>
                        
                       

                        <input 
                        
                        type='text'
                        name='name'
                        value={name} 
                        placeholder='Name'
                        onChange={this.changeHandler}/>
                        
                        <button type='submit' className='on'>
                            Submit
                        </button>
                        {<div >{this.state.posts.map(post=> <div className='padd' key={post.id}><b>Name:</b>{post.name} 
                        
                        <button key={post.id} onClick={()=>this.dltItem(post.id)} className='round'>
                            X

                        </button>
                    
                       <button key={post.id+1} onClick={this.texthange}> 
                           ..
                       </button>
                        {/* <form onSubmit={()=>this.submitHandler(post.id)}>
                        <input
                        className='tx'
                        type='text'
                        name='names'
                        key={post.id}
                        value={name} 
                        placeholder='Name'
                        onChange={this.change}
                       />
                       
                        
                        
                        <button type='submit' className='on'>
                            Submit
                        </button>
                        </form> */}
                        
                      
                       {/* <Update/> */}
                       

                        </div>)}</div>}
                        
                        
                    </div>
                </form>
                {this.state.isSuccess===true ?
                <div ><input placeholder='name'></input></div> :null}
            
            </div>
        )
    }
}

export default Post




