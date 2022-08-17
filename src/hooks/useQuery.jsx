import { useLocation } from "react-router-dom";

//creamos un hook personalizado
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
