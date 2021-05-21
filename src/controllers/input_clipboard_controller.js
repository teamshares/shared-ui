import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "cta"];

  select (event) {
    this.inputTarget.select();
  }

  copy (event) {
    this.select();
    document.execCommand("copy");
    this.ctaTarget.textContent = "Copied!";

    setTimeout(() => {
      this.ctaTarget.textContent = "Copy";
    }, 5000);
  }
}
