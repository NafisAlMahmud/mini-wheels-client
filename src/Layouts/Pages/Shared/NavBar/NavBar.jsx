import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="allToys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  All Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="myToys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="addToys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Add Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blogs"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl lg:pl-10">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
              <NavLink
                to="allToys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="myToys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="addToys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Add Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex lg:px-10">
            <div>
              {user ? (
                <img
                  className="rounded-full w-10 mr-8"
                  title={user?.displayName}
                  src={`${user?.photoURL}`}
                  alt=""
                />
              ) : (
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  <button className="btn bg-slate-500 text-white rounded">
                    Login
                  </button>
                </NavLink>
              )}
            </div>
            <div>
              {user && (
                <span>
                  {user.displayName}
                  <button className="btn lg:ml-10" onClick={handleLogout}>
                    Sign out
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
