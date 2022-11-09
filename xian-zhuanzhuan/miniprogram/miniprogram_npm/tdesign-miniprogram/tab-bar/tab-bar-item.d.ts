import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class TabbarItem extends SuperComponent {
    parent: any;
    relations: RelationsOptions;
    options: {
        multipleSlots: boolean;
    };
    data: {
        prefix: string;
        classPrefix: string;
        isSpread: boolean;
        isChecked: boolean;
        hasChildren: boolean;
        currentName: string;
        split: boolean;
    };
    properties: import("./type").TdTabBarItemProps;
    observers: {
        subTabBar(value: Record<string, any>[]): void;
    };
    methods: {
        showSpread(): void;
        toggle(): void;
        selectChild(event: any): void;
        checkActive(value: any): void;
        closeSpread(): void;
    };
}
