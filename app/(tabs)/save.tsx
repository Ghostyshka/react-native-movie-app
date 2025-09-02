import { useState } from "react";
import { icons } from "@/constants/icons";
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "@/components/MovieCard";

const Save = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Saved Movies</Text>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : movies.length === 0 ? (
          <Text className="text-gray-500 mt-5">No saved movies</Text>
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <MovieCard
                id={item.movie_id}
                title={item.title}
                poster_path={item.poster_url}
                adult={item.adult}
                backdrop_path={item.backdrop_path}
                genre_ids={item.genre_ids}
                original_language={item.original_language}
                original_title={item.original_title}
                overview={item.overview}
                popularity={item.popularity}
                release_date={item.release_date}
                video={item.video}
                vote_average={item.vote_average}
                vote_count={item.vote_count}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 16,
              marginVertical: 16,
            }}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Save;