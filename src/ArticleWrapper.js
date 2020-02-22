import React, {Component} from 'react';
import Article from './Article';



class ArticleWrapper extends Component {
constructor() {
  super()
  this.state ={
    img : null,
    paragraphs : []
  }
}

componentDidMount() {
  fetch("https://mashape-community-skate-ipsum.p.rapidapi.com/6/0/JSON", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "mashape-community-skate-ipsum.p.rapidapi.com",
      "x-rapidapi-key": "33bfbd583amshc3ab9d939cbd064p1b78dbjsnb9b3cbe85197"
    }
  })
    .then(response => {
       response.json().then(res => {
        this.setState({
          paragraphs : res
        })
      })
    })

    fetch("https://api.unsplash.com/photos/random?client_id=uxmW_PR6Zn3N6vc5Zsc2pQJVOwzezAXoPBSOi1eXa4A").then(res => {
      res.json().then(real => {
        this.setState({
          img : real.urls.regular
        })
      })
    })
}

  render() {
    return (
      <Article img={this.state.img} paragraphs={this.state.paragraphs} />
    )
  }
}

export default ArticleWrapper;
