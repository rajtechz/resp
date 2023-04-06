import { Box, Container } from '@mantine/core'
import React from 'react'
import { Carousel } from '@mantine/carousel';
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import p4 from "../../assets/p4.jpg"
import p5 from "../../assets/p5.jpg"
export default function Home() {

    return (
        <>
            <Box id='home' mb="lg">
                <Carousel loop slideGap="xl" style={{ backgroundColor: "black" }}
                    withIndicators
                    styles={{

                        indicator: {
                            width: '12px',
                            height: "4px",
                            transition: 'width 250ms ease',
                            marginBottom: `100px`,

                            '&[data-active]': {
                                width: "40px",
                            },
                        },
                    }}
                >
                    <Carousel.Slide  >
                        <img src={p2} alt="" style={{ height: "90vh", width: "100vw" }} />
                    </Carousel.Slide>
                    <Carousel.Slide >
                        <img src={p1} alt="" style={{ height: "90vh", width: "100vw" }} />
                    </Carousel.Slide>
                    <Carousel.Slide >
                        <img src={p3} alt="" style={{ height: "90vh", width: "100vw" }} />
                    </Carousel.Slide>
                    <Carousel.Slide >
                        <img src={p4} alt="" style={{ height: "90vh", width: "100vw" }} />
                    </Carousel.Slide>
                    <Carousel.Slide >
                        <img src={p5} alt="" style={{ height: "90vh", width: "100vw" }} />
                    </Carousel.Slide>
                </Carousel>


            </Box>
        </>
    )
}
