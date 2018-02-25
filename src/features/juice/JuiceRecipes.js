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

  render() {
    return (
      <div className="juice-juice-recipes">
        <div>
          <JuiceList actions={this.props.actions} list={juices}/>
        </div>
        <div>
          <ShoppingList actions={this.props.actions}/>
        </div>
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
)(JuiceRecipes);
