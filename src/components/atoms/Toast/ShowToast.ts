import React from 'react';
import Toast from './Toast';  // Adjust the path accordingly

export const showToast = (message: string) => {
    console.log(message);
    return <Toast message={ message } />;
};
