import { ScrollView, Text } from "react-native";

export default function About() {
  return (
    <ScrollView className="flex-1 bg-black px-6 py-8">
      <Text className="text-3xl font-bold text-green mb-4">TravelSpot 🌍</Text>
      <Text className="text-beige-light text-base mb-6">
        Descubrí lugares únicos alrededor del mundo y guardá tus favoritos para volver cuando quieras.
      </Text>

      <Text className="text-xl font-semibold text-green mb-2">Sobre la app</Text>
      <Text className="text-beige-light mb-6">
        TravelSpot es una aplicación creada para explorar destinos turísticos de todo el mundo. Desde la pantalla principal podés
        descubrir lugares, ver fotos y leer descripciones breves. Además, podés marcar tus favoritos para tenerlos siempre a mano.
      </Text>

      <Text className="text-xl font-semibold text-green mb-2">Tecnologías utilizadas</Text>
      <Text className="text-beige-light mb-6">
        • React Native + Expo{"\n"}• Expo Router{"\n"}• NativeWind (TailwindCSS){"\n"}• AsyncStorage{"\n"}
      </Text>

      <Text className="text-xl font-semibold text-green mb-2">Objetivo del proyecto</Text>
      <Text className="text-beige-light mb-6">
        El objetivo principal de TravelSpot es practicar navegación, manejo de estado y diseño responsivo en React Native, creando
        una experiencia fluida sin backend.
      </Text>

      <Text className="text-xl font-semibold text-green mb-2">Sobre el desarrollador</Text>
      <Text className="text-beige-light">
        Desarrollada por <Text className="font-bold text-orange">Franco Gómez Rosell</Text>, apasionado por el desarrollo
        front-end y el diseño de interfaces intuitivas.
      </Text>
    </ScrollView>
  );
}
