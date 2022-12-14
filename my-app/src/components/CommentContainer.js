import React from "react";
import Comment from "./Comment";

const CommentContainer = ({ commentsList }) => {
  const commentComponent = commentsList.map((comment) => (
    <Comment
      key={comment.id}
      username={comment.username}
      comments={comment.comments}
    />
  ));

  return (
    <div className="comment-display">
      {commentComponent}
    </div>
  );
};

export default CommentContainer;
