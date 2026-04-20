import React from 'react';
import { useForm } from 'react-hook-form';

// 포스트 작성
const PostWrite = () => {

    const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});

    const postWrite = async (postWriteRequsetDTO) => {
      await fetch("http://localhost:10000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postWriteRequsetDTO)
      })
    .then((response) => {
      if (!response.ok) {
        throw new Error("서버 오류 발생");
      }
      return response.json();
    })
    .then((data) => {
      console.log("성공:", data);
    })
    .catch((err) => {
      console.error("에러:", err);
    })
  }

    return (
        <div>
            <form onSubmit={handleSubmit(postWrite)}>
                <div>
                    <p>게시판 제목</p>
                    <input 
                        {...register("postTitle", {
                            required: true,
                        })}
                    />
                    {errors && errors?.postTitle?.type === "required" && (
                        <p>게시글 제목을 입력하세요</p>
                    )}
                </div>
                <div>
                    <p>게시판 내용</p>
                    <input 
                        {...register("postContent", {
                            required: true,
                        })}
                    />
                    {errors && errors?.postContent?.type === "required" && (
                        <p>게시글 내용을 입력하세요.</p>
                    )}
                </div>
                <button disabled={isSubmitting}>게시글 작성</button>
            </form>
        </div>
    );
};

export default PostWrite;