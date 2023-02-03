tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        yellowGreen: {
          100: "black",
          200: "white",
        },
      },

      scale: {
        175: "1.75",
      },
    },
  },
};

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  // const getbgColor = localStorage.getItem("bg") || "white";
  // console.log(getbgColor);
  // const valueForWhite = getbgColor === "white" ? "black" : "white";
  // const valueForBlack = getbgColor === "white" ? "white" : "black";

  // document.documentElement.style.setProperty("--white", valueForWhite);
  // document.documentElement.style.setProperty("--black", valueForBlack);

  // localStorage.setItem("bg", getbgColor === "black" ? "white" : "black");

  document.getElementsByTagName("html")[0].classList.toggle("dark");
});
