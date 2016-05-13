/// <reference path="moment.d.ts" />
declare module __React {

}

declare module 'react-bootstrap-datetimepicker' {

    interface IDateTimeFieldProps {
        dateTime?: string;
        format?: string;
        inputFormat?: string;
        onChange?: Function;
        showToday?: boolean;
        size?: string;
        daysOfWeekDisabled?: number[];
        viewMode?: string;
        inputProps?: any;
        minDate?: moment.Moment;
        maxDate?: moment.Moment;
        mode?: string;
        defaultText?: string;
    }

    interface DateTimeFieldClass extends React.ComponentClass<IDateTimeFieldProps> {

    }
    interface DateTimeField extends React.ReactElement<IDateTimeFieldProps> { }

    var dateTimeField: DateTimeFieldClass;

    export default  dateTimeField;
}

