import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeVariant = 'professional' | 'vibrant' | 'tint';
export type ThemeAppearance = 'light' | 'dark' | 'system';

interface ThemePreset {
  name: string;
  variant: ThemeVariant;
  primary: string;
  appearance: ThemeAppearance;
  radius: number;
}

export const themePresets: ThemePreset[] = [
  {
    name: "Discord Dark",
    variant: "vibrant",
    primary: "hsl(252, 87%, 53%)",
    appearance: "dark",
    radius: 0.75
  },
  {
    name: "Cyberpunk",
    variant: "vibrant",
    primary: "hsl(326, 100%, 50%)",
    appearance: "dark",
    radius: 0.5
  },
  {
    name: "Professional Light",
    variant: "professional",
    primary: "hsl(220, 70%, 50%)",
    appearance: "light",
    radius: 0.375
  },
  {
    name: "Forest",
    variant: "tint",
    primary: "hsl(150, 70%, 40%)",
    appearance: "dark",
    radius: 0.5
  },
  {
    name: "Ocean",
    variant: "tint",
    primary: "hsl(200, 80%, 45%)",
    appearance: "dark",
    radius: 0.625
  }
];

interface ThemeState {
  currentTheme: ThemePreset;
  setTheme: (theme: ThemePreset) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: themePresets[0],
      setTheme: (theme) => {
        set({ currentTheme: theme });
        // Update theme.json
        updateThemeFile(theme);
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

async function updateThemeFile(theme: ThemePreset) {
  try {
    await fetch('/api/theme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        variant: theme.variant,
        primary: theme.primary,
        appearance: theme.appearance,
        radius: theme.radius,
      }),
    });
    // Reload the page to apply new theme
    window.location.reload();
  } catch (error) {
    console.error('Failed to update theme:', error);
  }
}
