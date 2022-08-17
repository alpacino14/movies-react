import { useEffect, useState } from "react";

// Hook
export function useDebounce(value, delay) {
  // Estado y setters para valor rebotado
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancele el tiempo de espera si cambia el valor (también en cambio de retraso o desmontaje)
      // Así es como evitamos que el valor rebotado se actualice si se cambia el valor ...
      // .. dentro del plazo de demora. El tiempo de espera se borra y se reinicia.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Solo efecto de recuperación si cambia el valor o el retardo
  );
  return debouncedValue;
}
