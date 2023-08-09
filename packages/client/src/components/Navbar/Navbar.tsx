import { NavbarIcons } from './views/icons/NavbarIcons';
import { NavbarTabs } from './views/tabs/NavbarTabs';

export interface NavbarProps {
  view?: 'tabs' | 'icons';
}

export const Navbar = ({ view = 'tabs' }: NavbarProps) => {
  return view === 'tabs' ? <NavbarTabs /> : <NavbarIcons />;
};
