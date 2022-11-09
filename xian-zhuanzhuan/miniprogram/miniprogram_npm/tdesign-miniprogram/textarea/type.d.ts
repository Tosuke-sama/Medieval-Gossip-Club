export interface TdTextareaProps {
    adjustPosition?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    autofocus?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    autosize?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    confirmHold?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    confirmType?: {
        type: StringConstructor;
        value?: 'send' | 'search' | 'next' | 'go' | 'done';
        required?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-textarea', 't-class-placeholder', 't-class-name'];
        required?: boolean;
    };
    focus?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    label?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    maxcharacter?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    maxlength?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    placeholder?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    value?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
}
