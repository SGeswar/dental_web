// src/pages/PersonalDetailsFormStyles.js
import { styled } from '@mui/system';
import { Container, Box, Avatar } from '@mui/material';

export const GradientBackground = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: 'linear-gradient(to bottom right, #ff6b6b, #ffa500)',
  ...(theme.palette.mode === 'dark' && {
    background: 'linear-gradient(to bottom right, #1a1a1a, #333333)',
  }),
}));

export const FormContainer = styled(Container)(({ theme }) => ({
  maxWidth: 'sm',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

export const AvatarContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '-2rem',
  zIndex: 1,
});

export const CustomAvatar = styled(Avatar)({
  width: 80,
  height: 80,
});
