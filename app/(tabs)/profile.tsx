import { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { icons } from "@/constants/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
  };

  if (loading) return (
    <SafeAreaView className="bg-primary flex-1 justify-center items-center">
      <ActivityIndicator color="#fff" size="large" />
    </SafeAreaView>
  );

  if (!user) {
    return (
      <SafeAreaView className="bg-primary flex-1 justify-center items-center">
        <TouchableOpacity
          className="bg-accent px-6 py-3 rounded"
          onPress={() => router.push("/login")}
        >
          <Text className="text-white font-bold">Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="flex-row items-center gap-4 mb-6">
          <Image source={icons.person} className="size-16" tintColor="#fff" />
          <View>
            <Text className="text-white text-xl font-bold">{user.name}</Text>
            <Text className="text-gray-400">{user.email}</Text>
          </View>
          <TouchableOpacity
            className="ml-auto bg-red-500 px-4 py-2 rounded"
            onPress={handleLogout}
          >
            <Text className="text-white">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;