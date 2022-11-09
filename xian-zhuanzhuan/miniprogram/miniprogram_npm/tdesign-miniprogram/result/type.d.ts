export interface TdResultProps {
    description?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-description', 't-class-image'];
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
    title?: {
        type: StringConstructor;
        value?: string;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'success' | 'warning' | 'error';
    };
}
