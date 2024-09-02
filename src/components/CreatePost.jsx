import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {
  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/);

    addPost(userId, postTitle, postBody, reactions, tags);
  }



  return (
    <>
      <form className="create-post" onSubmit={handelSubmit}>

         <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input type="text" className="form-control" id="userId" aria-describedby="emailHelp" placeholder="Your user Id" ref={userIdElement}/>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Share Your Thoughts..." ref={postTitleElement}/>
        </div>
        
         <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea type="text" rows="4"className="form-control" id="body" aria-describedby="emailHelp" placeholder="Tell us more of it..." ref={postBodyElement}/>
        </div>

         <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of reactions</label>
          <input type="text" className="form-control" id="reactions" aria-describedby="emailHelp" placeholder="How many people reacted" ref={reactionsElement}/>
        </div>

         <div className="mb-3">
          <label htmlFor="tags" className="form-label">Hash Tags</label>
          <input type="text" className="form-control" id="tags" aria-describedby="emailHelp" placeholder="Please enter tags using space..." ref={tagsElement}/>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
    </form>
    </>
  );
};

export default CreatePost;