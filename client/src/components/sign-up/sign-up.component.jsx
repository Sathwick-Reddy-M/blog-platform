import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../utils/firebase/firebase.utils";
import { createUser } from "../../utils/requests/requests.utils";
import {
  SignUpContainer,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "./sign-up.styles";

export function SignUp({ user, setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const resetFormFields = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUpUser(email, password);
    await createUser({ name, email });
    resetFormFields();
    navigate("/");
  };

  return user ? (
    <div>User Signed In!</div>
  ) : (
    <SignUpContainer>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSignUp}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
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
        <Button type="submit">Sign Up</Button>
      </Form>
    </SignUpContainer>
  );
}
