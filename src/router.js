import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import Latest from "./pages/Latest";
import App from "./App";
import TopPicks from "./pages/TopPicks";
import DetailBook from "./component/DetailBook";
import SearchPage from "./pages/SearchPage";
import error from "./pages/404";

const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "latest", Component: Latest },
      { path: "top_picks", Component: TopPicks },
      {
        path: "books",
        children: [
          {
            path: ":id",
            Component: DetailBook,
          },
        ],
      },
      { path: "/search", Component: SearchPage },
    ],
  },
  { path: "404", Component: error },
  { path: "*", Component: error },
]);

export default router;
