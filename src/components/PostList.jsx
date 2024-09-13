import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () =>{
  const postList = useLoaderData();

  // const {postList} = useContext(PostListData)
  // console.log(postList);

  return ( 
  <>
  { postList.length === 0 && <Message/>}
  { postList.map((post)=>( 
    <Post key={post.id} post={post}/>
  ))}
  </>
  )
};

export const postLoader = () => {
return fetch('https://dummyjson.com/posts')
        .then((res) => res.json())
        .then((data) => {
          return data.posts;
        });
};


export default PostList;