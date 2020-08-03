export const SPACING = {
  small: 5,
  default: 10,
  large: 20,
  xl: 40,
  '1.5xl': 60,
  '2xl': 80,
  '3xl': 120,
  '3.5xl': 140,
};

export function getSpacing(size = SPACING.default) {
  return `${size}px`;
}
