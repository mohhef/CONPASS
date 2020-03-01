import { Component } from 'react';

export default class LocateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
      },
    };
  }

  setCampusTemplate(longitude, latitude) {
    this.setState({
      region: {
        latitude,
        longitude,
      }
    }, () => { this.props.updateRegion(this.state.region); });
  }
}
