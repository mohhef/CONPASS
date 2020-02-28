/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { View } from 'react-native';
import TheMap from '../map';
import SearchBar from '../searchBar';
import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial region state for the App onload
      region: {
        latitude: 45.492409,
        longitude: -73.582153,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
      },
    };
  }

  // Function : updates the currently set region to a new region
  // parameter : a region object to be set to

  updateRegion = (newRegion) => {
    this.setState({
      region: {
        latitude: newRegion.latitude,
        longitude: newRegion.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TheMap updatedRegion={this.state.region} />
        <SearchBar callBack={this.updateRegion} />
      </View>
    );
  }
}
