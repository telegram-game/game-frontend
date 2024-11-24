import { useMemo } from "react";
import BalanceComponent from "../../components/balance";
import { images } from "../../constants";
import styles from "./friend.module.css";

const FriendPage = () => {
  const friend = useMemo(() => {
    return Array(10)
      .fill(1)
      .map(() => (
        <div className={`${styles.userReferral} ${styles.referral}`}>
          <div className={styles.userImage}>
            <img src={images.system.user} alt='user' />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              <p>Jerry Nguyen</p>
            </div>
            <div className={styles.userDetail}>
              <p>
                You received: <img src={images.coin.INGAME} alt='Token' />
                &nbsp; {20.110459}
              </p>
            </div>
          </div>
        </div>
      ));
  }, []);

  const referralInfo = useMemo(() => {
    return [
      {
        icon: "data:image/webp;base64,UklGRhYFAABXRUJQVlA4WAoAAAAQAAAAQwAAQwAAQUxQSOMBAAABkAMAkCFJdbbvbdu2bdvKbNu2bdvOFNm2bUw9q6qr/vOImAD4T9Zbd2Tv0uGda0RZGol//TY32EQAAORHaj9ViVvUiQytdfA9frxz7BzpTrCe1PNeI9447qGgl15L6PDv6DCvjqAOd9FpdhV+q9Dt1xHNkyhoiu6/7UjvbADnswTivVIJHXXiyL86Ob9nqWixjFr++HZxmFDDL5oQJ8mU/Iq6X/qL7EDtVSSCH6ibLpHgnbprEkH31XnRAnkeqsPqrPChaLAnp8pFtLiUlnQz2txNavsSje6gzEer3/MQyqLZ+kBsZKcVpaSd5ZTA92buUOCgGUxI6W+nASXjdzPjKf4XzOyhQGczHwMoKTwrmI0Ck8y0IwVstDKDBFD0ro3TDBhu43k0o4ANzMrwuWWjEwMm2ZjBKWfjEMfvsYmHHFhqwgvlVDCBuThRj03U5cBiEyVY1SxcD2KFvNd3Jyfwx6h7khsEC2m7nAokfS7o2hMNskNUbfIB4VRfNVUC8X2KnoXIVVDUHeQDtqqZCi6THFMyAhy3OaXgZRNwX2yZo0+r40HlCgcLylWOBKURB6VeNgfN4UM+iJxNB8oTj7j92+MvBG9pAOj3yVmnaXGfBI33vv7Dlbpg2r9Ez7kz6wXDvx0AVlA4IAwDAADQEQCdASpEAEQAPp1CmkkoJyMmL1VacLATiWgNvMV7U16BSgMXHgk7cLnefQ/5zPUyegB0r9+msmMYybg2EKjzoOmxr7gBWHg83C1am6pokH1nLYoyU/499O3hBosYP84XQguirmCx59vWmp+E0CNh2PoKxou5AGBO7iwMZEU0sRtO2u6iMCozK+X9+IifbCtfMchDaAQAAP71AR+UEcCEFzUuMmL9gpU75fuX8OB2UU8jwj/HhPggERs9pfYru4prjkJWCoc4BsAV2yOoz7BJWQz1VQBbRXZz5I/860QfzF9T3Y7mgleLuSAByytPM8WQCP8r7aa5nd1CvmZYAsa0eM++7DypZ4BalIyUJFBnW6e7BmEfXzQfvKe//jWTSfvyAe7k7BcTOwAAQHmbRl4luaWTZv58ZsplD7aueDAVlyZJ0EILgYlAWdzWGHWkSqNGDBbkRJrB8SUAgpWr5SxnWrq1dTVBgJVYyrauX6g1l03iPTBqoGNF++K1XxmMVu9oguvAIf8oqWXvU/gfRh2jy0gupx6XW35hXdAXgvyN85u69JB8Ss3UfwJvFtBJdWNDaoRWoeRBuP2GqO8oRueh44A+DvG7BQ4aiYBbCHTKUF02JE18JS6Z2lsgDkdo5Q9JPKMI42a1Rm9SnnQqvuS/oXKJA7osXwzFQx9bDn8hxdgIr0qDP9RoAISvYzWeDLO2MRHhK1OFqDiVqObsHN/Txs9Xmct644UHKPOcgUhGwnVsUxb8BxpnpbVLZpqvf7IaexG5Rio/DTSdto1YY+R0NH5jJ9pI2fDQk7+BJ///PCQN5x7//5pXiLhZidB4KRWKUPS8a+iiDq1HV+XH8f+N6J5tYBoRYa6gVw2eJ2TEZPoYl1HUYl7ci/X32CBd4MJZ2Sui8kVvXe1dKdp64ZQOBei/AQctWWCNbXUN1SEcdHMDQsN+9XDuSpl//8GKf//2lgFf/yGnGpn//WyP8i6IP4NgM9t8d2xZhDeVqKDRlWV/bpoNd3BGeLLgskEMduIKU1f/2JKVeAAAAAA=",
        INGAME_1: 0.001,
        INGAME: 20,
        description: "Earn 15% cashback when your friends claim TOK.",
      },
      {
        icon: "data:image/webp;base64,UklGRqoFAABXRUJQVlA4WAoAAAAQAAAAQwAAQwAAQUxQSCwCAAABkC0AjCFJGeyebdu2bdtvtm3btm3btm2sbSOHmklVsh8QERMASXz7fW9P1JKVd5kn/r8ulZwW1+LQ4U6LU6nS87EuRad7OZFqTQweqc9lCP7vH6zyTe/AugERMfFCKwuHTH6KzZV/KnC6gyHo8FFbq7m2qNwNlSIVvmkUBWMcIT5vbGyKys0CgxXYUnEEnQ7Pa2qsCscAPFXs+a92nHM43FQ5BwkjR/xQ+KUDsN5B4kZTLqdVzjYCaI7UlaYg8w/S6oar3Em9jUH2B5QE1NgumTFIeZqg91s/i5ncc9yQ5SKLif7+yLWHgQnI1y2NrvTjEhlhPT0pJ7sh6zlaCn5H5ht15PRF7ut0rEP2wzSkimYXVVJDJ2T/MYuGnfzwV2XaKwHokY1SME4CbqAMRJGfKDtlBFBeyfAiZAiWcZtgfyNjGwFq+ouYTIFbIppRUrpLSChFqY4Sf9sp40QcAeoREZMpljcSPItSckYL2FgYqI2Q/wugTxdwQMN1ASNp9l8CKtOKx/NzS0FrhfyvAH2ygHka9gpoq+E5v8SMtLTB/D4APW8Cv+Uasobz66nBspNfVg2Q/iy3d6A12WgfXjv0AKRfEc6poS6ArMsj2Hi76gPIeoZJ4ngwOohH0HgwmzeUw9WCYLrdV3NeWcC8vedLQz/LA0tbpzv/hehJPFYA2NZetqiupdreOJLn5iLAP/9Cf0VsBCJGX+puAZkpWu25s61XBluZBpXtkLQDVlA4IFgDAACQEgCdASpEAEQAPp1AnEqoKaajK5cagLATiWoGKAEBh2v8B5otv7ZMVaGNt0fMBju3oAdMgwH95KFN3k8ChBn/pfyGKdTnFqADLbbB3N+j5YGEAXxEgWAz8SU6p4RENyhqgdIS4KumNv9AbpDDfvzQ0Rta+B5+dTzkgB824r60t4j+XXNhsOaR2Rd8Xk+hVvkWefRE6vez+MA39/4AAP78+Fz/Jy0lrXXjBmOGgG2tRg2FmpZIDQL+O5NRgjiVM4DbkvyZHYP3jGdP2a+uo+CfV97LVSl/UuWQKVfTIQp/SujP2z+GJWWufUsmVPP38j+woGgOmXkn57dxssc28Dfd0r/97aDDqTIAIDDD7rCqAXrVxrFNmHHxQhP6siLf2Pq3XiXExkljAMvr/j4dRMp1SGI6OCdhC9C/hmkKH4rZoDYaZSmJhlV1upgrkkFjSpgUYNCn55DmgP+QQa4ungXF4Pb//y09yVuz41xv1dEca+WRUkxYaPObk/1AmiQ+vT0nJMuhV9kP6ZCCTGX6lIC3Rotpayz5fdoJcwRejoCctdxJCOgFxfdc0Ds5GDHOLxyIWjt8N2w3bg4CU2L66Nsv7hckBasmMsd7cMBvjxpOWmxLit2mBbPAhQP4clE5O5CMa3f1TUUPCbwzTd0Je0ILqVTwe2UDZlevpoqQqy+RnTUDtKqDOGpM0UKwoP+Sy1Wr2dFS0IYYEzmeD7xwE1ysK//lwnr3hoKDk3+rkJyL2vm9l10mec0PSSPBlXgX9WrlQtJRaCViZtrqLyM6KMblPDWyTVimfuBya7JcEqDs8XIE3yWmI/kIzevkKFBvt0bIOI6eNmI2KzDK5BvtdapWlEkPCRUtrb8TS7HrJeKQI+xWV3MIwIvDbKs/+tOMxDvg2ox5t912aWofF/p2OEpD+AEoBkC+oj9E+6g3iwcXVz4OUekhNlsASGadoDhJbOW3GOl3n0vZR12COwqLtu5EYoVrGw1X6SHJqdO6c+2Dxf5sTQt8O6z/7ktLis3xQlDGq0nFkoA7Krz83aYM7u8v9xAABcXlSN9ld17TjmHI1BfeShbu4hjDdqwjxxwihQSo6fC0sSfffXeireQ6niSiyCfsT70Vasn1AxDeCS/sYfpmPROEAAAA",
        INGAME_1: 0.002,
        INGAME: 100,
        description: "Double the cashback if they are premium.",
      },
    ].map((item, index) => {
      return (
        <>
          <div className={styles.reward}>
            <div className={styles.rewardImage}>
              <img className={styles.gift} src={item.icon} alt='red gift' />
            </div>
            <div className={styles.content}>
              <p>
                <span>Invite a friend</span>
                <span>+{item.INGAME_1} TON</span>
                <span>+{item.INGAME} TOK</span>
              </p>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.absolute}>
              {index / 2 === 0 && <img src={images.info} />}
            </div>
          </div>
          {index / 2 === 0 && <div className={styles.divider} />}
        </>
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <BalanceComponent text='' token={10} />
        <div className={styles.flex}>{referralInfo}</div>
        <div className={`${styles.flex} ${styles.referral}`}>
          <div className={styles.referralLeft}>
            <p>
              Your referral list: <span>0</span>
            </p>
          </div>
          <div className={styles.referralRight}>
            <p>
              Your recruit: <span>0</span>
            </p>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.scroll}`}>{friend}</div>
      </div>
      <div className={styles.bottom}>
        <div
          className={`${styles.bottomContainer} ${styles.referralContainer}`}
        >
          <button className={styles.button}>Invite a friend</button>
        </div>
        <div className={`${styles.bottomContainer} ${styles.copyContainer}`}>
          <button className={styles.button}>
            <img src={images.system.copy} alt='copy' />
          </button>
        </div>
      </div>
    </div>
  );
};
export default FriendPage;
