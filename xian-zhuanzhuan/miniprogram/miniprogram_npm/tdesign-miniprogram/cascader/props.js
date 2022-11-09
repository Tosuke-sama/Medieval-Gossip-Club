const props = {
    closeBtn: {
        type: Boolean,
        value: true,
    },
    options: {
        type: Array,
        value: [],
    },
    title: {
        type: String,
    },
    value: {
        type: String,
        optionalTypes: [Number],
        value: null,
    },
    defaultValue: {
        type: String,
        optionalTypes: [Number],
    },
    visible: {
        type: Boolean,
        value: false,
    },
};
export default props;
