import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Read user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = (e) => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>React Jobs</h1>
      </Link>
      <div className="links">
        <div>
          <Link to="/jobs/add-job">Add Job</Link>
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
          {user && (
            <>
              <span>Logged in as {user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </>
          )}          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;