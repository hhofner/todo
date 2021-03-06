import { useCallback, useEffect, useRef } from 'react';

const useClickOutside = (onClickOutside, isActive) => {
    const elementRef = useRef(null);
    const onClickOutsideCallback = useRef();

    useEffect(() => {
        onClickOutsideCallback.current = onClickOutside;
    }, [ onClickOutside ])

    const handleClick = useCallback(event => {
        const clickedNode = event.target;

        if (elementRef.current && elementRef.current.contains(clickedNode)) {
            event.preventDefault();
        } else if (onClickOutsideCallback.current) {
            onClickOutsideCallback.current();
        }
    }, []);

    useEffect(() => {
        if (isActive) {
            document.addEventListener('mousedown', handleClick);
        } else {
            document.removeEventListener('mousedown', handleClick);
        }
        return () => document.removeEventListener('mousedown', handleClick);
    }, [ isActive ]);

    return elementRef;
}

export {
    useClickOutside
};