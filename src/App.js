import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './common';
import SportsList from './SportsList';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Sports" />
		  <SportsList />
        </View>
      </Provider>
    );
  }
}

export default App;
