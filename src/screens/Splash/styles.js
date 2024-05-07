import variables from "../../assets/styles/variables";

function generateStyles({ windowWidth, windowHeight, widthScaleFactor, heightScaleFactor, averageScaleFactor, statusBarHeight }) {
    const styles = {
        mainContainer: {
            minHeight: windowHeight - statusBarHeight,
            width: '100%',
            alignItems: 'center',

        },
        sectionContainer: {
            position: 'absolute',
            top: 270 * heightScaleFactor,
        },
        sectionText: {
            fontFamily: 'Inter',
            fontSize: 14 * averageScaleFactor,
            width: '100%',
            textAlign: 'center',
        },
        mainButtonContainer: {
            width: 327 * widthScaleFactor,
            height: 56 * heightScaleFactor,
            borderRadius: 16 * averageScaleFactor,
            backgroundColor: variables.blackColor,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 24 * heightScaleFactor,
            left: (windowWidth - 327 * widthScaleFactor) / 2,
        },
        mainButtonText: {
            color: '#FFFFFF',
            fontFamily: 'Inter',
            fontSize: 18 * averageScaleFactor,
        },
    };

    return styles;
}

export default generateStyles;
