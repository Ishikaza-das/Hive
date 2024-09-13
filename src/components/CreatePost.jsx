// import { useContext, useRef } from "react";
// import {PostList} from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const {addPost} = useContext(PostList);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  // const handelSubmit = (event) => {
    // event.preventDefault();

    // const userId = userIdElement.current.value;
    // const postTitle = postTitleElement.current.value;
    // const postBody = postBodyElement.current.value;
    // const reactions = reactionsElement.current.value;
    // const tags = tagsElement.current.value.split(" ");

    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // reactionsElement.current.value = "";
    // tagsElement.current.value = "";

    // console.log("Sending post to server");
    
  // }



  return (
    <>
      <Form className="create-post" method="POST">

         <div className="mb-3">
          <label htmlFor="userId" className="form-label">User Id</label>
          <input type="text" className="form-control" id="userId" aria-describedby="emailHelp" placeholder="Your user Id" name="userId"/>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Share Your Thoughts..." name="title"/>
        </div>
        
         <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea type="text" rows="4"className="form-control" id="body" aria-describedby="emailHelp" placeholder="Tell us more of it..." name="body"/>
        </div>

         <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of reactions</label>
          <input type="text" className="form-control" id="reactions" aria-describedby="emailHelp" placeholder="How many people reacted" name="reactions"/>
        </div>

         <div className="mb-3">
          <label htmlFor="tags" className="form-label">Hash Tags</label>
          <input type="text" className="form-control" id="tags" aria-describedby="emailHelp" placeholder="Please enter tags using space..." name="tags"/>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
    </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  
 fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
    .then(res => res.json())
    .then(post => {
      console.log(post);
    }  
    );

  return redirect("/");
}

export default CreatePost;