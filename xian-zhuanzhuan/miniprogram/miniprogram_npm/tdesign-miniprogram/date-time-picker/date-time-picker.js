var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import dayjs from 'dayjs';
import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import defaultLocale from './locale/zh';
import props from './props';
const { prefix } = config;
const name = `${prefix}-date-time-picker`;
var ModeItem;
(function (ModeItem) {
    ModeItem["YEAR"] = "year";
    ModeItem["MONTH"] = "month";
    ModeItem["DATE"] = "date";
    ModeItem["HOUR"] = "hour";
    ModeItem["MINUTE"] = "minute";
})(ModeItem || (ModeItem = {}));
const DATE_MODES = ['year', 'month', 'date'];
const TIME_MODES = ['hour', 'minute'];
const FULL_MODES = [...DATE_MODES, ...TIME_MODES];
const DEFAULT_MIN_DATE = dayjs('2000-01-01 00:00:00');
const DEFAULT_MAX_DATE = dayjs('2030-12-31 23:59:59');
let DateTimePicker = class DateTimePicker extends SuperComponent {
    constructor() {
        super(...arguments);
        this.properties = props;
        this.externalClasses = [`${prefix}-class`, `${prefix}-class-confirm`, `${prefix}-class-cancel`, `${prefix}-class-title`];
        this.options = {
            multipleSlots: true,
        };
        this.observers = {
            'start, end, value': function () {
                this.updateColumns();
            },
            mode(m) {
                const fullModes = this.getFullModeArray(m);
                this.setData({
                    fullModes,
                });
                this.updateColumns();
            },
        };
        this.date = null;
        this.data = {
            prefix,
            classPrefix: name,
            columns: [],
            columnsValue: [],
            fullModes: [],
            locale: defaultLocale,
        };
        this.controlledProps = [
            {
                key: 'value',
                event: 'change',
            },
        ];
        this.methods = {
            updateColumns() {
                this.date = this.getParseDate();
                const { columns, columnsValue } = this.getValueCols();
                this.setData({
                    columns,
                    columnsValue,
                });
            },
            getParseDate() {
                const { value, defaultValue } = this.properties;
                const minDate = this.getMinDate();
                const isTimeMode = this.isTimeMode();
                let currentValue = value || defaultValue;
                if (isTimeMode) {
                    const dateStr = dayjs(minDate).format('YYYY-MM-DD');
                    currentValue = dayjs(`${dateStr} ${currentValue}`);
                }
                const parseDate = dayjs(currentValue || minDate);
                const isDateValid = parseDate.isValid();
                return isDateValid ? parseDate : minDate;
            },
            getMinDate() {
                const { start } = this.properties;
                return start ? dayjs(start) : DEFAULT_MIN_DATE;
            },
            getMaxDate() {
                const { end } = this.properties;
                return end ? dayjs(end) : DEFAULT_MAX_DATE;
            },
            getMinYear() {
                return this.getMinDate().year();
            },
            getMaxYear() {
                return this.getMaxDate().year();
            },
            getMinMonth() {
                return this.getMinDate().month();
            },
            getMaxMonth() {
                return this.getMaxDate().month();
            },
            getMinDay() {
                return this.getMinDate().date();
            },
            getMaxDay() {
                return this.getMaxDate().date();
            },
            getMinHour() {
                return this.getMinDate().hour();
            },
            getMaxHour() {
                return this.getMaxDate().hour();
            },
            getMinMinute() {
                return this.getMinDate().minute();
            },
            getMaxMinute() {
                return this.getMaxDate().minute();
            },
            getDate() {
                return this.clipDate((this === null || this === void 0 ? void 0 : this.date) || DEFAULT_MIN_DATE);
            },
            clipDate(date) {
                const minDate = this.getMinDate();
                const maxDate = this.getMaxDate();
                return dayjs(Math.min(Math.max(minDate.valueOf(), date.valueOf()), maxDate.valueOf()));
            },
            setYear(date, year) {
                const beforeMonthDays = date.date();
                const afterMonthDays = date.year(year).daysInMonth();
                const tempDate = date.date(Math.min(beforeMonthDays.valueOf(), afterMonthDays.valueOf()));
                return tempDate.year(year);
            },
            setMonth(date, month) {
                const beforeMonthDays = date.date();
                const afterMonthDays = date.month(month).daysInMonth();
                const tempDate = date.date(Math.min(beforeMonthDays.valueOf(), afterMonthDays.valueOf()));
                return tempDate.month(month);
            },
            getColumnOptions() {
                const { fullModes } = this.data;
                const dateParams = this.getCommonDateParams();
                const columnOptions = [];
                fullModes === null || fullModes === void 0 ? void 0 : fullModes.forEach((mode) => {
                    const columnOption = this.getOptionByType(mode, dateParams);
                    columnOptions.push(columnOption);
                });
                return columnOptions;
            },
            getCommonDateParams() {
                const date = this.getDate();
                const selYear = date.year();
                const selMonth = date.month();
                const selDate = date.date();
                const selHour = date.hour();
                const minDateYear = this.getMinYear();
                const maxDateYear = this.getMaxYear();
                const minDateMonth = this.getMinMonth();
                const maxDateMonth = this.getMaxMonth();
                const minDateDay = this.getMinDay();
                const maxDateDay = this.getMaxDay();
                const minDateHour = this.getMinHour();
                const maxDateHour = this.getMaxHour();
                const minDateMinute = this.getMinMinute();
                const maxDateMinute = this.getMaxMinute();
                return {
                    date,
                    selYear,
                    selMonth,
                    selDate,
                    selHour,
                    minDateYear,
                    maxDateYear,
                    minDateMonth,
                    maxDateMonth,
                    minDateDay,
                    maxDateDay,
                    minDateHour,
                    maxDateHour,
                    minDateMinute,
                    maxDateMinute,
                };
            },
            getOptionByType(type, dateParams) {
                switch (type) {
                    case ModeItem.YEAR:
                        return this.getYearOptions(dateParams);
                    case ModeItem.MONTH:
                        return this.getMonthOptions(dateParams);
                    case ModeItem.DATE:
                        return this.getDayOptions(dateParams);
                    case ModeItem.HOUR:
                        return this.getHourOptions(dateParams);
                    case ModeItem.MINUTE:
                        return this.getMinuteOptions(dateParams);
                    default:
                        break;
                }
            },
            getYearOptions(dateParams) {
                const { locale } = this.data;
                const { minDateYear, maxDateYear } = dateParams;
                const years = [];
                for (let i = minDateYear; i <= maxDateYear; i += 1) {
                    years.push({
                        value: `${i}`,
                        label: `${i + locale.year}`,
                    });
                }
                return years;
            },
            getMonthOptions(dateParams) {
                const { locale } = this.data;
                const { minDateYear, maxDateYear, selYear, minDateMonth, maxDateMonth } = dateParams;
                const months = [];
                let minMonth = 0;
                let maxMonth = 11;
                if (minDateYear === selYear) {
                    minMonth = minDateMonth;
                }
                if (maxDateYear === selYear) {
                    maxMonth = maxDateMonth;
                }
                for (let i = minMonth; i <= maxMonth; i += 1) {
                    months.push({
                        value: `${i}`,
                        label: `${i + 1 + locale.month}`,
                    });
                }
                return months;
            },
            getDayOptions(dateParams) {
                const { locale } = this.data;
                const { minDateYear, maxDateYear, minDateMonth, maxDateMonth, minDateDay, maxDateDay, selYear, selMonth, date } = dateParams;
                const days = [];
                let minDay = 1;
                let maxDay = date.daysInMonth();
                if (minDateYear === selYear && minDateMonth === selMonth) {
                    minDay = minDateDay;
                }
                if (maxDateYear === selYear && maxDateMonth === selMonth) {
                    maxDay = maxDateDay;
                }
                for (let i = minDay; i <= maxDay; i += 1) {
                    days.push({
                        value: `${i}`,
                        label: `${i + locale.day}`,
                    });
                }
                return days;
            },
            getHourOptions(dateParams) {
                const { locale } = this.data;
                const { minDateYear, maxDateYear, minDateMonth, maxDateMonth, minDateDay, minDateHour, maxDateDay, maxDateHour, selYear, selMonth, selDate, } = dateParams;
                const hours = [];
                let minHour = 0;
                let maxHour = 23;
                if (minDateYear === selYear && minDateMonth === selMonth && minDateDay === selDate) {
                    minHour = minDateHour;
                }
                if (maxDateYear === selYear && maxDateMonth === selMonth && maxDateDay === selDate) {
                    maxHour = maxDateHour;
                }
                for (let i = minHour; i <= maxHour; i += 1) {
                    hours.push({
                        value: `${i}`,
                        label: `${i + locale.hour}`,
                    });
                }
                return hours;
            },
            getMinuteOptions(dateParams) {
                const { locale } = this.data;
                const { minDateYear, maxDateYear, minDateMonth, maxDateMonth, minDateDay, maxDateDay, minDateHour, maxDateHour, minDateMinute, maxDateMinute, selYear, selMonth, selDate, selHour, } = dateParams;
                const minutes = [];
                let minMinute = 0;
                let maxMinute = 59;
                if (minDateYear === selYear && minDateMonth === selMonth && minDateDay === selDate && minDateHour === selHour) {
                    minMinute = minDateMinute;
                }
                if (maxDateYear === selYear && maxDateMonth === selMonth && maxDateDay === selDate && maxDateHour === selHour) {
                    maxMinute = maxDateMinute;
                }
                for (let i = minMinute; i <= maxMinute; i += 1) {
                    minutes.push({
                        value: `${i}`,
                        label: `${i + locale.minute}`,
                    });
                }
                return minutes;
            },
            getValueCols() {
                return {
                    columns: this.getColumnOptions(),
                    columnsValue: this.getColumnsValue(),
                };
            },
            getColumnsValue() {
                const { fullModes } = this.data;
                const date = this.getDate();
                const columnsValue = [];
                fullModes === null || fullModes === void 0 ? void 0 : fullModes.forEach((mode) => {
                    columnsValue.push(`${date[mode]()}`);
                });
                return columnsValue;
            },
            getNewDate(value, type) {
                let newValue = this.getDate();
                switch (type) {
                    case ModeItem.YEAR:
                        newValue = this.setYear(newValue, value);
                        break;
                    case ModeItem.MONTH:
                        newValue = this.setMonth(newValue, value);
                        break;
                    case ModeItem.DATE:
                        newValue = newValue.date(value);
                        break;
                    case ModeItem.HOUR:
                        newValue = newValue.hour(value);
                        break;
                    case ModeItem.MINUTE:
                        newValue = newValue.minute(value);
                        break;
                    default:
                        break;
                }
                return this.clipDate(newValue);
            },
            onColumnChange(e) {
                const { value, column } = e === null || e === void 0 ? void 0 : e.detail;
                const { fullModes, format } = this.data;
                const columnValue = value === null || value === void 0 ? void 0 : value[column];
                const columnType = fullModes === null || fullModes === void 0 ? void 0 : fullModes[column];
                const newValue = this.getNewDate(parseInt(columnValue, 10), columnType);
                this.date = newValue;
                const { columns, columnsValue } = this.getValueCols();
                this.setData({
                    columns,
                    columnsValue,
                });
                const date = this.getDate();
                const pickValue = format ? date.format(format) : date.valueOf();
                this.triggerEvent('pick', { value: pickValue });
            },
            onConfirm() {
                const { format } = this.properties;
                const date = this.getDate();
                const value = format ? date.format(format) : date.valueOf();
                this._trigger('change', { value });
                this.resetColumns();
            },
            onCancel() {
                this.resetColumns();
                this.triggerEvent('cancel');
            },
            onVisibleChange(e) {
                if (!e.detail.visible) {
                    this.resetColumns();
                }
            },
            resetColumns() {
                const parseDate = this.getParseDate();
                this.date = parseDate;
                const { columns, columnsValue } = this.getValueCols();
                this.setData({
                    columns,
                    columnsValue,
                });
            },
        };
    }
    getFullModeArray(mode) {
        if (typeof mode === 'string' || mode instanceof String) {
            return this.getFullModeByModeString(mode, FULL_MODES);
        }
        if (Array.isArray(mode)) {
            if ((mode === null || mode === void 0 ? void 0 : mode.length) === 1) {
                return this.getFullModeByModeString(mode[0], FULL_MODES);
            }
            if ((mode === null || mode === void 0 ? void 0 : mode.length) === 2) {
                const dateModes = this.getFullModeByModeString(mode[0], DATE_MODES);
                const timeModes = this.getFullModeByModeString(mode[1], TIME_MODES);
                return [...dateModes, ...timeModes];
            }
        }
    }
    getFullModeByModeString(modeString, matchModes) {
        if (!modeString) {
            return [];
        }
        const endIndex = matchModes === null || matchModes === void 0 ? void 0 : matchModes.findIndex((mode) => modeString === mode);
        return matchModes === null || matchModes === void 0 ? void 0 : matchModes.slice(0, endIndex + 1);
    }
    isTimeMode() {
        const { fullModes } = this.data;
        return fullModes[0] === ModeItem.HOUR;
    }
};
DateTimePicker = __decorate([
    wxComponent()
], DateTimePicker);
export default DateTimePicker;
