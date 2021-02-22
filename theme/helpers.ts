export const BASE_SPACING_VALUE_IN_PX = 8;
export const REM_VALUE_IN_PX = 16;

const spacingSetup = (spaceValueInPx) => (multiplier) =>
  spaceValueInPx * multiplier;

const pxToRemSetup = (remValueInPx) => (px) => `${px / remValueInPx}rem`;

const spacingPxSetup = (spaceValueInPx) => (...values) => {
  const calculate = (value) => value * spaceValueInPx;

  if (values.length > 4) {
    throw new Error(
      `You should pass no more than 4 arguments. ${values.length} arguments were provided.`
    );
  }

  if (values.length === 1) {
    return `${calculate(values[0])}px`;
  }

  if (values.length === 2) {
    return `${calculate(values[0])}px ${calculate(values[1])}px`;
  }

  if (values.length === 3) {
    return `${calculate(values[0])}px ${calculate(values[1])}px ${calculate(
      values[2]
    )}px`;
  }

  return `${calculate(values[0])}px ${calculate(values[1])}px ${calculate(
    values[2]
  )}px ${calculate(values[3])}px`;
};

const spacingRemSetup = (spaceValueInPx, remValueInPx) => (...values) => {
  const calculate = (value) => spaceValueInPx * (value / remValueInPx);

  if (values.length > 4) {
    throw new Error(
      `You should pass no more than 4 arguments. ${values.length} arguments were provided.`
    );
  }

  if (values.length === 1) {
    return `${calculate(values[0])}rem`;
  }

  if (values.length === 2) {
    return `${calculate(values[0])}rem ${calculate(values[1])}rem`;
  }

  if (values.length === 3) {
    return `${calculate(values[0])}rem ${calculate(values[1])}rem ${calculate(
      values[2]
    )}rem`;
  }

  return `${calculate(values[0])}rem ${calculate(values[1])}rem ${calculate(
    values[2]
  )}rem ${calculate(values[3])}rem`;
};

/**
 * Receives 1 number an returns the calculated spacing value (unitless).
 *
 * @type {(multiplier: number) => number}
 */
export const spacing = spacingSetup(BASE_SPACING_VALUE_IN_PX);

/**
 * Receives from 1 to 4 numbers an returns calculated spacing values in px.
 *
 * @type {(...values: number[]) => string}
 *
 * @example
 * spacingPx(1);
 * // 8px
 *
 * spacingPx(1, 2);
 * // 8px 16px
 *
 * spacingPx(1, 2, 3);
 * // 8px 16px 24px
 *
 * spacingPx(1, 2, 3, 4);
 * // 8px 16px 24px 32px
 */
export const spacingPx = spacingPxSetup(BASE_SPACING_VALUE_IN_PX);

/**
 * Receives from 1 to 4 numbers an returns calculated spacing values in rem.
 *
 * @type {(...values: number[]) => string}
 *
 * @example
 * spacingRem(1);
 * // 0.5rem
 *
 * spacingRem(1, 2);
 * // 0.5rem 1rem
 *
 * spacingRem(1, 2, 3);
 * // 0.5rem 1rem 1.5rem
 *
 * spacingRem(1, 2, 3, 4);
 * // 0.5rem 1rem 1.5rem 2rem
 */
export const spacingRem = spacingRemSetup(
  BASE_SPACING_VALUE_IN_PX,
  REM_VALUE_IN_PX
);

/**
 * Transform a px value to rem.
 *
 * @type {(px: number) => string}
 *
 * @example
 * pxToRem(16);
 * // "1rem"
 *
 * pxToRem(20);
 * // "1.5rem"
 */
export const pxToRem = pxToRemSetup(REM_VALUE_IN_PX);
