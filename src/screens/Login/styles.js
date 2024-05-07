import variables from "../../assets/styles/variables";

function generateStyles({ windowWidth, windowHeight, widthScaleFactor, heightScaleFactor, averageScaleFactor, statusBarHeight }) {
    const styles = {
        mainContainer: {
            minHeight: windowHeight - statusBarHeight,
            width: '100%',
            alignItems: 'center',
        },
        backIconContainer: {
            height: 88 * heightScaleFactor,
            width: 88 * heightScaleFactor,
            position: 'absolute',
            left: 0,
            top: 0,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
        },
        mainIconContainer: {
            height: (322 - statusBarHeight) * heightScaleFactor,
            width: '100%',
            position: 'absolute',
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
        },
        mainIcon: {
            width: undefined,
            height: 200,
            aspectRatio: 1,
        },
        bottomSectionContainer: {
            width: '100%',
            height: 670 * heightScaleFactor,
            position: 'absolute',
            bottom: 0,
        },
        mainHeaderText: {
            fontFamily: 'Inter',
            fontSize: 32 * averageScaleFactor,
            fontWeight: '600',
            position: 'absolute',
            fontStyle: 'normal',
            lineHeight: 48,
            color: '#125185',
            left: (windowWidth - 327 * widthScaleFactor) / 2,
            top: 50 * heightScaleFactor,
        },
        textInputContainerContainer: {
            height: 64 * heightScaleFactor * 1.5,
            position: 'absolute',
            left: (windowWidth - 327 * widthScaleFactor) / 2,
            width: 327 * widthScaleFactor,
            justifyContent: 'space-around',
            flexDirection: 'column',
        },
        textInputHeaderText: {
            fontFamily: 'Inter',
            fontSize: 18 * averageScaleFactor,
            fontWeight: 'bold',
            textAlignVertical: 'center',
            lineHeight: 64 * heightScaleFactor * 0.5,
        },
        textInputContainer: {
            width: '100%',
            height: 64 * heightScaleFactor,
            borderRadius: 16 * averageScaleFactor,
            borderWidth: 0.5 * averageScaleFactor,
            borderColor: '#285A84',
            borderStyle: 'solid',
            flexDirection: 'row',
        },
        textInput: {
            width: '85%',
            height: '100%',
            fontFamily: 'Inter',
            fontSize: 18 * averageScaleFactor,
        },
        textInputIconContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 64 * heightScaleFactor,
            width: '5%',
        },
        forgottenPasswordText: {
            fontFamily: 'Inter',
            fontSize: 14 * averageScaleFactor,
            lineHeight: 60 * heightScaleFactor * 0.5,
            alignSelf: 'flex-end',
            color: variables.blackColor,
        },
        mainButtonContainerContainer: {
            height: 200 * heightScaleFactor * 1.5,
            position: 'absolute',
            left: (windowWidth - 327 * widthScaleFactor) / 2,
            bottom: 22 * heightScaleFactor,
            width: 327 * widthScaleFactor,
            flexDirection: 'column',
            alignItems: 'center',
        },
        mainButtonContainer: {
            width: '100%',
            height: 56 * heightScaleFactor,
            borderRadius: 16 * averageScaleFactor,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
        },
        mainButtonText: {
            color: '#FFFFFF',
            fontFamily: 'Inter',
            fontSize: 18 * averageScaleFactor,
            lineHeight: 56 * heightScaleFactor * 0.5,
            fontWeight: '600',
        },
        signUpText: {
            fontFamily: 'Inter',
            color: '#000',
            fontSize: 13 * averageScaleFactor,
            lineHeight: 50 * heightScaleFactor * 0.5,
            alignItems: 'center',
            fontWeight: '300',
        },
    };

    return styles;
}

export default generateStyles;
