import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class Avatar extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    externalClasses: string[];
    properties: import("./type").TdAvatarProps;
    data: {
        prefix: string;
        classPrefix: string;
        isShow: boolean;
        zIndex: number;
        isChild: boolean;
        borderSize: string;
    };
    relations: RelationsOptions;
    methods: {
        updateIsChild(isChild: any): void;
        updateShow(): void;
        updateSize(size: any): void;
        updateCascading(zIndex: any): void;
        updateBorder(borderSize: any): void;
    };
    onLoadError(e: any): void;
}
