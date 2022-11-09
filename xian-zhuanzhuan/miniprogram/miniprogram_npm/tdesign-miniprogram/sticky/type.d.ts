export interface TdStickyProps {
    container?: {
        type: null;
        value?: null;
        required?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
        required?: boolean;
    };
    offsetTop?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
}
