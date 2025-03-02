import { Button } from '@zendeskgarden/react-buttons';
import { Input } from '@zendeskgarden/react-forms';
import { Dots } from '@zendeskgarden/react-loaders';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { useEffect, useState } from 'react';
import styles from './SearchInput.module.css';

type SearchInputProps = {
  search: (id: string) => void;
  isLoading: boolean;
};

export function SearchInput(props: SearchInputProps) {
  const [rawCpf, setRawCpf] = useState<string>('');
  const [error, setError] = useState<boolean>(false);


  const handleInputChange = (input: string) => {
    if (input.length > 14) return;
    const cleanedInput = input.replace(/\D/g, '');
    setRawCpf(cleanedInput);
  };

  return (
    <div className={styles.main}>
      <Input
        onChange={(e) => handleInputChange(e.target.value)}
        value={rawCpf}
        placeholder="type here ..."
        validation={error ? 'error' : undefined}
      />
      {error && <span className={styles.errorText}>CPF Inválido ou muito longo</span>}
      <Button
        className={styles.button}
        onClick={() => props.search(rawCpf)}
        isPrimary
      >
        {props.isLoading ? <Dots delayMS={0} /> : <SearchIcon />}
      </Button>
    </div>
  );
}
