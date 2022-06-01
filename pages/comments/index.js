import { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  return (
    <>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} | {comment.text}
        </div>
      ))}
    </>
  );
};

export default CommentsPage;
