import React, { useState } from 'react'
import { Box, Button, Center, Container, Flex, Grid, Modal, Text, TextInput, useMantineTheme } from '@mantine/core'
import rj from "../assets/rj.svg"
import { useDisclosure } from '@mantine/hooks';
export default function Register() {
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission here
    }
    return (
        <>
            <Box mt={50}>
                <Container size="lg">
                    <Center> <h1> Register Here </h1></Center>
                    <Modal opened={opened} onClose={close} title={<h1 > Register Here</h1>} overlayProps={{ opacity: 0.55, blur: 3, }}>
                        <Box>
                            <form onSubmit={handleSubmit} >
                                <Flex style={{ gap: "10px" }}>
                                    <TextInput
                                        label="First Name"
                                        placeholder="Enter your first name"
                                        value={firstName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                        required
                                    />
                                    <TextInput
                                        label="Last Name"
                                        placeholder="Enter your last name"
                                        value={lastName}
                                        onChange={(event) => setLastName(event.target.value)}
                                        required
                                    />
                                </Flex>
                                <TextInput
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                                <TextInput
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                                <TextInput
                                    label="Confirm Password"
                                    placeholder="Enter your password again"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    required
                                />
                                <Center>

                                    <Button onClick={close} mt="lg" className='btn'>Register</Button>
                                </Center>

                            </form>
                        </Box>
                    </Modal>
                    <Grid>
                        <Grid.Col md={6}>
                            <Text style={{ fontSize: "50px", fontWeight: "bold" }}> Create</Text>
                            <Text style={{ fontSize: "50px", fontWeight: "bold" }}> an event</Text>
                            <Text style={{ fontSize: "50px", fontWeight: "bold" }}> registration</Text>
                            <Box >
                                <Button onClick={open} className="btn">Register</Button>
                            </Box>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Box className='image-register '>
                                <img src={rj} alt="" />
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Container>

            </Box>

        </>
    )
}
