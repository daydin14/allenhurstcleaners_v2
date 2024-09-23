// MUI Components
import { Box, Typography, Link, Tooltip, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    const companyName = 'Allenhurst Cleaners';
    const year = new Date().getFullYear();
    const rights = 'All rights reserved.';

    const author = 'David Aydin';
    const title = (
        <>
            <Link
                href="https://linkedin.com/in/daydin14"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{
                    color: '#ffffff', // White color for both themes
                }}
            >
                <Typography variant="subtitle2" color="textSecondary" sx={{ color: '#ffffff' }}>
                    Created by {author}
                </Typography>
            </Link>
        </>
    );

    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                textAlign: 'center',
                backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.default : theme.palette.background.paper,
            }}
        >
            <Tooltip title={title}>
                <Typography variant="body2" color="textSecondary">
                    {companyName} &copy; {year} {rights}
                </Typography>
            </Tooltip>
        </Box>
    );
};

export default Footer;