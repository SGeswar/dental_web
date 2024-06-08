import { useState } from 'react';
import {
    Box,
    Container,
    Checkbox,
    TextField,
    FormGroup,
    FormControlLabel,
    Typography,
    Button,
} from '@mui/material';
import { GrNext } from "react-icons/gr";
import { useNavigate, useLocation } from 'react-router-dom';


export default function PastHistory() {
    const location = useLocation();
    const stage1 = location.state?.stage1 || {};
    const [AdditionalComplications, setAdditionalComplications] = useState('');
    const [heartProblems, setHeartProblems] = useState(false);
    const [hypertensive, setHypertensive] = useState(false);
    const [diabetic, setDiabetic] = useState(false);
    const [thyroid, setThyroid] = useState(false);
    const [bloodThinners, setBloodThinners] = useState(false);

    const navigate = useNavigate();


    const handleNext = () => {
        const medicalHistory ={
            heartProblems,
            hypertensive,
            diabetic,
            thyroid,
            bloodThinners,
            AdditionalComplications
        }
        const stage2 ={
            stage1,
            medicalHistory
        }
        console.log(stage2)
        
        navigate('/complaints', { state: { stage2 } });
    }
    const handleHeartProblems = (event) => {
        setHeartProblems(event.target.checked);
    };
    const handleHypertensive = (event) => {
        setHypertensive(event.target.checked);
    };
    const handleDiabetic = (event) => {
        setDiabetic(event.target.checked);
    };
    const handleThyroid = (event) => {
        setThyroid(event.target.checked);
    };
    const handleBloodThinners = (event) => {
        setBloodThinners(event.target.checked);
    };

    return (
        <main className="gradient-background">
            <Container className="form-container" style={{ width: '600px' }} >
                <Box className="image-container">
                <h1>Dr. S Ravi Shanker</h1>
                </Box>
                <Box mt={5} >
                    <Typography variant="h5" component="h1" fontWeight="bold" gutterBottom>
                        Past Medical History
                    </Typography>
                    <div>
                        <p>Name:{stage1.name}</p>
                        <p>Age:{stage1.age}   &emsp;  Sex:{stage1.gender}</p>
                    </div>
                    <Typography variant="body1" color="textSecondary">
                        Please select any past complications.
                    </Typography>
                </Box>
                <Box mt={3} className="input-box" >
                    <Typography mt={2}>
                        <FormGroup>
                            <FormControlLabel control={
                                <Checkbox
                                    checked={heartProblems}
                                    sx={{ color: '#d95a05', '&.Mui-checked': { color: '#ff6b6b' } }}
                                    onChange={handleHeartProblems}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Heart Problems"
                            />
                            <FormControlLabel control={
                                <Checkbox
                                    checked={hypertensive}
                                    sx={{ color: '#d95a05', '&.Mui-checked': { color: '#ff6b6b' } }}
                                    onChange={handleHypertensive}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Hypertensive"
                            />
                            <FormControlLabel control={
                                <Checkbox
                                    checked={diabetic}
                                    sx={{ color: '#d95a05', '&.Mui-checked': { color: '#ff6b6b' } }}
                                    onChange={handleDiabetic}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Diabetic"
                            />
                            <FormControlLabel control={
                                <Checkbox
                                    checked={thyroid}
                                    sx={{ color: '#d95a05', '&.Mui-checked': { color: '#ff6b6b' } }}
                                    onChange={handleThyroid}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Thyroid"
                            />
                            <FormControlLabel control={
                                <Checkbox
                                    checked={bloodThinners}
                                    sx={{ color: '#d95a05', '&.Mui-checked': { color: '#ff6b6b' } }}
                                    onChange={handleBloodThinners}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Under blood thinners"
                            />
                        </FormGroup>

                    </Typography>
                    <Typography mt={2}>
                        <TextField
                            id="reference"
                            label="Additional"
                            variant="outlined"
                            className="normal-input"
                            value={AdditionalComplications}
                            onChange={(e) => setAdditionalComplications(e.target.value)}
                            style={{ width: '100%' }}
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
