// LoginPage.js
import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormHelperText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    // const validateForm = () => {
    //     let valid = true;
    //     const newErrors = { email: '', password: '' };

    //     if (!email) {
    //         newErrors.email = 'Email is required';
    //         valid = false;
    //     } else if (!/\S+@\S+\.\S+/.test(email)) {
    //         newErrors.email = 'Email address is invalid';
    //         valid = false;
    //     }

    //     if (!password) {
    //         newErrors.password = 'Password is required';
    //         valid = false;
    //     } else if (password.length < 6) {
    //         newErrors.password = 'Password must be at least 6 characters';
    //         valid = false;
    //     }

    //     setErrors(newErrors);
    //     return valid;
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (validateForm()) {
            if (email === 'admin' && password === 'admin@123') {
                navigate('/details');
            } else {
                setErrors({ ...errors, password: 'Invalid credentials' });
            }
        // }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />
                    <FormControl variant="outlined" fullWidth margin="normal" required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            error={Boolean(errors.password)}
                        />
                        {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
