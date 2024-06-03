import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import { useState } from 'react';
import { navs } from './config';
import styles from './style.module.scss';
import Login from '@/pages/Login';

const NavBar: NextPage = () => {
  const { pathname } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(false);

  // 点击发布文章按钮
  const handleArticle = () => {
    setIsShowLogin(false);
  };

  // 点击登录按钮
  const handleLogin = () => {
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };

  return (
    <div className={styles.navbar}>
      {/* logo */}
      <section className={styles.logo}>logo</section>

      {/* 中间区域导航栏 */}
      <section className={styles.navs}>
        {navs.map((nav) => (
          <Link key={nav.value} href={nav.value} className={styles.item}>
            <span className={pathname === nav.value ? styles.active : ''}>
              {nav.label}
            </span>
          </Link>
        ))}
      </section>

      {/* 登录按钮/发布文章按钮 */}
      <section className={styles.handles}>
        <Button onClick={handleArticle}>发文章</Button>
        <Button
          type="primary"
          className={styles.loginBtn}
          onClick={handleLogin}
        >
          登录
        </Button>
      </section>

      {/* 登录弹框 */}
      <Login isShow={isShowLogin} close={handleClose} />
    </div>
  );
};

export default NavBar;
