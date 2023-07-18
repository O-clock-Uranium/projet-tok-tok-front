import {
  defaultTheme_default,
  identifier_default,
  init_defaultTheme,
  init_identifier
} from "./chunk-BWDLWB2H.js";
import {
  GlobalStyles_default,
  init_esm2 as init_esm,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-K7TKDPQC.js";
import {
  _extends,
  init_extends
} from "./chunk-JKJ2AEBI.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_esm();
init_defaultTheme();
init_identifier();
var import_jsx_runtime = __toESM(require_jsx_runtime());
function GlobalStyles(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles_default, _extends({}, props, {
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  }));
}
true ? GlobalStyles.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.bool])
} : void 0;
var GlobalStyles_default2 = GlobalStyles;

export {
  GlobalStyles_default2 as GlobalStyles_default
};
//# sourceMappingURL=chunk-4MZ3LQV3.js.map
