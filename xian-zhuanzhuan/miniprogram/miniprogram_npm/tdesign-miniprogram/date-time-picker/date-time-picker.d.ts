import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { SuperComponent } from '../common/src/index';
declare enum ModeItem {
    YEAR = "year",
    MONTH = "month",
    DATE = "date",
    HOUR = "hour",
    MINUTE = "minute"
}
interface ColumnItemValue {
    value: string | number;
    label: string | number;
}
export default class DateTimePicker extends SuperComponent {
    properties: import("./type").TdDateTimePickerProps;
    externalClasses: string[];
    options: {
        multipleSlots: boolean;
    };
    observers: {
        'start, end, value': () => void;
        mode(m: any): void;
    };
    date: any;
    data: {
        prefix: string;
        classPrefix: string;
        columns: any[];
        columnsValue: any[];
        fullModes: any[];
        locale: {
            year: string;
            month: string;
            day: string;
            hour: string;
            minute: string;
            am: string;
            pm: string;
            confirm: string;
            cancel: string;
        };
    };
    controlledProps: {
        key: string;
        event: string;
    }[];
    methods: {
        updateColumns(): void;
        getParseDate(): Dayjs;
        getMinDate(): Dayjs;
        getMaxDate(): Dayjs;
        getMinYear(): number;
        getMaxYear(): number;
        getMinMonth(): number;
        getMaxMonth(): number;
        getMinDay(): number;
        getMaxDay(): number;
        getMinHour(): number;
        getMaxHour(): number;
        getMinMinute(): number;
        getMaxMinute(): number;
        getDate(): Dayjs;
        clipDate(date: Dayjs): Dayjs;
        setYear(date: Dayjs, year: number): Dayjs;
        setMonth(date: Dayjs, month: number): Dayjs;
        getColumnOptions(): any[];
        getCommonDateParams(): {
            date: dayjs.Dayjs;
            selYear: number;
            selMonth: number;
            selDate: number;
            selHour: number;
            minDateYear: any;
            maxDateYear: any;
            minDateMonth: any;
            maxDateMonth: any;
            minDateDay: any;
            maxDateDay: any;
            minDateHour: any;
            maxDateHour: any;
            minDateMinute: any;
            maxDateMinute: any;
        };
        getOptionByType(type: any, dateParams: any): any;
        getYearOptions(dateParams: any): ColumnItemValue[];
        getMonthOptions(dateParams: any): ColumnItemValue[];
        getDayOptions(dateParams: any): ColumnItemValue[];
        getHourOptions(dateParams: any): ColumnItemValue[];
        getMinuteOptions(dateParams: any): ColumnItemValue[];
        getValueCols(this: DateTimePicker): {
            columns: any;
            columnsValue: any;
        };
        getColumnsValue(): string[];
        getNewDate(value: number, type: ModeItem): Dayjs;
        onColumnChange(e: WechatMiniprogram.CustomEvent): void;
        onConfirm(): void;
        onCancel(): void;
        onVisibleChange(e: any): void;
        resetColumns(): void;
    };
    getFullModeArray(mode: any): any;
    getFullModeByModeString(modeString: any, matchModes: any): any;
    isTimeMode(): boolean;
}
export {};
