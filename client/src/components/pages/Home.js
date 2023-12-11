import React, { useState, useEffect } from "react";
import { useUser } from '../../UserContext';
import axios from 'axios';
// import { useUser } from '../../UserContext';

function Home() {
  const { userData } = useUser();
  const [postData, setPostData] = useState({
    ownerId: userData? userData.id : '',
    brand: '',
    rating: '',
    description: ''
  });

  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/posts');
        console.log(response.data);
        setPostsList(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };
    fetchPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // TODO: Validate input before making the request

      await axios.post('http://localhost:8080/api/posts/', postData);

      const response = await axios.get('http://localhost:8080/api/posts');
      console.log(response);
      setPostsList(response.data);

      setPostData({
        brand: '',
        rating: '',
        description: '',
      });
    } catch (error) {
      console.error('Error posting data:', error.message);
    }
  };

  return (
    <div>
      <h1>Welcome, {userData ? userData.displayName : 'Guest'}</h1>
      {userData ? <div>
      <h1>Create a New Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={postData.brand}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Rating (1-100): 
          <input
            type="number"
            name="rating"
            value={postData.rating}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description: 
          <textarea
            name="description"
            value={postData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>

      <h2>Previous Posts</h2>
      {Array.isArray(postsList) && postsList.length > 0 ? (
        <ul>
          {postsList.map((post) => (
            <li key={post.id}>
              <strong>{post.brand}</strong> - Rating: {post.rating} - {post.description} - Author: {post.ownerId}
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
      </div>: <>To post or read reviews login or signup!</>}
      
    </div>
  );
}

export default Home;
