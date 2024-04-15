import { createBrowserRouter } from "react-router-dom";

import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layout/Default";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },

      {
        path: "/status/:content",
        element: <Status />,
      },
    ],
  },
]);
