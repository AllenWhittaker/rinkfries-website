import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { WhiteLabel } from "./pages/WhiteLabel";
import { Advertising } from "./pages/Advertising";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "white-label", Component: WhiteLabel },
      { path: "advertising", Component: Advertising },
      { path: "blog", Component: Blog },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
