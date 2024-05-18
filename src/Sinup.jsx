import React from 'react'


import Button from '@mui/material/Button';



import 'bootstrap/dist/css/bootstrap.min.css';



function Sinup() {
  return (
    <div>




<form className='mx-5'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

</form>
<button  type="submit" className="btn btn-primary ">Submit</button>

<button className=' bg-red-500 mx-9'>tail wind</button>
<br/>



<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default Sinup