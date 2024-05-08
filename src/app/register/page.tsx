import assets from "@/assets";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
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
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    size="small"
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    size="small"
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="Contact Number"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="Address"
                                    type="text"
                                    variant="outlined"
                                    size="small"
                                    fullWidth={true}
                                />
                            </Grid>
                        </Grid>
                        <Button sx={{ margin: '15px 0px' }} fullWidth={true}>REGISTER</Button>
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