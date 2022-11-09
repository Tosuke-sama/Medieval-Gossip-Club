const props = {
    color: {
        type: null,
        value: '',
    },
    label: {
        type: Boolean,
        value: true,
    },
    percentage: {
        type: Number,
        value: 0,
    },
    status: {
        type: String,
    },
    strokeWidth: {
        type: String,
        optionalTypes: [Number],
    },
    trackColor: {
        type: String,
        value: '',
    },
};
export default props;
