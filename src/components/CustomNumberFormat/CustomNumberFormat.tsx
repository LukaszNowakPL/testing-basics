import React from "react";
import NumberFormat from "react-number-format";

export const CustomNumberFormat:React.FC = ({ inputRef, onChange, ...other }: any) => {

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: other.name,
                        value: values.value,
                    },
                });
            }}
            allowNegative={false}
            decimalScale={0}
        />
    );
};