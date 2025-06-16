// src/context/AppContext.jsx
import React, { createContext, useContext } from "react";
import { useNavigation } from "../storages/useNavigation";
import { useCamera } from "../storages/useCamera";
import { useLoading } from "../storages/useLoading";
import { usePost } from "../storages/usePost";
import { useThemes } from "../storages/useThemes";
import { ModalState } from "../storages/ModalState";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Sử dụng custom hooks
  const navigation = useNavigation();
  const camera = useCamera();
  const useloading = useLoading();
  const post = usePost();
  const captiontheme = useThemes();
  const modal = ModalState();

  return (
    <AppContext.Provider
      value={{
        navigation,
        camera,
        useloading,
        post,
        captiontheme,
        modal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
