import { Navigate, useLocation } from 'react-router-dom';

function Dashboard() {
  // Simulating authentication
  const isAuthenticated = false;
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login while preserving the intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to your protected dashboard!</p>
    </div>
  );
}

export default Dashboard;