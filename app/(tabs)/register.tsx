import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Register = ({ onRegister }: { onRegister?: (user: any) => void }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onRegister?.({ name, email });
      router.replace("/profile");
    }, 1000);
  };

  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={require("@/assets/icons/logo.png")} className="size-16" />
        <Text className="text-accent text-2xl font-bold mb-2">Register</Text>
        <View className="w-full gap-4">
          <TextInput
            className="bg-purple-dark/80 text-text-light rounded px-4 py-3 mb-2"
            placeholder="Name"
            placeholderTextColor="#a1a1aa"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <TextInput
            className="bg-purple-dark/80 text-text-light rounded px-4 py-3 mb-2"
            placeholder="Email"
            placeholderTextColor="#a1a1aa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            className="bg-purple-dark/80 text-text-light rounded px-4 py-3 mb-2"
            placeholder="Password"
            placeholderTextColor="#a1a1aa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          className="bg-accent px-8 py-3 rounded mt-4 w-full"
          onPress={handleRegister}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-primary text-center font-bold text-base">Register</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;