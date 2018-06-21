import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class SportsList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.sportsList}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sportsList: state.sportsList,
  };
};

export default connect(mapStateToProps)(SportsList);
