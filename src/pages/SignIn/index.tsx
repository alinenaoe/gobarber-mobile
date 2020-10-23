import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <Title>Sign in</Title>
      <Input />
      <Input />
      <Button>Login</Button>
    </Container>
  );
};

export default SignIn;
