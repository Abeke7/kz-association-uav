import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { TailSpin } from 'react-loader-spinner';

// Lazy-loaded components
const LazyMain = lazy(() => import('./component/Main'));
const LazyNavbar = lazy(() => import('./component/Navbar'));

function App() {
  return (
    <BrowserRouter>
      <div className={`App fade-in`}>
        <Suspense
          fallback={
            <div className="loader-container">
              <TailSpin
                color="#1E5691"
                height={80}
                width={80}
                timeout={3000}
              />
            </div>
          }
        >
          <LazyNavbar />
          <Routes>
            <Route path="/" element={<LazyMain />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
