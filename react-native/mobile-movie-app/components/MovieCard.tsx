import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[29%]">
        <Image
          source={{ uri: "https://image.tmdb.org/t/p/w500/" + poster_path }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold">{title}</Text>
        <View className="flex-row justify-between">
          <View className="flex-row items-center gap-1">
            <Image source={icons.star} className="w-4 h-4" />
            <Text className="text-white text-xs">
              {Math.round(vote_average) / 2}
            </Text>
          </View>
          <Text className="text-white text-xs">
            {release_date.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
