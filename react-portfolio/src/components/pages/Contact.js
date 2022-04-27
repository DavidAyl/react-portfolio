import React from 'react';
import Typical from 'react-typical'


export default function Contact() {
  return (
    <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80)" }} className='d-flex vh-100 justify-content-center flex-column'>
      <h1 className="text-center text-white">Contact Me by {''}
        <Typical
          loop={Infinity}
          wrapper="p"
          steps={['email 📧', 2500,
            'phone 📱', 2500, 'letter ✉️', 2500]} />
      </h1>
      <p className='d-flex justify-content-around h2 mt-5'>
        <a className='text-decoration-none text-white' href="mailto:fakemail@mailfake.com" >Email Me 📧</a>
        <a className='text-decoration-none text-white' href="tel:5554280940">Text Me 📱</a>
        <a className='text-decoration-none text-white' target='_blank' href="https://goo.gl/maps/vEZWqE7PWrbCZi4d8">Write Me a Letter ✉️</a>
      </p>
      <form className='d-flex flex-column align-items-center my-3'>
        <div class="form-group formgroup my-2">
          <label class='text-white' for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group formgroup my-2">
          <label class='text-white' for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="click" class="btn btn-light formgroup">Submit</button>
      </form>
    </div>
  );
}
