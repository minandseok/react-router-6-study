import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root 요소에 React 컴포넌트를 렌더링
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* RouterProvider를 사용해 router를 애플리케이션에 연결 */}
  </React.StrictMode>
);