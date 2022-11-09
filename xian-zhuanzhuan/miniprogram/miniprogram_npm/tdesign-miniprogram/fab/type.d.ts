export interface TdFabProps {
    buttonProps?: {
        type: ObjectConstructor;
        value?: object;
    };
    icon?: {
        type: StringConstructor;
        value?: string;
    };
    style?: {
        type: StringConstructor;
        value?: string;
    };
    text?: {
        type: StringConstructor;
        value?: string;
    };
}
