export interface TdBadgeProps {
    color?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    count?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
        required?: boolean;
    };
    dot?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-content', 't-class-count'];
        required?: boolean;
    };
    maxCount?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    offset?: {
        type: ArrayConstructor;
        value?: Array<string | number>;
        required?: boolean;
    };
    shape?: {
        type: StringConstructor;
        value?: 'circle' | 'square' | 'round' | 'ribbon';
        required?: boolean;
    };
    showZero?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    size?: {
        type: StringConstructor;
        value?: 'small' | 'medium';
        required?: boolean;
    };
}
