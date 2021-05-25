import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "cta"];

  select (event) {
    this.inputTarget.select();
  }

  copy (event) {
    if (!this.data.has("allowDefault")) {
      event.preventDefault();
    }
    // document.execCommand("copy");
    this.ctaTarget.textContent = "Copied"

    setTimeout(() => {
      this.ctaTarget.textContent = "Copy";
    }, 5000);
  }
}
