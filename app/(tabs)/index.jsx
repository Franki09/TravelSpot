import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { spotData } from "@/seeders/spotData.js";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useFavorites } from "@/context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const { favorites, toggleFavorite } = useFavorites();

  // Función para verificar si un lugar está en favoritos
  const isFavorite = (placeId) => {
    return favorites.some((fav) => fav.id === placeId);
  };

  return (
    <View className="flex-1 bg-black p-5">
      <FlatList
        data={spotData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12, justifyContent: "space-between" }}
        contentContainerStyle={{
          paddingTop: 20,
          gap: 12,
        }}
        ListHeaderComponent={() => (
          <View className="mb-6">
            <Text className="text-2xl font-semibold text-orange mb-2 text-center">Bienvenido a TravelSpot 🌎</Text>
            <Text className="text-beige-light text-center">
              En TravelSpot podrás descubrir destinos turísticos increíbles con toda la información que necesitas: ubicación,
              clima, precios de hospedaje y mucho más. ¿Encontraste tu próximo destino? ¿O tal vez uno que ya visitaste y te
              encantó? Guárdalo en favoritos para planificar tu viaje más tarde.
            </Text>
          </View>
        )}
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
