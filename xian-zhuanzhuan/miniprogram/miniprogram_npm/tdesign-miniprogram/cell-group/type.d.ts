export interface TdCellGroupProps {
    bordered?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class'];
        required?: boolean;
    };
    title: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
}
