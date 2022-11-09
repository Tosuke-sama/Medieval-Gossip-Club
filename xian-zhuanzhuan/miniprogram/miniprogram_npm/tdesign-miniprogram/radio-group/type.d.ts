import { RadioValue } from '../radio/type';
export interface TdRadioGroupProps<T = RadioValue> {
    align?: {
        type: StringConstructor;
        value?: 'left' | 'right';
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    icon?: {
        type: null;
        value?: 'fill-circle' | 'stroke-line' | Array<string>;
    };
    name?: {
        type: StringConstructor;
        value?: string;
    };
    options?: {
        type: ArrayConstructor;
        value?: Array<RadioOption>;
    };
    value?: {
        type: null;
        value?: T;
    };
    defaultValue?: {
        type: null;
        value?: T;
    };
}
export declare type RadioOption = string | number | RadioOptionObj;
export interface RadioOptionObj {
    label?: string;
    value?: string | number;
    disabled?: boolean;
}
