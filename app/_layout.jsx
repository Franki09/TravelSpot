import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#10B981",
            },
            headerTintColor: "#121212",

            contentStyle: {
              backgroundColor: "#121212",
            },
          }}
          initialRouteName="(tabs)"
        >
          <Stack.Screen
            name="details/[id]"
            options={{
              headerShown: true,
              title: "Detalles del lugar",
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
