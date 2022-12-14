import { DataProvider } from '@appository/shared/data-context';
import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';

const Dashboard = React.lazy(() => import('dashboard/Module'));

const Remote = React.lazy(() => import('remote/Module'));

export function App() {
  return (
    <DataProvider>
      <React.Suspense fallback={null}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/remote">Remote</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<NxWelcome title="shell" />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/remote" element={<Remote />} />
        </Routes>
      </React.Suspense>
    </DataProvider>
  );
}

export default App;
