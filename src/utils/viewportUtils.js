import { BREAKPOINT } from "../constants/constant";

export const getViewportType = () => {
  const width = window.innerWidth;
  if (width <= BREAKPOINT.MOBILE) return 'MOBILE';
  if (width <= BREAKPOINT.TABLET) return 'TABLET';
  return 'DESKTOP';
};
