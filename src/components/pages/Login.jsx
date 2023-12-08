import { useState } from "react";
import { PageLayout, Input, Form, PasswordInput, Button, Spinner } from "@/components/common";
import { StyleSheetManager } from "styled-components";


export const Login = () => {
  const [formFields, setFormFields] = useState({username: '', password: ''});
  const [loading, setLoading] = useState(false);

  function handleInputChange(e){
    e.persist();
    setFormFields(s => ({
        ...s,
        [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
  }

  return (
    <StyleSheetManager shouldForwardProp={
      prop => prop !== 'large' && prop !== 'secondary'
      }>
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={ handleSubmit }>
        {loading ? <Spinner /> : 
        <>
          <Input
            value={ formFields.username }
            onChange={  handleInputChange }
            name="username"
            type="text"
            placeholder="Username"
          />
          <PasswordInput
            value={ formFields.password }
            onChange={  handleInputChange }
            name="password"
          />
        </>
        }
        <Button large type="submit" disabled={ loading }>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading &&
        <>
          <div className="alt-text">
            or
          </div>
          <Button secondary type="button">
            Register
          </Button>
        </>
        }
      </Form>
    </PageLayout>
    </StyleSheetManager>
  );
}