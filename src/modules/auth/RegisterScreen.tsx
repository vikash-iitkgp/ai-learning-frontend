import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.replace("Onboarding");
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <View style={{ padding: 30, flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Create Account</Text>

      <TextInput
        placeholder="Email"
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        secureTextEntry
        placeholder="Password"
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Register" onPress={register} />
      <Button title="Back to Login" onPress={() => navigation.goBack()} />
    </View>
  );
}
