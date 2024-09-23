import axios from "axios";
import { API_BASE_URL } from "./constant";

// 기본 axios 인스턴스 생성
export const instance = axios.create({
  baseURL: API_BASE_URL,
});

// 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    // 클라이언트 환경에서만 localStorage 접근
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
