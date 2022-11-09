export interface TdStepsProps {
    current?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    defaultCurrent?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    currentStatus?: {
        type: StringConstructor;
        value?: 'default' | 'process' | 'finish' | 'error';
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
    };
    layout?: {
        type: StringConstructor;
        value?: 'horizontal' | 'vertical';
    };
    readonly?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    theme?: {
        type: StringConstructor;
        value?: 'default' | 'dot';
    };
}
export interface TdStepItemProps {
    content?: {
        type: StringConstructor;
        value?: string;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-content', 't-class-title', 't-class-description', 't-class-extra'];
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    status?: {
        type: StringConstructor;
        value?: StepStatus;
    };
    subStepItems?: {
        type: ArrayConstructor;
        value?: SubStepItem[];
    };
    title?: {
        type: StringConstructor;
        value?: string;
    };
}
export declare type StepStatus = 'default' | 'process' | 'finish' | 'error';
export interface SubStepItem {
    status: StepStatus;
    title: string;
}
