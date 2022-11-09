import { BadgeProps } from '../badge/index';
export interface TdTabBarProps {
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
    };
    fixed?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    safeAreaInsetBottom?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    split?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    value?: {
        type: null;
        value?: string | number | Array<string | number>;
    };
    defaultValue?: {
        type: null;
        value?: string | number | Array<string | number>;
    };
}
export interface TdTabBarItemProps {
    badgeProps?: {
        type: ObjectConstructor;
        value?: BadgeProps;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    subTabBar?: {
        type: ArrayConstructor;
        value?: SubTabBarItem[];
    };
    value?: {
        type: null;
        value?: string | number;
    };
}
export interface SubTabBarItem {
    value: string;
    label: string;
}
