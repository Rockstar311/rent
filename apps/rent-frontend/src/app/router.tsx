import { createBrowserRouter } from 'react-router';
import App from './app';
import Search from './search/search';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);
