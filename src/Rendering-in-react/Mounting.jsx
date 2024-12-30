import React from 'react'


class MountingExample extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {message: 'Mounting example'}
    console.log('1. Constructing Mounting Example');
  }
}

export default MountingExample;
