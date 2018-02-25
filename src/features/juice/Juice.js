import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';



export class Juice extends Component {
  static propTypes = {
    juice: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  addIngredients = () =>{
    for(var i = 0; i < this.props.juice.ingredients.length; i++) {
      this.props.actions.addIngredient(this.props.juice.ingredients[i].name, this.props.juice.ingredients[i].quantity)
    } 
  }

  render() {
    return (
      <div className="juice-juice">
        <h3>{this.props.juice.name}</h3>
          Makes {this.props.juice.servings}{this.props.juice.servings == 1 ? " serving" : " servings" } 
        <h4>Ingredients:</h4>
        <ul>
          {this.props.juice.ingredients.length > 0 ?
            this.props.juice.ingredients.map(item => <li>{item.quantity} {item.measure ? item.measure: ""} {item.name}</li>)
            : <li className="no-items-tip">No ingredients yet.</li>}
        </ul>
        <button onClick={this.addIngredients}>+</button>
      </div>
    );
  }
}


/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    juice: state.juice,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Juice);
