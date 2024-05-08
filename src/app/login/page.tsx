"use client"
import { login } from "@/Service/actions/login";
import assets from "@/assets";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface Tlogin {
    email: string;
    password: string;
}

const LoginPage = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit
    } = useForm<Tlogin>()
    const onSubmit: SubmitHandler<Tlogin> = async (data) => {

        const loadingId = toast.loading("Loging...")

        try {
            const response = await login(data);

            if (response.success === false) {
                throw new Error(response)
            }
            if (response.success) {
                toast.success(response.message, { id: loadingId })
                //router.push('/login')
            }
        } catch (error: any) {
            toast.error("Failed to Login", { id: loadingId })
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
                                Login in Health Care
                            </Typography>
                        </Box>
                    </Stack>
                    <Box sx={{ margin: '30px 0px' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    <TextField
                                        {...register("email", { required: true })}
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
                            </Grid>
                            <Typography textAlign='end' my={1}>
                                Forgot Password?
                            </Typography>
                            <Button type="submit" sx={{ margin: '5px 0px 15px 0px' }} fullWidth={true}>REGISTER</Button>
                        </form>
                        <Typography component='p' textAlign='center'>
                            Don't have an account? <Link href='/register' className="text-blue-500">Create an account</Link>
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default LoginPage;