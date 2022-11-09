const props = {
    activeColor: {
        type: String,
        value: '',
    },
    closeOnClickOverlay: {
        type: Boolean,
        value: true,
    },
    duration: {
        type: String,
        optionalTypes: [Number],
        value: 200,
    },
    showOverlay: {
        type: Boolean,
        value: true,
    },
    zIndex: {
        type: Number,
        value: 11600,
    },
};
export default props;
