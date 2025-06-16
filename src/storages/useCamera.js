// src/hooks/useCamera.js
import { useState, useRef, useEffect } from "react";

export const useCamera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const cameraRef = useRef(null);

  const [capturedMedia, setCapturedMedia] = useState(null);
  const [permissionChecked, setPermissionChecked] = useState(true);
  const [cameraActive, setCameraActive] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [holdTime, setHoldTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [cameraMode, setCameraMode] = useState("user");

  // Khởi tạo giá trị từ localStorage nếu có
  const initialCameraHD = localStorage.getItem("iscameraHD") === "true";

  const [iscameraHD, setIsCameraHD] = useState(initialCameraHD);

  // Tự động lưu vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem("iscameraHD", iscameraHD);
  }, [iscameraHD]);

  const IMAGE_SIZE_PX = iscameraHD ? 1440 : 720;
  const VIDEO_RESOLUTION_PX = iscameraHD ? 1080 : 720;
  const MAX_RECORD_TIME = 10;

  return {
    videoRef,
    streamRef,
    cameraRef,
    canvasRef,
    capturedMedia,
    setCapturedMedia,
    permissionChecked,
    setPermissionChecked,
    holdTime,
    setHoldTime,
    rotation,
    setRotation,
    isHolding,
    setIsHolding,
    loading,
    setLoading,
    countdown,
    setCountdown,
    cameraActive,
    setCameraActive,
    cameraMode,
    setCameraMode,
    iscameraHD,
    setIsCameraHD,
    IMAGE_SIZE_PX,
    VIDEO_RESOLUTION_PX,
    MAX_RECORD_TIME,
  };
};
