import './FormStyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form   
          action="https://formspree.io/f/mgeqgkvb"
          method="POST">
           <label for="name">Your Name</label>
           <input name="name" type='text'></input>

           <label for="name">Email</label>
           <input name="email" type='email'></input>

           <label for="name">Subject</label>
           <input name="text" type='text'></input>

           <label for="name" >Message</label>
           <textarea name="name" rows='6' placeholder='Type your message here' />

           <button type='submit' className='btn' target='blank'>Submit</button>
        </form>   
    </div>
  )
}

export default Form