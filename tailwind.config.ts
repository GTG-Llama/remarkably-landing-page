import type { Config } from "tailwindcss";


export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				serif: ['ui-serif', 'Georgia', 'serif'],
				mono: ['ui-monospace', 'SF Mono', 'Monaco', 'monospace'],
			},
			colors: {
				// Tech-forward color palette
				tech: {
					// Deep blues
					slate: {
						900: '#1e293b',
						800: '#334155',
						700: '#475569',
						600: '#64748b',
						500: '#94a3b8',
						400: '#cbd5e1',
						300: '#e2e8f0',
						200: '#f1f5f9',
						100: '#f8fafc',
					},
					// Tech purples
					purple: {
						600: '#6366f1',
						500: '#8b5cf6',
						400: '#a78bfa',
						300: '#c4b5fd',
						200: '#ddd6fe',
						100: '#ede9fe',
					},
					// Education golds
					gold: {
						600: '#d97706',
						500: '#f59e0b',
						400: '#fbbf24',
						300: '#fcd34d',
						200: '#fde68a',
						100: '#fef3c7',
					},
					// Neural network blues
					neural: {
						900: '#0f172a',
						800: '#1e293b',
						700: '#334155',
						600: '#475569',
						500: '#64748b',
						400: '#94a3b8',
					}
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				remarkably: {
					gold: '#A89165',
					red: '#FF3B30',
					lightgold: '#D4C095',
					darkgold: '#8A7548',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontSize: {
				// Typography scale for clear hierarchy
				'5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'4xl': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'3xl': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
				'2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.4' }],
				'lg': ['1.125rem', { lineHeight: '1.5' }],
				'base': ['1rem', { lineHeight: '1.6' }],
				'sm': ['0.875rem', { lineHeight: '1.5' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				// Custom animations for modern interactions
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-down': 'slide-down 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'neural-pulse': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.5)' },
					'100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.8)' }
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'neural-grid': 'url("data:image/svg+xml,%3csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3e%3cdefs%3e%3cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3e%3cpath d="m 60 0 l 0 60 l -60 0 z" fill="none" stroke="%236366f1" stroke-width="0.5" opacity="0.1"/%3e%3c/pattern%3e%3c/defs%3e%3crect width="100%25" height="100%25" fill="url(%23grid)"/%3e%3c/svg%3e")',
			},
			boxShadow: {
				'neural': '0 0 0 1px rgba(99, 102, 241, 0.1), 0 4px 16px rgba(99, 102, 241, 0.12)',
				'tech': '0 4px 24px rgba(30, 41, 59, 0.12)',
				'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;


