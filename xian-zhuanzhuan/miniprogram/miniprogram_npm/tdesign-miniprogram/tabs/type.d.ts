import { StickyProps } from '../sticky/index';
export interface TdTabsProps {
    animation?: {
        type: ObjectConstructor;
        value?: TabAnimation;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-item', 't-class-active', 't-class-track'];
    };
    placement?: {
        type: StringConstructor;
        value?: 'left' | 'top';
    };
    showBottomLine?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    sticky?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    stickyProps?: {
        type: ObjectConstructor;
        value?: StickyProps;
    };
    swipeable?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    value?: {
        type: null;
        value?: TabValue;
    };
    defaultValue?: {
        type: null;
        value?: TabValue;
    };
}
export interface TdTabPanelProps {
    destroyOnHide?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    label?: {
        type: StringConstructor;
        value?: string;
    };
    panel?: {
        type: StringConstructor;
        value?: string;
    };
    value?: {
        type: null;
        value?: TabValue;
    };
}
export declare type TabAnimation = {
    duration: number;
} & Record<string, any>;
export declare type TabValue = string | number;
