import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate(from, { replace: true });
  };

  return (
    <div className="page">
      <h1>Login</h1>
      <p>You need to login to access the dashboard</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;