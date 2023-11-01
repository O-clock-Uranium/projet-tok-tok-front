import {
  extractEventHandlers,
  init_ClassNameConfigurator,
  init_composeClasses,
  init_extractEventHandlers,
  init_utils,
  useClassNamesOverride,
  useSlotProps
} from "./chunk-VNQKGEYY.js";
import {
  require_react_dom
} from "./chunk-PRK46SJB.js";
import {
  composeClasses,
  debounce,
  generateUtilityClass,
  generateUtilityClasses,
  init_esm,
  ownerWindow,
  require_jsx_runtime,
  require_prop_types,
  useControlled,
  useEnhancedEffect_default,
  useForkRef
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
  __esm,
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
}
var React, import_prop_types, ReactDOM, import_jsx_runtime, import_jsx_runtime2, _excluded, styles, TextareaAutosize, TextareaAutosize_default;
var init_TextareaAutosize = __esm({
  "node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js"() {
    "use client";
    init_extends();
    init_objectWithoutPropertiesLoose();
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    ReactDOM = __toESM(require_react_dom());
    init_esm();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    _excluded = ["onChange", "maxRows", "minRows", "style", "value"];
    styles = {
      shadow: {
        // Visibility needed to hide the extra text area on iPads
        visibility: "hidden",
        // Remove from the content flow
        position: "absolute",
        // Ignore the scrollbar width
        overflow: "hidden",
        height: 0,
        top: 0,
        left: 0,
        // Create a new layer, increase the isolation of the computed values
        transform: "translateZ(0)"
      }
    };
    TextareaAutosize = React.forwardRef(function TextareaAutosize2(props, forwardedRef) {
      const {
        onChange,
        maxRows,
        minRows = 1,
        style,
        value
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
      const {
        current: isControlled
      } = React.useRef(value != null);
      const inputRef = React.useRef(null);
      const handleRef = useForkRef(forwardedRef, inputRef);
      const shadowRef = React.useRef(null);
      const renders = React.useRef(0);
      const [state, setState] = React.useState({
        outerHeightStyle: 0
      });
      const getUpdatedState = React.useCallback(() => {
        const input = inputRef.current;
        const containerWindow = ownerWindow(input);
        const computedStyle = containerWindow.getComputedStyle(input);
        if (computedStyle.width === "0px") {
          return {
            outerHeightStyle: 0
          };
        }
        const inputShallow = shadowRef.current;
        inputShallow.style.width = computedStyle.width;
        inputShallow.value = input.value || props.placeholder || "x";
        if (inputShallow.value.slice(-1) === "\n") {
          inputShallow.value += " ";
        }
        const boxSizing = computedStyle.boxSizing;
        const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
        const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
        const innerHeight = inputShallow.scrollHeight;
        inputShallow.value = "x";
        const singleRowHeight = inputShallow.scrollHeight;
        let outerHeight = innerHeight;
        if (minRows) {
          outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
        }
        if (maxRows) {
          outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
        }
        outerHeight = Math.max(outerHeight, singleRowHeight);
        const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
        const overflow = Math.abs(outerHeight - innerHeight) <= 1;
        return {
          outerHeightStyle,
          overflow
        };
      }, [maxRows, minRows, props.placeholder]);
      const updateState = (prevState, newState) => {
        const {
          outerHeightStyle,
          overflow
        } = newState;
        if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
          renders.current += 1;
          return {
            overflow,
            outerHeightStyle
          };
        }
        if (true) {
          if (renders.current === 20) {
            console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join("\n"));
          }
        }
        return prevState;
      };
      const syncHeight = React.useCallback(() => {
        const newState = getUpdatedState();
        if (isEmpty(newState)) {
          return;
        }
        setState((prevState) => {
          return updateState(prevState, newState);
        });
      }, [getUpdatedState]);
      const syncHeightWithFlushSync = () => {
        const newState = getUpdatedState();
        if (isEmpty(newState)) {
          return;
        }
        ReactDOM.flushSync(() => {
          setState((prevState) => {
            return updateState(prevState, newState);
          });
        });
      };
      React.useEffect(() => {
        const handleResize = debounce(() => {
          renders.current = 0;
          if (inputRef.current) {
            syncHeightWithFlushSync();
          }
        });
        let resizeObserver;
        const input = inputRef.current;
        const containerWindow = ownerWindow(input);
        containerWindow.addEventListener("resize", handleResize);
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(handleResize);
          resizeObserver.observe(input);
        }
        return () => {
          handleResize.clear();
          containerWindow.removeEventListener("resize", handleResize);
          if (resizeObserver) {
            resizeObserver.disconnect();
          }
        };
      });
      useEnhancedEffect_default(() => {
        syncHeight();
      });
      React.useEffect(() => {
        renders.current = 0;
      }, [value]);
      const handleChange = (event) => {
        renders.current = 0;
        if (!isControlled) {
          syncHeight();
        }
        if (onChange) {
          onChange(event);
        }
      };
      return (0, import_jsx_runtime2.jsxs)(React.Fragment, {
        children: [(0, import_jsx_runtime.jsx)("textarea", _extends({
          value,
          onChange: handleChange,
          ref: handleRef,
          rows: minRows,
          style: _extends({
            height: state.outerHeightStyle,
            // Need a large enough difference to allow scrolling.
            // This prevents infinite rendering loop.
            overflow: state.overflow ? "hidden" : void 0
          }, style)
        }, other)), (0, import_jsx_runtime.jsx)("textarea", {
          "aria-hidden": true,
          className: props.className,
          readOnly: true,
          ref: shadowRef,
          tabIndex: -1,
          style: _extends({}, styles.shadow, style, {
            paddingTop: 0,
            paddingBottom: 0
          })
        })]
      });
    });
    true ? TextareaAutosize.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit TypeScript types and run "yarn proptypes"  |
      // ----------------------------------------------------------------------
      /**
       * @ignore
       */
      className: import_prop_types.default.string,
      /**
       * Maximum number of rows to display.
       */
      maxRows: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
      /**
       * Minimum number of rows to display.
       * @default 1
       */
      minRows: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
      /**
       * @ignore
       */
      onChange: import_prop_types.default.func,
      /**
       * @ignore
       */
      placeholder: import_prop_types.default.string,
      /**
       * @ignore
       */
      style: import_prop_types.default.object,
      /**
       * @ignore
       */
      value: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.string), import_prop_types.default.number, import_prop_types.default.string])
    } : void 0;
    TextareaAutosize_default = TextareaAutosize;
  }
});

