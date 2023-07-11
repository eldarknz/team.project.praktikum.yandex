import {
  BreakpointsObjectType,
  BreakpointsObjectKeysType,
  ResponsivePropertyType,
} from '../typings';

export function getClassNames(
  props: Record<string, ResponsivePropertyType | undefined>,
  styles: Record<string, string>,
) {
  const classNames: string[] = [];

  Object.keys(props).forEach(name => {
    const prop = props[name];

    if (!prop && prop !== 0) {
      return;
    }

    if (typeof prop !== 'object') {
      classNames.push(styles[`${name}-${prop}`]);
      return;
    }

    (Object.keys(prop) as BreakpointsObjectKeysType[]).forEach(breakpoint => {
      if (prop[breakpoint] === null) {
        return;
      }
      const value = prop[breakpoint] as BreakpointsObjectType;
      classNames.push(styles[`${name}-${breakpoint}-${value}`]);
    });
  });

  return classNames;
}
