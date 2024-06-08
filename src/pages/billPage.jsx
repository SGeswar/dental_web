import React, { useState } from 'react';
import {
    Container,
    Box,
    Typography,
    Button,
    Modal,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import {
    PDFDownloadLink,
    PDFViewer,
    Image,
    Document,
    Page,
    Text,
    View,
    StyleSheet
} from '@react-pdf/renderer';
import paperBG from '../imgs/paperBG.png';

export default function BillingForm() {
    const location = useLocation();
    const stage3 = location.state?.stage3 || {};
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const handleOpenPreview = () => setIsPreviewOpen(true);
    const handleClosePreview = () => setIsPreviewOpen(false);

    const generatePDF = () => {
        setIsGeneratingPDF(true);
        setTimeout(() => {
            setIsGeneratingPDF(false);
        }, 3000);
    };

    const styles = StyleSheet.create({
        page: {
            position: 'relative',
        },
        backgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundSize: 'cover',
            opacity: 50,
            zIndex: -1
        },
        container: {
            backgroundColor: 'black',
        },
        header: {
            fontSize: 38,
            fontWeight: 'bold',
            marginBottom: 20,
            color: 'white',
            position: 'absolute',
            top: '50px',
            right: '30px',
        },
        lineContainer: {
            fontSize: 6,
            padding: 0,
            top: '17.3vh',
            color: 'black'
        },
        lineContainerD: {
            fontSize: 6,
            padding: 0,
            top: '18.2vh',
            color: 'black'
        },
        userDetails: {
            textAlign: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: 12,
            marginLeft: '2vh',
            marginRight: '5vh',
            top: '17.8vh',
        },
        complaints:{
            top: '17.8vh',
            padding:10,
        },
        complaintsHeading:{
            fontSize:16,
        },
        complaintsContent:{
            padding:15,
            fontSize:12,
        },
        items: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 20,
        },
        itemHeader: {
            flex: 1,
            marginRight: 10,
            fontWeight: 'bold',
        },
        item: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 5,
        },
        summary: {
            textAlign: 'right',
        },
    });

    const BillingDocument = (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.backgroundImage}>
                    <Image src={paperBG} style={{ width: '100%', height: '100%' }} />
                </View>
                <View style={styles.whiteBackground}> {/* Use View instead of div */}
                    <Text style={styles.header}>Dr. S Ravi Shanker</Text>
                </View>
                {/* User Details */}
                <View style={styles.lineContainer}> {/* Add a container View */}
                    <Text>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>
                </View>

                <View style={styles.userDetails}>
                    <Text>Name: {stage3.stage2.stage1.name}</Text>
                    <Text>|</Text>
                    <Text>Age: {stage3.stage2.stage1.age}</Text>
                    <Text>|</Text>
                    <Text>Sex: {stage3.stage2.stage1.gender}</Text>
                    <Text>|</Text>
                    <Text>Phone: {stage3.stage2.stage1.phone}</Text>
                </View>
                <View style={styles.lineContainerD}> {/* Add a container View */}
                    <Text>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>
                </View>
                <View style={styles.complaints} >
                    <Text style={styles.complaintsHeading}>Past complaints:</Text>
                    <Text style={styles.complaintsContent}>Past complaints:</Text>
                </View>
            </Page>
        </Document>
    );

    return (
        <Container component="main" maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1">
                    billing
                </Typography>
                <form>
                    {/* Action Buttons */}
                    <Box display="flex" justifyContent="center" mt={4} gap={2}>
                        <Button variant="contained" color="primary" disabled={isGeneratingPDF} onClick={generatePDF}>
                            {isGeneratingPDF ? 'Generating PDF...' : 'Generate PDF'}
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleOpenPreview}>
                            Preview PDF
                        </Button>
                        <PDFDownloadLink document={BillingDocument} fileName="billing-form.pdf">
                            {({ loading }) => (
                                <Button variant="contained" color="secondary" disabled={loading}>
                                    {loading ? 'Loading PDF...' : 'Download PDF'}
                                </Button>
                            )}
                        </PDFDownloadLink>
                    </Box>
                </form>
            </Box>
            <Modal open={isPreviewOpen} onClose={handleClosePreview}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        overflow: 'auto',
                    }}
                >
                    <PDFViewer width="100%" height="100%">
                        {BillingDocument}
                    </PDFViewer>
                </Box>
            </Modal>
        </Container>
    );
}
