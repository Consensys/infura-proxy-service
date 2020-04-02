import styled from "@emotion/styled";
import css, { get } from "@styled-system/css";
import { createShouldForwardProp } from "@styled-system/should-forward-prop";
import space from "@styled-system/space";
import color from "@styled-system/color";

const shouldForwardProp = createShouldForwardProp([
  ...space.propNames,
  ...color.propNames
]);

const sx = props => css(props.sx)(props.theme);
const base = props => css(props.__css)(props.theme);

/**
 * @function effects
 * @description
 */
const effects = ({ theme, effects, __effectKey = "effects" }) =>
  Array.isArray(effects)
    ? effects.map(effect =>
        css(get(theme, __effectKey + "." + effect, get(theme, effect)))
      )
    : null;
/**
 * @function variant
 * @description
 */
const variant = ({ theme, variant, __themeKey = "variants" }) =>
  css(get(theme, __themeKey + "." + variant, get(theme, variant)));
/**
 * @function variants
 * @description
 */
const variants = ({ theme, variants, __variantsKey = "variants" }) =>
  Array.isArray(variants)
    ? variants.map(variant =>
        css(get(theme, __variantsKey + "." + variant, get(theme, variant)))
      )
    : null;
/**
 * @function variantsShorthand
 * @description
 */
const variantsShorthand = ({ theme, __effectKey = "common", ...props }) =>
  Object.keys(props).map(selector => {
    return props[selector]
      ? css(get(theme, `effects.${__effectKey}.${selector}`))
      : null;
  });
/**
 * @function shorthand
 * @description
 */
const shorthand = ({ theme, ...props }) =>
  Object.keys(props).map(selector =>
    props[selector] ? css(get(theme, `effects.common.${selector}`)) : null
  );

/**
 * @function gradient
 * @description
 */
const gradient = ({ theme, gradient, direction = 0 }) =>
  gradient
    ? css({
        backgroundImage: `linear-gradient(${direction}deg, ${get(
          theme,
          `gradients.${gradient}`
        )})`
      })
    : null;

export const Box = styled("div", {
  shouldForwardProp
})(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
    position: "relative"
  },
  gradient,
  variants,
  variant,
  effects,
  shorthand,
  variantsShorthand,
  gradient,
  space,
  color,
  base,
  sx,
  props => props.css
);

export default Box;
