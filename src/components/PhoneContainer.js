// // AVEC LES HOOKS, SANS LE CONNECT :
// import React from 'react';
// import phone from "../images/smartphone.png";
// import {useSelector, useDispatch} from 'react-redux';
// // VIDEO 181 : import de l'action pour la passer dans le dispatch
// import {buyPhone} from '../redux/phone/actionPhone';

// function PhoneContainer(props) {

// // VIDEO 182 : utilisattion du hook useSelector = mapStateToProps
// const phones = useSelector(state => state.phones)

// // VIDEO 183 : utilisattion du hook useDispatch = mapDispatchToProps
// const dispatch = useDispatch()

//   return (
//     <div className='container'>
//       <img src={phone} alt='téléphone'/>
//         <p>Disponibilité : <span id="count">{phones}</span></p>
//         <button onClick={() => dispatch(buyPhone())}>Acheter</button>
//     </div>
//   )
// }

// export default PhoneContainer;

// SANS LES HOOKS, AVEC LE CONNECT :
import React, {useState} from 'react';
import phone from "../images/smartphone.png";
// VIDEO 180 : HOC
import {connect} from 'react-redux';
// VIDEO 181 : import de l'action pour la passer dans le dispatch
import {buyPhone} from '../redux/phone/actionPhone';

function PhoneContainer(props) {

  // VIDEO 186 : REDUX action payload
  const [totalPhone, setTotalPhone] = useState(1);

  return (
    <div className='container'>
      <img src={phone} alt='téléphone'/>
      <p>Disponibilité : <span id="count">{props.phones}</span></p>
        
        <div className='btnContainer'>
          <button onClick={() => props.buyPhone(totalPhone)}>Acheter</button>
          <input type="text" value={totalPhone} onChange={(e) => setTotalPhone(e.target.value)}/>
        </div>
    </div>
  )
}

// VIDEO 180 : fonction map avec redux (récupère le state)
const mapStateToProps = (state) => {
  return{
    phones: state.phone.phones
  }
}

// VIDEO 181 : fonction mapDispatchToProps (expédie en props/passe le dispatch en tant que props)
const mapDispatchToProps = (dispatch) => {
  return{
    buyPhone:(totalPhone) => dispatch(buyPhone(totalPhone))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);

