export interface TdProgressProps {
    color?: {
        type: null;
        value?: string | Array<string> | Record<string, string>;
    };
    label?: {
        type: BooleanConstructor;
        value?: boolean;
    };
    percentage?: {
        type: NumberConstructor;
        value?: number;
    };
    status?: {
        type: StringConstructor;
        value?: StatusEnum;
    };
    strokeWidth?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: string | number;
    };
    trackColor?: {
        type: StringConstructor;
        value?: string;
    };
}
export declare type StatusEnum = 'success' | 'error' | 'warning' | 'active';
export declare type ThemeEnum = 'line' | 'plump' | 'circle';
