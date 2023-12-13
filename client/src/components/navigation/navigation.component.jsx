import { Fragment } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  updateCurrentUser,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

export function Navigation({ user, setUser }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOutUser();
    updateCurrentUser(setUser);
    navigate("/");
  };

  return user ? (
    <Fragment>
      <div>
        <Link to="/">Home</Link>
        <Link as="span" onClick={handleSignOut}>
          Sign Out
        </Link>
      </div>
      <Outlet />
    </Fragment>
  ) : (
    <Fragment>
      <div>
        <Link to="/">Home</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
      </div>
      <Outlet />
    </Fragment>
  );
}
