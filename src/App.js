import React, { Component } from 'react';
import './App.css';
import Leftside from './container/Leftside';
import RightSide from './container/RightSide';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggest: [],
      category: [],
      updates: []
    }
    this.fetchData = this.fetchData.bind(this);

  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch("http://www.json-generator.com/api/json/get/bUmCwZpDtu?indent=2", {
      method: "GET",
      dataType: "JSON",
    })
      .then((resp) => {
        return resp.json()
      })
      .then((resp) => {

        this.setState({ suggest: resp.books })
        this.setState({ category: resp.Category })
        console.log('fetched', this.state)

      })
      .catch((error) => {
        console.log(error, "catch me if you can")
      })
  }
  handleclick = (value, bookDetail) => {
    let x = value.target.id;
    let newArray = Object.values(bookDetail[x])
    this.setState({
      ...this.state,
      updates: newArray
    })
  }
  render() {
    let category = this.state.category;
    return (
      <div className="App">
        <Leftside category={category}
          handleclick={this.handleclick}
          bookDetail={this.state.suggest}
        />
        <RightSide
          updates={this.state.updates} />
      </div>
    );
  }
}

export default App;
