export interface TdSwipeCellProps {
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    left?: {
        type: ArrayConstructor;
        value?: Array<SwipeActionItem>;
        required?: boolean;
    };
    opened?: {
        type: BooleanConstructor;
        optionalTypes: Array<ArrayConstructor>;
        value?: boolean | Array<boolean>;
        required?: boolean;
    };
    right?: {
        type: ArrayConstructor;
        value?: Array<SwipeActionItem>;
        required?: boolean;
    };
}
export interface SwipeActionItem {
    text: string;
    className?: string;
    style?: string;
    onClick?: () => void;
    [key: string]: any;
}
