import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () =>{

  const {postList, addInitialPosts} = useContext(PostListData)
  // console.log(postList);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts',{signal})
        .then((res) => res.json())
        .then((data) => {
          addInitialPosts(data.posts);
          setFetching(false);
        });
        return () => {
          console.log("Cleaning up useEffect");
          controller.abort;
        }
  }, []);
  
  return ( 
  <>
  {fetching && <LoadingSpinner/>}
  {!fetching && postList.length === 0 && <Message/>}
  {!fetching && postList.map((post)=>( 
    <Post key={post.id} post={post}/>
  ))}
  </>
  )
}
export default PostList;