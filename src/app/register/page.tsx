"use client"
import { createPatient } from "@/Service/createPatient";
import assets from "@/assets";
import { modifyPayload } from "@/utils/FormData/modifyPayload";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface patientData {
    name: string;
    email: string;
    address: string;
    contactNumber: string;
}

interface Tpatient {
    password: string;
    patient: patientData
}

const RegisterPage = () => {
    const {
        register,
        handleSubmit
    } = useForm<Tpatient>()
    const onSubmit: SubmitHandler<Tpatient> = async (data) => {
        const formData = modifyPayload(data)
        const loadingId = toast.loading("Creating Patient...")
        try {
            const response = await createPatient(formData)

            if (response.success === false) {
                throw new Error(response)
            }
            if (response.success) {
                toast.success(response.message, { id: loadingId })
            }
        } catch (error: any) {
            toast.error("Failed to Create Patient", { id: loadingId })
        }

    }
    return (
        <Container>
            <Stack
                height="100vh"
                justifyContent='center'
                alignItems='center'>
                <Box
                    sx={{
                        boxShadow: 1,
                        maxWidth: 600,
                        width: "100%",
                        borderRadius: 1,
                        p: 4
                    }}
                >
                    <Stack justifyContent='center'
                        alignItems='center'>
                        <Box>
                            <Image src={assets.svgs.logo} alt="logo" width={50} height={50} />
                        </Box>
                        <Box>
                            <Typography component='h1' variant="h5" fontWeight={600}>
                                Register in Health Care
                            </Typography>
                        </Box>
                    </Stack>
                    <Box sx={{ margin: '30px 0px' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <TextField
                                        {...register("patient.name", { required: true })}
                                        label="Name"
                                        type="text"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        {...register("patient.email", { required: true })}
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        {...register("password", { required: true })}
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        {...register("patient.contactNumber", { required: true })}
                                        label="Contact Number"
                                        type="text"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        {...register("patient.address", { required: true })}
                                        label="Address"
                                        type="text"
                                        variant="outlined"
                                        size="small"
                                        fullWidth={true}
                                    />
                                </Grid>
                            </Grid>
                            <Button sx={{ margin: '15px 0px' }} fullWidth={true} type="submit">REGISTER</Button>
                        </form>
                        <Typography component='p' textAlign='center'>
                            Do you already have an account? <Link href='/login' className="text-blue-500">Login</Link>
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default RegisterPage;