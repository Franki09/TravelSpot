import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { spotData } from "@/seeders/spotData";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useFavorites } from "@/context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";

export default function SpotDetail() {
  const { id } = useLocalSearchParams();

  const { favorites, toggleFavorite } = useFavorites();

  // Función para verificar si un lugar está en favoritos
  const isFavorite = (placeId) => {
    return favorites.some((fav) => fav.id === placeId);
  };

  const spotDetail = spotData.find((s) => s.id === id);

  if (!spotDetail) {
    return (
      <View className="flex flex-1 justify-center items-center p-5">
        <Text className="text-beige-light text-xl">Cargando...</Text>
      </View>
    );
  }

  const isInFavorites = isFavorite(spotDetail.id);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-orange font-bold text-3xl mb-5 text-center">{spotDetail.name}</Text>
        <Image source={{ uri: spotDetail.image }} style={{ width: 300, height: 300, borderRadius: 12, alignSelf: "center" }} />
        <Text className="text-orange-light text-xl mt-3 text-center">{spotDetail.address}</Text>

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

        <View className="my-5">
          <Pressable
            onPress={() => toggleFavorite(spotDetail)}
            className={`${isInFavorites ? "bg-red-500" : "bg-green"} p-4 rounded-xl items-center flex-row justify-center gap-2`}
          >
            <Ionicons name={isInFavorites ? "heart" : "heart-outline"} size={24} color="white" />
            <Text className="text-white text-xl font-semibold">
              {isInFavorites ? "Quitar de favoritos" : "Agregar a favoritos"}
            </Text>
          </Pressable>

          <Link href={spotDetail.location} asChild>
            <Pressable className="bg-orange p-4 rounded-xl items-center mt-2">
              <Text className="text-green-dark text-xl font-semibold">Ver en Google Maps</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
