import { KeysType } from '../common/common';
export interface TdDropdownMenuProps {
    activeColor?: {
        type: StringConstructor;
        value?: string;
    };
    closeOnClickOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    duration?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    showOverlay?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    zIndex?: {
        type: NumberConstructor;
        value?: number;
    };
}
export interface TdDropdownItemProps {
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    keys?: {
        type: ObjectConstructor;
        value?: KeysType;
    };
    label?: {
        type: StringConstructor;
        value?: string;
    };
    multiple?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    options?: {
        type: ArrayConstructor;
        value?: Array<TdDropdownItemOption>;
    };
    optionsColumns?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    optionsLayout?: {
        type: StringConstructor;
        value?: 'columns' | 'tree';
    };
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor | ArrayConstructor>;
        value?: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>;
    };
    defaultValue?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor | ArrayConstructor>;
        value?: TdDropdownItemOptionValueType | Array<TdDropdownItemOptionValueType>;
    };
}
export interface TdDropdownItemOption {
    label: string;
    disabled: boolean;
    value: TdDropdownItemOptionValueType;
    [key: string]: any;
}
export declare type TdDropdownItemOptionValueType = string | number;
