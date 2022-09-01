import React from 'react';
import tv from '../images/tv-monitor.svg';
import {connect} from 'react-redux';
import {buyTv} from '../redux/tv/actionTv';

function TvContainer(props) {
  return (
    <div className='container'>
        <img src={tv} alt="television"/>
        <p>Disponibilité : <span id="count">{props.tv}</span></p>
        <button onClick={() => props.buyTv()}>Acheter</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tv:state.television.tv
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyTv: () => dispatch(buyTv())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer);
