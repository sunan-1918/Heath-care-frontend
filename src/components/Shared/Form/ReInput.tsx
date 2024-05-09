import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type Tcontroller = {
    name: string;
    label: string;
    type?: string;
    size?: "small" | 'medium';
    fullWidth?: boolean;
    required: boolean;
}

const ReUseInput = ({ name, type = 'text', size = 'small', fullWidth = true, required, label }: Tcontroller) => {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    type={type}
                    variant="outlined"
                    size={size}
                    fullWidth={fullWidth}
                    required={required}
                />
            )}
        />
    )
}

export default ReUseInput;