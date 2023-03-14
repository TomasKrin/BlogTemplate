import {
  AppBar,
  Autocomplete,
  AutocompleteChangeReason,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { HOME_PATH } from "../../routes/consts";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

type Option = { label: string; path: string };

const options: Option[] = [
  { label: "Home", path: "/" },
  { label: "Sports", path: "/sports" },
  { label: "Technologies", path: "/technologies" },
  { label: "Games", path: "/games" },
];

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState<Option | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOptionSelect = (
    event: ChangeEvent<{}>,
    value: Option | null,
    reason: AutocompleteChangeReason
  ) => {
    if (reason && value) {
      setValue(value);
      setInputValue(value.label);
      navigate(value.path);
    }
  };

  useEffect(() => {
    if (value && location.pathname !== value.path) {
      setInputValue("Navigate to...");
      setValue(null);
    }
  }, [location]);

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={4}>
          <Typography
            variant="h6"
            onClick={() => navigate(HOME_PATH)}
            noWrap
            component="div"
            sx={{ cursor: "pointer", display: { xs: "none", sm: "block" } }}
          >
            BLOG
          </Typography>
          <Autocomplete
            options={options}
            value={value}
            inputValue={inputValue}
            getOptionLabel={(option) => option.label}
            onChange={handleOptionSelect}
            sx={{ width: "250px" }}
            size="small"
            renderInput={(params) => (
              <TextField {...params} label="Navigate to..." variant="outlined" fullWidth />
            )}
          />
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
