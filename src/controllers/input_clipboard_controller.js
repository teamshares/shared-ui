import { Controller } from "stimulus";

export default class extends Controller {
  copy (event) {

    const clipboardCopyEl = this.element;
    clipboardCopyEl.classList.add("clicked");

    setTimeout(() => {
      clipboardCopyEl.classList.remove("clicked");
    }, 5000);
  }
}
