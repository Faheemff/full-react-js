import { Component } from 'react'

export default class Mounting extends Component {

  constructor (props){
    super(props);
    this.state = {count: 0}
  }


  componentDidMount() {
    console.log('Component mounted')
    // Perform any necessary setup or fetch data here
  }


  incrementCount = ()=> {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <h1>Mounting Component  {`${this.state.count}`}</h1>

        <button onClick={this.incrementCount}>click</button>
      </div>
    )
  }
}
