import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesContext = createContext();
const FAVORITES_KEY = "favorites";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // 1️⃣ Se ejecuta al montar la app → carga favoritos guardados
  useEffect(() => {
    getFavorites();
  }, []);

  // 2️⃣ Leer del AsyncStorage y guardar en el estado
  const getFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem(FAVORITES_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      setFavorites(parsed);
      return parsed;
    } catch (error) {
      console.log("Error al obtener favoritos:", error);
      return [];
    }
  };

  // 3️⃣ Agregar o quitar un favorito
  const toggleFavorite = async (place) => {
    try {
      const exists = favorites.some((fav) => fav.id === place.id);
      let updated;

      if (exists) {
        updated = favorites.filter((fav) => fav.id !== place.id);
      } else {
        updated = [...favorites, place];
      }

      setFavorites(updated);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    } catch (error) {
      console.log("Error al actualizar favoritos:", error);
    }
  };

  return <FavoritesContext.Provider value={{ favorites, getFavorites, toggleFavorite }}>{children}</FavoritesContext.Provider>;
}

// 6️⃣ Hook personalizado
export const useFavorites = () => useContext(FavoritesContext);
