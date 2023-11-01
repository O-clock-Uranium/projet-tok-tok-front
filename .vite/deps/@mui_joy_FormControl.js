"use client";
import {
  FormControlContext_default
} from "./chunk-PPFYCUBR.js";
import {
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-QGMAB3IN.js";
import {
  generateUtilityClass,
  generateUtilityClasses
} from "./chunk-AALCROKH.js";
import {
  init_composeClasses
} from "./chunk-VNQKGEYY.js";
import {
  capitalize,
  clsx_m_default,
  composeClasses,
  init_clsx_m,
  init_esm,
  require_jsx_runtime,
  require_prop_types,
  useId
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

// node_modules/@mui/joy/FormControl/FormControl.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
init_esm();
init_composeClasses();

// node_modules/@mui/joy/FormControl/formControlClasses.js
function getFormControlUtilityClass(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses = generateUtilityClasses("MuiFormControl", ["root", "error", "disabled", "colorPrimary", "colorNeutral", "colorDanger", "colorInfo", "colorSuccess", "colorWarning", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
var formControlClasses_default = formControlClasses;

// node_modules/@mui/joy/Switch/switchClasses.js
var switchClasses = generateUtilityClasses("MuiSwitch", ["root", "checked", "disabled", "action", "input", "thumb", "track", "focusVisible", "readOnly", "colorPrimary", "colorDanger", "colorInfo", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid", "startDecorator", "endDecorator"]);
var switchClasses_default = switchClasses;

// node_modules/@mui/joy/FormControl/FormControl.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["id", "className", "component", "disabled", "required", "error", "color", "size", "orientation", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    disabled,
    error,
    size,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation, disabled && "disabled", error && "error", color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getFormControlUtilityClass, {});
};
var FormControlRoot = styled_default("div", {
  name: "JoyFormControl",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$palette$o, _theme$vars$palette, _theme$vars$palette2;
  return _extends({
    "--unstable_RadioGroup-margin": "0.5rem 0",
    "--FormLabel-alignSelf": ownerState.orientation === "horizontal" ? "align-items" : "flex-start",
    "--FormLabel-asteriskColor": theme.vars.palette.danger[500]
  }, ownerState.size === "sm" && {
    "--FormLabel-fontSize": theme.vars.fontSize.xs,
    "--FormLabel-margin": ownerState.orientation === "horizontal" ? "0 0.5rem 0 0" : "0 0 0.25rem 0",
    "--FormHelperText-fontSize": theme.vars.fontSize.xs
  }, ownerState.size === "md" && {
    "--FormLabel-fontSize": theme.vars.fontSize.sm,
    "--FormLabel-margin": ownerState.orientation === "horizontal" ? "0 0.75rem 0 0" : "0 0 0.25rem 0",
    "--FormHelperText-fontSize": theme.vars.fontSize.sm
  }, ownerState.size === "lg" && {
    "--FormLabel-fontSize": theme.vars.fontSize.md,
    "--FormLabel-margin": ownerState.orientation === "horizontal" ? "0 1rem 0 0" : "0 0 0.25rem 0",
    "--FormHelperText-fontSize": theme.vars.fontSize.sm
  }, ownerState.color && ownerState.color !== "context" && {
    "--FormHelperText-color": (_theme$vars$palette$o = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette$o[500]
  }, {
    "--FormHelperText-margin": "0.375rem 0 0 0",
    [`&.${formControlClasses_default.error}`]: {
      "--FormHelperText-color": theme.vars.palette.danger[500]
    },
    [`&.${formControlClasses_default.disabled}`]: _extends({}, ownerState.color !== "context" && {
      "--FormLabel-color": (_theme$vars$palette = theme.vars.palette[ownerState.color || "neutral"]) == null ? void 0 : _theme$vars$palette.plainDisabledColor,
      "--FormHelperText-color": (_theme$vars$palette2 = theme.vars.palette[ownerState.color || "neutral"]) == null ? void 0 : _theme$vars$palette2.plainDisabledColor
    }),
    display: "flex",
    position: "relative",
    // for keeping the control action area, e.g. Switch
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, ownerState.orientation === "horizontal" && {
    [`& > label ~ .${switchClasses_default.root}`]: {
      "--unstable_Switch-margin": "0 0 0 auto"
    }
  });
});
var FormControl = React.forwardRef(function FormControl2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyFormControl"
  });
  const {
    id: idOverride,
    className,
    component = "div",
    disabled = false,
    required = false,
    error = false,
    color,
    size = "md",
    orientation = "vertical",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const id = useId(idOverride);
  const [helperText, setHelperText] = React.useState(null);
  const ownerState = _extends({}, props, {
    id,
    component,
    color,
    disabled,
    error,
    required,
    size,
    orientation
  });
  let registerEffect;
  if (true) {
    const registeredInput = React.useRef(false);
    registerEffect = () => {
      if (registeredInput.current) {
        console.error(["Joy: A FormControl can contain only one control component (Autocomplete | Input | Textarea | Select | RadioGroup)", "You should not mix those components inside a single FormControl instance"].join("\n"));
      }
      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }
  const classes = useUtilityClasses(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_m_default(classes.root, className),
    elementType: FormControlRoot,
    externalForwardedProps: _extends({}, other, {
      component,
      slots,
      slotProps
    }),
    ownerState
  });
  const formControlContextValue = React.useMemo(() => ({
    disabled,
    required,
    error,
    color,
    size,
    htmlFor: id,
    labelId: `${id}-label`,
    "aria-describedby": helperText ? `${id}-helper-text` : void 0,
    setHelperText,
    registerEffect
  }), [color, disabled, error, helperText, id, registerEffect, required, size]);
  return (0, import_jsx_runtime.jsx)(FormControlContext_default.Provider, {
    value: formControlContextValue,
    children: (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps))
  });
});
true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "info", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the children are in disabled state.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, the children will indicate an error.
   * @default false
   */
  error: import_prop_types.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types.default.string,
  /**
   * The content direction flow.
   * @default 'vertical'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * If `true`, the user must specify a value for the input before the owning form can be submitted.
   * If `true`, the asterisk appears on the FormLabel.
   * @default false
   */
  required: import_prop_types.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var FormControl_default = FormControl;
export {
  FormControl_default as default,
  formControlClasses_default as formControlClasses,
  getFormControlUtilityClass
};
//# sourceMappingURL=@mui_joy_FormControl.js.map
