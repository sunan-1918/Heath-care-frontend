import ReUseForm from "@/components/Shared/Form/ReForm";
import ReUseInput from "@/components/Shared/Form/ReInput";
import { ReUseUpload } from "@/components/Shared/Form/ReUpload";
import ReModal from "@/components/Shared/Modal/ReModal";
import { modifyPayload } from "@/utils/FormData/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";

type IModal = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SpecialtyModal = ({ open, setOpen }: IModal) => {
    const handleSubmit = (value: FieldValues) => {
        const data = modifyPayload(value)

    }
    return (
        <ReModal open={open} setOpen={setOpen} title='Create A New Specialist'>
            <ReUseForm onSubmit={handleSubmit} >
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <ReUseInput type="text" label="Title" name="title" />
                    </Grid>
                    <Grid item md={6}>
                        <ReUseUpload name="file" label="File Upload" />
                    </Grid>
                </Grid>
                <Button sx={{ mt: 1 }} type="submit">Create</Button>
            </ReUseForm>
        </ReModal>
    );
};

export default SpecialtyModal;