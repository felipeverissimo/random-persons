export default class loaderTest {
  constructor() {
    this.loaderValidation = this.loaderValidation;
  }

  loaderValidation() {
    const loader = document.querySelector(".loader");
    const spinner = document.querySelector(".loader i");
    const body = document.querySelector("body");

    if (body.style.overflow === "hidden") {
      console.log(
        "%c✓ body is locked",
        "padding: 0 15px;background: #000; color: #bada55"
      );
    } else {
      console.log(
        "%c✗ body is not locked",
        "padding: 0 15px;background: #000; color: red"
      );
    }

    if (loader.style.right === "0px") {
      console.log(
        "%c✓ loader in position",
        "padding: 0 15px;background: #000; color: #bada55"
      );
    } else {
      console.log(
        "%c✗ loader is not in position",
        "padding: 0 15px;background: #000; color: red"
      );
    }

    if (spinner.style.left === "50%") {
      console.log(
        "%c✓ spiner in position",
        "padding: 0 15px;background: #000; color: #bada55"
      );
    } else {
      console.log(
        "%c✗ spiner is not in position",
        "padding: 0 15px;background: #000; color: red"
      );
    }

    if (loader.classList.contains("active")) {
      console.log(
        "%c✓ loader is active",
        "padding: 0 15px;background: #000; color: #bada55"
      );
    } else {
      console.log(
        "%c✗ loader is not in active",
        "padding: 0 15px;background: #000; color: red"
      );
    }

    setTimeout(function () {
      if (body.style.overflow === "scroll") {
        console.log(
          "%c✓ body is unlocked",
          "padding: 0 15px;background: #000; color: #bada55"
        );
      }

      if (loader.style.right === "100%") {
        console.log(
          "%c✓ loader in position",
          "padding: 0 15px;background: #000; color: #bada55"
        );
      }

      if (spinner.style.left === "-50%") {
        console.log(
          "%c✓ spiner in position",
          "padding: 0 15px;background: #000; color: #bada55"
        );
      }

      if (!loader.classList.contains("active")) {
        console.log(
          "%c✓ loader is desactivate",
          "padding: 0 15px;background: #000; color: #bada55"
        );
      }
    }, 2000);
  }
}
