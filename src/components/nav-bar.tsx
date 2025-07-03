'use client';

import * as React from 'react';
import Link from 'next/link';
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavBar() {
  return (
    <header className='w-full flex justify-between'>
      <NavigationMenu viewport={false} className='mx-auto'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href='/'>Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/dashboard'>Dashboard</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu viewport={false} className='px-5'>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href='/signup'>Sign Up</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='/login'>Log In</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className='text-sm leading-none font-medium'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
