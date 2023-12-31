import {
  colorChannel,
  createBreakpoints,
  createGetCssVar,
  createSpacing,
  deepmerge,
  defaultSxConfig_default,
  generateUtilityClass,
  generateUtilityClasses,
  init_esm,
  init_esm2,
  prepareCssVars_default,
  styleFunctionSx_default
} from "./chunk-K7TKDPQC.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  init_extends,
  init_objectWithoutPropertiesLoose
} from "./chunk-JKJ2AEBI.js";

// node_modules/@mui/joy/className/index.js
init_esm();
init_esm();
var generateUtilityClass2 = (componentName, slot) => generateUtilityClass(componentName, slot, "Joy");
var generateUtilityClasses2 = (componentName, slots) => generateUtilityClasses(componentName, slots, "Joy");

// node_modules/@mui/joy/styles/extendTheme.js
init_extends();
init_objectWithoutPropertiesLoose();
init_esm();
init_esm2();

// node_modules/@mui/joy/styles/sxConfig.js
init_extends();
init_esm2();
var sxConfig = _extends({}, defaultSxConfig_default, {
  // The default system themeKey is shape
  borderRadius: {
    themeKey: "radius"
  },
  // The default system themeKey is shadows
  boxShadow: {
    themeKey: "shadow"
  },
  // The default system themeKey is typography
  fontFamily: {
    themeKey: "fontFamily"
  },
  // The default system themeKey is typography
  fontSize: {
    themeKey: "fontSize"
  },
  // The default system themeKey is typography
  fontWeight: {
    themeKey: "fontWeight"
  },
  // The default system themeKey is typography
  letterSpacing: {
    themeKey: "letterSpacing"
  },
  // The default system themeKey is typography
  lineHeight: {
    themeKey: "lineHeight"
  }
});
var sxConfig_default = sxConfig;

// node_modules/@mui/joy/colors/colors.js
var colors = {
  grey: {
    50: "#F7F7F8",
    100: "#EBEBEF",
    200: "#D8D8DF",
    300: "#B9B9C6",
    400: "#8F8FA3",
    500: "#73738C",
    600: "#5A5A72",
    700: "#434356",
    800: "#25252D",
    900: "#131318"
  },
  blue: {
    50: "#F4FAFF",
    100: "#DDF1FF",
    200: "#ADDBFF",
    300: "#6FB6FF",
    400: "#3990FF",
    500: "#096BDE",
    600: "#054DA7",
    700: "#02367D",
    800: "#072859",
    900: "#00153C"
  },
  yellow: {
    50: "#FFF8C5",
    100: "#FAE17D",
    200: "#EAC54F",
    300: "#D4A72C",
    400: "#BF8700",
    500: "#9A6700",
    600: "#7D4E00",
    700: "#633C01",
    800: "#4D2D00",
    900: "#3B2300"
  },
  red: {
    50: "#FFF8F6",
    100: "#FFE9E8",
    200: "#FFC7C5",
    300: "#FF9192",
    400: "#FA5255",
    500: "#D3232F",
    600: "#A10E25",
    700: "#77061B",
    800: "#580013",
    900: "#39000D"
  },
  green: {
    50: "#F3FEF5",
    100: "#D7F5DD",
    200: "#77EC95",
    300: "#4CC76E",
    400: "#2CA24D",
    500: "#1A7D36",
    600: "#0F5D26",
    700: "#034318",
    800: "#002F0F",
    900: "#001D09"
  },
  purple: {
    50: "#FDF7FF",
    100: "#F4EAFF",
    200: "#E1CBFF",
    300: "#C69EFF",
    400: "#A374F9",
    500: "#814DDE",
    600: "#5F35AE",
    700: "#452382",
    800: "#301761",
    900: "#1D0A42"
  }
};
var colors_default = colors;

