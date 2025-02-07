import React, {
  MutableRefObject,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import {
  Button,
  Toast,
  ToastButton,
  ToastContent,
  ToastDescription,
  ToastList
} from '@agency-platform/react-ui';

interface ToastData {
  type: 'foreground' | 'background' | undefined;
  description: any;
  duration?: number;
  status?: 'success' | 'error';
  open?: boolean;
  onClose?: () => void;
}

interface ToastsProps {
  children: ReactNode | ReactNode[];
}

type ToastDispatch = {
  success: (payload: Omit<ToastData, 'status' | 'open'>) => void;
  error: (payload: Omit<ToastData, 'status' | 'open'>) => void;
};

const ToastContext = createContext<ToastDispatch | null>(null);

type ToastContextListType = {
  toastElementsMapRef: MutableRefObject<Map<string, HTMLElement>>;
  handleRemoveToast: (key: string) => void;
};

const ToastContextList = createContext<ToastContextListType | null>(null);

export const ToastProvider = ({ children, ...props }: ToastsProps) => {
  const [toasts, setToasts] = useState<Map<string, ToastData>>(new Map());
  const toastElementsMapRef = useRef<Map<string, HTMLElement>>(new Map());
  const viewportRef = useRef<HTMLOListElement | null>(null);
  const timeoutRefs = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const handleAddToast = useCallback((toast: ToastData) => {
    toast.onClose && toast.onClose();
    setToasts((currentToasts) => {
      const newMap = new Map(currentToasts);
      const key = String(Date.now());
      newMap.set(key, { ...toast, open: true });
      // Create a new timeout for the toast and store its reference
      const timeout = setTimeout(() => {
        handleRemoveToast(key);
      }, toast.duration);
      timeoutRefs.current.set(key, timeout);
      return newMap;
    });
  }, []);

  const handleRemoveToast = useCallback((key: string) => {
    setToasts((currentToasts) => {
      const newMap = new Map(currentToasts);
      if (newMap.has(key)) {
        const toastData = newMap.get(key);
        if (toastData) {
          newMap.set(key, { ...toastData, open: false });
          // Clear the timeout reference and remove it from the map
          const timeoutRef = timeoutRefs.current.get(key);
          if (timeoutRef) {
            clearTimeout(timeoutRef);
            timeoutRefs.current.delete(key);
          }
        }
      }
      return newMap;
    });
  }, []);

  const handleDispatchSuccess = useCallback(
    (payload: Omit<ToastData, 'status' | 'open'>) =>
      handleAddToast({
        ...payload,
        status: 'success',
        open: true
      }),
    [handleAddToast]
  );

  const handleDispatchError = useCallback(
    (payload: Omit<ToastData, 'status' | 'open'>) =>
      handleAddToast({
        ...payload,
        status: 'error',
        open: true
      }),
    [handleAddToast]
  );

  return (
    <ToastContext.Provider
      value={useMemo(
        () => ({ success: handleDispatchSuccess, error: handleDispatchError }),
        [handleDispatchSuccess, handleDispatchError]
      )}
    >
      <ToastContextList.Provider
        value={useMemo(() => ({ toastElementsMapRef, handleRemoveToast }), [handleRemoveToast])}
      >
        <ToastPrimitive.Provider {...props} swipeDirection="down">
          {children}
          <ToastList layoutVariant={'default'}>
            {Array.from(toasts).map(([key, toast]) => (
              <CustomToast key={key} id={key} toast={toast} />
            ))}
            <ToastPrimitive.Viewport ref={viewportRef} className="ToastViewport" />
          </ToastList>
        </ToastPrimitive.Provider>
      </ToastContextList.Provider>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastDispatch => {
  const context = useContext(ToastContext);
  if (context) return context;
  throw new Error('useToast must be used within Toasts');
};

export const useToastContext = (): ToastContextListType => {
  const context = useContext(ToastContextList);
  if (context) return context;
  throw new Error('useToastContext must be used within Toasts');
};

interface ToastProps {
  id: string;
  toast: ToastData;
}

export const useToastOpen = (
  isLoading: boolean,
  isError: boolean,
  isSuccess: boolean,
  onClose: () => void,
  options: ToastData
) => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToastOpen must be used within Toasts');
  const { success, error } = context;

  useEffect(() => {
    // Only close the toast (and thus the dialog) if isError or isSuccess is true
    const onCloseWrapper = () => {
      if (isError || isSuccess) onClose();
    };
    if (isLoading) {
      return success({
        ...options,
        onClose: onCloseWrapper
      });
    } else if (isSuccess) {
      return success({
        ...options,
        onClose: onCloseWrapper
      });
    } else if (isError) {
      return error({
        ...options,
        onClose: onCloseWrapper
      });
    }
  }, [isLoading, isError, isSuccess]);

  return null;
};

const CustomToast = ({ toast, id }: ToastProps) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const context = useToastContext();
  const { toastElementsMapRef } = context;
  const toastElementsMap = toastElementsMapRef.current;

  useLayoutEffect(() => {
    if (ref.current) {
      toastElementsMap.set(id, ref.current);
    }
  }, [id, toastElementsMap]);

  return (
    <Toast variant={toast.status}>
      <ToastContent variant={toast.status}>
        <ToastDescription variant={toast.status}>{toast.description}</ToastDescription>
      </ToastContent>
      <ToastButton variant={toast.status}>
        {toast.status === 'success' ? (
          <Button variant={'buttonIconPrimary'} withIcon={true} withText={false} iconName={'tick'} />
        ) : (
          <Button variant={'buttonIconPrimary'} withIcon={true} withText={false} iconName={'closeAlt'} />
        )}
      </ToastButton>
    </Toast>
  );
};

export default CustomToast;
