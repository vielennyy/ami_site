import { AdminPage } from "./pages/AdminPage";
import { HomePage } from "./pages/HomePage";
export const AppRoutes = [
    {
      index: true,
      element: <HomePage/>
    },
    {
      path: '/student',
      element: <>Student</>
    },
    {
        path: '/abiturient',
        element: <>abiturient</>
    },
    {
        path: '/cathedra',
        element: <>cathedra</>
    },
    {
        path: '/contacts',
        element: <>contacts</>
    },
    {
        path: '/admin',
        element: <AdminPage/>
    },
];