import { PatternFormat, PatternFormatProps as BasePatternFormatProps } from "react-number-format";

import { Input } from "./input";

interface CepInputProps extends Omit<BasePatternFormatProps, 'format' | 'customInput'> {
  id: string;
  type: 'text';
  required?: boolean;
  name?: string;
}

const CepInput = ({
    id,
    type = "text",
    placeholder = "00.000-000",
    required = true,
    name,
    ...restOfProps
    }: CepInputProps) => {
        return (
            <PatternFormat
            {...restOfProps}
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            name={name}
            format="##.###-###"
            customInput={Input}
            />
        )
    }

export default CepInput