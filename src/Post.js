import React, { Component } from 'react';
import './Buttons.css';



class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
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
        // console.log(val[0])
        // console.log(key[0])
        const h= key[0] + '=' +val[0]
        // console.log(h)
       

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

           
    }
    
    render() {
        const {name} = this.state 
        return (
            <div>
                <b>
                 POST DATA
                </b>
               
                 <form   onSubmit={this.submitHandler} >
                    <div>
                        
                        

                        <input 
                        className='tx'
                        type='text'
                        name='name'
                        value={name} 
                        placeholder='Name'
                        onChange={this.changeHandler}/>
                        
                        <button type='submit' className='on'>
                            Submit
                        </button>
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default Post




