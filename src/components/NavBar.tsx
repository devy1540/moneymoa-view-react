import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const NavBar: React.FC = () => {
    const theme = createTheme({
        palette: {
            background: {default: "#ffffff"},
            primary: {main: "#007FFF"},
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    colorInherit: {
                        backgroundColor: "#ffffff",
                        color: "#007FFF",
                        boxShadow: "none",
                        borderBottom: "1px solid #e0e0e0",
                    },
                },
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color={"inherit"}>
                <Container maxWidth={"lg"}>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: "primary.main" }}>
                                내 앱
                            </Typography>
                        </Box>
                        {["/", "/settings", "/shortcuts", "/clipboard"].map((path, index) => (
                            <Button key={index} color="inherit" to={path} sx={{ color: "primary.main" }}>
                                {["홈", "설정", "단축키 설정", "클립보드"][index]}
                            </Button>
                        ))}
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default NavBar;