import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {apiCall} from '../redux/comment/actionComment';

function CommentContainer({apiData, apiComment}) {
  
  useEffect(() => {
    apiComment()
  }, [apiComment])

  const displayApiData = apiData.isLoading ? 
  (<p>Loading...</p>) : 
  apiData.error ? 
  (<p>{apiData.error}</p>) :
  (apiData.comments.map((comment) => {
    return (
      <div key={comment.id} className='comments'>{comment.body}</div>
    )
  }))

  return (
    <Fragment>
      <h2>Comments : </h2>
      <hr/>
      {displayApiData}
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    apiData:state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    apiComment:() => dispatch(apiCall())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
