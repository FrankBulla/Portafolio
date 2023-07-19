import { valida } from "./validacion";

const inputs = document.querySelectorAll(".contacto__input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});