export interface TdMessageProps {
    action?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    align?: {
        type: StringConstructor;
        value?: 'left' | 'center';
        required?: boolean;
    };
    closeBtn?: {
        type: StringConstructor;
        optionalTypes: Array<BooleanConstructor>;
        value?: string | boolean;
        required?: boolean;
    };
    content?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    duration?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-content', 't-class-icon', 't-class-action', 't-class-close-btn'];
        required?: boolean;
    };
    icon?: {
        type: StringConstructor;
        optionalTypes: Array<BooleanConstructor>;
        value?: boolean | 'info' | 'bell';
        required?: boolean;
    };
    marquee?: {
        type: null;
        value?: DrawMarquee | boolean;
        required?: boolean;
    };
    offset?: {
        type: ArrayConstructor;
        value?: Array<string | number>;
        required?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: MessageThemeList;
        required?: boolean;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
}
export interface DrawMarquee {
    speed?: number;
    loop?: number;
    delay?: number;
}
export declare type MessageThemeList = 'info' | 'success' | 'warning' | 'error';
