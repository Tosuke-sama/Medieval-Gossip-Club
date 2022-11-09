import { BadgeProps } from '../badge/index';
export interface TdAvatarProps {
    alt?: {
        type: StringConstructor;
        value?: string;
    };
    badgeProps?: {
        type: ObjectConstructor;
        value?: BadgeProps;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
    };
    hideOnLoadFailed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    image?: {
        type: StringConstructor;
        value?: string;
    };
    shape?: {
        type: StringConstructor;
        value?: ShapeEnum;
    };
    size?: {
        type: StringConstructor;
        value?: string;
    };
}
export interface TdAvatarGroupProps {
    cascading?: {
        type: StringConstructor;
        value?: CascadingValue;
    };
    collapseAvatar?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-image', 't-class-content'];
    };
    max?: {
        type: NumberConstructor;
        value?: number;
    };
    size?: {
        type: StringConstructor;
        value?: string;
    };
}
export declare type ShapeEnum = 'circle' | 'round';
export declare type CascadingValue = 'left-up' | 'right-up';
