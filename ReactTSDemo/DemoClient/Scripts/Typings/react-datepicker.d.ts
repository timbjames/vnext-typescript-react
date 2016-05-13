declare module 'react-datepicker' {

    interface IReactDatePickerProps {
        className?: string;
        dateFormat?: string;
        dateFormatCalendar?: string;
        disabled?: boolean;
        endDate?: string;
        includeDates?: any;
        isClearable?: boolean;
        onBlur?: any;
        onChange?: any;
        onDone?: any;
        maxDate?: any;
        minDate?: any;
        placeholderText?: string;
        popoverAttachment?: string;
        popoverTargetAttachment?: string;
        popoverTargetOffset?: string;
        readOnly?: boolean;
        required?: boolean;
        selected?: any;
        showTodayButton?: boolean;
        showYearDropdown?: boolean;
        startdate?: any;
        tabIndex?: number;
        title?: string
    }

    interface ReactDatePickerClass extends React.ComponentClass<IReactDatePickerProps> { }

    interface ReactDatePicker extends React.ReactElement<IReactDatePickerProps> { }

    var reactDatePicker: ReactDatePickerClass;

    export default reactDatePicker;

}