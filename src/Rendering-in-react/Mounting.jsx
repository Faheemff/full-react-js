import { Component } from 'react'
// import UnMounting from './UnMounting';

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


  componentDidUpdate() {
    console.log('component Did Update')
    if(this.state.count !== this.state.count) {
      console.log('component Did Update')
      console.log(this.state.count);
      console.log('component Did Update')
    }
  }

  deCrementCount = ()=> {
    this.setState({count: this.state.count - 1})
  }

  componentDidUnMount(){
    console.log('deCreationCount');
    
  }


  render() {
    return (
      <div>
        <h1>Mounting Component  {`${this.state.count}`}</h1>
        
        <button onClick={this.incrementCount}>click</button>
        <button onClick={this.deCrementCount}>click</button>
      </div>
    )
  }
}
