export interface TdNoticeBarProps {
    content?: {
        type: StringConstructor;
        value?: string;
    };
    extra?: {
        type: StringConstructor;
        value?: string;
    };
    marquee?: {
        type: ObjectConstructor;
        optionalTypes: Array<BooleanConstructor>;
        value?: DrawMarquee | boolean;
    };
    prefixIcon?: {
        type: StringConstructor;
        value?: string;
    };
    suffixIcon?: {
        type: StringConstructor;
        value?: string;
    };
    theme?: {
        type: StringConstructor;
        value?: 'info' | 'success' | 'warning' | 'error';
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface DrawMarquee {
    speed?: number;
    loop?: number;
    delay?: number;
}
