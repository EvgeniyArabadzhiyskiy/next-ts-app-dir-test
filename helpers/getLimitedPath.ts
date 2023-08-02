export const getLimitedPath = (pathname: string | null, limitedRoutes: string[]) => {
  if (pathname) {
    return limitedRoutes.includes(pathname);
  }
  return null
};
