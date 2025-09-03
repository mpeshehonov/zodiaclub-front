"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">Zodiaclab</Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
                  <Link href="#features">Почему мы</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
                  <Link href="#services">Услуги</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
                  <Link href="#experts">Эксперты</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
                  <Link href="#reviews">Отзывы</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/auth/signin">Вход</Link>
          </Button>
          <Button asChild>
            <Link href="#cta">Регистрация</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}


