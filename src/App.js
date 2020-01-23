import React from "react";
import PropTypes from "prop-types";


class App extends React.Component {
  state = {
    isLoading: true
  }
  
  componentDidMount() {
    setTimeout(() =>{
      this.setState({ isLoading: false});
    }, 3000);
  }
  
  render(){
    const {isLoading} = this.state;
    return(
      <div>
        { isLoading ? "Loading...": "We are ready"}
      </div>
    );
  }



}





























/*

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count : current.count + 1 }))
  };
  minus = () => {
    this.setState(current => ({ count : current.count - 1}))
  };
  
  render(){
  return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>plus</button>
      <button onClick={this.minus}>minus</button>
    </div>
  )
  }
}

*/
export default App;