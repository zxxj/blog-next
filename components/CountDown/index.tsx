import { useEffect, useState } from 'react';
import styles from './style.module.scss';

interface Iprops {
  time: number;
  onEnd: Function;
}

const CountDown = (props: Iprops) => {
  // 外部传入的时间与倒计时结束函数
  const { time, onEnd } = props;

  // 如果外部没有传入时间,默认60秒
  const [count, setCount] = useState(time || 60);

  // 副作用
  useEffect(() => {
    // 每秒-1,如果等于0则移除定时器并通知父组件倒计时结束
    const timer = setInterval(() => {
      setCount((count) => {
        if (count === 0) {
          clearInterval(timer);
          onEnd && onEnd();
          return count;
        }
        return count - 1;
      });
    }, 1000);

    // 副作用移除定时器
    return () => {
      clearInterval(timer);
    };
  }, [time, onEnd]);

  return <div className={styles.count}>{count}</div>;
};

export default CountDown;
