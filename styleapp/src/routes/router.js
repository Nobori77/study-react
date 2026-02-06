import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import Styled01 from "../pages/tutorial/Styled01";
import Styled02 from "../pages/tutorial/Styled02";
import Styled03 from "../pages/tutorial/Styled03";
import Styled04 from "../pages/tutorial/Styled04";
import Styled05 from "../pages/tutorial/Styled05";
import Styled06 from "../pages/tutorial/Styled06";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true, // === path: ""
        element: <Main />
      },
      {
        path: "styled-01",
        element: <Styled01 />
      },
      {
        path: "styled-02",
        element: <Styled02 />
      },
      {
        path: "styled-03",
        element: <Styled03 />
      },
      {
        path: "styled-04",
        element: <Styled04 />
      },
      {
        path: "styled-05",
        element: <Styled05 />
      },
      {
        path: "styled-06",
        element: <Styled06 />
      },
    ]
  }
])

export default router;