"use client"
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./component/doctorModal";


const doctorsPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <Box>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Button onClick={() => setIsOpen(true)}>Create Doctor</Button>
                <DoctorModal open={isOpen} setOpen={setIsOpen}></DoctorModal>
                <TextField size="small" placeholder="Search Doctor" />
            </Stack>
        </Box>
    );
};

export default doctorsPage;