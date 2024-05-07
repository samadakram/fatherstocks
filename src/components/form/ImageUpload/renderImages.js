import React from 'react';
import {
    View,
    Dimensions,
    Image,
    Pressable,
} from 'react-native';
import PropTypes from 'prop-types';
import { AutoDragSortableView } from 'react-native-drag-sort';
import styles from './styles';
import { IconImgDel, IconAddImg } from '../../Icons';

const { width } = Dimensions.get('window');

const RenderImages = ({ productMedia, setProductMedia, handleImgDelete, openImagePicker }) => {

    const leftWidth = productMedia?.length > 3 ? 3 * 98 : productMedia?.length * 98;
    const topMargin = productMedia?.length > 3 ? 110 : 0;

    const renderItem = (item) => (
        <View key={item.id}>
            <View style={styles.imgBox}>
                <Pressable onPress={() => handleImgDelete(item)} style={styles.delStyle}>
                    <IconImgDel />
                </Pressable>
                <Image style={styles.imageStyle} source={{ uri: item?.stringUrl }} />

            </View>
        </View>
    );

    return (
        <View>
            <AutoDragSortableView
                dataSource={productMedia}
                isDragFreely
                parentWidth={width}
                childrenWidth={96}
                childrenHeight={89}
                marginChildrenRight={10}
                marginChildrenBottom={10}
                delayLongPress={50}
                maxScale={1.05}
                scaleDuration={50}
                slideDuration={200}
                onDragEnd={(startIndex, endIndex) => {
                    console.log(`${startIndex} to ${endIndex}`);
                    if (startIndex !== endIndex) {
                        const itemMoved = productMedia[startIndex];
                        productMedia.splice(startIndex, 1);
                        productMedia.splice(endIndex, 0, itemMoved);
                        setProductMedia([...productMedia]);
                        let position = 1;
                        const usefulData = productMedia.map((dataItem) => ({
                            ...dataItem,
                            position: position++,
                        }));
                        setProductMedia(usefulData);
                    }
                }}
                keyExtractor={(item) => item.id}
                renderItem={(item, index) => renderItem(item, index)} />
            <View style={{ position: 'absolute', left: leftWidth, top: topMargin }}>
                <Pressable onPress={() => openImagePicker()} style={styles.addMoreBtn}>
                    <IconAddImg />
                </Pressable>
            </View>
        </View>
    );
};

export default RenderImages;

RenderImages.propTypes = {
    productMedia: PropTypes.array,
    setProductMedia: PropTypes.func,
    handleImgDelete: PropTypes.func,
    openImagePicker: PropTypes.func,
};

RenderImages.defaultProps = {
    productMedia: [],
    setProductMedia: () => {},
    handleImgDelete: () => {},
    openImagePicker: () => {},
};
