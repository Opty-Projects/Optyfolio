export interface NavLink {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'About' },
  { href: '/bsc', label: "Bachelor's" },
  { href: '/msc', label: "Master's" },
]
