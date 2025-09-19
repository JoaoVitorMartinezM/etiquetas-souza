import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // ⚠️ Qualidade de código
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
    },
  },
];
export default eslintConfig;
