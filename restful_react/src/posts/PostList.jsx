import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    const getPostList = async () => {
      const response = await fetch("http://localhost:10000/api/posts")
      const postList = await response.json()
      const {message, data} = postList
      setPostList(data)
    }

    getPostList()
  }, [])

  const postTitleNames = postList.map(({id, postTitle}, i) => 
    <li key={i}><Link to={`/posts/post-read/${id}`}>{postTitle}</Link></li>
  ) 
  return (
    <div>
      게시판 목록
      <ul>
        {postTitleNames}
      </ul>
    </div>
  );
};

export default PostList;