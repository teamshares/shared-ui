import { Controller } from "stimulus";
const Inputmask = require("inputmask").default;

export default class extends Controller {
  connect () {
    Inputmask(this.data.get("pattern")).mask(this.element);
  }
}
