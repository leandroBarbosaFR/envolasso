import { useState } from 'react';

const useDialogBox = () => {
  const [id, setId] = useState<string | undefined | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = (id: string) => {
    setIsOpen(true);
    setId(id);
  };

  const close = () => {
    setIsOpen(false);
    setId(null);
  };

  return {
    id,
    setId,
    isOpen,
    setIsOpen,
    open,
    close
  };
};

export default useDialogBox;
