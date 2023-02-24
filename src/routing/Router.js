import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route
            path={route.path}
            element={
              // route.isPrivate ?
              // <route.privacyChecker>
              // <route.component />
              // </route.privacyChecker>
              // :
              <route.component />
            }
            key={route.path}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;


