import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router';

import { App } from './App';

import './index.scss';

// biome-ignore lint/style/noNonNullAssertion: the #app element is guaranteed to exist
createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route
          index={true}
          element={<Navigate to="/index" />}
        />
        <Route
          path="/index"
          element={<App />}
        />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
