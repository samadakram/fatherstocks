import Toast from 'react-native-toast-message';

const showSuccess = (title, detail) => {
    Toast.show({
        type: 'success',
        position: 'top',
        text1: title,
        text2: detail,
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 50,
    });
};

const showError = (title, detail) => {
    Toast.show({
        type: 'error',
        position: 'top',
        text1: title,
        text2: detail,
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 50,
    });
};

export { showSuccess, showError };
