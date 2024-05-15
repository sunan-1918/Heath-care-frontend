import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Stack, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';

const SidebarItem = () => {
    const drawer = (
        <div>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <Box>
            <Stack
                sx={{
                    py: 1,
                    mt: 1
                }}
                direction='row'
                justifyContent='center'
                alignContent='center'
                gap={2}
                component={Link}
                href='/'
            >
                <Image src={assets.svgs.logo} alt='logo' width={40} height={40} />
                <Typography variant="h6" component='h1' fontWeight={600}>
                    <Box component='span' color='primary.main'>H</Box>ealth Care
                </Typography>
            </Stack>
            {drawer}
        </Box>
    );
};

export default SidebarItem;