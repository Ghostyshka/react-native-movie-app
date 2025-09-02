import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
  }, []);

  const handleLogout = () => {
    setUser(null);
    Alert.alert("Logged out", "You have been logged out.");
    router.replace("/register");
  };

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
          <TouchableOpacity
            className="bg-accent px-8 py-3 rounded mt-4 w-full"
            onPress={() => router.replace("/register")}
          >
            <Text className="text-white text-center font-bold text-base">Go to Register</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;