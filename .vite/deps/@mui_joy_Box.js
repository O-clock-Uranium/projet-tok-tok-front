"use client";
import {
  defaultTheme_default,
  identifier_default
} from "./chunk-AALCROKH.js";
import {
  ClassNameGenerator_default,
  createBox,
  init_esm2 as init_esm,
  require_prop_types
} from "./chunk-K7TKDPQC.js";
import "./chunk-JKJ2AEBI.js";
import "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/joy/Box/Box.js
init_esm();
var import_prop_types = __toESM(require_prop_types());
var Box = createBox({
  themeId: identifier_default,
  defaultTheme: defaultTheme_default,
  defaultClassName: "MuiBox-root",
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Box_default = Box;
export {
  Box_default as default
};
//# sourceMappingURL=@mui_joy_Box.js.map
