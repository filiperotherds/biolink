'use client'

import { PatternFormat, PatternFormatProps as BasePatternFormatProps } from "react-number-format";

import { Input } from "./input";

interface CnpjInputProps extends Omit<BasePatternFormatProps, 'format' | 'customInput'> {
  id: string;
  type: 'text';
  required?: boolean;
  name?: string;
}

const CnpjInput = ({
    id,
    type = "text",
    placeholder = "00.000.000/0000-00",
    required = true,
    name,
    ...restOfProps
    }: CnpjInputProps) => {
        return (
            <PatternFormat
            {...restOfProps}
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            name={name}
            format="##.###.###/####-##"
            customInput={Input}
            />
        )
    }

export default CnpjInput