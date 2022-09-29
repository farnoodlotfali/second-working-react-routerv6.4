import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import Posts from "../components/Posts";
import { getSlowPosts } from "../util/api";

function DeferredBlogPosts() {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>error DeferredBlogPosts</p>}
        >
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default DeferredBlogPosts;

export const loader = async () => {
  return defer({
    posts: getSlowPosts(),
    // this code tell react-router to wait then show blog page
    // posts: await getSlowPosts()
  });
};
