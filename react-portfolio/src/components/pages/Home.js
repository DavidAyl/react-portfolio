import React from 'react';


export default function Home() {
  return (
    <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80)" }} className='d-flex vh-100 justify-content-center flex-column'>
      <h1 className=' text-center mb-3 text-white'>Home Page</h1>
      <p class="text-center mb-5 mx-5 text-white">
        Hello, thank you for visiting my website,  thank you for visiting my website, please look around and enjoy your time here!
      </p>
      <a href="https://my.indeed.com/p/davida-bl91h4f" target='_blank' className='btn btn-light widthbtn'> My Resume</a>
    </div>
  );
}
