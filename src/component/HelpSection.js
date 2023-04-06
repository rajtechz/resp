import { Box, Center, Container, Grid, List } from '@mantine/core'
import React from 'react'
import kd from "../assets/kd.png"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

export default function HelpSection() {
    return (
        <>
            <Box className='footer-section' mt={50}>
                <Container size="lg" >
                    <Center > <img src={kd} alt="" style={{ marginTop: "50px" }} /></Center>
                    <Grid className='grid-section '>
                        <Grid.Col md={3}>

                            <List className='social-media'>
                                <List.Item className='social-media-links'><BsFacebook /></List.Item>
                                <List.Item className='social-media-links'><BsTwitter /></List.Item>
                                <List.Item className='social-media-links'><BsInstagram /></List.Item>
                                <List.Item className='social-media-links'><BsLinkedin /></List.Item>
                            </List>

                        </Grid.Col>
                        <Grid.Col md={3}>
                            <List style={{ color: "white ",cursor :"pointer"  }}>
                                <List.Item className='item'>Clone or  GitHub</List.Item>
                                <List.Item className='item'>Install yarn</List.Item>
                                <List.Item className='item'>To start art command</List.Item>
                                <List.Item className='item'>Run tests to m build</List.Item>
                                <List.Item className='item'>Submit a pull request once</List.Item>
                            </List>

                        </Grid.Col>
                        <Grid.Col md={3}>
                            <List style={{ color: "white ", listStyle: 'none',cursor :"pointer"  }}>
                                <List.Item className='item'>Web desining</List.Item>
                                <List.Item className='item'>Business </List.Item>
                                <List.Item className='item'>Development</List.Item>
                                <List.Item className='item'>Search</List.Item>
                                <List.Item className='item'>Comment</List.Item>
                            </List>
                        </Grid.Col>
                        <Grid.Col md={3}>
                            <List style={{ color: "white ", listStyle: 'none' ,cursor :"pointer" }}>
                                <List.Item className='item'>Web desining</List.Item>
                                <List.Item className='item'>Business </List.Item>
                                <List.Item className='item'>Development</List.Item>
                                <List.Item className='item'>Search</List.Item>
                                <List.Item className='item'>Comment</List.Item>
                            </List>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
