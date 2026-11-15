import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
  { ignores: ["dist/**", "node_modules/**"] },
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // Existing single-word component names (Header, Footer, Logo, ...) are kept as-is
      "vue/multi-word-component-names": "off",
      "vue/no-reserved-component-names": "off"
    }
  }
];
