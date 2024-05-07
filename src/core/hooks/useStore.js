import { useState, useEffect } from 'react';
import simpleStore from 'react-native-simple-store';

// A hook to initialise items held in async storage
function useStore(key) {
    const keyCapitalized = key.charAt(0).toUpperCase() + key.slice(1);
    const [store, setStore] = useState({});

    const getStore = () => {
        simpleStore.get(key).then(res => setStore(res));
    };

    const updateStore = (newStore) => {
        simpleStore.update(key, newStore).then(() => getStore());
    };

    useEffect(() => {
        getStore();
    }, []);

    const returnObject = {};
    returnObject[key] = store;
    returnObject[`get${keyCapitalized}`] = getStore;
    returnObject[`update${keyCapitalized}`] = updateStore;

    return returnObject;
}

export default useStore;
