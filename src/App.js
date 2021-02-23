import React from 'react';
import Post from './Post';
import Delete from './Delete'
import Update from './Update';
import Get from './Get';
import './Buttons.css';
import Got from './Got';


function App() {
  return (
    <div>
      
  {/* <div className='row'>
    <div className='col-sm-6'>
      <div className='fl' >
      <Post/>
      </div>

      <div className='fl' >
      
      <Delete/>
    
      </div>

      <div className='fl' >
      <Update/>
     */}
      {/* </div>
 
    </div> 
     <div className='col-sm-6 '>
    <Get/>
    </div>
  </div> */}
      
  
  {/* <Got/> */}

  <Post/>
     
    </div>
  )
}

export default App
