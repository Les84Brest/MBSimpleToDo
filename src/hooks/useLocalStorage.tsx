import {useState, useEffect} from 'react';

function useLocalStorage<T>(initialValue: T, key: string): [T, (value: any) => void] {
    const getValue = () => {
        try {
            const storage: string | null = localStorage.getItem(key); // string || null

            return storage ? JSON.parse(storage) : initialValue;
        } catch (error) {
            console.log(error)
            return initialValue;
        }
    };

    const [value, setValue] = useState<T>(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    const saveValue = (value: T) => {
        setValue(value);
    }

    return [value, saveValue];
}

export default useLocalStorage;