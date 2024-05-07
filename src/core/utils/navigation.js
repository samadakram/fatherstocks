/* eslint-disable no-unused-expressions */
import React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export function goBack() {
    navigationRef.current?.goBack();
}

export function replace(name, params) {
    navigationRef.current?.resetRoot({
        index: 0,
        routes: [
            { name, params },
        ],
    });
}

export function reset(params) {
    // eslint-disable-next-line
    navigationRef.current?.dispatch(params);
}
