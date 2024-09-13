import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPsot: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  console.log(action);
  console.log(currPostList);
  
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter(post => post.id !== action.payload.postId);
  } else if(action.type === 'ADD_INITIAL_POSTS'){
    newPostList = action.payload.posts
  } else if(action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList]
  } 
  return newPostList;
}

const PostListProvider = ({children}) =>{

  const [ postList, dispatchPostList ] = useReducer(postListReducer,[]); // Arguments Reducer function then default values

  // const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    // console.log(`${userId}, ${postTitle}, ${postBody}, ${reactions}, ${tags}`);
    console.log("add post called ",post);
    
    dispatchPostList({
      type: 'ADD_POST',
      payload: post,
    })
  }

   const addInitialPosts = (posts) => {
    // console.log(`${userId}, ${postTitle}, ${postBody}, ${reactions}, ${tags}`);
    dispatchPostList({
      type: 'ADD_INITIAL_POSTS',
      payload:{
        posts,
      }
    })
  }

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId,
      },
    });
  };

  //  useEffect(() => {
  //   setFetching(true);

  //   const controller = new AbortController();
  //   const signal = controller.signal;

    
  //       return () => {
  //         // console.log("Cleaning up useEffect");
  //         controller.abort;
  //       }
  // }, []);

  return ( 
    <PostList.Provider value={{
      postList,
      addPost,
      deletePost,
      }}>{children}
    </PostList.Provider>
  )
};


export default PostListProvider;