import { useSelector } from "react-redux";
import { AuthState } from "./reducer";

export const useAuth = () => useSelector((store: { auth: AuthState }) => store.auth)