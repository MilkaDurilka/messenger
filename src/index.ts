import "./components";
import template from "./index.hbs";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("root");

  app.innerHTML = template({ text: "Test 123" });
});
