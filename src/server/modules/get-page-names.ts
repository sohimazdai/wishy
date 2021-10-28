import { Request } from 'express';

export type PageNames = {
  mainPath: string,
  id: string | undefined,
};

export default function getPageNames(req: Request): PageNames {
  const path = req.path;

  const subPaths = path.split('');
  return {
    mainPath: subPaths[1],
    id: getSecondPath(subPaths[2]),
  };
}

function getSecondPath(secondPath: string): string | undefined {
  switch (secondPath) {
    case 'create':
    case undefined:
    case '':
      return undefined;
    default:
      return secondPath;
  };
};
