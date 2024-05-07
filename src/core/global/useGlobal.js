import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    clearRedirectRequest,
} from './globalActions';

function useGlobal() {
    const dispatch = useDispatch();
    const global = useSelector(state => state.global);

    const handleClearRedirectRequest = useCallback((payload) => {
        dispatch(clearRedirectRequest(payload));
    }, []);

    return {
        global,
        clearRedirectRequest: handleClearRedirectRequest,
    };
}

export default useGlobal;
