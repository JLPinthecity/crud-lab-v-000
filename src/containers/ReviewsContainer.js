import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux'
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
        addReview={this.props.addReview}
        restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews}
        restaurantId={this.props.restaurant.id}
        deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => {dispatch( { type: "ADD_REVIEW", review })},
    deleteReview: id => {dispatch({ type: "DELETE_REVIEW", id})}
  }
}
//addRestaurant: text => {dispatch( { type: "ADD_RESTAURANT", text })},


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
