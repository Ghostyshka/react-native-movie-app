import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));
      setLoading(false);
    };
    checkUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
    setName("");
    setEmail("");
    setPassword("");
    Alert.alert("Logged out", "You have been logged out.");
  };

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setRegistering(true);
    setTimeout(async () => {
      const newUser = { name, email };
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      setRegistering(false);
      Alert.alert("Success", "You are now registered!");
    }, 1000);
  };

  if (loading) return (
    <SafeAreaView className="bg-primary flex-1 justify-center items-center">
      <ActivityIndicator color="#fff" size="large" />
    </SafeAreaView>
  );

  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-16" tintColor="#fff" />
        {user ? (
          <>
            <Text className="text-white text-xl font-bold">{user.name}</Text>
            <Text className="text-gray-400">{user.email}</Text>
            <TouchableOpacity
              className="bg-red-500 px-4 py-2 rounded mt-4"
              onPress={handleLogout}
            >
              <Text className="text-white">Logout</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
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
              disabled={registering}
            >
              {registering ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white text-center font-bold text-base">
                  Register
                </Text>
              )}
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;