'use client';

import * as React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavBar() {
  const handleLogout = async (evt: React.MouseEvent) => {
    evt.preventDefault();
    await signOut();
  };
  return (
    <header className="w-full flex justify-between">
      <NavigationMenu viewport={false} className="mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/dashboard">Dashboard</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu viewport={false} className="px-5">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/signup">Sign Up</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/login">Log In</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="" onClick={handleLogout}>
              Log Out
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
