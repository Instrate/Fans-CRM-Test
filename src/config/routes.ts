import { Route } from '../functions/routes';

let Path: any = {
  root: '',
};

Path = {
  ...Path,
  api: {
    root: Route(Path.root, 'api'),
  },
};

Path.api = {
  ...Path.api,
  v1: {
    root: Route(Path.api.root, 'v1'),
  },
};

Path.api.v1 = {
  ...Path.api.v1,
  add_user: Route(Path.api.v1.root, 'add-user'),
  get_user: Route(Path.api.v1.root, 'get-user/:id'),
};

export { Path };
