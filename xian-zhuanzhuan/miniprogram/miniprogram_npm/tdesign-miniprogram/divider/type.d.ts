export interface TdDividerProps {
    align?: {
        type: StringConstructor;
        value?: 'left' | 'right' | 'center';
        required?: boolean;
    };
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    dashed?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-line', 't-class-content'];
        required?: boolean;
    };
    layout?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
        required?: boolean;
    };
    lineColor?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
        required?: boolean;
    };
}
