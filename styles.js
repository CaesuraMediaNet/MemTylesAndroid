import React from 'react';
import {
    StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
    container             : {
        padding           : 10,
    },
    title                 : {
        fontSize          : 36,
        fontWeight        : 'bold',
    },
    distributed           : {
        padding           : 5,
        marginTop         : 7,
        marginBottom      : 7,
        flex              : 1,
        flexDirection     : 'row',
        flexWrap          : 'wrap',
        alignItems        : 'center',
        borderWidth       : 1,
        borderRadius      : 4,
        borderColor       : 'green',
    },
    help                  : {
        position          : "absolute",
        top               : 0,
        right             : 0,
        zIndex            : 1,
    },
    spaceEvenly           : {
        flexDirection     : "row",
        justifyContent    : "space-evenly",
        alignItems        : 'center',
    },
    spaceBetween          : {
        flexDirection     : "row",
        justifyContent    : "space-between",
        alignItems        : 'center',
    },
    greenBox              : {
        marginTop         : 7,
        marginBottom      : 7,
        padding           : 5,
        borderWidth       : 1,
        borderRadius      : 4,
        borderColor       : 'green',
    },
    shadow                : {
        shadowOffset      : {
            width         : 2,
            height        : 1
        },
        shadowColor       : 'green',
        shadowOpacity     : 0.5,
        shadowRadius      : 2,
    },
    button                : {
        alignItems        : 'center',
        justifyContent    : 'center',
        paddingVertical   : 12,
        paddingHorizontal : 32,
        borderRadius      : 7,
        elevation         : 3,
        backgroundColor   : 'green',
    },
    buttonText            : {
        fontSize          : 16,
        lineHeight        : 21,
        fontWeight        : 'bold',
        letterSpacing     : 0.25,
        color             : 'white',
    },
	iconStyle             : {
        color             : 'dimgray',
        padding           : 7,
        alignItems        : 'center',
        margin            : 1,
    },
    selectedStyle         : {
        padding           : 5,
        borderWidth       : 2,
        borderRadius      : 4,
        borderColor       : 'green',
        alignItems        : 'center',
        margin            : 1,
    },
    wonStyle              : {
        color             : 'dimgray',
        padding           : 7,
        opacity           : 0.6,
        alignItems        : 'center',
        margin            : 1,
    },
    instructionP          : {
        marginTop         : 10,
        marginBottom      : 10,
    },
    header                : {
        marginTop         : 25,
        fontSize          : 24,
    },
    flexible              : {
        flex              : 1,
        flexDirection     : 'row',
        flexWrap          : 'wrap',
    },
	centeredView          : {
		flex              : 1,
		justifyContent    : 'center',
		alignItems        : 'center',
		marginTop         : 22,
	},
	modalView             : {
		margin            : 20,
		backgroundColor   : 'white',
		borderRadius      : 20,
		padding           : 35,
		alignItems        : 'center',
		shadowColor       : '#000',
		shadowOffset      : {
			width         : 0,
			height        : 2,
		},
		shadowOpacity     : 0.25,
		shadowRadius      : 4,
		elevation         : 5,
	},
	buttonOpen            : {
		backgroundColor   : '#F194FF',
	},
	buttonClose           : {
		backgroundColor   : '#2196F3',
	},
	textStyle             : {
		color             : 'white',
		fontWeight        : 'bold',
		textAlign         : 'center',
	},
	modalText             : {
		marginBottom      : 15,
		textAlign         : 'center',
	},
	modalHeader           : {
		fontWeight        : 'bold',
		marginBottom      : 15,
		textAlign         : 'center',
	},
	centre                : {
		alignItems        : 'center'
	},
	sectionText           : {
		fontSize          : 18,
		marginTop         : 7
	},
	bigText               : {
		fontSize          : 24
	}
});
