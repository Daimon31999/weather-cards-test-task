export interface IWrapperProps {
  children: React.ReactNode;
}

export interface IRoutesProps {
  name: string;
  path: string;
  icon?: JSX.Element;
  Component: React.FC;
  exact?: boolean;
  restricted?: boolean;
}

export interface IScoreConfig {
  maxValue: number;
  step: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IObjectLiteral<T = any> {
  [key: string]: T;
}
