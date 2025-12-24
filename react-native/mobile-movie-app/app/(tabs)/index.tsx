import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { SearchBar } from "./search";
const Index = () => {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: moviesRefetch,
    reset: moviesReset,
  } = useFetch(() => fetchMovies({ query: "" }));


  return (
    <>
      <View className="flex-1 bg-primary">
        <Image source={images.bg} className="absolute w-full z-0" />
        {/* <Text className='text-white text-2xl font-bold'>Home</Text> */}

        <ScrollView
          className="flex-1 px-2"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        >
          <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

          {moviesLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : moviesError ? (
            <Text className="text-white text-2xl font-bold">Error</Text>
          ) : (
            <View>
              <SearchBar
                onPress={() => router.push("/search")}
                placeholder="Search for a movie"
                onChangeText={() => {}}
              />
              <>
               <Text className="text-white text-lg font-bold mt-5 mb-3">Latest Movies</Text>
               <FlatList
                data={movies}
                renderItem={({ item }) => (
                  <MovieCard {...item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{ 
                  justifyContent: "flex-start",
                  gap:20,
                  paddingRight: 1,
                  marginBottom: 5,
                  flexWrap: "wrap",
                 }}
                contentContainerStyle={{  }}
                scrollEnabled={false}
              />
              </>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Index;
