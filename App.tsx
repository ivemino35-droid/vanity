
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Contribute from './pages/Contribute';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/contribute/:id" element={<Contribute />} />
          <Route path="/pool/:id" element={<div className="p-8 text-center bg-white rounded-xl border border-slate-200">Pool Details View (Placeholder)</div>} />
          <Route path="/join" element={<div className="p-8 text-center bg-white rounded-xl border border-slate-200">Join Pool Interface (Placeholder)</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
