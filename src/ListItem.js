import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from './actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription = (description) => {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text>
            {description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { textStyle } = styles;
    const { id, name, description } = this.props.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectSportId(id)}>
        <View>
          <CardSection>
            <Text style={textStyle}>
              {name}
            </Text>
          </CardSection>
          { this.renderDescription(description) }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedSportsIndex === ownProps.item.id;
  return {
    expanded,
  };
}

export default connect(mapStateToProps, actions)(ListItem);
