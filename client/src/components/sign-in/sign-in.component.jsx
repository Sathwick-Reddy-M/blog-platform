import { useState } from "react";
import {
  SignInContainer,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "./sign-in.styles";
import {
  updateCurrentUser,
  signInUser,
} from "../../utils/firebase/firebase.utils";

export function SignIn({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetFormFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    signInUser(email, password);
    await updateCurrentUser(setUser);
    resetFormFields();
  };

  return user ? (
    <div>User already Sign In</div>
  ) : (
    <SignInContainer>
      <Title>Sign In</Title>
      <Form onSubmit={handleSignIn}>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit">Sign In</Button>
      </Form>
    </SignInContainer>
  );
}
