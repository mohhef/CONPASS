/* eslint-disable no-useless-constructor */
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import LocateCampus from './LocateCampus';
import styles from './styles';

export default class SwitchCampuses extends LocateCampus {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visiblityState) {
      return (
        <View style={styles.container}>
          <View style={styles.btn}>
            <Button
              title="Loyola"
              onPress={() => { super.setCampusTemplate(-73.640192, 45.458025); }}
            />
          </View>

          <View style={styles.btn}>
            <Button
              title="SGW"
              onPress={() => { super.setCampusTemplate(-73.577850, 45.495598); }}
            />
          </View>
        </View>
      );
    }
    return null;
  }
}
