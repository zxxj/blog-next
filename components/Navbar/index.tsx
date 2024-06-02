import { NextPage } from 'next';
import { navs } from './config';
import Link from 'next/link';
import styles from './style.module.scss';
import { useRouter } from 'next/router';

const NavBar: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.navbar}>
      <section className={styles.logo}>logo</section>
      <section className={styles.navs}>
        {navs.map((nav) => (
          <Link key={nav.value} href={nav.value} className={styles.item}>
            <span className={pathname === nav.value ? styles.active : ''}>
              {nav.label}
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default NavBar;
