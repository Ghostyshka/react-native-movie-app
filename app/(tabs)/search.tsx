import { useState } from "react";
import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import MovieDisplayCard from "@/components/MovieCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
      <FlatList
        className="px-5"
        data={movies}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => <MovieDisplayCard {...item} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
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
            <View className="my-5">
              <SearchBar
                placeholder="Search for a movie"
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#02F3E9"
                className="my-3"
              />
            )}
            {!loading &&
              searchQuery.trim() &&
              movies.length > 0 && (
                <Text className="text-xl text-accent font-bold">
                  Search Results for{" "}
                  <Text className="text-accent">{searchQuery}</Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !loading ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery.trim()
                  ? "No movies found"
                  : "Start typing to search for movies"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
