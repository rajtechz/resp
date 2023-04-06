import { Box, List, Text, Grid, Center } from '@mantine/core'
import React from 'react'
import "./services.css"
import p11 from "../../assets/p11.png"
import p9 from "../../assets/p9.png"
import rj from "../../assets/rj.svg"
export default function Services() {
  return (
    <>
      <Box id='services' mt={50}>
        <Center>
          <Box className='services-container'>
            <Grid>
              <Grid.Col md={6} sm={6}>
                <Text className='main-title'>Why choose our service</Text>
                <Text className='title' weight={500}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis inventore neque libero nihil magnam sed et, iste aliquam eos iure.</Text>
                <List
                  mt="lg"
                  spacing="xs"

                  center
                  className='discription'
                >
                  <List.Item>Clone or download repository from GitHub</List.Item>
                  <List.Item>Install dependencies with yarn</List.Item>
                  <List.Item>To start development server run npm start command</List.Item>
                  <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                  <List.Item>Submit a pull request once you are done</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col md={6} sm={6}>
                <Center>

                  <Box className='image-container' >
                    <img src={p11} alt="" />

                  </Box>
                </Center>
              </Grid.Col>
            </Grid>
            <Grid mt={50}>
              <Grid.Col md={6} sm={6} lg={6}>


                <Box className='image-container' >
                  <img src={rj} alt="" />

                </Box>

              </Grid.Col>
              <Grid.Col md={6} sm={6} mt={50}>

                <Box  maw={700} mx="auto" >

                  <Text className='main-title'>Whe have created top websites </Text>
                  <Text className='title' weight={500}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis inventore neque libero nihil magnam sed et, iste aliquam eos iure.</Text>
                  <List
                    mt="lg"
                    spacing="xs"
                    size="sm"
                    center
                    className='discription'
                  >
                    <List.Item>Clone or download repository from GitHub</List.Item>
                    <List.Item>Install dependencies with yarn</List.Item>
                    <List.Item>To start development server run npm start command</List.Item>
                    <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                    <List.Item>Submit a pull request once you are done</List.Item>
                  </List>
                  <Text mt="lg">

                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, repudiandae eum doloremque impedit tempore placeat autem reiciendis nulla possimus iusto repellat minus nobis rerum quasi explicabo quidem quos dolorem. Fugit praesentium, totam laboriosam vero quam in accusantium maiores nihil animi doloremque, et officia suscipit neque dolores at eius amet saepe fuga ratione tenetur asperiores? Beatae repellendus eos saepe labore recusandae nemo facere et sit, odit assumenda neque ut, tenetur doloremque deserunt at, voluptatem repellat quidem impedit incidunt ipsam consequatur. Nesciunt, temporibus excepturi labore iusto accusantium dolore reprehenderit, ad, ullam illum commodi minus. Iusto laboriosam distinctio numquam eius culpa, rem incidunt.
                  </Text>
                </Box>
              </Grid.Col>
            </Grid>


          </Box>
        </Center>
      </Box>
    </>
  )
}
