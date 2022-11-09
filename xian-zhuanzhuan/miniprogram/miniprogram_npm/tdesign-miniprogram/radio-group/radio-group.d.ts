import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class RadioGroup extends SuperComponent {
    externalClasses: string[];
    data: {
        prefix: string;
        classPrefix: string;
        radioOptions: any[];
    };
    relations: RelationsOptions;
    properties: {
        borderless: {
            type: BooleanConstructor;
            value: boolean;
        };
        align?: {
            type: StringConstructor;
            value?: "left" | "right";
        };
        disabled?: {
            type: BooleanConstructor;
            value?: boolean;
        };
        icon?: {
            type: null;
            value?: string[] | "fill-circle" | "stroke-line";
        };
        name?: {
            type: StringConstructor;
            value?: string;
        };
        options?: {
            type: ArrayConstructor;
            value?: import("./type").RadioOption[];
        };
        value?: {
            type: null;
            value?: import("../radio/type").RadioValue;
        };
        defaultValue?: {
            type: null;
            value?: import("../radio/type").RadioValue;
        };
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    observers: {
        value(): void;
        options(): void;
    };
    methods: {
        getChilds(): any;
        updateValue(value: any): void;
        handleRadioChange(e: any): void;
        initWithOptions(): void;
    };
}
