import { SizeEnum } from '../common/common';
export interface TdTagProps {
    closable?: {
        type: BooleanConstructor;
        value?: boolean;
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
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    maxWidth?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
        required?: boolean;
    };
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round' | 'mark';
        required?: boolean;
    };
    size?: {
        type: StringConstructor;
        value?: SizeEnum;
        required?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'primary' | 'warning' | 'danger' | 'success';
        required?: boolean;
    };
    variant?: {
        type: StringConstructor;
        value?: 'dark' | 'light' | 'outline' | 'light-outline';
        required?: boolean;
    };
}
export interface TdCheckTagProps {
    checked?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    defaultChecked?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    closable?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    content?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
        required?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    shape?: {
        type: StringConstructor;
        value?: 'square' | 'round' | 'mark';
        required?: boolean;
    };
    size?: {
        type: StringConstructor;
        value?: SizeEnum;
        required?: boolean;
    };
}
