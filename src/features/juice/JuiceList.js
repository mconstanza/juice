import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Juice } from './Juice';

export class JuiceList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="juice-juice-list">
        <ul>
        { 
          this.props.list.length > 0 ?
            this.props.list.map(item => <Juice actions={this.props.actions} juice={item}/>)
            : <li className="no-items-tip">No juices yet.</li>
        }
        </ul>
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
)(JuiceList);
