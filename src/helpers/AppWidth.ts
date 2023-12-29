export const AppWidth = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
};

export const IS_MOBILE = window.innerWidth < AppWidth.tablet;
export const IS_TABLET = window.innerWidth >= AppWidth.tablet && window.innerWidth < AppWidth.desktop;
export const IS_DESKTOP = window.innerWidth >= AppWidth.desktop && window.innerWidth < AppWidth.largeDesktop;
export const IS_LARGE_DESKTOP = window.innerWidth >= AppWidth.largeDesktop;
