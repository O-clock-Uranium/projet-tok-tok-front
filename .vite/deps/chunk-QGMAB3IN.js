import {
  createSoftInversion,
  createSolidInversion,
  defaultTheme_default,
  identifier_default
} from "./chunk-AALCROKH.js";
import {
  appendOwnerState,
  init_utils,
  mergeSlotProps,
  resolveComponentProps
} from "./chunk-VNQKGEYY.js";
import {
  createCssVarsProvider,
  createStyled,
  deepmerge,
  init_esm,
  init_esm2,
  require_jsx_runtime,
  useForkRef,
  useThemeProps
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

// node_modules/@mui/joy/styles/styled.js
init_esm2();
var styled = createStyled({
  defaultTheme: defaultTheme_default,
  themeId: identifier_default
});
var styled_default = styled;

// node_modules/@mui/joy/styles/useThemeProps.js
init_extends();
init_esm2();
function useThemeProps2({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: _extends({}, defaultTheme_default, {
      components: {}
    }),
    themeId: identifier_default
  });
}

// node_modules/@mui/joy/styles/ColorInversion.js
var React2 = __toESM(require_react());

// node_modules/@mui/joy/styles/ThemeProvider.js
var React = __toESM(require_react());
init_esm2();
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/@mui/joy/styles/ColorInversion.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var ColorInversion = React2.createContext(void 0);
var useColorInversion = (childVariant) => {
  const overridableVariants = React2.useContext(ColorInversion);
  return {
    /**
     * Resolve the `color` value for the component.
     * @param {ColorPaletteProp | 'inherit' | undefined} instanceColorProp The color defined on the instance.
     * @param {ColorPaletteProp | 'inherit' | undefined} defaultColorProp The default color to use when variant inversion is not enabled.
     */
    getColor: (instanceColorProp, defaultColorProp) => {
      if (overridableVariants && childVariant) {
        if (overridableVariants.includes(childVariant)) {
          return instanceColorProp || "context";
        }
      }
      return instanceColorProp || defaultColorProp;
    }
  };
};

// node_modules/@mui/joy/styles/CssVarsProvider.js
init_esm();
init_esm2();
var {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = createCssVarsProvider({
  themeId: identifier_default,
  theme: defaultTheme_default,
  attribute: "data-joy-color-scheme",
  modeStorageKey: "joy-mode",
  colorSchemeStorageKey: "joy-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  },
  resolveTheme: (mergedTheme) => {
    const colorInversionInput = mergedTheme.colorInversion;
    mergedTheme.colorInversion = deepmerge({
      soft: createSoftInversion(mergedTheme),
      solid: createSolidInversion(mergedTheme)
    }, typeof colorInversionInput === "function" ? colorInversionInput(mergedTheme) : colorInversionInput, {
      clone: false
    });
    return mergedTheme;
  }
});

// node_modules/@mui/joy/styles/StyledEngineProvider.js
init_esm2();

// node_modules/@mui/joy/utils/useSlot.js
init_extends();
init_objectWithoutPropertiesLoose();
init_esm();
init_utils();
var _excluded = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"];
var _excluded2 = ["component", "slots", "slotProps"];
var _excluded3 = ["component"];
var _excluded4 = ["disableColorInversion"];
function useSlot(name, parameters) {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    externalForwardedProps,
    getSlotOwnerState,
    internalForwardedProps
  } = parameters, useSlotPropsParams = _objectWithoutPropertiesLoose(parameters, _excluded);
  const {
    component: rootComponent,
    slots = {
      [name]: void 0
    },
    slotProps = {
      [name]: void 0
    }
  } = externalForwardedProps, other = _objectWithoutPropertiesLoose(externalForwardedProps, _excluded2);
  const elementType = slots[name] || initialElementType;
  const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
  const _mergeSlotProps = mergeSlotProps(_extends({
    className
  }, useSlotPropsParams, {
    externalForwardedProps: name === "root" ? other : void 0,
    externalSlotProps: resolvedComponentsProps
  })), {
    props: {
      component: slotComponent
    },
    internalRef
  } = _mergeSlotProps, mergedProps = _objectWithoutPropertiesLoose(_mergeSlotProps.props, _excluded3);
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, parameters.ref);
  const _ref = getSlotOwnerState ? getSlotOwnerState(mergedProps) : {}, {
    disableColorInversion = false
  } = _ref, slotOwnerState = _objectWithoutPropertiesLoose(_ref, _excluded4);
  const finalOwnerState = _extends({}, ownerState, slotOwnerState);
  const {
    getColor
  } = useColorInversion(finalOwnerState.variant);
  if (name === "root") {
    var _color;
    finalOwnerState.color = (_color = mergedProps.color) != null ? _color : ownerState.color;
  } else if (!disableColorInversion) {
    finalOwnerState.color = getColor(mergedProps.color, finalOwnerState.color);
  }
  const LeafComponent = name === "root" ? slotComponent || rootComponent : slotComponent;
  const props = appendOwnerState(elementType, _extends({}, name === "root" && !rootComponent && !slots[name] && internalForwardedProps, name !== "root" && !slots[name] && internalForwardedProps, mergedProps, LeafComponent && {
    as: LeafComponent
  }, {
    ref
  }), finalOwnerState);
  Object.keys(slotOwnerState).forEach((propName) => {
    delete props[propName];
  });
  return [elementType, props];
}

export {
  styled_default,
  useThemeProps2 as useThemeProps,
  useColorInversion,
  useSlot
};
//# sourceMappingURL=chunk-QGMAB3IN.js.map
