import React,{Component} from 'react';
import axios from 'axios';
import './Buttons.css';
import 'bootstrap/dist/css/bootstrap.css';
import Update from './Update';
import Post from './Post';
class Get extends Component{

    constructor(props){
        super(props)
        // this.click = this.cick.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);
        this.state={
          posts:[],
          errormsg:[],
          isSuccess:false,
          name:'',
          is:false
          
        }
      }
    

      //to get data
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

      

     
     

      //to delete
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


      // //to update

      // updateItem=(id)=>{


      //   console.log(this.state)
      //   console.log(this.state)
      //   const val = Object.values(this.state)
      //   const key = Object.keys(this.state)
      //   console.log(val[0])
      //   console.log(key[0])
      //   const h= key[0] + '=' +val[0]
      //   console.log(h)
      //   console.log('http://95.111.193.87/PerpApi/public/api/v1/units/'+id )

      //   fetch('http://95.111.193.87/PerpApi/public/api/v1/units/'+id ,
      //   { method:'POST',
      //    headers:{
      //            token:12345678,
      //            'Content-Type' : 'application/x-www-form-urlencoded'},
      //    body: h
      //   })
      //    .then(response=>
      //        response.json())
      //    .then(json =>
      //        console.log(json));

      // }
      click=(id)=>{

        const posts=[...this.state.posts]
       
        const updatedPosts=posts.map(item => item.id === id );
        

      }
    
      
    render(){
      const {name} = this.state 
        return(
            <div>
                  <Post/>
              
              <div className='row fl'>
                   <div className='col-sm-2 fl'>
                    
                    
                   {<div>
                    {this.state.posts
                    .map(post=> <div key={post.id}>ID:{post.id} {post.name} 
                    <button key={post.id} onClick={()=>this.dltItem(post.id)} >
                    X
                   </button>
                   <button key={post.id} onClick={()=>this.click(post.id)}> 
                     Edit
                   </button>
                 </div>)}</div>}
                    
                
                  
                   
                   
                   
                   </div>
                  </div>
                 </div>

        )
    }
}

export default Get;