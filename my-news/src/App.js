import React, { Component } from 'react';
//import Post from './Post/Post';
//import axios from 'axios';
//import Aids from './Aids';
import { BrowserRouter } from 'react-router-dom';
import Container from './Container';
//import Country from './country/country'
//import logo from './logo.svg';
//import './App.css';


// const api = axios.create({
//   baseURL: 'http://api.weatherapi.com/v1/current.json?key=ab3bb73192a04d7d9d501849201208&q=London'
// })

class App extends Component {
  render () {
     return (
       <BrowserRouter>
       <div>
      <Container/>
       </div>
      
       </BrowserRouter>
     )
  };
//   state = {
//     posts: []
//   }

//   // constructor() {
//   //   super();
//   //   this.getPosts();
//   // }
//   // getPosts = async () => {
//   //   let {data} = await api.get('/');
//   //    this.setState({posts: data})
//   // }


//  componentDidMount () {
// //   // fetch('http://api.weatherapi.com/v1/current.json?key=ab3bb73192a04d7d9d501849201208&q=London')
// //   // .then(response => response.json())
// //   // .then(data => {
// //   //   this.setState({posts: data})
// //   // }).catch(err => {console.error(err)})
  
//     api.get('/').then(response => {
//       this.setState({ posts: [response.data] })
//       console.log(response)
//     }).catch (err => {
//       console.log(err)
//     })
//  }


// render () {
//   // let poster 
//   // if (this.state.posts) {
//   //   poster = this.state.posts
     
//   // }
//   // else {poster = <h1>Nothing here</h1>}
//    const poster = this.state.posts.map(post => {
//       return <Post title={post.data} />;
//     })
  
//   return (
//     <div className="App">
//       {poster}
//     </div>
//   );
// }

}

export default App;
