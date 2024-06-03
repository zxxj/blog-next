interface Iprops {
  isShow: boolean;
  close: Function;
}

const Login = (props: Iprops) => {
  console.log(props);
  const { isShow, close } = props;

  return isShow ? <div>登录弹窗</div> : null;
};

export default Login;
