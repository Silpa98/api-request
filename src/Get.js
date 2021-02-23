import React,{Component} from 'react';
import axios from 'axios';
import './Buttons.css';
import 'bootstrap/dist/css/bootstrap.css';

class Get extends Component{

    constructor(props){
        super(props)
        this.state={
          posts:[],
          errormsg:[],
        }
      }
    
      submitHandler=()=>{

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

      click=()=>
      {
        
      }
      
    render(){
       
        return(
            <div>
               <div className='fl '>
               <button onClick={this.submitHandler} className='on'>
                  <b> GET DATA</b>
                  </button>
               </div>
               
               
                
                 <div className='row fl'>
                   <div className='col-sm-2 fl'>
                    
                   {<div>{this.state.posts.map(post=> <div key={post.id}><b>ID:</b>{post.id}</div>)}</div>}
                   
                   </div>
                   <div className='col-sm-4 fl'>
                    
                       {<div>{this.state.posts.map(post=> <div key={post.id}><b>Name:</b>{post.name}
                       <button key={post.id} >
                    X
                   </button> </div>)}</div>}
                   </div>
                 
                
                 </div>
                
              
                   
            </div>

        )
    }
}

export default Get;