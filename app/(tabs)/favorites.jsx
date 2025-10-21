import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "@/context/FavoritesContext";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  // Función para verificar si un lugar está en favoritos
  const isFavorite = (placeId) => {
    return favorites.some((fav) => fav.id === placeId);
  };

  if (favorites.length === 0) {
    return (
      <View className="flex-1 justify-center bg-black p-5">
        <Text className="text-beige-light text-xl text-center">No tienes favoritos. {"\n"} ¡Explora y agrega algunos!</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black p-5">
      <FlatList
        data={favorites}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12, justifyContent: "space-between" }}
        contentContainerStyle={{
          paddingTop: 20,
          gap: 12,
        }}
        renderItem={({ item }) => (
          <View className="bg-beige border-beige-dark border-2 w-44 h-full flex-1 rounded-lg overflow-hidden">
            <Link href={`/details/${item.id}`}>
              <View className="relative w-full">
                <Image source={{ uri: item.image }} style={{ width: "100%", height: 150 }} contentFit="cover" />

                {/* Botón de favorito en la esquina superior derecha */}
                <TouchableOpacity
                  onPress={(e) => {
                    e.preventDefault();
                    toggleFavorite(item);
                  }}
                  className="absolute top-1 right-1 bg-black/50 rounded-full p-2"
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={isFavorite(item.id) ? "heart" : "heart-outline"}
                    size={24}
                    color={isFavorite(item.id) ? "#FF6B6B" : "#F3EED9"}
                  />
                </TouchableOpacity>
              </View>

              <View className="p-2">
                <Text className="text-green text-lg font-semibold mb-2">{item.name}</Text>
                <Text className="text-green-dark text-xs">{item.address}</Text>
                <Text className="text-orange/60 text-xs mt-4">Toca para mas detalles</Text>
              </View>
            </Link>
          </View>
        )}
      />
    </View>
  );
}
