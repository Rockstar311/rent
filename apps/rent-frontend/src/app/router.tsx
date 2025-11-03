import { createBrowserRouter, Navigate } from 'react-router';
import App from './app';
import Search from './search/search';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/search" replace />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);
