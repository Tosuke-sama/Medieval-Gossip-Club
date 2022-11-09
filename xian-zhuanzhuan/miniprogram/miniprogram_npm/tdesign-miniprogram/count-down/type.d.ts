export interface TdCountDownProps {
    autoStart?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    format?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    millisecond?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    size?: {
        type: StringConstructor;
        value?: 'small' | 'medium' | 'large';
        required?: boolean;
    };
    splitWithUnit?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'round' | 'square';
        required?: boolean;
    };
    time: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
}
