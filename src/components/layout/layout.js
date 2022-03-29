import {Box} from "@mui/material";

const Layout = ({children}) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                display: 'flex',
                alignItems: "center"
            }}>
            {children}
        </Box>
    )
}

export default Layout;
