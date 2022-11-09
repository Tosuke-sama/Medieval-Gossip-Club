export interface TdIndexesProps {
    height?: {
        type: NumberConstructor;
        value?: number;
        required?: boolean;
    };
    list: {
        type: ArrayConstructor;
        value?: ListItem[];
        required?: boolean;
    };
}
export interface ListItem {
    title: string;
    index: string;
    children: {
        title: string;
        [key: string]: any;
    }[];
}
