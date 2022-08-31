import React from 'react';
import phone from "../images/smartphone.png"

function PhoneComponent() {
  return (
    <div className='container'>
      <img src={phone} alt='téléphone'/>
        <p>Disponibilité<span id="count"></span></p>
        <button>Acheter</button>
    </div>
  )
}

export default PhoneComponent;

