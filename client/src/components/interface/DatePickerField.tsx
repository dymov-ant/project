import React, {FC} from "react"
import {KeyboardDatePicker} from "@material-ui/pickers"
import {FieldConfig} from "formik"

interface IProps {
    field: FieldConfig
    form: any
}

export const DatePickerField: FC<IProps> = ({field, form, ...other}) => {
    const currentError = form.errors[field.name]

    return (
        <KeyboardDatePicker
            disableFuture
            name={field.name}
            value={field.value}
            format="dd.MM.yyyy"
            inputVariant="outlined"
            helperText={currentError}
            error={Boolean(currentError)}
            autoOk
            cancelLabel={"Отмена"}
            onError={error => {
                // handle as a side effect
                if (error !== currentError) {
                    form.setFieldError(field.name, error)
                }
            }}
            // if you are using custom validation schema you probably want to pass `true` as third argument
            onChange={date => form.setFieldValue(field.name, date, false)}
            {...other}
        />
    )
}