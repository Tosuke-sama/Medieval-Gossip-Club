export interface TdImageProps {
    error?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-load'];
    };
    lazy?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    loading?: {
        type: StringConstructor;
        value?: string;
    };
    shape?: {
        type: StringConstructor;
        value?: 'circle' | 'round' | 'square';
    };
    src?: {
        type: StringConstructor;
        value?: string;
    };
    mode?: {
        type: StringConstructor;
        value?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right';
    };
    webp?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    showMenuByLongpress?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
