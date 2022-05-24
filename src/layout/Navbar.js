import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Insights } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  ["DASHBOARD"],
  ["DATA ANALYZER"],
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let navigate = useNavigate();
  //Responsive for Burger Menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event, page) => {
    if(page===pages[0]){
      navigate("/", { replace: true });
    } else if(page===pages[1]){
      navigate("/analyzer", { replace: true });
    }
    setAnchorElNav(null);
  };

  function handleAnalyzer(event) {
    navigate("/analyzer", { replace: true });
    setAnchorElNav(null);
  }

  function handleDashboard(event) {
    navigate("/", { replace: true });
    setAnchorElNav(null);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Insights sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleDashboard}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AUTO ANALYTICS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleDashboard}>
                  <Typography textAlign="center">{pages[0]}</Typography>
                </MenuItem>

                <MenuItem onClick={handleAnalyzer}>
                  <Typography textAlign="center">{pages[1]}</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Insights sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AUTO ANALYTICS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
                onClick={handleDashboard}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages[0]}
              </Button>
              <Button
                onClick={handleAnalyzer}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages[1]}
              </Button>
          </Box>

          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              active
              key="dashboard"
              onClick={handleDashboard}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              DASHBOARD
            </Button>
            <Button
              key="analyzer"
              onClick={handleAnalyze}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              DATA ANALYZER
            </Button>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
