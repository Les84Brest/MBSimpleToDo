import { useLayoutEffect, useRef, useState } from "react";

type UseNowCb = (timestamp: number) => void;

export function useNow(updateInterval: number, enabled: boolean, cb: UseNowCb) {
    const cbRef = useRef<UseNowCb>(cb);
    cbRef.current = cb;
    const [now, setNow] = useState<number>(Date.now());

    useLayoutEffect(() => {
        if (!enabled) {
            return;
        }

        setNow(Date.now());
        cbRef.current?.(Date.now());

        const interval = setInterval(() => {
            setNow(Date.now());
            cbRef.current?.(Date.now());
        }, updateInterval);

        return () => {
            clearInterval(interval);
        };
    }, [updateInterval, enabled]);

    return now;
}