// node_modules/@mui/base/TextareaAutosize/TextareaAutosize.types.js
var init_TextareaAutosize_types = __esm({
  "node_modules/@mui/base/TextareaAutosize/TextareaAutosize.types.js"() {
  }
});

// node_modules/@mui/base/TextareaAutosize/index.js
var init_TextareaAutosize2 = __esm({
  "node_modules/@mui/base/TextareaAutosize/index.js"() {
    "use client";
    init_TextareaAutosize();
    init_TextareaAutosize_types();
  }
});

// node_modules/@mui/base/generateUtilityClasses/index.js
var init_generateUtilityClasses = __esm({
  "node_modules/@mui/base/generateUtilityClasses/index.js"() {
    init_esm();
  }
});

// node_modules/@mui/base/generateUtilityClass/index.js
var init_generateUtilityClass = __esm({
  "node_modules/@mui/base/generateUtilityClass/index.js"() {
    init_esm();
  }
});

// node_modules/@mui/base/FormControl/FormControlContext.js
var React2, FormControlContext, FormControlContext_default;
var init_FormControlContext = __esm({
  "node_modules/@mui/base/FormControl/FormControlContext.js"() {
    React2 = __toESM(require_react());
    FormControlContext = React2.createContext(void 0);
    if (true) {
      FormControlContext.displayName = "FormControlContext";
    }
    FormControlContext_default = FormControlContext;
  }
});

