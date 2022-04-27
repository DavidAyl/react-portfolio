import React from 'react';

export default function myWork() {
  return (
    <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80)" }} className='d-flex vh-100 justify-content-center flex-column'>
      <h1 className=' text-center mb-3 text-white'>My Work</h1>
      <div class="d-flex justify-content-center mx-5">
        <div class="imgcontainer">
          <h2 class="text-center text-white">Chiron</h2>
          <p class="text-center text-white">Chiron is your one stop shop as a patient looking to acces your medical records and
            book appointments with
            your doctors. Hover over the image and click to try it out!</p>
          <div className='d-flex flex-column align-items-center'>
            <a target='_blank' href=" https://polar-peak-28753.herokuapp.com">
              <img src="https://github.com/magdalenaperry/brute-force-alpha-project/blob/main/public/images/chiron.png?raw=true" alt="chironhome" class="img" /> </a>
            <div class="centered">
              <a href="https://github.com/magdalenaperry/brute-force-alpha-project" target="_blank" className=' my-3  btn btn-light'>
                View the repository here!
              </a>
            </div>
          </div>
        </div>
        <div class="imgcontainer">
          <h2 class="text-center text-white">Traxx</h2>
          <p class="text-center text-white">Traxx is a do-all music searching software, simply type in a song, artist, or lyrics
            and traxx will give you the results you are looking for! Hover over the image and click to try it out!</p>
          <div className='d-flex flex-column align-items-center'>
            <a href="https://devonfaria.github.io/traxx/" target='_blank'>
              <img src="https://github.com/DavidAyl/updated-portfolio/blob/main/assets/images/Traxx-Main.png?raw=true" alt="traxxhome" class="img" />
            </a>
            <div class="centered">
              <a href="https://github.com/devonfaria/traxx" target="_blank" className=' my-3  btn btn-light'>
                View the repository here!
              </a>
            </div>
          </div>
        </div>
        <div class="imgcontainer">
          <h2 class="text-center text-white">Password Gen</h2>
          <p class="text-center text-white">Password Gen is a unique password generator that will give you a secure password,
            nowadays information is stored in accounts so safety is
            key! Hover over the image and click to try it out!</p>
          <div className='d-flex flex-column align-items-center'>
            <a href="https://davidayl.github.io/password-gen/" target='_blank'>
              <img src="https://github.com/DavidAyl/updated-portfolio/blob/main/assets/images/genpw.png?raw=true" alt="genpwhome" class="img" /> </a>
            <div class="centered">
              <a href="https://github.com/DavidAyl/password-gen" target="_blank" className=' my-3 btn btn-light'>
                View the repository here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
