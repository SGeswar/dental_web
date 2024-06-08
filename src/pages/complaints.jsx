import React, { useState } from 'react';
import {
    Box,
    Fab,
    Container,
    Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextField,
    IconButton
} from '@mui/material';
import { GrNext, GrFormAdd } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import TeethImages from './TeethChart'
import Dialog from '@mui/material/Dialog';



export default function PersonalDetailsForm() {

    const location = useLocation();
    const stage2 = location.state?.stage2 || {};
    const [additional, setAdditional] = useState('');
    const [inputs, setInputs] = useState([{ id: uuidv4(), primaryValue: '', secondaryValue: '', additionalInputs: [] }]);
    const complaints = ["Pain", "Swelling", "sensitivity", "bleeding gums", "gum swelling", "Food lodgement", "Stains", "Halitosis", "Irregular teeth", "Missing teeth", "Trismus", "Pedo", "Ulcers", "Dislodge crown", "Cosmetic", "Dislodge filling", "Fracture", "Grinding of teeth"];

    const secondaryOptions = {
        "Pain": ["dental caries", "dental caries involving pulp", "impacted tooth", "mobile tooth", "neurological pain"],
        "Swelling": ["dental caries", "dental caries involving pulp", "impacted tooth", "gland involved", "space involved"],
        "sensitivity": ["due to cervical abbrasion in relation to", "occlusal abbrasion  in relation to", "occlusal abbrasion with pulpal exposure  in relation to", "dental caries involving cervical region  in relation to"],
        "bleeding gums": ["due to hypertensive drugs", "due to subgingival caliculus", "due to deep periodontal pockets", "post delivery ", "hormonal changes", "post menopus"],
        "gum swelling": ["due to hypertensive drugs", "due to subgingival caliculus", "due to deep periodontal pockets", "post delivery ", "hormonal changes", "post menopus"],
        "Food lodgement": ["due to deep pockets", "spacing between tooths"],
        "Stains": ["external stains due to", "internal stains due to flourosis"],
        "Halitosis": ["caliculus and stains", "food lodgement", "multiple dental caries"],
        "Irregular teeth": ["deep bite", "open bite", "anterior crowding", "anter proclination", "cross bite", "loss of posterior bite", "spacing of teeth", "loss of midline", "retained tooth", "lingual / palatal positioned tooth", "buccal positioned tooth", "high upper frenum"],
        "Missing teeth": ["due to extraction", "due to conginental", "due to evulsion"],
        "Pedo": ["dentalcaries in relation to", "root stumps in relation to"],
        "Ulcers": ["antibiotics", "trauma due to sharp tooth", "cheek bite", "due to questionable pathology"],
        "Dislodge crown": ["dislodge crown / bridge in relation to"],
        "Cosmetic": ["patient want smile design"],
        "Dislodge filling": ["dislodge filling in relation to"],
        "Fracture": ["Simple", "Complex"],
        "Grinding of teeth": ["due to bruxism"],
    };

    const addInput = () => {
        setInputs(prevInputs => [...prevInputs, { id: uuidv4(), primaryValue: '', secondaryValue: '', additionalInputs: [] }]);
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
      };
    
      const closePopup = () => {
        setIsPopupOpen(false);
      };    

    // const addAdditionalInput = (inputId) => {
    //     setInputs(prevInputs =>
    //         prevInputs.map(input => {
    //             if (input.id === inputId) {
    //                 return {
    //                     ...input,
    //                     additionalInputs: [...input.additionalInputs, { id: uuidv4(), value: '' }]
    //                 };
    //             }
    //             return input;
    //         })
    //     );
    // };

    const handlePrimaryChange = (id, event) => {
        const newInputs = inputs.map(input => {
            if (input.id === id) {
                return { ...input, primaryValue: event.target.value, secondaryValue: '', additionalInputs: [] };
            }
            return input;
        });
        setInputs(newInputs);
    };

    const handleSecondaryChange = (id, event) => {
        const newInputs = inputs.map(input => {
            if (input.id === id) {
                return { ...input, secondaryValue: event.target.value };
            }
            return input;
        });
        setInputs(newInputs);
    };

    const handleAdditionalInputChange = (inputId, additionalInputId, event) => {
        setInputs(prevInputs =>
            prevInputs.map(input => {
                if (input.id === inputId) {
                    return {
                        ...input,
                        additionalInputs: input.additionalInputs.map(addInput => {
                            if (addInput.id === additionalInputId) {
                                return { ...addInput, value: event.target.value };
                            }
                            return addInput;
                        })
                    };
                }
                return input;
            })
        );
    };

    const handleDelete = (id) => {
        setInputs(prevInputs => prevInputs.filter(input => input.id !== id));
    };

    const handleDeleteAdditionalInput = (inputId, additionalInputId) => {
        setInputs(prevInputs =>
            prevInputs.map(input => {
                if (input.id === inputId) {
                    return {
                        ...input,
                        additionalInputs: input.additionalInputs.filter(addInput => addInput.id !== additionalInputId)
                    };
                }
                return input;
            })
        );
    };

    const navigate = useNavigate();

    const handleNext = () => {
        const stage3 = {
            stage2,
            complaints: inputs.map(input => ({
                primary: input.primaryValue,
                secondary: input.secondaryValue,
                additionalComplaints: input.additionalInputs.map(addInput => addInput.value)
            })),
            additional,
        };
        // Navigate to the next page
        console.log("Stage2",stage2)
        console.log("Stage3",stage3)
        navigate('/billing', { state: { stage3 } });
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
                        Patient Complaints
                    </Typography>
                    <div>
                        <p>Name: {stage2.stage1?.name}</p>
                        <p>Age: {stage2.stage1?.age} &emsp; Sex: {stage2.stage1?.gender}</p>
                    </div>
                    <Typography variant="body1" color="textSecondary">
                        Please enter patient Complaints below.
                    </Typography>
                </Box>
                <Box mt={3} className="input-box" style={{ width: '100%' }}>
                    {inputs.map(input => (
                        <Box key={input.id} mb={2}>
                            <Box display="flex" alignItems="center">
                                <FormControl variant="outlined" style={{ flex: 1, marginRight: '10px' }}>
                                    <InputLabel>Complaint</InputLabel>
                                    <Select
                                        value={input.primaryValue}
                                        onChange={(e) => handlePrimaryChange(input.id, e)}
                                        label="Complaint"
                                    >
                                        {complaints.map((option, index) => (
                                            <MenuItem key={index} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                {input.primaryValue && secondaryOptions[input.primaryValue] && (
                                    <FormControl variant="outlined" style={{ flex: 1, marginLeft: '10px' }}>
                                        <InputLabel>{input.primaryValue} Details</InputLabel>
                                        <Select
                                            value={input.secondaryValue}
                                            onChange={(e) => handleSecondaryChange(input.id, e)}
                                            label={`${input.primaryValue} Details`}
                                        >
                                            {secondaryOptions[input.primaryValue].map((option, index) => (
                                                <MenuItem key={index} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                                {input.secondaryValue && (
                                    <div className="App" style={{paddingLeft:5}}>
                                    <Button
                            variant="contained"
                            style={{ backgroundColor: '#FFA500', color: '#FFFFFF',fontSize:12, padding:3 }}
                                    onClick={openPopup}
                                    >Select Teeth</Button>
                                    {/* {isPopupOpen && <TeethImages onClose={closePopup} />} */}
                                  </div>
                                )}
                                
                                <IconButton onClick={() => handleDelete(input.id)} style={{ marginLeft: '5px' }}>
                                    <MdDeleteOutline />
                                </IconButton>
                            </Box>
                            {input.additionalInputs.map(addInput => (
                                <Box key={addInput.id} mb={2} display="flex" alignItems="center">
                                    <TextField
                                        value={addInput.value}
                                        onChange={(e) => handleAdditionalInputChange(input.id, addInput.id, e)}
                                        label="Additional Complaint"
                                        variant="outlined"
                                        fullWidth
                                        style={{ flex: 1, marginRight: '10px' }}
                                    />
                                    <IconButton onClick={() => handleDeleteAdditionalInput(input.id, addInput.id)} style={{ marginLeft: '10px' }}>
                                        <MdDeleteOutline />
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    ))}
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Fab
                            style={{ margin: '15px', backgroundColor: '#FFA500', color: '#FFFFFF' }}
                            aria-label="add"
                            onClick={addInput}>
                            <GrFormAdd size={35} />
                        </Fab>
                    </Box>
                    <TextField
                        id="additional"
                        label="Additional"
                        variant="outlined"
                        fullWidth
                        value={additional}
                        onChange={(e) => setAdditional(e.target.value)}
                        style={{ marginTop: '20px' }}
                    />
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#FFA500', color: '#FFFFFF' }}
                            onClick={handleNext}>
                            Next <GrNext />
                        </Button>
                    </Box>
                </Box>
               
                              <Dialog
        open={isPopupOpen}
        onClose={closePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
       
      > 
            <TeethImages closePopup={closePopup} />
       
      </Dialog>
            </Container>
        </main>
    );
}
