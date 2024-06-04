import { useState } from 'react';
import styles from './style.module.scss';
import { Input, Button } from 'antd';
import CountDown from 'components/CountDown';

interface Iprops {
  isShow: boolean;
  close: Function;
}

interface IformType {
  phone: number;
  verify: string | number;
}

const Login = (props: Iprops) => {
  console.log(props);
  const { isShow, close } = props;

  const [form, setForm] = useState({
    phone: '',
    verify: '',
  });

  // 是否显示验证码倒计时组件
  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false);

  // 关闭登录弹窗
  const handleClose = () => {
    close && close();
  };

  // 点击获取验证码
  const handleGetVerify = () => {
    setIsShowVerifyCode(true);
  };

  //
  const handleCountDownEnd = () => {
    alert('aaa');
  };

  // 点击登录
  const handleLogin = () => {};

  // 点击第三方登录
  const handleOtherLogin = () => {};

  return isShow ? (
    <div className={styles.loginBox}>
      {/* 登录表单 */}
      <div className={styles.loginForm}>
        <div className={styles.header}>
          {/* 登录模式 */}
          <div className={styles.loginMode}>手机号登录</div>
          {/* 关闭图标 */}
          <div className={styles.closeBtn} onClick={handleClose}>
            x
          </div>
        </div>

        {/* 手机号 */}
        <Input value={form.phone} />

        {/* 验证码 */}
        <div className={styles.verifyBox}>
          <Input className={styles.verify} value={form.verify} />
          <span className={styles.getVerify} onClick={handleGetVerify}>
            {isShowVerifyCode ? (
              <CountDown time={10} onEnd={handleCountDownEnd} />
            ) : (
              '获取验证码'
            )}
          </span>
        </div>

        {/* 登录按钮 */}
        <Button
          type="primary"
          className={styles.loginBtn}
          onClick={handleLogin}
        >
          登 录
        </Button>

        {/* github三方登录 */}
        <div className={styles.otherLogin} onClick={handleOtherLogin}>
          使用 Github 登录
        </div>

        {/* 隐私协议 */}
        <div className={styles.agreement}>
          注册登录即表示同意 <a href="#">隐私政策</a>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
