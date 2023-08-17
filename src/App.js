import './App.css';
import { Component } from 'react';

class App extends Component {


  state ={
      posts: [],
      photos: [],
}

// fetch aqui
// montagem do componente roda apenas uma vez
  componentDidMount(){

    this.loadPosts();
}

  loadPosts = async () => {
    
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const photosAndPosts = postsJson.map((post, index) => {
      return{
        ...post,
        cover: photosJson[index].url,
      }
      
    })

    this.setState({posts: photosAndPosts});

  };

  render() {

  const {posts} = this.state;

  return (
    
  <section className='container'>
  <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className='post'>
          <img src={post.cover} alt="" />
          <div className='text'>
          <h1>{post.title}</h1>
          <h3>{post.body}</h3>
          </div>
          
        </div>
      ))}
  </div>
  </section>
    
  );
}
}

export default App;
