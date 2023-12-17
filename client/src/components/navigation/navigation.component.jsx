import { Fragment, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  updateCurrentUser,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import { getUser } from "../../utils/requests/requests.utils";
import { NavigationContainer, StyledLink } from "./navigation.styles";

export function Navigation({ user, setUser }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSignOut = async () => {
    await signOutUser();
    updateCurrentUser(setUser);
    navigate("/");
  };

  useEffect(() => {
    const asyncWrapper = async () => {
      if (user) {
        const userResponse = await getUser(user.email);
        setUserName(userResponse.name);
      }
    };
    asyncWrapper();
  }, [user]);

  return user ? (
    <Fragment>
      <NavigationContainer>
        <StyledLink as="span">{userName}</StyledLink>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink as="span" onClick={handleSignOut}>
          Sign Out
        </StyledLink>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  ) : (
    <Fragment>
      <NavigationContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/signin">SignIn</StyledLink>
        <StyledLink to="/signup">SignUp</StyledLink>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
