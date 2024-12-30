import { Component } from 'react'

export default class Mounting extends Component {


  componentDidMount() {
    console.log('Component mounted')
    // Perform any necessary setup or fetch data here
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}
