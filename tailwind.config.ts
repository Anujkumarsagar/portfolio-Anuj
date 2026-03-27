import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          900: "#111111",
          800: "#222222",
          700: "#333333",
          600: "#444444",
          500: "#666666",
          400: "#888888",
          300: "#AAAAAA",
          200: "#CCCCCC",
          100: "#EEEEEE",
        },
      },
      boxShadow: {
        'elevated': '0 10px 30px rgba(0,0,0,0.06)',
        'ring': '0 0 0 2px rgba(109,40,217,0.15)',
        // Equal spread shadows - perfect symmetry all around
        // Use with shadow color utilities like: shadow-equal-xs shadow-red-200
        'equal-xs': '0 0 2px 1px',
        'equal-sm': '0 0 4px 2px',
        'equal': '0 0 8px 3px',
        'equal-md': '0 0 12px 4px',
        'equal-lg': '0 0 16px 5px',
        'equal-xl': '0 0 24px 6px',
        'equal-2xl': '0 0 32px 8px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "3xl": "1.5rem",
        // lg: "var(--radius)",
        // md: "calc(var(--radius) - 2px)",
        // sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-space-mono)"],
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const squircleUtilities: Record<string, any> = {}
      
      // Amplification factor - adjust this value to control the radius increase
      // 1.3 = 30% increase, 1.4 = 40% increase, 1.5 = 50% increase
      // Test different values to find what looks best in your design
      const AMPLIFICATION_FACTOR = 1.8 // 80% increase - more balanced
 
      // Generate squircle utilities from 1 to 100
      for (let i = 1; i <= 100; i++) {
        const amplifiedValue = Math.round(i * AMPLIFICATION_FACTOR)
        
        // All corners: squircle-a-20

        squircleUtilities[`.squircle-a-${i}`] = {
          'border-radius': `${i}px`,
          'corner-shape': 'round',
          '@supports (corner-shape: squircle)': {
            'border-radius': `${amplifiedValue}px`,
            'corner-shape': 'squircle',
          }
        }
 
        // Top corners: squircle-t-20
        squircleUtilities[`.squircle-t-${i}`] = {
          'border-top-left-radius': `${i}px`,
          'border-top-right-radius': `${i}px`,
          'corner-shape': 'round',
          '@supports (corner-shape: squircle)': {
            'border-top-left-radius': `${amplifiedValue}px`,
            'border-top-right-radius': `${amplifiedValue}px`,
            'corner-shape': 'squircle',
          }
        }
 
        // Bottom corners: squircle-b-20
        squircleUtilities[`.squircle-b-${i}`] = {
          'border-bottom-left-radius': `${i}px`,
          'border-bottom-right-radius': `${i}px`,
          'corner-shape': 'round',
          '@supports (corner-shape: squircle)': {
            'border-bottom-left-radius': `${amplifiedValue}px`,
            'border-bottom-right-radius': `${amplifiedValue}px`,
            'corner-shape': 'squircle',
          }
        }
 
        // Left corners: squircle-l-20
        squircleUtilities[`.squircle-l-${i}`] = {
          'border-top-left-radius': `${i}px`,
          'border-bottom-left-radius': `${i}px`,
          'corner-shape': 'round',
          '@supports (corner-shape: squircle)': {
            'border-top-left-radius': `${amplifiedValue}px`,
            'border-bottom-left-radius': `${amplifiedValue}px`,
            'corner-shape': 'squircle',
          }
        }
 
        // Right corners: squircle-r-20
        squircleUtilities[`.squircle-r-${i}`] = {
          'border-top-right-radius': `${i}px`,
          'border-bottom-right-radius': `${i}px`,
          'corner-shape': 'round',
          '@supports (corner-shape: squircle)': {
            'border-top-right-radius': `${amplifiedValue}px`,
            'border-bottom-right-radius': `${amplifiedValue}px`,
            'corner-shape': 'squircle',
          }
        }
 
        // Top-left corner: squircle-tl-20
        squircleUtilities[`.squircle-tl-${i}`] = {
          'border-top-left-radius': `${i}px`,
          'corner-shape': 'round',
          '@supports (corner-shape: squircle)': {
            'border-top-left-radius': `${amplifiedValue}px`,
            'corner-shape': 'squircle',
          }
        }
 
        // Top-right corner: squircle-tr-20
        squircleUtilities[`.squircle-tr-${i}`] = {
          'border-top-right-radius': `${i}px`,
          'corner-shape': 'round',
          '@supports (corner-shape: squircle)': {
            'border-top-right-radius': `${amplifiedValue}px`,
            'corner-shape': 'squircle',
          }
        }
 
        // Bottom-left corner: squircle-bl-20
        squircleUtilities[`.squircle-bl-${i}`] = {
          'border-bottom-left-radius': `${i}px`,
          'corner-shape': 'round',
          '@supports (corner-shape: squircle)': {
            'border-bottom-left-radius': `${amplifiedValue}px`,
            'corner-shape': 'squircle',
          }
        }
 
        // Bottom-right corner: squircle-br-20
        squircleUtilities[`.squircle-br-${i}`] = {
          'border-bottom-right-radius': `${i}px`,
          'corner-shape': 'round',
          '@supports (corner-shape: squircle)': {
            'border-bottom-right-radius': `${amplifiedValue}px`,
            'corner-shape': 'squircle',
          }
        }
      }
 
      // Add special utilities for half and full (all corners)
      squircleUtilities['.squircle-a-half'] = {
        'border-radius': '50%',
        'corner-shape': 'round',
        '@supports (corner-shape: squircle)': {
          'border-radius': '50%',
          'corner-shape': 'squircle',
        }
      }
 
      squircleUtilities['.squircle-a-full'] = {
        'border-radius': '9999px',
        'corner-shape': 'round',
        '@supports (corner-shape: squircle)': {
          'border-radius': '9999px',
          'corner-shape': 'squircle',
        }
      }
 
      // Standalone squircle-curve utility (if someone wants to use it separately)
      squircleUtilities['.squircle-curve'] = {
        'corner-shape': 'round',
        '@supports (corner-shape: squircle)': {
          'corner-shape': 'squircle',
        }
      }
 
      addUtilities(squircleUtilities)
    })
  ],
}

export default config
