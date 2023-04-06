import { Box, Burger, Center, Container, Flex, Grid, List, MediaQuery, Text } from '@mantine/core'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./nav.css"
export default function Navmenu() {
    const [activeNav, setActiveNav] = useState("#");
    const [opened, setOpened] = useState(false);
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>

            <Box className='navmenu' >

                <Grid>
                    <Grid.Col md={3}>
                        <Box className='menu-bar' onClick={() => setShowMediaIcons(!showMediaIcons)}>

                            <Burger
                                color="#fff"
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                //   size="sm"
                                mr="xl"

                            />
                        </Box>
                    </Grid.Col>
                    <Grid.Col md={6}>

                        <Center>
                            <Box>
                                <ul className={showMediaIcons ? "listitem mobile-menu-link" : "listitem"}>
                                    <li>
                                        <a href="#" >Home</a>
                                    </li>
                                    <li>
                                        <a href="#about">About</a>
                                    </li>
                                    <li>
                                        <a href="#services">Service</a>
                                    </li>
                                    <li>
                                        <a href="#gallery">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="#contact" >Contact</a>
                                    </li>
                                </ul>
                            </Box>
                        </Center>
                    </Grid.Col>
                    <Grid.Col md={3}>

                    </Grid.Col>

                </Grid>
            </Box>
        </>

    )
}
