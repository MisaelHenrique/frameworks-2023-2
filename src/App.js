import './App.css';
import { Component } from 'react';

class App extends Component {

  timeOutUpdate = null;

  state ={
      counter: 0,
      posts: [
        {
          id: 1,
          title: 'O título 1',
          body: 'O corpo 1',
        },
        {
          id: 2,
          title: 'O título 2',
          body: 'O corpo 2',
        },
        {
          id: 3,
          title: 'O título 3',
          body: 'O corpo 3',
        },
      ],
}

// fetch aqui
// montagem do componente roda apenas uma vez
  componentDidMount(){
    this.handleTimeout()
}

//quando há alterações no estado do componente
componentDidUpdate(){

  this.handleTimeout()

}

//para desmontar o componente
conponentWillUnmount(){

  clearTimeout(this.timeOutUpdate)

}

handleTimeout = () => {
  
  const { posts, counter} = this.state;

  this.timeOutUpdate = setTimeout(() => {

    posts[0].title = "o titulo mudou..."
    this.setState({
      posts,
      counter: counter + 1
    })

  },2000)

}

  render() {

  const { posts, counter} = this.state;

  return (
    
    <div className="App">
      <h1>{counter}</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <h3>{post.body}</h3>
        </div>
      ))}
    </div>
  );
}
}

export default App;
