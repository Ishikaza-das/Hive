import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) =>{

  const { deletePost } = useContext(PostList);

  return(
    <>
      <div className="card post-card" style={{width: "50rem"}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map(tag => <span className="badge rounded-pill text-bg-primary hastags" key={tag}>{tag}</span>)}
          <div className="alert alert-primary reactions" role="alert">
            {/* {post.reactions.likes} people liked this post. <br /> */}
            {post.views} people liked this post. <br />
            {/* {post.reactions.dislikes} people disliked this post. */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;