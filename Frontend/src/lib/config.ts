const viteUrl = (import.meta as any).env?.VITE_API_URL;
const craUrl = (import.meta as any).env?.REACT_APP_API_URL;

export const API_URL: string = viteUrl || craUrl || "http://localhost:5000";
