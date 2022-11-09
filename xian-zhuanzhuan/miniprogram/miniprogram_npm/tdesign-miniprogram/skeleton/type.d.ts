export interface TdSkeletonProps {
    animation?: {
        type: StringConstructor;
        value?: 'gradient' | 'flashed';
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-avatar', 't-class-image', 't-class-text'];
        required?: boolean;
    };
    loading?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    rowCol?: {
        type: ArrayConstructor;
        value?: SkeletonRowCol;
        required?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'avatar' | 'image' | 'text' | 'paragraph';
        required?: boolean;
    };
}
export declare type SkeletonRowCol = Array<Number | SkeletonRowColObj | Array<SkeletonRowColObj>>;
export interface SkeletonRowColObj {
    width?: string;
    height?: string;
    size?: string;
    marginRight?: string;
    marginLeft?: string;
    margin?: string;
    type?: 'rect' | 'circle' | 'text';
}
