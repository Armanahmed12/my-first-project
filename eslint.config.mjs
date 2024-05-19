import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    
    languageOptions: { globals: globals.browser },
    
    extends : ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],

    ignores: ["**/node_modules/", ".dist/"],
     rules : {

         "no-unused-vars" : "error",
         "no-undef" : "error",
         "prefer-const" : "error",
         "no-console" : "warn"
     }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];