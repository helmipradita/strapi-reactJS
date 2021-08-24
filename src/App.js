import logo from './logo.svg';
import './App.css';
import BlogList from './components/BlogList';
import BlogAPI from './config/BlogAPI';
import { useEffect, useState } from 'react';

function App() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    BlogAPI.find().then(res => {
      console.log(res);
      setBlogs(res);
    });
  }, [])

  return (
    <div >
      <header >
        <h1 className="fw-bold text-center py-5">CRUD With strAPI</h1>
      </header>
      <BlogList blogs={blogs}/>
    </div>
  );
}

export default App;
