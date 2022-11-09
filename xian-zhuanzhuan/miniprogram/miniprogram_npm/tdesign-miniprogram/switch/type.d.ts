export interface TdSwitchProps {
    colors?: {
        type: ArrayConstructor;
        value?: string[];
    };
    customValue?: {
        type: ArrayConstructor;
        value?: Array<SwitchValue>;
    };
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    label?: {
        type: StringConstructor;
        value?: string;
    };
    loading?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    size?: {
        type: StringConstructor;
        value?: 'small' | 'medium' | 'large';
    };
    value?: {
        type: BooleanConstructor;
        optionalTypes: Array<NumberConstructor | StringConstructor>;
        value?: SwitchValue;
    };
    defaultValue?: {
        type: BooleanConstructor;
        optionalTypes: Array<NumberConstructor | StringConstructor>;
        value?: SwitchValue;
    };
}
export declare type SwitchValue = string | number | boolean;
