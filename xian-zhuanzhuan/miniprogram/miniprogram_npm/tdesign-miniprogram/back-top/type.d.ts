export interface TdBackTopProps {
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-icon', 't-class-text'];
        required?: boolean;
    };
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    text?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'round' | 'half-round' | 'round-dark' | 'half-round-dark';
        required?: boolean;
    };
}
