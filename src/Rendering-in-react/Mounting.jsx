import React from 'react'


class MountingExample extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {message: 'Mounting example'}
    console.log('1. Constructing Mounting Example');
  }


  static getDerivedStateFromProps(props, state) {
    console.log(props,state,'2. getDerivedStateFromProps called');
    return null; // State ko change mat karo
  }

  render() {
    console.log('3. Render called');
    return <h1>{this.state.message}</h1>;
  }


  componentDidMount() {
    console.log('4. ComponentDidMount called');
    // API call ya timer yahan set hota hai
  }

  
}

export default MountingExample;
