import { Component } from 'react'

export default class RenderProps extends Component {
    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0};
    };


    handleMouseMove = (event)=> {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }



  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={{height: '100vh'}}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

