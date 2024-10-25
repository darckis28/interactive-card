import { cardNumber } from "./index.astro.0.mts";

cardNumber?.addEventListener("input", (e) => {
  const value = e.target.value;
  const formattedValue = value.replace(/\D/g, "").replace(/(\d{4})/g, "$1 ");
  e.target.value = formattedValue;
});
