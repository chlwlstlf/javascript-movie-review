import { BREAKPOINT } from "../constants/constant";

export const getViewportType = (width) => {
  if (width <= BREAKPOINT.MOBILE) return 'MOBILE';
  if (width <= BREAKPOINT.TABLET) return 'TABLET';
  return 'DESKTOP';
};
