import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom';
import ComponentRoutes from './routes/Routes';

export default function App() {
  return (
    <Suspense fallback={<h1>...loading</h1>}>
      <BrowserRouter>
        <ComponentRoutes />
      </BrowserRouter>
    </Suspense>
  )
}