// node_modules/@mui/joy/styles/shouldSkipGeneratingVar.js
function shouldSkipGeneratingVar(keys) {
  var _keys$;
  return !!keys[0].match(/^(typography|variants|breakpoints|colorInversion|colorInversionConfig)$/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
  keys[0] === "palette" && !!((_keys$ = keys[1]) != null && _keys$.match(/^(mode)$/)) || keys[0] === "focus" && keys[1] !== "thickness";
}

// node_modules/@mui/joy/styles/variantUtils.js
init_extends();
init_esm2();
var isVariantPalette = (colorPalette) => colorPalette && typeof colorPalette === "object" && Object.keys(colorPalette).some((value) => {
  var _value$match;
  return (_value$match = value.match) == null ? void 0 : _value$match.call(value, /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/);
});
var assignCss = (target, variantVar, value) => {
  if (variantVar.includes("Color")) {
    target.color = value;
  }
  if (variantVar.includes("Bg")) {
    target.backgroundColor = value;
  }
  if (variantVar.includes("Border")) {
    target.borderColor = value;
  }
};
var createVariantStyle = (name, palette, getCssVar) => {
  const result = {};
  Object.entries(palette || {}).forEach(([variantVar, value]) => {
    if (variantVar.match(new RegExp(`${name}(color|bg|border)`, "i")) && !!value) {
      const cssVar = getCssVar ? getCssVar(variantVar) : value;
      if (variantVar.includes("Disabled")) {
        result.pointerEvents = "none";
        result.cursor = "default";
      }
      if (variantVar.match(/(Hover|Active|Disabled)/)) {
        assignCss(result, variantVar, cssVar);
      } else {
        if (!result["--variant-borderWidth"]) {
          result["--variant-borderWidth"] = "0px";
        }
        if (variantVar.includes("Border")) {
          result["--variant-borderWidth"] = "1px";
          result.border = "var(--variant-borderWidth) solid";
        }
        assignCss(result, variantVar, cssVar);
      }
    }
  });
  return result;
};
var createPrefixVar = (cssVarPrefix) => {
  return (cssVar) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}${cssVar.replace(/^--/, "")}`;
};
var createVariant = (variant, theme) => {
  let result = {};
  if (theme) {
    const {
      getCssVar,
      palette
    } = theme;
    Object.entries(palette).forEach((entry) => {
      const [color, colorPalette] = entry;
      if (isVariantPalette(colorPalette) && typeof colorPalette === "object") {
        result = _extends({}, result, {
          [color]: createVariantStyle(variant, colorPalette, (variantVar) => getCssVar(`palette-${color}-${variantVar}`, palette[color][variantVar]))
        });
      }
    });
  }
  result.context = createVariantStyle(variant, {
    plainColor: "var(--variant-plainColor)",
    plainHoverColor: `var(--variant-plainHoverColor)`,
    plainHoverBg: "var(--variant-plainHoverBg)",
    plainActiveBg: "var(--variant-plainActiveBg)",
    plainDisabledColor: "var(--variant-plainDisabledColor)",
    outlinedColor: "var(--variant-outlinedColor)",
    outlinedBorder: "var(--variant-outlinedBorder)",
    outlinedHoverColor: `var(--variant-outlinedHoverColor)`,
    outlinedHoverBorder: `var(--variant-outlinedHoverBorder)`,
    outlinedHoverBg: `var(--variant-outlinedHoverBg)`,
    outlinedActiveBg: `var(--variant-outlinedActiveBg)`,
    outlinedDisabledColor: `var(--variant-outlinedDisabledColor)`,
    outlinedDisabledBorder: `var(--variant-outlinedDisabledBorder)`,
    softColor: "var(--variant-softColor)",
    softBg: "var(--variant-softBg)",
    softHoverColor: "var(--variant-softHoverColor)",
    softHoverBg: "var(--variant-softHoverBg)",
    softActiveBg: "var(--variant-softActiveBg)",
    softDisabledColor: "var(--variant-softDisabledColor)",
    softDisabledBg: "var(--variant-softDisabledBg)",
    solidColor: "var(--variant-solidColor)",
    solidBg: "var(--variant-solidBg)",
    solidHoverColor: "var(--variant-solidHoverColor)",
    solidHoverBg: "var(--variant-solidHoverBg)",
    solidActiveBg: "var(--variant-solidActiveBg)",
    solidDisabledColor: "var(--variant-solidDisabledColor)",
    solidDisabledBg: "var(--variant-solidDisabledBg)"
  });
  return result;
};
var createSoftInversion = (theme, addDefaultValues) => {
  const getCssVarDefault = createGetCssVar(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const result = {};
  const getCssVar = addDefaultValues ? (cssVar) => {
    var _theme$palette, _theme$palette$color;
    const tokens = cssVar.split("-");
    const color = tokens[1];
    const value = tokens[2];
    return getCssVarDefault(cssVar, (_theme$palette = theme.palette) == null ? void 0 : (_theme$palette$color = _theme$palette[color]) == null ? void 0 : _theme$palette$color[value]);
  } : getCssVarDefault;
  Object.entries(theme.palette).forEach((entry) => {
    const [color, colorPalette] = entry;
    if (isVariantPalette(colorPalette)) {
      result[color] = {
        "--Badge-ringColor": getCssVar(`palette-${color}-softBg`),
        [prefixVar("--shadowChannel")]: getCssVar(`palette-${color}-darkChannel`),
        [theme.getColorSchemeSelector("dark")]: {
          [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-300`),
          [prefixVar("--palette-background-body")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
          [prefixVar("--palette-background-surface")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
          [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          [prefixVar("--palette-text-primary")]: getCssVar(`palette-${color}-100`),
          [prefixVar("--palette-text-secondary")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          [prefixVar("--palette-text-tertiary")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
          [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.2)`,
          "--variant-plainColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
          "--variant-plainHoverColor": getCssVar(`palette-${color}-50`),
          "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
          "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          "--variant-outlinedColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
          "--variant-outlinedHoverColor": getCssVar(`palette-${color}-50`),
          "--variant-outlinedBg": "initial",
          "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
          "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-600`),
          "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
          "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          "--variant-outlinedDisabledBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          "--variant-softColor": getCssVar(`palette-${color}-100`),
          "--variant-softBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
          "--variant-softHoverColor": "#fff",
          "--variant-softHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          "--variant-softActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
          "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          "--variant-solidColor": "#fff",
          "--variant-solidBg": getCssVar(`palette-${color}-500`),
          "--variant-solidHoverColor": "#fff",
          "--variant-solidHoverBg": getCssVar(`palette-${color}-400`),
          "--variant-solidActiveBg": getCssVar(`palette-${color}-400`),
          "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`
        },
        // `light` (default color scheme) should come last in case that `theme.getColorSchemeSelector()` return the same value
        [theme.getColorSchemeSelector("light")]: {
          [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-500`),
          [prefixVar("--palette-background-body")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
          [prefixVar("--palette-background-surface")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
          [prefixVar("--palette-text-primary")]: getCssVar(`palette-${color}-700`),
          [prefixVar("--palette-text-secondary")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
          [prefixVar("--palette-text-tertiary")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.68)`,
          [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          "--variant-plainColor": `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
          "--variant-plainHoverColor": `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 1)`,
          "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
          "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          "--variant-outlinedColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 1)`,
          "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
          "--variant-outlinedHoverColor": getCssVar(`palette-${color}-600`),
          "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-300`),
          "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
          "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          "--variant-outlinedDisabledBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          "--variant-softColor": getCssVar(`palette-${color}-600`),
          "--variant-softBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          "--variant-softHoverColor": getCssVar(`palette-${color}-700`),
          "--variant-softHoverBg": getCssVar(`palette-${color}-200`),
          "--variant-softActiveBg": getCssVar(`palette-${color}-300`),
          "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          "--variant-solidColor": getCssVar("palette-common-white"),
          "--variant-solidBg": getCssVar(`palette-${color}-600`),
          "--variant-solidHoverColor": getCssVar("palette-common-white"),
          "--variant-solidHoverBg": getCssVar(`palette-${color}-500`),
          "--variant-solidActiveBg": getCssVar(`palette-${color}-500`),
          "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`
        }
      };
    }
  });
  return result;
};
var createSolidInversion = (theme, addDefaultValues) => {
  const getCssVarDefault = createGetCssVar(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const result = {};
  const getCssVar = addDefaultValues ? (cssVar) => {
    const tokens = cssVar.split("-");
    const color = tokens[1];
    const value = tokens[2];
    return getCssVarDefault(cssVar, theme.palette[color][value]);
  } : getCssVarDefault;
  Object.entries(theme.palette).forEach((entry) => {
    const [color, colorPalette] = entry;
    if (isVariantPalette(colorPalette)) {
      if (color === "warning") {
        result.warning = {
          "--Badge-ringColor": getCssVar(`palette-${color}-solidBg`),
          [prefixVar("--shadowChannel")]: getCssVar(`palette-${color}-darkChannel`),
          [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-700`),
          [prefixVar("--palette-background-body")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.16)`,
          [prefixVar("--palette-background-surface")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.1)`,
          [prefixVar("--palette-background-popup")]: getCssVar(`palette-${color}-100`),
          [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
          [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.36)`,
          [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.6)`,
          [prefixVar("--palette-text-primary")]: getCssVar(`palette-${color}-900`),
          [prefixVar("--palette-text-secondary")]: getCssVar(`palette-${color}-700`),
          [prefixVar("--palette-text-tertiary")]: getCssVar(`palette-${color}-500`),
          [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
          "--variant-plainColor": getCssVar(`palette-${color}-700`),
          "--variant-plainHoverColor": getCssVar(`palette-${color}-800`),
          "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          "--variant-outlinedColor": getCssVar(`palette-${color}-700`),
          "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.5)`,
          "--variant-outlinedHoverColor": getCssVar(`palette-${color}-800`),
          "--variant-outlinedHoverBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          "--variant-outlinedDisabledBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          "--variant-softColor": getCssVar(`palette-${color}-800`),
          "--variant-softHoverColor": getCssVar(`palette-${color}-900`),
          "--variant-softBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          "--variant-softHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.28)`,
          "--variant-softActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          "--variant-solidColor": "#fff",
          "--variant-solidBg": getCssVar(`palette-${color}-600`),
          "--variant-solidHoverColor": "#fff",
          "--variant-solidHoverBg": getCssVar(`palette-${color}-700`),
          "--variant-solidActiveBg": getCssVar(`palette-${color}-800`),
          "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`
        };
      } else {
        result[color] = {
          colorScheme: "dark",
          "--Badge-ringColor": getCssVar(`palette-${color}-solidBg`),
          [prefixVar("--shadowChannel")]: getCssVar(`palette-${color}-darkChannel`),
          [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-200`),
          [prefixVar("--palette-background-body")]: "rgba(0 0 0 / 0.1)",
          [prefixVar("--palette-background-surface")]: "rgba(0 0 0 / 0.06)",
          [prefixVar("--palette-background-popup")]: getCssVar(`palette-${color}-700`),
          [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
          [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.36)`,
          [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.6)`,
          [prefixVar("--palette-text-primary")]: getCssVar(`palette-common-white`),
          [prefixVar("--palette-text-secondary")]: getCssVar(`palette-${color}-100`),
          [prefixVar("--palette-text-tertiary")]: getCssVar(`palette-${color}-200`),
          [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
          "--variant-plainColor": getCssVar(`palette-${color}-50`),
          "--variant-plainHoverColor": `#fff`,
          "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
          "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
          "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          "--variant-outlinedColor": getCssVar(`palette-${color}-50`),
          "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.5)`,
          "--variant-outlinedHoverColor": `#fff`,
          "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-300`),
          "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
          "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
          "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          "--variant-outlinedDisabledBorder": `rgba(255 255 255 / 0.2)`,
          "--variant-softColor": getCssVar(`palette-common-white`),
          "--variant-softHoverColor": getCssVar(`palette-common-white`),
          "--variant-softBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.24)`,
          "--variant-softHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.36)`,
          "--variant-softActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.16)`,
          "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`,
          "--variant-solidColor": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "500"}`),
          "--variant-solidBg": getCssVar(`palette-common-white`),
          "--variant-solidHoverColor": getCssVar(`palette-${color}-700`),
          "--variant-solidHoverBg": getCssVar(`palette-common-white`),
          "--variant-solidActiveBg": getCssVar(`palette-${color}-200`),
          "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`
        };
      }
    }
  });
  return result;
};

// node_modules/@mui/joy/styles/extendTheme.js
var _excluded = ["cssVarPrefix", "breakpoints", "spacing", "components", "variants", "colorInversion", "shouldSkipGeneratingVar"];
var _excluded2 = ["colorSchemes"];
var createGetCssVar2 = (cssVarPrefix = "joy") => createGetCssVar(cssVarPrefix);
function extendTheme(themeOptions) {
  var _scalesInput$focus$th, _scalesInput$focus, _scalesInput$focus$th2, _scalesInput$focus2, _scalesInput$colorSch, _scalesInput$colorSch2, _scalesInput$colorSch3, _scalesInput$colorSch4, _scalesInput$colorSch5, _scalesInput$colorSch6, _scalesInput$colorSch7, _scalesInput$colorSch8, _scalesInput$colorSch9, _scalesInput$colorSch10, _scalesInput$colorSch11, _scalesInput$colorSch12, _scalesInput$colorSch13, _scalesInput$colorSch14, _scalesInput$colorSch15, _scalesInput$colorSch16, _scalesInput$colorSch17, _scalesInput$colorSch18, _scalesInput$colorSch19, _scalesInput$colorSch20, _scalesInput$colorSch21, _scalesInput$colorSch22, _scalesInput$colorSch23, _scalesInput$colorSch24, _scalesInput$colorSch25, _scalesInput$colorSch26, _scalesInput$colorSch27, _scalesInput$colorSch28, _scalesInput$colorSch29, _scalesInput$colorSch30, _scalesInput$colorSch31, _scalesInput$colorSch32, _scalesInput$colorSch33, _scalesInput$colorSch34, _scalesInput$colorSch35, _scalesInput$colorSch36, _scalesInput$colorSch37, _scalesInput$colorSch38, _scalesInput$colorSch39, _scalesInput$colorSch40, _scalesInput$colorSch41, _scalesInput$colorSch42, _scalesInput$colorSch43, _scalesInput$colorSch44, _scalesInput$colorSch45, _scalesInput$colorSch46, _scalesInput$colorSch47, _scalesInput$colorSch48, _scalesInput$colorSch49, _scalesInput$colorSch50, _scalesInput$colorSch51, _scalesInput$colorSch52, _scalesInput$colorSch53, _scalesInput$colorSch54, _scalesInput$colorSch55, _scalesInput$colorSch56, _scalesInput$colorSch57, _scalesInput$colorSch58, _scalesInput$colorSch59, _scalesInput$colorSch60, _scalesInput$colorSch61, _scalesInput$colorSch62, _scalesInput$colorSch63, _scalesInput$colorSch64, _scalesInput$colorSch65, _scalesInput$colorSch66, _scalesInput$colorSch67, _scalesInput$colorSch68, _scalesInput$colorSch69, _scalesInput$colorSch70, _scalesInput$colorSch71, _scalesInput$colorSch72, _scalesInput$colorSch73, _scalesInput$colorSch74, _scalesInput$colorSch75, _scalesInput$colorSch76, _scalesInput$colorSch77, _scalesInput$colorSch78;
  const _ref = themeOptions || {}, {
    cssVarPrefix = "joy",
    breakpoints,
    spacing,
    components: componentsInput,
    variants: variantsInput,
    colorInversion: colorInversionInput,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2 = shouldSkipGeneratingVar
  } = _ref, scalesInput = _objectWithoutPropertiesLoose(_ref, _excluded);
  const getCssVar = createGetCssVar2(cssVarPrefix);
  const defaultColors = {
    primary: colors_default.blue,
    neutral: colors_default.grey,
    danger: colors_default.red,
    info: colors_default.purple,
    success: colors_default.green,
    warning: colors_default.yellow,
    common: {
      white: "#FFF",
      black: "#09090D"
    }
  };
  const getCssVarColor = (cssVar) => {
    var _defaultColors$color;
    const tokens = cssVar.split("-");
    const color = tokens[1];
    const index = tokens[2];
    return getCssVar(cssVar, (_defaultColors$color = defaultColors[color]) == null ? void 0 : _defaultColors$color[index]);
  };
  const createLightModeVariantVariables = (color) => ({
    plainColor: getCssVarColor(`palette-${color}-600`),
    plainHoverBg: getCssVarColor(`palette-${color}-100`),
    plainActiveBg: getCssVarColor(`palette-${color}-200`),
    plainDisabledColor: getCssVarColor(`palette-${color}-200`),
    outlinedColor: getCssVarColor(`palette-${color}-500`),
    outlinedBorder: getCssVarColor(`palette-${color}-200`),
    outlinedHoverBg: getCssVarColor(`palette-${color}-100`),
    outlinedHoverBorder: getCssVarColor(`palette-${color}-300`),
    outlinedActiveBg: getCssVarColor(`palette-${color}-200`),
    outlinedDisabledColor: getCssVarColor(`palette-${color}-100`),
    outlinedDisabledBorder: getCssVarColor(`palette-${color}-100`),
    softColor: getCssVarColor(`palette-${color}-600`),
    softBg: getCssVarColor(`palette-${color}-100`),
    softHoverBg: getCssVarColor(`palette-${color}-200`),
    softActiveBg: getCssVarColor(`palette-${color}-300`),
    softDisabledColor: getCssVarColor(`palette-${color}-300`),
    softDisabledBg: getCssVarColor(`palette-${color}-50`),
    solidColor: "#fff",
    solidBg: getCssVarColor(`palette-${color}-500`),
    solidHoverBg: getCssVarColor(`palette-${color}-600`),
    solidActiveBg: getCssVarColor(`palette-${color}-700`),
    solidDisabledColor: `#fff`,
    solidDisabledBg: getCssVarColor(`palette-${color}-200`)
  });
  const createDarkModeVariantVariables = (color) => ({
    plainColor: getCssVarColor(`palette-${color}-300`),
    plainHoverBg: getCssVarColor(`palette-${color}-800`),
    plainActiveBg: getCssVarColor(`palette-${color}-700`),
    plainDisabledColor: getCssVarColor(`palette-${color}-800`),
    outlinedColor: getCssVarColor(`palette-${color}-200`),
    outlinedBorder: getCssVarColor(`palette-${color}-700`),
    outlinedHoverBg: getCssVarColor(`palette-${color}-800`),
    outlinedHoverBorder: getCssVarColor(`palette-${color}-600`),
    outlinedActiveBg: getCssVarColor(`palette-${color}-900`),
    outlinedDisabledColor: getCssVarColor(`palette-${color}-800`),
    outlinedDisabledBorder: getCssVarColor(`palette-${color}-800`),
    softColor: getCssVarColor(`palette-${color}-200`),
    softBg: getCssVarColor(`palette-${color}-900`),
    softHoverBg: getCssVarColor(`palette-${color}-800`),
    softActiveBg: getCssVarColor(`palette-${color}-700`),
    softDisabledColor: getCssVarColor(`palette-${color}-800`),
    softDisabledBg: getCssVarColor(`palette-${color}-900`),
    solidColor: `#fff`,
    solidBg: getCssVarColor(`palette-${color}-600`),
    solidHoverBg: getCssVarColor(`palette-${color}-700`),
    solidActiveBg: getCssVarColor(`palette-${color}-800`),
    solidDisabledColor: getCssVarColor(`palette-${color}-700`),
    solidDisabledBg: getCssVarColor(`palette-${color}-900`)
  });
  const lightColorSystem = {
    palette: {
      mode: "light",
      primary: _extends({}, defaultColors.primary, createLightModeVariantVariables("primary")),
      neutral: _extends({}, defaultColors.neutral, {
        plainColor: getCssVarColor(`palette-neutral-800`),
        plainHoverColor: getCssVarColor(`palette-neutral-900`),
        plainHoverBg: getCssVarColor(`palette-neutral-100`),
        plainActiveBg: getCssVarColor(`palette-neutral-200`),
        plainDisabledColor: getCssVarColor(`palette-neutral-300`),
        outlinedColor: getCssVarColor(`palette-neutral-800`),
        outlinedBorder: getCssVarColor(`palette-neutral-200`),
        outlinedHoverColor: getCssVarColor(`palette-neutral-900`),
        outlinedHoverBg: getCssVarColor(`palette-neutral-100`),
        outlinedHoverBorder: getCssVarColor(`palette-neutral-300`),
        outlinedActiveBg: getCssVarColor(`palette-neutral-200`),
        outlinedDisabledColor: getCssVarColor(`palette-neutral-300`),
        outlinedDisabledBorder: getCssVarColor(`palette-neutral-100`),
        softColor: getCssVarColor(`palette-neutral-800`),
        softBg: getCssVarColor(`palette-neutral-100`),
        softHoverColor: getCssVarColor(`palette-neutral-900`),
        softHoverBg: getCssVarColor(`palette-neutral-200`),
        softActiveBg: getCssVarColor(`palette-neutral-300`),
        softDisabledColor: getCssVarColor(`palette-neutral-300`),
        softDisabledBg: getCssVarColor(`palette-neutral-50`),
        solidColor: getCssVarColor(`palette-common-white`),
        solidBg: getCssVarColor(`palette-neutral-600`),
        solidHoverBg: getCssVarColor(`palette-neutral-700`),
        solidActiveBg: getCssVarColor(`palette-neutral-800`),
        solidDisabledColor: getCssVarColor(`palette-neutral-300`),
        solidDisabledBg: getCssVarColor(`palette-neutral-50`)
      }),
      danger: _extends({}, defaultColors.danger, createLightModeVariantVariables("danger")),
      info: _extends({}, defaultColors.info, createLightModeVariantVariables("info")),
      success: _extends({}, defaultColors.success, createLightModeVariantVariables("success")),
      warning: _extends({}, defaultColors.warning, createLightModeVariantVariables("warning"), {
        solidColor: getCssVarColor(`palette-warning-800`),
        solidBg: getCssVarColor(`palette-warning-200`),
        solidHoverBg: getCssVarColor(`palette-warning-300`),
        solidActiveBg: getCssVarColor(`palette-warning-400`),
        solidDisabledColor: getCssVarColor(`palette-warning-200`),
        solidDisabledBg: getCssVarColor(`palette-warning-50`),
        softColor: getCssVarColor(`palette-warning-800`),
        softBg: getCssVarColor(`palette-warning-50`),
        softHoverBg: getCssVarColor(`palette-warning-100`),
        softActiveBg: getCssVarColor(`palette-warning-200`),
        softDisabledColor: getCssVarColor(`palette-warning-200`),
        softDisabledBg: getCssVarColor(`palette-warning-50`),
        outlinedColor: getCssVarColor(`palette-warning-800`),
        outlinedHoverBg: getCssVarColor(`palette-warning-50`),
        plainColor: getCssVarColor(`palette-warning-800`),
        plainHoverBg: getCssVarColor(`palette-warning-50`)
      }),
      common: {
        white: "#FFF",
        black: "#09090D"
      },
      text: {
        primary: getCssVarColor("palette-neutral-800"),
        secondary: getCssVarColor("palette-neutral-600"),
        tertiary: getCssVarColor("palette-neutral-500")
      },
      background: {
        body: getCssVarColor("palette-common-white"),
        surface: getCssVarColor("palette-common-white"),
        popup: getCssVarColor("palette-common-white"),
        level1: getCssVarColor("palette-neutral-50"),
        level2: getCssVarColor("palette-neutral-100"),
        level3: getCssVarColor("palette-neutral-200"),
        tooltip: getCssVarColor("palette-neutral-800"),
        backdrop: "rgba(255 255 255 / 0.5)"
      },
      divider: `rgba(${getCssVar(
        "palette-neutral-mainChannel",
        colorChannel(defaultColors.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.28)`,
      focusVisible: getCssVarColor("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "187 187 187"
  };
  const darkColorSystem = {
    palette: {
      mode: "dark",
      primary: _extends({}, defaultColors.primary, createDarkModeVariantVariables("primary")),
      neutral: _extends({}, defaultColors.neutral, {
        plainColor: getCssVarColor(`palette-neutral-200`),
        plainHoverColor: getCssVarColor(`palette-neutral-50`),
        plainHoverBg: getCssVarColor(`palette-neutral-800`),
        plainActiveBg: getCssVarColor(`palette-neutral-700`),
        plainDisabledColor: getCssVarColor(`palette-neutral-700`),
        outlinedColor: getCssVarColor(`palette-neutral-200`),
        outlinedBorder: getCssVarColor(`palette-neutral-800`),
        outlinedHoverColor: getCssVarColor(`palette-neutral-50`),
        outlinedHoverBg: getCssVarColor(`palette-neutral-800`),
        outlinedHoverBorder: getCssVarColor(`palette-neutral-700`),
        outlinedActiveBg: getCssVarColor(`palette-neutral-800`),
        outlinedDisabledColor: getCssVarColor(`palette-neutral-800`),
        outlinedDisabledBorder: getCssVarColor(`palette-neutral-800`),
        softColor: getCssVarColor(`palette-neutral-200`),
        softBg: getCssVarColor(`palette-neutral-800`),
        softHoverColor: getCssVarColor(`palette-neutral-50`),
        softHoverBg: getCssVarColor(`palette-neutral-700`),
        softActiveBg: getCssVarColor(`palette-neutral-600`),
        softDisabledColor: getCssVarColor(`palette-neutral-700`),
        softDisabledBg: getCssVarColor(`palette-neutral-900`),
        solidColor: getCssVarColor(`palette-common-white`),
        solidBg: getCssVarColor(`palette-neutral-600`),
        solidHoverBg: getCssVarColor(`palette-neutral-700`),
        solidActiveBg: getCssVarColor(`palette-neutral-800`),
        solidDisabledColor: getCssVarColor(`palette-neutral-700`),
        solidDisabledBg: getCssVarColor(`palette-neutral-900`)
      }),
      danger: _extends({}, defaultColors.danger, createDarkModeVariantVariables("danger")),
      info: _extends({}, defaultColors.info, createDarkModeVariantVariables("info")),
      success: _extends({}, defaultColors.success, createDarkModeVariantVariables("success"), {
        solidColor: "#fff",
        solidBg: getCssVarColor(`palette-success-600`),
        solidHoverBg: getCssVarColor(`palette-success-700`),
        solidActiveBg: getCssVarColor(`palette-success-800`)
      }),
      warning: _extends({}, defaultColors.warning, createDarkModeVariantVariables("warning"), {
        solidColor: getCssVarColor(`palette-common-black`),
        solidBg: getCssVarColor(`palette-warning-300`),
        solidHoverBg: getCssVarColor(`palette-warning-400`),
        solidActiveBg: getCssVarColor(`palette-warning-500`)
      }),
      common: {
        white: "#FFF",
        black: "#09090D"
      },
      text: {
        primary: getCssVarColor("palette-neutral-100"),
        secondary: getCssVarColor("palette-neutral-300"),
        tertiary: getCssVarColor("palette-neutral-400")
      },
      background: {
        body: getCssVarColor("palette-neutral-900"),
        surface: getCssVarColor("palette-common-black"),
        popup: getCssVarColor("palette-neutral-900"),
        level1: getCssVarColor("palette-neutral-800"),
        level2: getCssVarColor("palette-neutral-700"),
        level3: getCssVarColor("palette-neutral-600"),
        tooltip: getCssVarColor("palette-neutral-600"),
        backdrop: `rgba(${getCssVar(
          "palette-neutral-darkChannel",
          colorChannel(defaultColors.neutral[800])
          // should be the same index as in `attachColorChannels`
        )} / 0.5)`
      },
      divider: `rgba(${getCssVar(
        "palette-neutral-mainChannel",
        colorChannel(defaultColors.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.24)`,
      focusVisible: getCssVarColor("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "0 0 0"
  };
  const fontFamilyFallback = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  const fontFamily = _extends({
    body: `"Public Sans", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    display: `"Public Sans", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    fallback: fontFamilyFallback
  }, scalesInput.fontFamily);
  const fontWeight = _extends({
    xs: 200,
    sm: 300,
    md: 500,
    lg: 600,
    xl: 700,
    xl2: 800,
    xl3: 900
  }, scalesInput.fontWeight);
  const fontSize = _extends({
    xs3: "0.5rem",
    xs2: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xl2: "1.5rem",
    xl3: "1.875rem",
    xl4: "2.25rem",
    xl5: "3rem",
    xl6: "3.75rem",
    xl7: "4.5rem"
  }, scalesInput.fontSize);
  const lineHeight = _extends({
    sm: 1.25,
    md: 1.5,
    lg: 1.7
  }, scalesInput.lineHeight);
  const letterSpacing = _extends({
    sm: "-0.01em",
    md: "0.083em",
    lg: "0.125em"
  }, scalesInput.letterSpacing);
  const defaultScales = {
    colorSchemes: {
      light: lightColorSystem,
      dark: darkColorSystem
    },
    fontSize,
    fontFamily,
    fontWeight,
    focus: {
      thickness: "2px",
      selector: `&.${generateUtilityClass2("", "focusVisible")}, &:focus-visible`,
      default: {
        outlineOffset: `var(--focus-outline-offset, ${getCssVar("focus-thickness", (_scalesInput$focus$th = (_scalesInput$focus = scalesInput.focus) == null ? void 0 : _scalesInput$focus.thickness) != null ? _scalesInput$focus$th : "2px")})`,
        outline: `${getCssVar("focus-thickness", (_scalesInput$focus$th2 = (_scalesInput$focus2 = scalesInput.focus) == null ? void 0 : _scalesInput$focus2.thickness) != null ? _scalesInput$focus$th2 : "2px")} solid ${getCssVar("palette-focusVisible", defaultColors.primary[500])}`
      }
    },
    lineHeight,
    letterSpacing,
    radius: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px"
    },
    shadow: {
      xs: `${getCssVar("shadowRing", (_scalesInput$colorSch = (_scalesInput$colorSch2 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch3 = _scalesInput$colorSch2.light) == null ? void 0 : _scalesInput$colorSch3.shadowRing) != null ? _scalesInput$colorSch : lightColorSystem.shadowRing)}, 0 1px 2px 0 rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch4 = (_scalesInput$colorSch5 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch6 = _scalesInput$colorSch5.light) == null ? void 0 : _scalesInput$colorSch6.shadowChannel) != null ? _scalesInput$colorSch4 : lightColorSystem.shadowChannel)} / 0.12)`,
      sm: `${getCssVar("shadowRing", (_scalesInput$colorSch7 = (_scalesInput$colorSch8 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch9 = _scalesInput$colorSch8.light) == null ? void 0 : _scalesInput$colorSch9.shadowRing) != null ? _scalesInput$colorSch7 : lightColorSystem.shadowRing)}, 0.3px 0.8px 1.1px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch10 = (_scalesInput$colorSch11 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch12 = _scalesInput$colorSch11.light) == null ? void 0 : _scalesInput$colorSch12.shadowChannel) != null ? _scalesInput$colorSch10 : lightColorSystem.shadowChannel)} / 0.11), 0.5px 1.3px 1.8px -0.6px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch13 = (_scalesInput$colorSch14 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch15 = _scalesInput$colorSch14.light) == null ? void 0 : _scalesInput$colorSch15.shadowChannel) != null ? _scalesInput$colorSch13 : lightColorSystem.shadowChannel)} / 0.18), 1.1px 2.7px 3.8px -1.2px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch16 = (_scalesInput$colorSch17 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch18 = _scalesInput$colorSch17.light) == null ? void 0 : _scalesInput$colorSch18.shadowChannel) != null ? _scalesInput$colorSch16 : lightColorSystem.shadowChannel)} / 0.26)`,
      md: `${getCssVar("shadowRing", (_scalesInput$colorSch19 = (_scalesInput$colorSch20 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch21 = _scalesInput$colorSch20.light) == null ? void 0 : _scalesInput$colorSch21.shadowRing) != null ? _scalesInput$colorSch19 : lightColorSystem.shadowRing)}, 0.3px 0.8px 1.1px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch22 = (_scalesInput$colorSch23 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch24 = _scalesInput$colorSch23.light) == null ? void 0 : _scalesInput$colorSch24.shadowChannel) != null ? _scalesInput$colorSch22 : lightColorSystem.shadowChannel)} / 0.12), 1.1px 2.8px 3.9px -0.4px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch25 = (_scalesInput$colorSch26 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch27 = _scalesInput$colorSch26.light) == null ? void 0 : _scalesInput$colorSch27.shadowChannel) != null ? _scalesInput$colorSch25 : lightColorSystem.shadowChannel)} / 0.17), 2.4px 6.1px 8.6px -0.8px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch28 = (_scalesInput$colorSch29 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch30 = _scalesInput$colorSch29.light) == null ? void 0 : _scalesInput$colorSch30.shadowChannel) != null ? _scalesInput$colorSch28 : lightColorSystem.shadowChannel)} / 0.23), 5.3px 13.3px 18.8px -1.2px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch31 = (_scalesInput$colorSch32 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch33 = _scalesInput$colorSch32.light) == null ? void 0 : _scalesInput$colorSch33.shadowChannel) != null ? _scalesInput$colorSch31 : lightColorSystem.shadowChannel)} / 0.29)`,
      lg: `${getCssVar("shadowRing", (_scalesInput$colorSch34 = (_scalesInput$colorSch35 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch36 = _scalesInput$colorSch35.light) == null ? void 0 : _scalesInput$colorSch36.shadowRing) != null ? _scalesInput$colorSch34 : lightColorSystem.shadowRing)}, 0.3px 0.8px 1.1px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch37 = (_scalesInput$colorSch38 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch39 = _scalesInput$colorSch38.light) == null ? void 0 : _scalesInput$colorSch39.shadowChannel) != null ? _scalesInput$colorSch37 : lightColorSystem.shadowChannel)} / 0.11), 1.8px 4.5px 6.4px -0.2px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch40 = (_scalesInput$colorSch41 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch42 = _scalesInput$colorSch41.light) == null ? void 0 : _scalesInput$colorSch42.shadowChannel) != null ? _scalesInput$colorSch40 : lightColorSystem.shadowChannel)} / 0.13), 3.2px 7.9px 11.2px -0.4px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch43 = (_scalesInput$colorSch44 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch45 = _scalesInput$colorSch44.light) == null ? void 0 : _scalesInput$colorSch45.shadowChannel) != null ? _scalesInput$colorSch43 : lightColorSystem.shadowChannel)} / 0.16), 4.8px 12px 17px -0.5px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch46 = (_scalesInput$colorSch47 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch48 = _scalesInput$colorSch47.light) == null ? void 0 : _scalesInput$colorSch48.shadowChannel) != null ? _scalesInput$colorSch46 : lightColorSystem.shadowChannel)} / 0.19), 7px 17.5px 24.7px -0.7px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch49 = (_scalesInput$colorSch50 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch51 = _scalesInput$colorSch50.light) == null ? void 0 : _scalesInput$colorSch51.shadowChannel) != null ? _scalesInput$colorSch49 : lightColorSystem.shadowChannel)} / 0.21)`,
      xl: `${getCssVar("shadowRing", (_scalesInput$colorSch52 = (_scalesInput$colorSch53 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch54 = _scalesInput$colorSch53.light) == null ? void 0 : _scalesInput$colorSch54.shadowRing) != null ? _scalesInput$colorSch52 : lightColorSystem.shadowRing)}, 0.3px 0.8px 1.1px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch55 = (_scalesInput$colorSch56 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch57 = _scalesInput$colorSch56.light) == null ? void 0 : _scalesInput$colorSch57.shadowChannel) != null ? _scalesInput$colorSch55 : lightColorSystem.shadowChannel)} / 0.11), 1.8px 4.5px 6.4px -0.2px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch58 = (_scalesInput$colorSch59 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch60 = _scalesInput$colorSch59.light) == null ? void 0 : _scalesInput$colorSch60.shadowChannel) != null ? _scalesInput$colorSch58 : lightColorSystem.shadowChannel)} / 0.13), 3.2px 7.9px 11.2px -0.4px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch61 = (_scalesInput$colorSch62 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch63 = _scalesInput$colorSch62.light) == null ? void 0 : _scalesInput$colorSch63.shadowChannel) != null ? _scalesInput$colorSch61 : lightColorSystem.shadowChannel)} / 0.16), 4.8px 12px 17px -0.5px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch64 = (_scalesInput$colorSch65 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch66 = _scalesInput$colorSch65.light) == null ? void 0 : _scalesInput$colorSch66.shadowChannel) != null ? _scalesInput$colorSch64 : lightColorSystem.shadowChannel)} / 0.19), 7px 17.5px 24.7px -0.7px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch67 = (_scalesInput$colorSch68 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch69 = _scalesInput$colorSch68.light) == null ? void 0 : _scalesInput$colorSch69.shadowChannel) != null ? _scalesInput$colorSch67 : lightColorSystem.shadowChannel)} / 0.21), 10.2px 25.5px 36px -0.9px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch70 = (_scalesInput$colorSch71 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch72 = _scalesInput$colorSch71.light) == null ? void 0 : _scalesInput$colorSch72.shadowChannel) != null ? _scalesInput$colorSch70 : lightColorSystem.shadowChannel)} / 0.24), 14.8px 36.8px 52.1px -1.1px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch73 = (_scalesInput$colorSch74 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch75 = _scalesInput$colorSch74.light) == null ? void 0 : _scalesInput$colorSch75.shadowChannel) != null ? _scalesInput$colorSch73 : lightColorSystem.shadowChannel)} / 0.27), 21px 52.3px 74px -1.2px rgba(${getCssVar("shadowChannel", (_scalesInput$colorSch76 = (_scalesInput$colorSch77 = scalesInput.colorSchemes) == null ? void 0 : (_scalesInput$colorSch78 = _scalesInput$colorSch77.light) == null ? void 0 : _scalesInput$colorSch78.shadowChannel) != null ? _scalesInput$colorSch76 : lightColorSystem.shadowChannel)} / 0.29)`
    },
    zIndex: {
      badge: 1,
      table: 10,
      popup: 1e3,
      modal: 1300,
      tooltip: 1500
    },
    typography: {
      display1: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
        fontSize: getCssVar(`fontSize-xl7, ${fontSize.xl7}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        letterSpacing: getCssVar(`letterSpacing-sm, ${letterSpacing.sm}`),
        color: getCssVar("palette-text-primary", lightColorSystem.palette.text.primary)
      },
      display2: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
        fontSize: getCssVar(`fontSize-xl6, ${fontSize.xl6}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        letterSpacing: getCssVar(`letterSpacing-sm, ${letterSpacing.sm}`),
        color: getCssVar("palette-text-primary", lightColorSystem.palette.text.primary)
      },
      h1: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-xl5, ${fontSize.xl5}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        letterSpacing: getCssVar(`letterSpacing-sm, ${letterSpacing.sm}`),
        color: getCssVar("palette-text-primary", lightColorSystem.palette.text.primary)
      },
      h2: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
        fontSize: getCssVar(`fontSize-xl4, ${fontSize.xl4}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        letterSpacing: getCssVar(`letterSpacing-sm, ${letterSpacing.sm}`),
        color: getCssVar("palette-text-primary", lightColorSystem.palette.text.primary)
      },
      h3: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-xl3, ${fontSize.xl3}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
        color: getCssVar("palette-text-primary", lightColorSystem.palette.text.primary)
      },
      h4: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-xl2, ${fontSize.xl2}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar("palette-text-primary", lightColorSystem.palette.text.primary)
      },
      h5: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-xl, ${fontSize.xl}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar("palette-text-primary", lightColorSystem.palette.text.primary)
      },
      h6: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
        fontSize: getCssVar(`fontSize-lg, ${fontSize.lg}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar("palette-text-primary", lightColorSystem.palette.text.primary)
      },
      body1: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-md, ${fontSize.md}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar("palette-text-primary", lightColorSystem.palette.text.primary)
      },
      body2: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-sm, ${fontSize.sm}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar("palette-text-secondary", lightColorSystem.palette.text.secondary)
      },
      body3: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-xs, ${fontSize.xs}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar("palette-text-tertiary", lightColorSystem.palette.text.tertiary)
      },
      body4: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-xs2, ${fontSize.xs2}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar("palette-text-tertiary", lightColorSystem.palette.text.tertiary)
      },
      body5: {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
        fontSize: getCssVar(`fontSize-xs3, ${fontSize.xs3}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
        color: getCssVar("palette-text-tertiary", lightColorSystem.palette.text.tertiary)
      }
    }
  };
  const _ref2 = scalesInput ? deepmerge(defaultScales, scalesInput) : defaultScales, {
    colorSchemes
  } = _ref2, mergedScales = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  const theme = _extends({
    colorSchemes
  }, mergedScales, {
    breakpoints: createBreakpoints(breakpoints != null ? breakpoints : {}),
    components: deepmerge({
      // TODO: find a way to abstract SvgIcon out of @mui/material
      MuiSvgIcon: {
        defaultProps: {
          fontSize: "xl"
        },
        styleOverrides: {
          root: ({
            ownerState,
            theme: themeProp
          }) => {
            var _themeProp$vars$palet;
            const instanceFontSize = ownerState.instanceFontSize;
            return _extends({
              color: "var(--Icon-color)",
              margin: "var(--Icon-margin)"
            }, ownerState.fontSize && ownerState.fontSize !== "inherit" && {
              fontSize: `var(--Icon-fontSize, ${themeProp.vars.fontSize[ownerState.fontSize]})`
            }, ownerState.color && ownerState.color !== "inherit" && ownerState.color !== "context" && themeProp.vars.palette[ownerState.color] && {
              color: `rgba(${(_themeProp$vars$palet = themeProp.vars.palette[ownerState.color]) == null ? void 0 : _themeProp$vars$palet.mainChannel} / 1)`
            }, ownerState.color === "context" && {
              color: themeProp.vars.palette.text.secondary
            }, instanceFontSize && instanceFontSize !== "inherit" && {
              "--Icon-fontSize": themeProp.vars.fontSize[instanceFontSize]
            });
          }
        }
      }
    }, componentsInput),
    cssVarPrefix,
    getCssVar,
    spacing: createSpacing(spacing),
    colorInversionConfig: {
      soft: ["plain", "outlined", "soft", "solid"],
      solid: ["plain", "outlined", "soft", "solid"]
    }
  });
  function attachColorChannels(supportedColorScheme, palette) {
    Object.keys(palette).forEach((key) => {
      const channelMapping = {
        main: "500",
        light: "200",
        dark: "800"
      };
      if (supportedColorScheme === "dark") {
        channelMapping.main = 400;
      }
      if (!palette[key].mainChannel && palette[key][channelMapping.main]) {
        palette[key].mainChannel = colorChannel(palette[key][channelMapping.main]);
      }
      if (!palette[key].lightChannel && palette[key][channelMapping.light]) {
        palette[key].lightChannel = colorChannel(palette[key][channelMapping.light]);
      }
      if (!palette[key].darkChannel && palette[key][channelMapping.dark]) {
        palette[key].darkChannel = colorChannel(palette[key][channelMapping.dark]);
      }
    });
  }
  Object.entries(theme.colorSchemes).forEach(([supportedColorScheme, colorSystem]) => {
    attachColorChannels(supportedColorScheme, colorSystem.palette);
  });
  const parserConfig = {
    prefix: cssVarPrefix,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2
  };
  const {
    vars: themeVars,
    generateCssVars
  } = prepareCssVars_default(
    // @ts-ignore property truDark is missing from colorSchemes
    _extends({
      colorSchemes
    }, mergedScales),
    parserConfig
  );
  theme.vars = themeVars;
  theme.generateCssVars = generateCssVars;
  theme.unstable_sxConfig = _extends({}, sxConfig_default, themeOptions == null ? void 0 : themeOptions.unstable_sxConfig);
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  theme.getColorSchemeSelector = (colorScheme) => colorScheme === "light" ? "&" : `&[data-joy-color-scheme="${colorScheme}"], [data-joy-color-scheme="${colorScheme}"] &`;
  const createVariantInput = {
    getCssVar,
    palette: theme.colorSchemes.light.palette
  };
  theme.variants = deepmerge({
    plain: createVariant("plain", createVariantInput),
    plainHover: createVariant("plainHover", createVariantInput),
    plainActive: createVariant("plainActive", createVariantInput),
    plainDisabled: createVariant("plainDisabled", createVariantInput),
    outlined: createVariant("outlined", createVariantInput),
    outlinedHover: createVariant("outlinedHover", createVariantInput),
    outlinedActive: createVariant("outlinedActive", createVariantInput),
    outlinedDisabled: createVariant("outlinedDisabled", createVariantInput),
    soft: createVariant("soft", createVariantInput),
    softHover: createVariant("softHover", createVariantInput),
    softActive: createVariant("softActive", createVariantInput),
    softDisabled: createVariant("softDisabled", createVariantInput),
    solid: createVariant("solid", createVariantInput),
    solidHover: createVariant("solidHover", createVariantInput),
    solidActive: createVariant("solidActive", createVariantInput),
    solidDisabled: createVariant("solidDisabled", createVariantInput)
  }, variantsInput);
  theme.palette = _extends({}, theme.colorSchemes.light.palette, {
    colorScheme: "light"
  });
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar2;
  theme.colorInversion = typeof colorInversionInput === "function" ? colorInversionInput : deepmerge({
    soft: createSoftInversion(theme, true),
    solid: createSolidInversion(theme, true)
  }, colorInversionInput || {}, {
    clone: false
  });
  return theme;
}

// node_modules/@mui/joy/styles/defaultTheme.js
var defaultTheme = extendTheme();
var defaultTheme_default = defaultTheme;

// node_modules/@mui/joy/styles/identifier.js
var identifier_default = "$$joy";

export {
  generateUtilityClass2 as generateUtilityClass,
  generateUtilityClasses2 as generateUtilityClasses,
  createSoftInversion,
  createSolidInversion,
  defaultTheme_default,
  identifier_default
};
//# sourceMappingURL=chunk-AALCROKH.js.map
