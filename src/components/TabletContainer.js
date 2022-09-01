import React from 'react';
import tablet from '../images/tablet.svg';
import {connect} from 'react-redux';
import {buyTablet} from '../redux/tablet/actionTablet';

function TabletContainer(props) {
  return (
    <div className='container'>
        <img src={tablet} alt="television"/>
        <p>Disponibilité : <span id="count">{props.tablet}</span></p>
        <button onClick={() => props.buyTablet()}>Acheter</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tablet:state.tablet.tablet
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyTablet: () => dispatch(buyTablet())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabletContainer);