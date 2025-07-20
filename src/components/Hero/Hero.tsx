import Link from 'next/link';
import styles from './Hero.module.css';
import Logo from '../Logo/Logo';
import ArrowIcon from '../ArrowIcon/ArrowIcon';

type VideoItemProps = {
  src: string;
  alt?: string;
};

const VideoItem = ({ src, alt = '' }: VideoItemProps) => (
  <div className={styles.videoItem}>
    <video
      autoPlay
      playsInline
      loop
      muted
      preload="auto"
      src={src}
      aria-label={alt}
    />
  </div>
);

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.videosContainer}>
        <VideoItem
          src="https://player.vimeo.com/progressive_redirect/playback/1035909721/rendition/720p/file.mp4?loc=external&signature=52e4bedd0bddf8814a96ad6f57c3d7e4b4577b85e3e9af0966175ba136c1b044"
          alt="Sustainable project showcase video 1"
        />
        <VideoItem
          src="https://player.vimeo.com/progressive_redirect/playback/1035159192/rendition/1080p/file.mp4?loc=external&signature=7c21ef3875884b3e30f67a7ae6c60a5e39123054b7b7de5e034f7b74c5449c15"
          alt="Sustainable project showcase video 2"
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Where ESG <br /> can be leveraged
        </h1>

        <div className={styles.containerIcon} role="img" aria-label="Sustainability Icon">
          <Logo />
        </div>

        <div className={styles.containerAction}>
          <p>+500 companies use Greenscope</p>
          <Link href="/demo-fr"className={styles.cta + ' linkMedium'}>
            Get a demo
            <ArrowIcon size={17.5} color='#946BB6' />
          </Link>
        </div>
      </div>
    </section>
  );
}