// node_modules/@mui/base/FormControl/formControlClasses.js
function getFormControlUtilityClass(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses;
var init_formControlClasses = __esm({
  "node_modules/@mui/base/FormControl/formControlClasses.js"() {
    init_generateUtilityClass();
    init_generateUtilityClasses();
    formControlClasses = generateUtilityClasses("MuiFormControl", ["root", "disabled", "error", "filled", "focused", "required"]);
  }
});

// node_modules/@mui/base/FormControl/FormControl.js
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== "";
}
function useUtilityClasses(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focused && "focused", error && "error", filled && "filled", required && "required"]
  };
  return composeClasses(slots, useClassNamesOverride(getFormControlUtilityClass));
}
var React3, import_prop_types2, import_jsx_runtime3, _excluded2, FormControl;
var init_FormControl = __esm({
  "node_modules/@mui/base/FormControl/FormControl.js"() {
    "use client";
    init_extends();
    init_objectWithoutPropertiesLoose();
    React3 = __toESM(require_react());
    import_prop_types2 = __toESM(require_prop_types());
    init_esm();
    init_FormControlContext();
    init_formControlClasses();
    init_utils();
    init_composeClasses();
    init_ClassNameConfigurator();
    import_jsx_runtime3 = __toESM(require_jsx_runtime());
    _excluded2 = ["defaultValue", "children", "disabled", "error", "onChange", "required", "slotProps", "slots", "value"];
    FormControl = React3.forwardRef(function FormControl2(props, forwardedRef) {
      var _slots$root;
      const {
        defaultValue,
        children,
        disabled = false,
        error = false,
        onChange,
        required = false,
        slotProps = {},
        slots = {},
        value: incomingValue
      } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
      const [value, setValue] = useControlled({
        controlled: incomingValue,
        default: defaultValue,
        name: "FormControl",
        state: "value"
      });
      const filled = hasValue(value);
      const [focusedState, setFocused] = React3.useState(false);
      const focused = focusedState && !disabled;
      React3.useEffect(() => setFocused((isFocused) => disabled ? false : isFocused), [disabled]);
      const ownerState = _extends({}, props, {
        disabled,
        error,
        filled,
        focused,
        required
      });
      const childContext = React3.useMemo(() => {
        return {
          disabled,
          error,
          filled,
          focused,
          onBlur: () => {
            setFocused(false);
          },
          onChange: (event) => {
            setValue(event.target.value);
            onChange == null ? void 0 : onChange(event);
          },
          onFocus: () => {
            setFocused(true);
          },
          required,
          value: value != null ? value : ""
        };
      }, [disabled, error, filled, focused, onChange, required, setValue, value]);
      const classes = useUtilityClasses(ownerState);
      const renderChildren = () => {
        if (typeof children === "function") {
          return children(childContext);
        }
        return children;
      };
      const Root = (_slots$root = slots.root) != null ? _slots$root : "div";
      const rootProps = useSlotProps({
        elementType: Root,
        externalSlotProps: slotProps.root,
        externalForwardedProps: other,
        additionalProps: {
          ref: forwardedRef,
          children: renderChildren()
        },
        ownerState,
        className: classes.root
      });
      return (0, import_jsx_runtime3.jsx)(FormControlContext_default.Provider, {
        value: childContext,
        children: (0, import_jsx_runtime3.jsx)(Root, _extends({}, rootProps))
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
      children: import_prop_types2.default.oneOfType([import_prop_types2.default.node, import_prop_types2.default.func]),
      /**
       * @ignore
       */
      defaultValue: import_prop_types2.default.any,
      /**
       * If `true`, the label, input and helper text should be displayed in a disabled state.
       * @default false
       */
      disabled: import_prop_types2.default.bool,
      /**
       * If `true`, the label is displayed in an error state.
       * @default false
       */
      error: import_prop_types2.default.bool,
      /**
       * Callback fired when the form element's value is modified.
       */
      onChange: import_prop_types2.default.func,
      /**
       * If `true`, the label will indicate that the `input` is required.
       * @default false
       */
      required: import_prop_types2.default.bool,
      /**
       * The props used for each slot inside the FormControl.
       * @default {}
       */
      slotProps: import_prop_types2.default.shape({
        root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
      }),
      /**
       * The components used for each slot inside the FormControl.
       * Either a string to use a HTML element or a component.
       * @default {}
       */
      slots: import_prop_types2.default.shape({
        root: import_prop_types2.default.elementType
      }),
      /**
       * The value of the form element.
       */
      value: import_prop_types2.default.any
    } : void 0;
  }
});

// node_modules/@mui/base/FormControl/useFormControlContext.js
function useFormControlContext() {
  return React4.useContext(FormControlContext_default);
}
var React4;
var init_useFormControlContext = __esm({
  "node_modules/@mui/base/FormControl/useFormControlContext.js"() {
    "use client";
    React4 = __toESM(require_react());
    init_FormControlContext();
  }
});

// node_modules/@mui/base/FormControl/index.js
var init_FormControl2 = __esm({
  "node_modules/@mui/base/FormControl/index.js"() {
    "use client";
    init_FormControl();
    init_FormControlContext();
    init_formControlClasses();
    init_formControlClasses();
    init_useFormControlContext();
  }
});

// node_modules/@mui/base/useInput/useInput.js
function useInput(parameters) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp,
    inputRef: inputRefProp
  } = parameters;
  const formControlContext = useFormControlContext();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;
  if (formControlContext) {
    var _formControlContext$d, _formControlContext$e, _formControlContext$r;
    defaultValue = void 0;
    disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
    error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
    required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
    value = formControlContext.value;
    if (true) {
      const definedLocalProps = ["defaultValue", "disabled", "error", "required", "value"].filter((prop) => parameters[prop] !== void 0);
      if (definedLocalProps.length > 0) {
        console.warn(["MUI: You have set props on an input that is inside a FormControl.", "Set these props on a FormControl instead. Otherwise they will be ignored.", `Ignored props: ${definedLocalProps.join(", ")}`].join("\n"));
      }
    }
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }
  const {
    current: isControlled
  } = React5.useRef(value != null);
  const handleInputRefWarning = React5.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React5.useRef(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
  const [focused, setFocused] = React5.useState(false);
  React5.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false);
      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);
  const handleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;
      formControlContext == null ? void 0 : (_formControlContext$o = formControlContext.onFocus) == null ? void 0 : _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };
  const handleChange = (otherHandlers) => (event, ...args) => {
    var _formControlContext$o2, _otherHandlers$onChan;
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`slots.input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
      }
    }
    formControlContext == null ? void 0 : (_formControlContext$o2 = formControlContext.onChange) == null ? void 0 : _formControlContext$o2.call(formControlContext, event);
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event, ...args);
  };
  const handleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters, ["onBlur", "onChange", "onFocus"]);
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    return _extends({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers)
    });
  };
  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = _extends({}, propsEventHandlers, extractEventHandlers(externalProps));
    const mergedEventHandlers = _extends({}, externalProps, externalEventHandlers, {
      onBlur: handleBlur(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    });
    return _extends({}, mergedEventHandlers, {
      "aria-invalid": error || void 0,
      defaultValue,
      ref: handleInputRef,
      value,
      required,
      disabled
    });
  };
  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    inputRef: handleInputRef,
    required,
    value
  };
}
var React5;
var init_useInput = __esm({
  "node_modules/@mui/base/useInput/useInput.js"() {
    "use client";
    init_extends();
    init_esm();
    React5 = __toESM(require_react());
    init_esm();
    init_FormControl2();
    init_extractEventHandlers();
  }
});

// node_modules/@mui/base/useInput/useInput.types.js
var init_useInput_types = __esm({
  "node_modules/@mui/base/useInput/useInput.types.js"() {
  }
});

// node_modules/@mui/base/useInput/index.js
var init_useInput2 = __esm({
  "node_modules/@mui/base/useInput/index.js"() {
    "use client";
    init_useInput();
    init_useInput_types();
  }
});

export {
  init_generateUtilityClasses,
  init_generateUtilityClass,
  init_FormControl2 as init_FormControl,
  useInput,
  init_useInput2 as init_useInput,
  TextareaAutosize_default,
  init_TextareaAutosize2 as init_TextareaAutosize
};
//# sourceMappingURL=chunk-D2WF2JQQ.js.map
