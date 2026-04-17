import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PostRead = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPostInfo = async () => {
      try {
        const response = await fetch(`http://localhost:10000/api/posts/${id}`);

        if (!response.ok) {
          const { message } = await response.json();
          alert(message);
          return;
        }

        const { message, data } = await response.json();
        setPost(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getPostInfo();
  }, [id]);

  const removePost = async () => {
    await fetch(`http://localhost:10000/api/posts/${id}`, {
      method: "DELETE"
    })
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error?.message);
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        navigate("/posts/post-list");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <p>게시글 번호: {post?.id}</p>
      <p>제목: {post?.postTitle}</p>
      <p>내용: {post?.postContent}</p>/
      <p>조회수: {post?.postReadCount}</p>
      <p>작성자 이름: {post?.memberName}</p>
      <Link to={`/posts/post-update/${id}`}>게시글 수정</Link>
      <button onClick={removePost}>게시글 삭제</button>
    </div>
  );
};

export default PostRead;