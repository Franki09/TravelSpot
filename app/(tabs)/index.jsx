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
            <Text className="text-xl text-white mb-2 text-center">Bienvenido a TravelSpot 🌎</Text>
            <Text className="text-white text-center">
              En TravelSpot podrás descubrir destinos turísticos increíbles con toda la información que necesitas: ubicación,
              clima, precios de hospedaje y mucho más. ¿Encontraste tu próximo destino? ¿O tal vez uno que ya visitaste y te
              encantó? Guárdalo en favoritos para planificar tu viaje más tarde.
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <Link href={`../details/${item.id}`}>
            <View className="bg-red-500 w-40 h-full flex-1 rounded-lg overflow-hidden">
              <Image source={{ uri: item.image }} style={{ width: 160, height: 150 }} />
              <View className="p-2">
                <Text className="text-white font-semibold">{item.name}</Text>
                <Text className="text-white text-xs">{item.address}</Text>
              </View>
            </View>
          </Link>
        )}
      />
    </View>
  );
}
