import React, { Component } from 'react';
import './Buttons.css';


class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:''
        }
    }
    
    changeHandler =(e)=>{
        this.setState({
            id: e.target.value
        })
       
    }


    submitHandler =(e)=>{
        e.preventDefault()
    
        console.log(this.state.id)
        const d='http://95.111.193.87/PerpApi/public/api/v1/units/'+this.state.id
        console.log(d)
        fetch('http://95.111.193.87/PerpApi/public/api/v1/units/'+this.state.id,
       { method:'DELETE',
        headers:{
                token:12345678,
                'Content-Type' : 'application/x-www-form-urlencoded'}
        
       })
        .then(response=>
            response.json())
        .then(json =>
            console.log(json));
    }
    
    render() {
        const {id} = this.state 
        return (
            
            <div>
                <b>
                TO DELETE DATA
                </b>
              
                 <form   onSubmit={this.submitHandler} >
                    <div>
                        <label className='cl'>
                            Enter ID
                        </label>
                        <br>
                        </br>
                        <input 
                        className='tx'
                        type='text'
                        name='id'
                        value={id} 
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




