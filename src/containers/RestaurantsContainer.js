import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => ({
    addRestaurant: text => {dispatch( { type: "ADD_RESTAURANT", text })},
    deleteRestaurant: id => {dispatch( { type: "REMOVE_RESTAURANT", id})}

})




export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
// You will then want to create a Restaurants component that renders a list of restaurants, 
//and a Restaurant component that is responsible for each individual restaurant.