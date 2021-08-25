export interface IRoute {
  type: string;
  path: string;
  exact: boolean;
  component: React.FC;
  id: string;
}

export interface IRotueType {
  component: React.ReactNode;
  path: string;
  exact: boolean;
}
