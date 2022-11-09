export interface TdNavbarProps {
    animation?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    background?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    delta?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: [
            't-class',
            't-class-title',
            't-class-left',
            't-class-center',
            't-class-left-icon',
            't-class-home-icon',
            't-class-capsule',
            't-class-nav-btn'
        ];
        required?: boolean;
    };
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    homeIcon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    leftIcon?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    title?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    titleMaxLength?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
}
