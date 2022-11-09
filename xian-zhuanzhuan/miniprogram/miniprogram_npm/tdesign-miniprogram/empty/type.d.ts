export interface TdEmptyProps {
    description?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-description', 't-class-image', 't-class-actions'];
        required?: boolean;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    image?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
}
