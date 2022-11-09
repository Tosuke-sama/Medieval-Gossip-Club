export interface TdActionSheetProps {
    cancelText?: {
        type: StringConstructor;
        value?: string;
    };
    count?: {
        type: NumberConstructor;
        value?: number;
    };
    items: {
        type: ArrayConstructor;
        value?: Array<string | ActionSheetItem>;
    };
    showCancel?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'list' | 'grid';
    };
    visible: {
        type: BooleanConstructor;
        value?: boolean;
    };
    defaultVisible: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
export interface ActionSheetItem {
    label: string;
    color?: string;
    disabled?: boolean;
}
