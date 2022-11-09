var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-cascader`;
let Cascader = class Cascader extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.properties = props;
        this.data = {
            prefix,
            name,
            stepIndex: 0,
            selectedIndexes: [],
            selectedValue: [],
            steps: ['选择选项'],
        };
        this.observers = {
            options() {
                this.setData({
                    items: [this.data.options],
                });
            },
            selectedIndexes() {
                const { items, selectedIndexes } = this.data;
                this.setData({
                    selectedValue: items.map((item, index) => { var _a; return (_a = item[selectedIndexes[index]]) === null || _a === void 0 ? void 0 : _a.value; }),
                });
            },
        };
        this.lifetimes = {
            ready() { },
        };
        this.methods = {
            hide() {
                this.setData({ visible: false });
            },
            onStepClick(e) {
                const { index } = e.currentTarget.dataset;
                this.setData({ stepIndex: index });
            },
            onSwiperChange(e) {
                const { current } = e.detail;
                this.setData({
                    stepIndex: current,
                });
            },
            handleSelect(e) {
                var _a;
                const { level } = e.target.dataset;
                const { value } = e.detail;
                const { selectedIndexes, steps, items, stepIndex } = this.data;
                const index = items[level].findIndex((item) => item.value === value);
                const item = items[level][index];
                if (item.disabled) {
                    return;
                }
                selectedIndexes[level] = index;
                selectedIndexes.length = level + 1;
                steps[level] = item.label;
                this.triggerEvent('pick', item.value, index);
                if ((_a = item === null || item === void 0 ? void 0 : item.children) === null || _a === void 0 ? void 0 : _a.length) {
                    items[level + 1] = item.children;
                    items.length = level + 2;
                    steps[level + 1] = '选择选项';
                    steps.length = level + 2;
                    this.setData({ steps, items, selectedIndexes }, () => {
                        this.setData({ stepIndex: stepIndex + 1 });
                    });
                }
                else {
                    this.setData({ steps, selectedIndexes });
                    this.hide();
                    this.triggerEvent('change', {
                        value: item.value,
                        selectedOptions: items.map((item, index) => item[selectedIndexes[index]]),
                    });
                }
            },
        };
    }
};
Cascader = __decorate([
    wxComponent()
], Cascader);
export default Cascader;
