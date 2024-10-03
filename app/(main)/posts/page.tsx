import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import PostTable from "@/components/posts/PostTable";

const PostPage = () => {
  return (
    <div>
      <BackButton text="Go Back" link="/" />
      <PostTable />
      <PostsPagination />
    </div>
  );
};

export default PostPage;
