import React, { Component } from 'react';
import './Buttons.css';


class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             id:''
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
        console.log(this.state)
        const val = Object.values(this.state)
        const key = Object.keys(this.state)
        console.log(val[0])
        console.log(key[0])
        const h= key[0] + '=' +val[0]
        console.log(h)

        const d='http://95.111.193.87/PerpApi/public/api/v1/units/'+this.state.id
        console.log(d)


        fetch('http://95.111.193.87/PerpApi/public/api/v1/units/'+this.state.id ,
        { method:'POST',
         headers:{
                 token:12345678,
                 'Content-Type' : 'application/x-www-form-urlencoded'},
         body: h
        })
         .then(response=>
             response.json())
         .then(json =>
             console.log(json));
    }
    
    render() {
        const {name,id} = this.state 
        return (
            <div>
                <b>
                 UPDATE DATA

                </b>
              
                 <form   onSubmit={this.submitHandler} >
                    <div>
                        
                    <input 
                         className='tx'
                       
                       type='text'
                       name='id'
                       value={id} 
                       placeholder='ID'
                       onChange={this.changeHandler}/>

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




