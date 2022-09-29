import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
