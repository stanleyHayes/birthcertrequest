import {Box} from "@mui/material";

const Layout = ({children}) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 4,
                paddingTop: 4
            }}>
            {children}
        </Box>
    )
}

export default Layout;
