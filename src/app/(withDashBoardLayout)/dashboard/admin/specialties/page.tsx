'use client'
import { Box, Button, Skeleton, Stack, TextField, Typography } from "@mui/material";
import SpecialtyModal from "./component/specialtyModal";
import { useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetAllSpecialityQuery } from "@/Redux/api/specialityApi";
import Image from "next/image";

const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 130 },
    {
        field: 'icon',
        headerName: 'Icon',
        width: 250,
        renderCell: ({ row }) => {
            return (
                <Box sx={{ mt: 2 }}>

                    <Image src={row.icon} width={30} height={30} alt='icon' />
                </Box>
            )
        }
    },
];


const SpecialtiesPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { data, isLoading } = useGetAllSpecialityQuery({})

    return (
        <Box>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Button onClick={() => setIsOpen(true)}>Create Specialty</Button>
                <SpecialtyModal open={isOpen} setOpen={setIsOpen} />
                <TextField size="small" placeholder="Search Specialist" />
            </Stack>
            <Box sx={{ mt: 4 }}>
                {
                    isLoading ?
                        <Skeleton variant="rounded" width='100%' height={130} /> : <DataGrid
                            rows={data}
                            columns={columns}
                            hideFooter
                        />
                }
            </Box>
        </Box>
    );
};

export default SpecialtiesPage;