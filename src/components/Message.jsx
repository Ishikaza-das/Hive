const Message = ({onGetPostClick}) => {
  return(
    <>
      <div className="text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold ">Welcome</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">There are no post. To create a post go to the create post option.</p>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={onGetPostClick}>Fetch Post</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Message;