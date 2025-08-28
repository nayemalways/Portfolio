import DockApp from '../ui/dock';
import { DockIcon, EditIcon, GithubIcon, HomeIcon } from 'lucide-react';
 
 const Navbar = () => {
  return (
    <div>
       <DockApp>
          <DockIcon href="/home">
            <HomeIcon className="h-full w-full p-2 text-zinc-700 dark:text-zinc-300" />
          </DockIcon>
          <DockIcon href="/edit">
            <EditIcon className="h-full w-full p-2 text-zinc-700 dark:text-zinc-300" />
          </DockIcon>
          <DockIcon href="https://github.com">
            <GithubIcon className="h-full w-full p-2 text-zinc-700 dark:text-zinc-300" />
          </DockIcon>
      </DockApp>
    </div>
  );
 };
 
 export default Navbar;