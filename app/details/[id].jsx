import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { spotData } from "@/seeders/spotData";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export default function SpotDetail() {
  const { id } = useLocalSearchParams();

  const spotDetail = spotData.find((s) => s.id === id);

  if (!spotDetail) {
    return (
      <View className="flex flex-1 justify-center items-center p-5">
        <Text className="text-beige-light text-xl">Cargando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-orange font-bold text-3xl mb-5 text-center">{spotDetail.name}</Text>
        <Image source={{ uri: spotDetail.image }} style={{ width: 300, height: 300, borderRadius: 12, alignSelf: "center" }} />
        <Text className="text-orange-light mt-3 text-center">{spotDetail.address}</Text>

        <View className="w-full gap-3 my-6">
          <View className="bg-beige p-3 rounded-lg">
            <Text className="text-green text-lg font-semibold mb-1">Clima</Text>
            <Text className="text-green-dark">{spotDetail.weather}</Text>
          </View>

          <View className="bg-beige p-3 rounded-lg">
            <Text className="text-green text-lg font-semibold mb-1">Actividades</Text>
            <Text className="text-green-dark">{spotDetail.activities}</Text>
          </View>

          <View className="bg-beige p-3 rounded-lg">
            <Text className="text-green text-lg font-semibold mb-1">Precio aproximado de alojamiento</Text>
            <Text className="text-green-dark text-xl font-bold">${spotDetail.accommodationPrice}</Text>
          </View>
        </View>

        <Link href={spotDetail.location} asChild>
          <Pressable className="bg-orange p-4 rounded-xl items-center my-5">
            <Text className="text-green-dark text-xl font-semibold">Ver en Google Maps</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
