import { useState } from "react";
import { PageLayout, Input, Form, PasswordInput } from "@/components/common";

export const Login = () => {
  const [formFields, setFormFields] = useState({username: '', password: ''});

  function handleInputChange(e){
    e.persist();
    setFormFields(s => ({
        ...s,
        [e.target.name]: e.target.value
    }));
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
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
      </Form>
    </PageLayout>
  );
}