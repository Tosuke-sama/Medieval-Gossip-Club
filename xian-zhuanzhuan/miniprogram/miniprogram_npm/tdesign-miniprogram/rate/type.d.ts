export interface TdRateProps {
    allowHalf?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    count?: {
        type: NumberConstructor;
        value?: number;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    gap?: {
        type: NumberConstructor;
        value?: number;
    };
    showText?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    size?: {
        type: StringConstructor;
        value?: string;
    };
    texts?: {
        type: ArrayConstructor;
        value?: Array<string>;
    };
    value?: {
        type: NumberConstructor;
        value?: number;
    };
    defaultValue?: {
        type: NumberConstructor;
        value?: number;
    };
    variant?: {
        type: StringConstructor;
        value?: 'outline' | 'filled';
    };
}
