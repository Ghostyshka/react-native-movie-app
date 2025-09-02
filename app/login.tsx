import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const user = { name, email };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    router.replace("/(tabs)/profile");
  };

  return (
    <View className="flex-1 justify-center items-center bg-primary px-5">
      <Text className="text-white text-2xl mb-5">Login</Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor="#A8B5DB"
        value={name}
        onChangeText={setName}
        className="bg-dark-200 text-white px-4 py-3 rounded w-full mb-4"
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#A8B5DB"
        value={email}
        onChangeText={setEmail}
        className="bg-dark-200 text-white px-4 py-3 rounded w-full mb-6"
      />
      <TouchableOpacity className="bg-accent px-6 py-3 rounded" onPress={handleLogin}>
        <Text className="text-white font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
