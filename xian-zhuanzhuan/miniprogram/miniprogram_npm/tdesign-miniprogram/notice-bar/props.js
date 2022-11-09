const props = {
    content: {
        type: String,
    },
    extra: {
        type: String,
    },
    marquee: {
        type: Object,
        optionalTypes: [Boolean],
        value: false,
    },
    prefixIcon: {
        type: String,
        value: '',
    },
    suffixIcon: {
        type: String,
        value: '',
    },
    theme: {
        type: String,
        value: 'info',
    },
    visible: {
        type: Boolean,
        value: null,
    },
};
export default props;
