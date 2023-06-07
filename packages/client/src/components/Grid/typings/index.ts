export type AlignContentType =
  | 'top'
  | 'middle'
  | 'bottom';

export type JustifyContentType =
  | 'left'
  | 'center'
  | 'right'
  | 'around'
  | 'between';

export type BreakpointsType =
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';

export type BreakpointsObjectType = {
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  xxl?: string | number;
};

export type BreakpointsObjectKeysType =
  keyof BreakpointsObjectType;

export type ResponsivePropertyType =
  | string
  | number
  | BreakpointsObjectType;

export type ContainerBreakpointType =
  | keyof BreakpointsType
  | 'full';
