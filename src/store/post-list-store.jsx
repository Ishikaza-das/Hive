import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPsot: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter(post => post.id !== action.payload.postId);
  } else if(action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
}

const PostListProvider = ({children}) =>{

  const [ postList, dispatchPostList ] = useReducer(postListReducer, DEFAULT_POST_LIST) // Arguments Reducer function then default values

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    // console.log(`${userId}, ${postTitle}, ${postBody}, ${reactions}, ${tags}`);
    dispatchPostList({
      type: 'ADD_POST',
      payload:{
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
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

  return ( 
    <PostList.Provider value={{
      postList,
      addPost,
      deletePost,
      }}>{children}
    </PostList.Provider>
  )
};

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Searching jobs',
    body: 'Koi nokri de do',
    reactions: 2,
    userId: 'user-9',
    tags: ['Cognizant','Amazon','Infosys'],
  },
  {
    id: '2',
    title: 'Job got',
    body: 'Nokri mil gai',
    reactions: 6,
    userId: 'user-7',
    tags: ['Cognizant','Amazon','Infosys','Google'],
  },
];

export default PostListProvider;