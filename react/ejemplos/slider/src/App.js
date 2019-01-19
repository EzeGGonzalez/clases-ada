import React, { Component } from 'react';
import Carousel from './Carousel'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state ={
      images: [
				"https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
				"https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
				"https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
				"https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
				"https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
			]
    }
  }
  render() {
    return (
      <Carousel images={this.state.images}/>
    )
  }
}

export default App;