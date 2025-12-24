import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
} from "react-native";

interface SearchBarProps {
  onPress: () => void;
  placeholder: string;
  onChangeText: (text: string) => void;
}

export function SearchBar({
  onPress,
  placeholder,
  onChangeText,
}: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full p-2">
      <Image
        source={icons.search}
        className="size-5 ml-2"
        resizeMode="contain"
        tintColor="white"
      />
      <TextInput
        onPress={onPress}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
}

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Search = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: moviesRefetch,
    reset: moviesReset,
  } = useFetch(() => fetchMovies({ query: debouncedSearch }), false);

  useEffect(() => {
    moviesRefetch();
  }, [debouncedSearch]);

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <View className="flex-1 px-2">
        <FlatList
          data={movies as Movie[]}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          ListHeaderComponent={
            <>
              <View className="w-full flex-row justify-center mt-20 items-center">
                <Image source={icons.logo} className="w-12 h-10" />
              </View>

              <View className="my-5">
                <SearchBar
                  onPress={() => {}}
                  placeholder="Search for a movie"
                  onChangeText={handleSearch}
                />
              </View>

              {moviesLoading && (
                <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  className="my-3"
                />
              )}

              {moviesError && (
                <Text className="text-red-500 px-5 my-3">
                  Error: {moviesError?.message}
                </Text>
              )}

              {!moviesLoading &&
                !moviesError &&
                search.trim() &&
                movies?.length! > 0 && (
                  <Text className="text-xl text-white font-bold -my-1 mb-3">
                    Search Results for{" "}
                    <Text className="text-accent">{search}</Text>
                  </Text>
                )}
            </>
          }
        />
      </View>
    </View>
  );
};

export default Search;
