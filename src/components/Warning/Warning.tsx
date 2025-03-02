import { Alert, Title, Close } from '@zendeskgarden/react-notifications';
import styles from './Warning.module.css';

type WarningProps = {
  type: "warning" | "success" | "error" | "info",
  title: string,
  text?: string,
  close?: () => void
}

export function Warning ({ type, title, text, close }: WarningProps) {
  return (
    <Alert type={type} className={styles.alert}>
      <Title>{title}</Title>
      {text}
      <Close onClick={close}/>
    </Alert>
  )
}