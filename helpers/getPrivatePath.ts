export const getPrivatePath = (pathname: string | null, privateRoutes: string[]) => {
  if (pathname) {
    const filtredPath = pathname.slice(1);

    return privateRoutes.find((path: string) => {
      if (path.length !== 1) {
        return filtredPath?.startsWith(path.slice(1));
      } else {
        return pathname === path;
      }
    });
  }

  return null;
};
