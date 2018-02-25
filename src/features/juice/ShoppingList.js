import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class ShoppingList extends Component {
  static propTypes = {
    juice: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    shoppingList: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="juice-shopping-list">
        <h2>Shopping List</h2>
        {
          this.props.shoppingList.map((item) => {
            if(item.quantity > 0) {
              return (
                <li>{item.name}: {item.quantity}</li>
              )
            }
          })
        }
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
)(ShoppingList);
