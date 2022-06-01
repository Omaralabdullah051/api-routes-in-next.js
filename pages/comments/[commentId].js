import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.id} | {comment.text}
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  //*Don't do this when fetching data from our own api in getStaticProps or getServerSideProps function
  //   const res = await fetch(`/api/comments/${commentId}`);
  //   const data = await res.json();

  return {
    props: {
      comment,
    },
  };
}
