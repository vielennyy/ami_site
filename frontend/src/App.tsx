import React from 'react';
import {AppRoutes} from "./AppRoutes"
import { Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element}/>;
            })}
          </Routes>
      </Layout>
      
    </div>
  );
}

export default App;
