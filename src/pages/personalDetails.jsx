import { useState } from 'react';
import {
    Box,
    Container,
    Autocomplete,
    TextField,
    Typography,
    Button,
} from '@mui/material';
import { GrNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';


const gender = ['Male', 'Female', 'Others'];

export default function PersonalDetailsForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [reference, setReference] = useState('');
    const [genderValue, setGenderValue] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);

    const navigate = useNavigate();

    const handleNext = () => {
        const stage1 = {
            name,
            age,
            phone,
            email,
            address,
            reference,
            gender: selectedGender,
        };
        // Navigate to the next page
        navigate('/dental_web/complications', { state: { stage1 } });
    };

    return (
        <main className="gradient-background">
            <Container className="form-container"
                style={{ width: '600px', height: '96vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            >
                <Box className="image-container">
                    <h1>Dr. S Ravi Shanker</h1>
                </Box>
                <Box mt={5} style={{ alignItems: 'center' }}>
                    <Typography variant="h5" component="h1" fontWeight="bold" gutterBottom style={{ textAlign: 'center' }}>
                        Patient Details
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Please enter patient information below.
                    </Typography>
                </Box>
                <Box mt={3} className="input-box" >
                    <Typography mt={2}>
                        <TextField
                            id="name"
                            label="Name"
                            required
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="normal-input"
                        />
                    </Typography>
                    <Typography mt={2}>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <TextField
                                id="age"
                                label="Age"
                                required
                                variant="outlined"
                                className="small-input"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                style={{ width: '100%', marginRight: 10 }}
                            />
                            <Autocomplete
                                className="small-input"
                                value={genderValue}
                                onChange={(event, newValue) => { setSelectedGender(newValue); }}
                                inputValue={genderValue}
                                onInputChange={(event, newInputValue) => { setGenderValue(newInputValue); }}
                                id="gender"
                                options={gender}
                                renderInput={(params) => <TextField {...params} label="Sex" />}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </Typography>
                    <Typography mt={2}>
                        <TextField
                            id="phone"
                            label="Phone No."
                            required
                            variant="outlined"
                            className="normal-input"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Typography>
                    <Typography mt={2}>
                        <TextField
                            id="email"
                            label="Email"
                            required
                            variant="outlined"
                            className="normal-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Typography>
                    <Typography mt={2}>
                        <TextField
                            id="address"
                            label="Address"
                            required
                            variant="outlined"
                            className="normal-input"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Typography>
                    <Typography mt={2}>
                        <TextField
                            id="reference"
                            label="Reference"
                            variant="outlined"
                            className="normal-input"
                            value={reference}
                            onChange={(e) => setReference(e.target.value)}
                        />
                    </Typography>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            style={{ margin: '15px', backgroundColor: '#FFA500', color: '#FFFFFF' }}
                            onClick={handleNext}>
                            Next <GrNext />
                        </Button>
                    </div>

                </Box>
            </Container>
        </main>
    );
}
