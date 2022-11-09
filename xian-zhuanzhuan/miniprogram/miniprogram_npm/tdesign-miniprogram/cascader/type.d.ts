import { TreeOptionData } from '../common/common';
export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
    closeBtn?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    options?: {
        type: ArrayConstructor;
        value?: Array<CascaderOption>;
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    defaultValue?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
    };
}
