import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import Message from "./Message";

const PostList = () =>{

  const {postList, addInitialPosts} = useContext(PostListData)
  // console.log(postList);

  const handelGetPostClick = () => {
    // console.log("Fetch Posts");
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts);
    });
  }
  
  return ( 
  <>
    {postList.length === 0 && <Message onGetPostClick={handelGetPostClick}/>}
    {postList.map((post)=>( 
      <Post key={post.id} post={post}/>
    ))}
  </>
  )
}
export default PostList;