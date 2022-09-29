import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
// import BlogPostsPage, {
//   loader as BlogPostsPageLoader,
// } from "./pages/BlogPosts";
import DeferredBlogPostsPage, {
  loader as DeferredBlogPostsLoader,
} from "./pages/DeferredBlogPosts";
import NewPostPage, { action as NewPostAction } from "./pages/NewPost";
import PostDetailPage, {
  loader as PostDetailPageLoader,
} from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/ErrorPage";
import { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/newsletter" action={newsletterAction} />
      <Route path="/blog" element={<BlogLayout />}>
        {/* these 2 routes are same, but DeferredBlogPostsPage is slower to see other features of react-router */}
        {/* <Route index element={<BlogPostsPage />} loader={BlogPostsPageLoader} /> */}
        <Route
          index
          element={<DeferredBlogPostsPage />}
          loader={DeferredBlogPostsLoader}
        />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={PostDetailPageLoader}
          // errorElement={<p>Error!</p>}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={NewPostAction}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
