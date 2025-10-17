import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { spotData } from "@/seeders/spotData";
import { Image } from "expo-image";

export default function SpotDetail() {
  const { id } = useLocalSearchParams();

  const spotDetail = spotData.find((s) => s.id === id);

  return (
    <View className="flex flex-1 justify-center items-center p-5">
      <Text className="text-white text-3xl mb-5">{spotDetail.name}</Text>
      <Image source={{ uri: spotDetail.image }} style={{ width: 300, height: 300 }} />
      <Text className="text-white mt-3">{spotDetail.address}</Text>

      <View className="w-full px-5 gap-3 mt-3">
        <View className="bg-black-light p-3 rounded-lg">
          <Text className="text-beige font-semibold mb-1">Clima</Text>
          <Text className="text-white">{spotDetail.weather}</Text>
        </View>

        <View className="bg-black-light p-3 rounded-lg">
          <Text className="text-beige font-semibold mb-1">Actividades</Text>
          <Text className="text-white">{spotDetail.activities}</Text>
        </View>

        <View className="bg-black-light p-3 rounded-lg">
          <Text className="text-beige font-semibold mb-1">Precio aproximado de alojamiento</Text>
          <Text className="text-white text-xl font-bold">${spotDetail.accommodationPrice}</Text>
        </View>
      </View>

      <Link href={spotDetail.location} asChild>
        <Pressable className="bg-secondary p-3 rounded-xl items-center">
          <Text className="text-white bg-orange rounded-full p-3">Ver en Maps</Text>
        </Pressable>
      </Link>
    </View>
  );
}
