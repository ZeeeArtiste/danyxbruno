'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import ArrowIcon from '../ArrowIcon/ArrowIcon';

const ChevronDownIcon = () => (
  <svg 
    width="9" 
    height="6" 
    viewBox="0 0 9 6" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path 
      d="M7.98167 1.19447L4.37072 4.80542L0.759766 1.19447" 
      stroke="#3C4A41" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

const NAVIGATION_ITEMS = [
  { href: '#', label: 'Solutions', hasDropdown: true },
  { href: '#', label: 'Platform', hasDropdown: true },
  { href: '#', label: 'Resources', hasDropdown: false },
  { href: '#', label: 'About', hasDropdown: false },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" aria-label="Retour à l'accueil">
            <Image 
              className={styles.logoImg} 
              src="/logo.png"
              alt="Greenscope Logo"
              width={213.67}
              height={23.33}
              priority
            />
          </Link>
        </div>

        <nav className={styles.nav} role="navigation" aria-label="Navigation principale">
          {NAVIGATION_ITEMS.map((item) => (
            <Link 
              key={item.label}
              href={item.href} 
              className={styles.navLink}
              aria-expanded={item.hasDropdown ? 'false' : undefined}
              aria-haspopup={item.hasDropdown ? 'true' : undefined}
            >
              <span className={styles.label}>{item.label}</span>
              {item.hasDropdown && (
                <span className={styles.dropdownIcon} aria-hidden="true">
                  <ChevronDownIcon />
                </span>
              )}
            </Link>
          ))}
        </nav>

        <Link 
          href="#"
          className={styles.cta}
          aria-label="Demander une démonstration du produit"
        >
          <div className={styles.ctaContent}>
            <span>Demander une démo</span>
            <span className={styles.ctaIcon} aria-hidden="true">
              <ArrowIcon size={13} color="#946BB6" />
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}