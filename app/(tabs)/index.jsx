import { FlatList, Text, View } from "react-native";
import { spotData } from "@/seeders/spotData.js";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 bg-black p-5">
      <FlatList
        data={spotData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{
          paddingTop: 20,
          gap: 16,
          alignItems: "center",
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
          <Link href={`/details/${item.id}`}>
            <View className="bg-beige border-beige-dark border-2 w-44 h-full flex-1 rounded-lg overflow-hidden">
              <Image source={{ uri: item.image }} style={{ width: 160, height: 150 }} />
              <View className="p-2">
                <Text className="text-green text-lg font-semibold mb-2">{item.name}</Text>
                <Text className="text-green-dark text-xs">{item.address}</Text>
              </View>
            </View>
          </Link>
        )}
      />
    </View>
  );
}
