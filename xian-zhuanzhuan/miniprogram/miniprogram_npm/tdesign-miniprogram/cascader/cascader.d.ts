import { SuperComponent } from '../common/src/index';
import { TdCascaderProps } from './type';
export interface CascaderProps extends TdCascaderProps {
}
export default class Cascader extends SuperComponent {
    externalClasses: string[];
    properties: TdCascaderProps<import("../common/common").TreeOptionData>;
    data: {
        prefix: string;
        name: string;
        stepIndex: number;
        selectedIndexes: any[];
        selectedValue: any[];
        steps: string[];
    };
    observers: {
        options(): void;
        selectedIndexes(): void;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        hide(): void;
        onStepClick(e: any): void;
        onSwiperChange(e: any): void;
        handleSelect(e: any): void;
    };
}
