import { PatternFormat, PatternFormatProps } from "react-number-format";


const PhoneInput = (props: Partial<PatternFormatProps>) => {
    return (
        <PatternFormat
            {...props}
            format="(##) #####-####"
            autoComplete="tel-national"
            placeholder="(99) 99999-9999"
            className="h-9 w-full px-2 text-sm border rounded-md shadow-xs border-zinc-200 focus:outline-none"
        />
    )
}

export default PhoneInput