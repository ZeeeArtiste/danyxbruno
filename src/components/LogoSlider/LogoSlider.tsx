import Image from 'next/image';
import styles from './LogoSlider.module.css';

export default function LogoSlider() {
  const logos = [
    { src: '/logos/doctolib.png', alt: 'Doctolib' },
    { src: '/logos/natixis.png', alt: 'Natixis' },
    { src: '/logos/payfit.png', alt: 'Payfit' },
    { src: '/logos/slack.png', alt: 'Slack' },
    { src: '/logos/spendesk.png', alt: 'Spendesk' },
  ]



  const allLogos = [...logos, ...logos];

  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {allLogos.map((logo, index) => (
          <div key={index} className={styles.logo}>
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
