import { NavbarIcons } from './NavbarIcons';
import { NavbarTabs } from './NavbarTabs';

export interface NavbarProps {
  view?: 'tabs' | 'icons';
}

export const Navbar = ({ view = 'tabs' }: NavbarProps) => {
  return view === 'tabs' ? <NavbarTabs /> : <NavbarIcons />;
};
