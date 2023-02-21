import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Form, Background } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage 
            your useful links.</p>

        <h2>Sign In</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}        
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}        
        />

        <Button title="Enter" />

        <Link to="/register">
        Create Account
        </Link>         
      </Form>

      <Background />
    </Container>
  );
}