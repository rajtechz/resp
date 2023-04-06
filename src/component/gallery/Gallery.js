import React from 'react'
import { Box, Center,Grid,Image } from '@mantine/core'
import "./gallery.css"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import p4 from "../../assets/p4.jpg"
import p5 from "../../assets/p5.jpg"
export default function Gallery() {
    return (
        <>
            <Box id="gallery" mt={50}>
                <Center>

                    <Box className='gallery-container'>
                        <Grid mt={50}>
                            <Grid.Col md={4} sm={6} >
                                <Box className='image-container'>
                                    <Image src={p2} alt="Norway" />
                                </Box>
                            </Grid.Col>

                            <Grid.Col md={4} sm={6} >
                                <Box className='image-container'>
                                    <Image src={p3} alt="Norway" />
                                </Box>
                            </Grid.Col>

                            <Grid.Col md={4} sm={6}  >

                                <Box className='image-container' >
                                    <Image src={p2} alt="Norway" />
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={6} sm={6}>
                                <Box className='image-box' style={{ heigh: "750px", overflow: "hidden", position: "relative" }} >

                                    <Image src={p4} alt="Norway" style={{ objectFit: "cover", height: `100%`, width: `100%` }} />
                                </Box>
                            </Grid.Col>
                            <Grid.Col md={6} sm={6} >
                                <Box className='image-box'>

                                    <Image src={p5} alt="Norway" />
                                </Box>
                            </Grid.Col>


                        </Grid>

                    </Box>
                </Center>
            </Box>
        </>
    )
}
