import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class SportsList extends Component {
  render() {
	console.log(this.props);
	return <View />;
  }
}

const mapStateToProps = state => {
  return {
	sportsList: state.sportsList,
  };
};

export default connect(mapStateToProps)(SportsList);
