const props = {
    colors: {
        type: Array,
    },
    customValue: {
        type: Array,
        value: [true, false],
    },
    disabled: {
        type: Boolean,
        value: false,
    },
    label: {
        type: String,
        value: '',
    },
    loading: {
        type: Boolean,
        value: false,
    },
    size: {
        type: String,
        value: 'medium',
    },
    value: {
        type: Boolean,
        optionalTypes: [Number, String],
        value: null,
    },
    defaultValue: {
        type: Boolean,
        optionalTypes: [Number, String],
        value: null,
    },
};
export default props;
