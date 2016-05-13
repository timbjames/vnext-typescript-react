/// <reference path="moment.d.ts" />


declare module 'react-datetime' {

    interface IDateTimeFieldProps {
        open: boolean;
        timeFormat: any;
        dateFormat: string;
        value: any;
        onChange: Function;
    }

    interface DateTimeFieldClass extends React.ComponentClass<IDateTimeFieldProps> {

    }
    interface DateTimeField extends React.ReactElement<{}> { }

    var ReactDateTime: DateTimeFieldClass;

    export default ReactDateTime;
}

