"use client"
import { getUserInfo, removeAccessToken } from "@/Service/actions/authservice";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
    const getUser: any = getUserInfo();
    const handleLogout = () => {
        removeAccessToken()
        router.refresh()
    }

    return (
        <Container>
            <Stack py={2} direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component={Link} href="/" fontWeight={600}>
                    <Box component='span' color='primary.main'>H</Box>ealth Care
                </Typography>
                <Stack direction="row" justifyContent="space-between" gap={4}>
                    <Typography component={Link} href="/consultation" >
                        Consultation
                    </Typography>
                    <Typography component={Link} href="/healthplan" >
                        Health Plans
                    </Typography>
                    <Typography component={Link} href="/medicine" >
                        Medicine
                    </Typography>
                    <Typography component={Link} href="/diagnostics" >
                        Diagnostics
                    </Typography>
                    <Typography component={Link} href="/ngos" >
                        NGOs
                    </Typography>
                </Stack>
                {
                    getUser?.userId ? (<Button variant="outlined" color="error" onClick={handleLogout}>Log Out</Button>) : (<Button component={Link} href="/login">Login</Button>)
                }
            </Stack>
        </Container>
    );
};

export default Navbar;