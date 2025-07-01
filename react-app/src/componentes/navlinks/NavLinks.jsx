import Link from 'next/link';

const links = [
  { href: '/frontend', label: 'Front-end' },
  { href: '/backend', label: 'Back-end' },
  { href: '/mobile', label: 'Mobile' },
  { href: '/pageBingo', label: 'Bingo' },
];

const NavLinks = () => (
  <ul>
    {links.map(({ href, label }) => (
      <li key={href}>
        <Link href={href}>{label}</Link>
      </li>
    ))}
  </ul>
);

export default NavLinks;
// This component generates a list of navigation links based on the provided array.
// It uses the Next.js Link component for client-side navigation.