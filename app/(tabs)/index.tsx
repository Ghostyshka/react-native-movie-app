import { View, Text, Image, ScrollView, FlatList } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { movies } from "@/data/movies";
import MovieCard from "@/components/MovieCard";

const popularMovies = movies.filter((m) => m.rating >= 8.5);

const Index = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="w-full flex-row justify-center mt-20 items-center">
          <Image
            source={icons.logo}
            style={{ width: 64, height: 64, resizeMode: "contain" }}
          />
        </View>
        <View
          className="w-full my-8"
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#02F3E9",
            opacity: 0.7,
          }}
        />

        {/* Popular Movies */}
        <View className="mb-8">
          <Text className="text-accent text-lg font-bold mb-3">
            Popular Movies
          </Text>
          <View className="bg-purple-dark rounded-xl py-4 px-2">
            <FlatList
              data={popularMovies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <MovieCard
                  id={item.id}
                  title={item.title}
                  poster_url={item.poster_url}
                  genre={item.genre}
                  rating={item.rating}
                  description={item.description}
                  ratingColor="#02F3E9"
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 12, paddingHorizontal: 2 }}
            />
          </View>
        </View>

        <Text className="text-light-200 text-lg font-bold mb-4">
          All Movies
        </Text>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard
              id={item.id}
              title={item.title}
              poster_url={item.poster_url}
              genre={item.genre}
              rating={item.rating}
              description={item.description}
              ratingColor="#02F3E9"
            />
          )}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 16,
            marginBottom: 16,
          }}
          contentContainerStyle={{ paddingBottom: 40 }}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default Index;