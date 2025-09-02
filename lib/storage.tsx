import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveMovie = async (movie: any) => {
  try {
    const saved = await AsyncStorage.getItem("saved_movies");
    const parsed = saved ? JSON.parse(saved) : [];
    if (!parsed.find((m: any) => m.id === movie.id)) {
      const updated = [...parsed, movie];
      await AsyncStorage.setItem("saved_movies", JSON.stringify(updated));
    }
  } catch (e) {
    console.log("Error saving movie", e);
  }
};

export const getSavedMovies = async () => {
  try {
    const saved = await AsyncStorage.getItem("saved_movies");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.log("Error getting movies", e);
    return [];
  }
};

export const clearSavedMovies = async () => {
  await AsyncStorage.removeItem("saved_movies");
};