import { Skeleton } from '@zendeskgarden/react-loaders';
import styles from './SkeletonLoading.module.css';

export function SkeletonLoading () {
  return (
    <Skeleton
      className={styles.skeleton}
      width='100%'
      height="400px" 
    />
  )
}