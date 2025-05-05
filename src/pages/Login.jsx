import * as React from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { href } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "whitesmoke",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          width: 350,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Log into your account
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 3 }}>
          Welcome user, please sign in to continue
        </Typography>
        <TextField
          id="input-with-icon-textfield"
          label="Email"
          name="email"
          type="email"
          size="small"
          required
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle fontSize="inherit" />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
        />
        <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
          <InputLabel size="small" htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            name="password"
            size="small"
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="small"
                >
                  {showPassword ? (
                    <VisibilityOff fontSize="inherit" />
                  ) : (
                    <Visibility fontSize="inherit" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box fullWidth>
          <FormControlLabel
            control={
              <Checkbox
                name="tandc"
                value="true"
                color="primary"
                sx={{ padding: 0.5, "& .MuiSvgIcon-root": { fontSize: 20 } }}
              />
            }
            slotProps={{
              typography: {
                fontSize: 14,
              },
            }}
            color="textSecondary"
            label="Remember me"
          />
          <Link>Forgot password?</Link>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="info"
          size="small"
          disableElevation
          fullWidth
          sx={{ my: 2 }}
          // onClick={(href = "/")}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
