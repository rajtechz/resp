import { Box, Center, Container, Grid, Image, Group, Text, Button, Card, Badge, Flex } from '@mantine/core'
import React from 'react'
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import p4 from "../../assets/p4.jpg"
import "./about.css"
export default function About() {
  return (
    <>
      <Box id="about" >
        <Center>
          <Box className='about-container' mt={50}  >


            <Grid >
              <Grid.Col md={3} sm={3} >
                <Card radius="md" withBorder>
                  <Card.Section className='image-container'>
                    <Image src={p1} height={400} alt="Norway" />
                  </Card.Section>

                  <Text className='title' mt="lg" weight={500}>Most beautiful theme</Text>


                  <Text color="dimmed" className='discription' mt="lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, tenetur?
                  </Text>
                  <Button className='title' color="pink" fullWidth mt="lg" radius="md">
                    Demo
                  </Button>
                </Card>
              </Grid.Col>


              <Grid.Col md={3} sm={3} >
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section className='image-container'>
                    <Image src={p2} height={400} alt="Norway" />
                  </Card.Section>

                  <Text className='title' mt="lg">Most beautiful theme</Text>


                  <Text color="dimmed" className='discription' mt='lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aspernatur!
                  </Text>
                  <Button className='title' color="pink" fullWidth mt="lg" radius="md">
                    Demo
                  </Button>
                </Card>
              </Grid.Col>
              <Grid.Col md={3} sm={3} >
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section className='image-container'>
                    <Image src={p3} height={400} alt="Norway" />
                  </Card.Section>

                  <Text className='title' mt="lg">Most beautiful theme</Text>


                  <Text color="dimmed" className='discription' mt='lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aspernatur!
                  </Text>
                  <Button className='title' color="pink" fullWidth mt='lg' radius="md">
                    Demo
                  </Button>
                </Card>
              </Grid.Col>
              <Grid.Col md={3} sm={3} >
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section className='image-container'>
                    <Image src={p4} height={400} alt="Norway" />
                  </Card.Section>

                  <Text className='title' mt="lg">Most beautiful theme</Text>


                  <Text color="dimmed" className='discription' mt='lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aspernatur!
                  </Text>
                  <Button className='title' color="pink" fullWidth mt="lg" radius="md">
                    Demo
                  </Button>
                </Card>
              </Grid.Col>

            </Grid>

          </Box>

        </Center>






      </Box>
    </>
  )
}
