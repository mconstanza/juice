import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { JuiceList } from './JuiceList';
import { ShoppingList } from './ShoppingList';
import juices from './juices';


export class JuiceRecipes extends Component {
  static propTypes = {
    juice: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

    renderShoppingList = () => {
    let list = []
    Object.keys(this.props.shoppingList).map(e => list.push(this.props.shoppingList[e]))
    return list
  }

  render() {
    return (
      <div className="juice-juice-recipes">
        <div className="recipe-list">
          <JuiceList actions={this.props.actions} list={juices}/>
        </div>
        <div className="shopping-list">
          <ShoppingList shoppingList={this.renderShoppingList()} actions={this.props.actions}/>
        </div>
      </div>
     
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    juice: state.juice,
    shoppingList: state.juice.ingredients
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
)(JuiceRecipes);
