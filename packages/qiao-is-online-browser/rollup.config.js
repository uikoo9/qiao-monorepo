/**
 * rollup.config.js
 */
export default {
  input: "src/index.js",
  output: {
    file: "index.js",
    format: "cjs",
  },
  external: ["offline-to-online"],
};
