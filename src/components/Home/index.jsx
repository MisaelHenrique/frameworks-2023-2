import './style.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { PostCard } from '../PostCard';
import { Button } from '../Button';

class App extends Component {


  state ={
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2,
  };

// fetch aqui
// montagem do componente roda apenas uma vez
  componentDidMount(){

    this.loadPosts();
}
loadPosts = async () => {
  const {page, postsPerPage} = this.state;
  const photosAndPosts = await loadPosts()

    this.setState({
      posts: photosAndPosts.slice(page, postsPerPage),
      allposts: photosAndPosts,
    });

  };

  loadMorePosts = () => {
    const {page, postsPerPage, allPosts, posts} = this.state

    const nextPage = page + postsPerPage;

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    this.setState({posts: [...posts, ...nextPosts], page: nextPage});

  }

  render() {

  const {posts} = this.state;

  return (
    
  <section className='container'>
  <div className="posts">
  {posts.map((post) => (
    <PostCard key={post.id} post = {post}/>
      ))}
  </div>
  <Button text = "Load more posts" action={this.loadMorePosts}/>
  </section>
    
  );
}
}

export default App;
