import { useState, useEffect } from "react";
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import MovieCard from "@/components/MovieCard";
import { getSavedMovies } from "@/lib/storage";

const Save = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getSavedMovies();
      setMovies(data);
      setLoading(false);
    };
    loadMovies();
  }, []);

  return (
    <SafeAreaView className="bg-primary flex-1 px-5">
      <View className="flex justify-start items-center flex-col mt-10">
        <Image source={icons.save} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base mt-2">Saved Movies</Text>
      </View>
      {loading ? (
        <ActivityIndicator color="#fff" className="mt-10" />
      ) : movies.length === 0 ? (
        <Text className="text-gray-500 text-center mt-10">No saved movies</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 16,
            marginVertical: 16,
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Save;
