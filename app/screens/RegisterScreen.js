import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(10).label("Password"),
});

function RegisterScreen(props) {
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await usersApi.register(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
  };
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={true}
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
});

export default RegisterScreen;
