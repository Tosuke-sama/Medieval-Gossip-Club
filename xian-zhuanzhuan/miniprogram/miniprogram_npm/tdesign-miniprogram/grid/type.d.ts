export interface TdGridProps {
    align?: {
        type: StringConstructor;
        value?: 'left' | 'center';
        required?: boolean;
    };
    border?: {
        type: null;
        value?: boolean | {
            color?: string;
            width?: string;
            style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset';
        };
        required?: boolean;
    };
    column?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
        required?: boolean;
    };
    gutter?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    hover?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
}
export interface TdGridItemProps {
    description?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-image', 't-class-text', 't-class-description'];
        required?: boolean;
    };
    image?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    jumpType?: {
        type: StringConstructor;
        value?: 'redirect-to' | 'switch-tab' | 'relaunch' | 'navigate-to';
        required?: boolean;
    };
    layout?: {
        type: StringConstructor;
        value?: 'vertical' | 'horizontal';
        required?: boolean;
    };
    text?: {
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
