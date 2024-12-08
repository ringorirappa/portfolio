'use client';

import { FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ComputerIcon, MoonIcon, SunIcon } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || theme === undefined) {
    return;
  }

  const className = 'hover:bg-primary/10 text-muted-foreground hover:text-foreground group flex h-8 flex-row items-center space-x-2 rounded-md px-2 text-sm';

  return (
    <div>
      <ToggleGroup className="rounded-full border p-1 bg-gray-300 dark:bg-gray-600" size="sm" type="single" value={theme} onValueChange={(value) => setTheme(value)}>
        <ToggleGroupItem className="rounded-full" value="light" aria-label="Toggle light">
          <SunIcon size={16} />
        </ToggleGroupItem>
        <ToggleGroupItem className="rounded-full" value="dark" aria-label="Toggle dark">
          <MoonIcon size={16} />
        </ToggleGroupItem>
        <ToggleGroupItem className="rounded-full" value="system" aria-label="Toggle system">
          <ComputerIcon size={16} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
