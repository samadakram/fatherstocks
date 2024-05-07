import React from 'react';
import {
    View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import PropTypes from 'prop-types';
import { showError } from '../../../core/utils/notify';
import styles from './styles';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import { IconAdd } from '../../Icons';
import common from '../../../assets/styles/common';
import { uploadImage, deleteImage } from '../../../core/utils/api';
import RenderImages from './renderImages';

const ImageUpload = ({ productMedia, setProductMedia }) => {

    const upload = (file) => {

        if (productMedia?.length >= 5) {
            showError('Error', 'You can only upload 5 files');
            return;
        }
        if (file?.fileSize >= 500000) {
            showError('Error', 'Max file size allowed is 5mb');
            return;
        }

        if (file?.type === 'image/jpg' || file?.type === 'image/png' || file?.type === 'image/jpeg') {

            const files = [...productMedia];
            // console.log('filw', file);
            uploadImage(file).then(res => {
                files.push({ id: res.data.id, stringUrl: res.data.stringUrl, name: file.fileName });
                setProductMedia(files);
            }).catch(() => {
                showError('Image upload failed');
            });

        } else {
            showError('Error', 'Only png and jpg files allowed');
        }
    };

    const openImagePicker = () => {

        const options = {
            title: 'Select Image',
            maxWidth: 1500,
            maxHeight: 1500,
            quality: 0.5,
            includeBase64: true,
        };

        launchImageLibrary(options, (response) => {

            if (response && response.assets && (response.assets.length > 0)) {
                upload(response.assets[0]);
            } else {
                showError('Error', 'File upload failed');
            }
        });

    };

    // handle delete btn
    const handleImgDelete = (img) => {

        const filtered = productMedia.filter((item) => item.id !== img.id);

        // make api request
        deleteImage(img).then(

            // remove media
            setProductMedia(filtered),

        ).catch(() => {

            // handle error
            showError('Image upload failed');

        });
    };

    return (
        <View style={[styles.wrapper]}>
            {productMedia.length > 0
                ? (
                    <View style={styles.imageContainer}>
                        <RenderImages openImagePicker={openImagePicker} productMedia={productMedia} setProductMedia={setProductMedia} handleImgDelete={handleImgDelete} />
                    </View>
                )
                : (
                    <View>
                        <ButtonPrimary
                            icon={<IconAdd />}
                            labelStyle={[styles.btnlabelStyle]}
                            title="Upload photos"
                            btnStyle={[common.contactWhiteBox, { height: 56, width: 250 }]}
                            onPress={() => openImagePicker()} />
                    </View>
                )}
        </View>
    );
};

export default ImageUpload;

ImageUpload.propTypes = {
    productMedia: PropTypes.array,
    setProductMedia: PropTypes.func,
};

ImageUpload.defaultProps = {
    productMedia: [],
    setProductMedia: () => {},
};
