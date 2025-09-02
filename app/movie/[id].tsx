import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { movies } from "@/data/movies";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MovieDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie)
    return (
      <SafeAreaView className="bg-primary flex-1 justify-center items-center">
        <Text className="text-accent text-lg font-bold">Movie not found</Text>
      </SafeAreaView>
    );

  const handleSave = async () => {
    let saved = await AsyncStorage.getItem("saved_movies");
    let savedMovies = saved ? JSON.parse(saved) : [];

    if (savedMovies.find((m: any) => m.id === movie.id)) {
      savedMovies = savedMovies.filter((m: any) => m.id !== movie.id);
    } else {
      savedMovies.push(movie);
    }

    await AsyncStorage.setItem("saved_movies", JSON.stringify(savedMovies));
  };

  const handleTrailer = () => {
    if (movie.trailer_url) {
      Linking.openURL(movie.trailer_url);
    } else {
      alert("Trailer not available");
    }
  };

return (
  <SafeAreaView className="flex-1 bg-primary">
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 160 }}
    >
      {/* Poster */}
      <Image
        source={{ uri: movie.poster_url }}
        className="w-full h-[500px] rounded-xl"
        resizeMode="cover"
      />

      {/* Info */}
      <View className="px-5 mt-6">
        <Text className="text-accent text-2xl font-bold">{movie.title}</Text>

        {/* Genre, Rating & Year */}
        <View className="flex-row items-center gap-3 mt-2">
          <View className="bg-gray-200 px-3 py-1 rounded-full">
            <Text className="text-black text-sm">{movie.genre}</Text>
          </View>
          <View className="bg-purple-dark px-3 py-1 rounded-full flex-row items-center gap-1">
            <Text className="text-accent text-sm font-bold">{movie.rating}</Text>
            <Text className="text-yellow-400 text-sm">★</Text>
          </View>
          <View className="bg-gray-200 px-3 py-1 rounded-full">
            <Text className="text-black text-sm">{movie.year}</Text>
          </View>
        </View>

        {/* Description */}
        <Text className="text-white text-base mt-4 leading-6">
          {movie.description}
        </Text>
      </View>
    </ScrollView>

    {/* Bottom Buttons */}
    <View className="flex-row justify-between px-5 gap-3 py-3 bg-primary">
      <TouchableOpacity
        className="flex-1 bg-accent rounded-xl py-3.5 items-center"
        onPress={handleSave}
      >
        <Text className="text-white font-bold text-base">Save</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 bg-purple-dark rounded-xl py-3.5 items-center"
        onPress={handleTrailer}
      >
        <Text className="text-white font-bold text-base">Watch Trailer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 bg-gray-600 rounded-xl py-3.5 items-center"
        onPress={router.back}
      >
        <Text className="text-white font-bold text-base">Go Back</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

};

export default MovieDetails;