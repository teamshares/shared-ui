import { babel } from "@rollup/plugin-babel";
import pkg from "./package.json";


const plugins = [
  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**"
  })
];

const external = ["stimulus"];

export default [
  {
    input: "src/application.js",
    external,
    plugins,
    output: {
      globals: { stimulus: "Stimulus" },
      file: pkg.main,
      format: "umd",
      name: "TeamsharesUI"
    }
  },
  {
    input: "src/application.js",
    plugins,
    external,
    output: {
      file: pkg.module,
      format: "es",
    },
  }
];
