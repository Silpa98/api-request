import React from 'react';
import Post from './Post';
import Delete from './Delete'
import Update from './Update';
import Got from './Got';
import './Buttons.css';

function App() {
  return (
    <div>
      
  <div className='row'>
    <div className='col-sm-4'>
      <div className='fl' >
      <Post/>
      </div>

      <div className='fl' >
      
      <Delete/>
    
      </div>

      <div className='fl' >
      <Update/>
      </div>
 
    </div>
    <div className='col-sm-8'>
    <Got/>
    </div>
  </div>
      
  
     
     
    </div>
  )
}

export default App
