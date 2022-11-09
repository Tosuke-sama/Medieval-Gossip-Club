export interface TdCellProps {
    align?: {
        type: StringConstructor;
        value?: 'top' | 'middle' | 'bottom';
        required?: boolean;
    };
    arrow?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    description?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-title', 't-class-note', 't-class-description', 't-class-thumb', 't-class-hover', 't-class-left', 't-class-right'];
        required?: boolean;
    };
    hover?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    image?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    jumpType?: {
        type: StringConstructor;
        value?: 'switchTab' | 'reLaunch' | 'redirectTo' | 'navigateTo';
        required?: boolean;
    };
    leftIcon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    note?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    required?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    rightIcon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    title?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    url?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
}
