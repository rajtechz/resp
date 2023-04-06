import { Box, Center, Container, Grid, List, Text ,ThemeIcon} from '@mantine/core'
import React from 'react'
import p6 from "../assets/p6.jpeg"
import p7 from "../assets/p7.webp"
import { AiOutlineCheckCircle } from "react-icons/ai";
const Service = () => {
  return (
    <>
      <Box id='service' mt={50}>
        <Container size="lg">

          <Center>

            <h1>Our service</h1>
          </Center>

          <Grid mt="lg">
            <Grid.Col md={6} sm={6}>
              <Text style={{ fontSize: "50px", fontWeight: "bold" }}> Faster payments, lower fees</Text>
              <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis inventore neque libero nihil magnam sed et, iste aliquam eos iure.</Text>
              <List 
              mt="lg"
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <AiOutlineCheckCircle size="1rem" />
                </ThemeIcon>
              }
              >
                <List.Item>Clone or download repository from GitHub</List.Item>
                <List.Item>Install dependencies with yarn</List.Item>
                <List.Item>To start development server run npm start command</List.Item>
                <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                <List.Item>Submit a pull request once you are done</List.Item>
              </List>
            </Grid.Col>
            <Grid.Col md={6} sm={6}>
              <Box className='image-container' style={{backgroundColor:"whitesmoke"}}>
                <img src={p6} alt="" style={{ heigh: "100vh", width: "25vw" }} />

              </Box>
            </Grid.Col>
          </Grid>


        </Container>
      </Box>
    </>
  )
}

export default Service