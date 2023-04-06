import { Box, Button, Center, PasswordInput,  Divider, Link , NumberInput, Grid, List, Text, Textarea, TextInput, Footer } from '@mantine/core'
import React, { useRef } from 'react'
import "./contact.css"
import rj from "../../assets/rj.svg"
import p9 from "../../assets/p9.png"
import { useForm, isNotEmpty, isEmail, matchesField, isInRange, hasLength, matches } from '@mantine/form';
export default function Contact() {

    const form = useForm({

        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: "",
            confirm_password: "",

        },
        validate: {
            first_name: hasLength({ min: 2, max: 5 }, 'Your name must be 2-5 latters  '),
            last_name: isNotEmpty('Last name cant not be empaty '),
            email: isEmail('Invalid email'),
            password: isNotEmpty('Password cannot be empty'),
            confirm_password: matchesField('password', 'Passwords are not the same'),


        },
    });
    return (
        <>
            <Box id="contact" mt={50} >


                <Center>
                    <Box className='contact-conatainer'>


                        <Grid>
                            <Grid.Col md={6} lg={6}>
                                <Center>
                                    <Box className='image-box'>
                                        <img src={p9} alt="" />
                                    </Box>
                                </Center>

                            </Grid.Col>

                            <Grid.Col md={6} lg={6}>
                                <Text className='main-title'>Contact us for make our service strong</Text>
                                <Text className='title' mt="lg" weight={500}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis inventore neque libero nihil magnam sed et, iste aliquam eos iure.</Text>


                                <Box mt="lg" maw={500} mx="auto" component="form" onSubmit={form.onSubmit((value) => form.reset(console.log(value)))}>
                                    <Center mb="lg" className='main-title'> Contact us</Center>
                                    <Grid>

                                        <Grid.Col md={12} lg={12} sm={12}>
                                            <TextInput label={<Text className='label-text'>First Name</Text>} placeholder="Enter First Name"
                                                {...form.getInputProps('first_name')}

                                            />
                                        </Grid.Col>
                                        <Grid.Col md={12} lg={12} sm={12}>

                                            <TextInput label={<Text className='label-text'>Last Name</Text>} placeholder="Enter Last Name"
                                                {...form.getInputProps('last_name')}

                                            />
                                        </Grid.Col>


                                        <Grid.Col>
                                            <TextInput label={<Text className='label-text'>Email</Text>} placeholder="Email"
                                                {...form.getInputProps('email')}

                                            />
                                        </Grid.Col>


                                        <Grid.Col md={6} lg={6} sm={12}>
                                            <PasswordInput label={<Text className='label-text'>Password</Text>} placeholder="Password"
                                                {...form.getInputProps('password')}

                                            />

                                        </Grid.Col>
                                        <Grid.Col md={6} lg={6} sm={12}>
                                            <PasswordInput label={<Text className='label-text'>New Password</Text>} placeholder="Confirm Password"
                                                {...form.getInputProps('confirm_password')}

                                            />
                                        </Grid.Col>
                                        <Button type='submit' className='title' color="pink" fullWidth mt="md" radius="md">submit</Button>
                                    </Grid>
                                </Box>


                            </Grid.Col>



                        </Grid>
                    </Box>
                </Center>
                        <Footer className='footer' >
                           

                            <Box size="lg" padding={{ top: 'lg', bottom: 'sm' }}>
                                <Text align="center" size="md">
                                    Copyright © 2023 KD
                                </Text>
                               
                                <Text align="center" size="sm">
                                    <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
                                </Text>
                            </Box>
                        </Footer>
            </Box>
        </>
    )
}
