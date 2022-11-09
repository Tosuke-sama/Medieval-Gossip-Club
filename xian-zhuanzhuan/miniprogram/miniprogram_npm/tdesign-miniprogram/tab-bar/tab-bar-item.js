var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
import props from './tab-bar-item-props';
const { prefix } = config;
const classPrefix = `${prefix}-tab-bar-item`;
let TabbarItem = class TabbarItem extends SuperComponent {
    constructor() {
        super(...arguments);
        this.parent = null;
        this.relations = {
            './tab-bar': {
                type: 'ancestor',
                linked(parent) {
                    this.parent = parent;
                    this.setData({
                        split: parent.data.split,
                        currentName: this.properties.value ? this.properties.value : parent.initName(),
                    });
                    parent.updateChildren();
                },
            },
        };
        this.options = {
            multipleSlots: true,
        };
        this.data = {
            prefix,
            classPrefix,
            isSpread: false,
            isChecked: false,
            hasChildren: false,
            currentName: '',
            split: true,
        };
        this.properties = props;
        this.observers = {
            subTabBar(value) {
                this.setData({
                    hasChildren: value.length > 0,
                });
            },
        };
        this.methods = {
            showSpread() {
                this.setData({
                    isSpread: true,
                });
            },
            toggle() {
                const { parent } = this;
                const { currentName, hasChildren, isSpread } = this.data;
                if (hasChildren) {
                    this.setData({
                        isSpread: !isSpread,
                    });
                }
                parent.updateValue(currentName);
                parent.changeOtherSpread(currentName);
            },
            selectChild(event) {
                const { parent } = this;
                const { value } = event.target.dataset;
                parent.updateValue(value);
                this.setData({
                    isSpread: false,
                });
            },
            checkActive(value) {
                const { currentName, subTabBar } = this.data;
                const isChecked = (subTabBar === null || subTabBar === void 0 ? void 0 : subTabBar.some((item) => item.value === value)) || currentName === value;
                this.setData({
                    isChecked,
                });
            },
            closeSpread() {
                this.setData({
                    isSpread: false,
                });
            },
        };
    }
};
TabbarItem = __decorate([
    wxComponent()
], TabbarItem);
export default TabbarItem;
