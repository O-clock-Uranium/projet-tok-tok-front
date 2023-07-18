import {
  Paper_default
} from "./chunk-B77XEX4T.js";
import {
  init_base
} from "./chunk-4UDJUPTR.js";
import {
  init_styled,
  styled_default
} from "./chunk-Y6A4EXA2.js";
import {
  init_generateUtilityClass,
  init_useThemeProps,
  useThemeProps
} from "./chunk-BWDLWB2H.js";
import {
  chainPropTypes,
  clsx_m_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx_m,
  init_esm,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-K7TKDPQC.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  init_extends,
  init_objectWithoutPropertiesLoose
} from "./chunk-JKJ2AEBI.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/material/Card/Card.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
init_esm();
init_base();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/Card/cardClasses.js
init_esm();
init_generateUtilityClass();
function getCardUtilityClass(slot) {
  return generateUtilityClass("MuiCard", slot);
}
var cardClasses = generateUtilityClasses("MuiCard", ["root"]);
var cardClasses_default = cardClasses;

// node_modules/@mui/material/Card/Card.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "raised"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardUtilityClass, classes);
};
var CardRoot = styled_default(Paper_default, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    overflow: "hidden"
  };
});
var Card = React.forwardRef(function Card2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCard"
  });
  const {
    className,
    raised = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    raised
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(CardRoot, _extends({
    className: clsx_m_default(classes.root, className),
    elevation: raised ? 8 : void 0,
    ref,
    ownerState
  }, other));
});
true ? Card.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: chainPropTypes(import_prop_types.default.bool, (props) => {
    if (props.raised && props.variant === "outlined") {
      return new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.');
    }
    return null;
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Card_default = Card;

export {
  getCardUtilityClass,
  cardClasses_default,
  Card_default
};
//# sourceMappingURL=chunk-332TBCIQ.js.map
