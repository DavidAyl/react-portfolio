import React from 'react';


export default function Home() {
  return (
    <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80)" }} className='d-flex vh-100 justify-content-center flex-column'>
      <h1 className=' text-center mb-3 text-white'>Home Page</h1>
      <p class="text-center mb-5 mx-5 text-white">
        Hello, thank you for visiting my website, my name is David Aylward and I
        am a student studying web development. I have an experienced background
        in computer repair and troubleshooting. I have been certified in many
        different things such as Adobe, Excel, Access, and I even have
        certifications with Apple. I started in web development with free code
        camps and <a className='text-white' href="https://www.udemy.com/">Udemy</a> bootcamps, I quickly
        decided this is something that I want to spend my time doing, I feel it
        gives you a lot of room to express creativity. I believe a lot of time
        and effort goes into a webpage so I always try to take my time and make
        sure I get everything exactly how I want it. I have always taken a lot
        of pride in my work so I will always try to make my work the best I can.
      </p>
    </div>
  );
}
