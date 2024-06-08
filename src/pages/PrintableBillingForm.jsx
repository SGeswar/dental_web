// PrintableBillingForm.js
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper
} from '@mui/material';

const PrintableBillingForm = React.forwardRef((props, ref) => {
    const { userDetails, items, calculateTotal } = props;

    return (
        <Box ref={ref} sx={{ padding: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Billing Form
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
                <Typography variant="h6">User Details</Typography>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} sm={6}>
                        <Typography>Name: {userDetails.name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Address: {userDetails.address}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Email: {userDetails.email}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Phone: {userDetails.phone}</Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
                <Typography variant="h6">Itemized Billing</Typography>
                {items.map(item => (
                    <Box key={item.id} mt={2} sx={{ border: '1px solid #ddd', padding: '8px', borderRadius: '4px' }}>
                        <Typography>Description: {item.description}</Typography>
                        <Typography>Quantity: {item.quantity}</Typography>
                        <Typography>Price: ${item.price.toFixed(2)}</Typography>
                    </Box>
                ))}
            </Paper>

            <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6">Summary</Typography>
                <Box display="flex" justifyContent="space-between" mt={2}>
                    <Typography>Total</Typography>
                    <Typography>${calculateTotal()}</Typography>
                </Box>
            </Paper>
        </Box>
    );
});

export default PrintableBillingForm;
