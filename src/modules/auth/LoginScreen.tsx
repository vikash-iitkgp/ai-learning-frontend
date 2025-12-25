import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Onboarding");
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <View style={{ padding: 30, flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Login</Text>

      <TextInput
        placeholder="Email"
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={login} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}
