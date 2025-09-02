import { View, Text, Image, TouchableOpacity } from "react-native";

interface MovieCardProps {
  id: number;
  title: string;
  poster_url: string;
  genre: string;
  rating: number;
  description: string;
  ratingColor?: string;
}

const MovieCard = ({
  id,
  title,
  poster_url,
  genre,
  rating,
  description,
  ratingColor = "#02F3E9",
}: MovieCardProps) => {
  return (
    <TouchableOpacity className="w-[100px] mb-2 mr-2">
      <View className="rounded-lg overflow-hidden bg-purple-dark">
        <Image
          source={{ uri: poster_url }}
          className="w-full h-[140px]"
          resizeMode="cover"
        />
        <View className="p-2">
          <Text className="text-text-light font-bold text-xs" numberOfLines={2}>
            {title}
          </Text>
          <Text className="text-accent text-[10px] mt-1">{genre}</Text>
          <Text
            className="text-[10px] mt-1 font-bold"
            style={{ color: ratingColor }}
          >
            ⭐ {rating}
          </Text>
          <Text className="text-gray-500 text-[10px] mt-1" numberOfLines={3}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;