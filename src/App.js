import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){ super(props)
    this.state={
      fullName:"Sahar Ben Cheikh Ahmed",
      bio:"bio",
      imgSrc:"https://www.informatiquegifs.com/FB/automne.jpg",
      profession:"student",
      shows:false,
      count:0,
    }
  }
  show=()=> {
    this.setState({shows:!this.state.shows});
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((i) => ({
        count: i.count + 1,
      }));
    },1000);}
  render() {
    return (
      <div>{this.state.shows ? 
      <><h1>{this.state.fullName}</h1><h1>{this.state.bio}</h1><img src={this.state.imgSrc} /><h1>{this.state.profession}</h1></>
      :null}
      <button onClick={this.show}>show</button>
      <div>Count: {this.state.count}{" "}sec</div>
      </div>
    )
  }
}

