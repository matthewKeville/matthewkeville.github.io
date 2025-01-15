import React from 'react';
import { Text, Title, Box, Divider, Space } from '@mantine/core'

function Employment({ company="", body=<></>, start="*", end="present"}) {
  return (
    <Box>
      <Text span fw={700} size="xl" c="cyber-green">{company}</Text>
      <Text span fw={500} size="sm" c="white"> &nbsp; {start} &nbsp; - &nbsp; {end}</Text>
      <Space h="md"/>
      <Box mx="3%">
        {body}
      </Box>
    </Box>
  )
}

export default function Employments() {

  let RoosterOil = <Employment 
    company="Rooster Oil" 
    start="2022"
    end="2023"
    body =
      <Text c="white">
        At RoosterOil Software I worked as a fullstack web developer building
        application features within the .NET ecosystem. I used ASP.NET, Entity Framework,
        and Blazor, to create new functionality and expand existing processess
        in direct response to our client's most exigent needs. RoosterOil is a small
        privately funded startup, as such my time there was spent fulfilling a wide array
        of non software duties aswell. I would travel across NJ to perform installations of
        our hardware at client venues. Connect with customers, to put a face on the virtual
        entity they communicated with in Boston. I would create field tests and perform experiments
        with our hardware to discover issues mired in the gulf between headquarters and 
        client venues.
      </Text>
  />

  let EPS = <Employment 
    company="EPS Corporation" 
    start="2021"
    end="2022"
    body =
      <Text c="white">
        At the EPS corporation I played the role of a Testing Engineer. I migrated 
        hundreds of Junit and Selenium tests to support the transition of a product to
        a new target platform : Microsoft Edge and managed a Jenkins server for the automation
        of our testing and release procedures. 
      </Text>
  />

  let UPS = <Employment 
    start="2020"
    end="2021"
    company="UPS Store" 
    body =
      <Text c="white">
        At the UPS store, I worked as sales representative. I engaged in the 
        thrilling task of selling boxes and packaging valuable items in boxes
        to be shipped around the world.
      </Text>
  />

  let Dominoes = <Employment 
    start="2017"
    end="2018"
    company="Dominoes" 
    body =
      <Text c="white">
        Dominoes my beloved, a canon event in the life of early college student. I
        dilligently slung 'za from my car to those with empty stomaches.
      </Text>
  />

  return (
    <Box>

      <Title order={2} c="cyber-orange"> Employment </Title>
      <Divider variant="solid" my="10px"/>
      {RoosterOil}
      <Divider variant="dashed" my="40px"/>
      {EPS}
      <Divider variant="dashed" my="40px"/>
      {UPS}
      <Divider variant="dashed" my="40px"/>
      {Dominoes}

    </Box>
  )
}
