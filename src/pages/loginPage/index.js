import React, { useState } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'userName') {
      setUserName(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              name='userName'
              onChange={handleChange}
              value={userName}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleChange}
              value={password}
            />

            <Button
              color='teal'
              fluid
              size='large'
              type='button'
              onClick={() => {}}
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          <a href='#'>Forget password</a>
        </Message>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
