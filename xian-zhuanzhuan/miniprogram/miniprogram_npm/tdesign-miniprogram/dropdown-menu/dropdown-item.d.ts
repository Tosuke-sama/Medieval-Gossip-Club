import { RelationsOptions, SuperComponent } from '../common/src/index';
import type { TdDropdownItemProps } from './type';
export interface DropdownItemProps extends TdDropdownItemProps {
}
export default class DropdownMenuItem extends SuperComponent {
    properties: {
        disabled?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        keys?: {
            type: ObjectConstructor;
            value?: import("../common/common").KeysType;
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
            value?: import("./type").TdDropdownItemOption[];
        };
        optionsColumns?: {
            type: StringConstructor;
            optionalTypes: NumberConstructor[];
            value?: string | number;
        };
        optionsLayout?: {
            type: StringConstructor;
            value?: "columns" | "tree";
        };
        value?: {
            type: StringConstructor;
            optionalTypes: (ArrayConstructor | NumberConstructor)[];
            value?: import("./type").TdDropdownItemOptionValueType | import("./type").TdDropdownItemOptionValueType[];
        };
        defaultValue?: {
            type: StringConstructor;
            optionalTypes: (ArrayConstructor | NumberConstructor)[];
            value?: import("./type").TdDropdownItemOptionValueType | import("./type").TdDropdownItemOptionValueType[];
        };
    };
    data: {
        prefix: string;
        classPrefix: string;
        show: boolean;
        top: number;
        maskHeight: number;
        contentClasses: string;
        leafLevel: number;
        treeOptions: any[];
        initValue: any;
        hasChanged: boolean;
        duration: string | number;
        zIndex: number;
        overlay: boolean;
        labelAlias: string;
        valueAlias: string;
    };
    parent: any;
    relations: RelationsOptions;
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        value(v: any): void;
        'initValue, value'(v1: any, v2: any): void;
        label(): void;
        keys(obj: any): void;
        show(visible: any): void;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        buildTreeOptions(): void;
        closeDropdown(): void;
        getParentBottom(parent: any, cb: any): void;
        handleTreeClick(e: any): void;
        handleRadioChange(e: any): void;
        handleMaskClick(): void;
        handleReset(): void;
        handleConfirm(): void;
        onLeaved(): void;
    };
}
