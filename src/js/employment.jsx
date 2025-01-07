import React from 'react';
import { Text, Title, Box, Divider, Space } from '@mantine/core'

export default function Employment() {

  return (
    <Box>

      <Title order={2} c="cyber-orange"> Employment </Title>
      <Divider variant="solid" my="10px"/>
      
      <Box>
        <Text fw={700} size="xl" c="cyber-green" order={3}> RoosterOil Software </Text>
        <Box mx="3%">
          <Space h="md"/>
          <Text c="white">
            At RoosterOil Software I worked as a fullstack web developer building
            application features within the ASP.NET ecosystem. I used Entity Framework,
            Blazor, Tailwind CSS to create new functionality and expand existing processess
            in direct response to our client's most exigent needs. RoosterOil is a small
            privately funded startup, as such my time there was spent fulfilling a wide array
            of non software duties aswell. I would travel across NJ to perform installations of
            our hardware at client venues. Connect with customers, to put a face on the virtual
            entity they communicated with in Boston. I would create a expirements and perform experiments
            with our hardware at venues to discover issues mired in the gulf between headquarters and 
            our clients.
          </Text>
        </Box>
      </Box>


      <Divider variant="dashed" my="40px"/>


      <Box>
        <Text fw={700} size="xl" c="cyber-green" order={3}> EPS Corporation </Text>
        <Box mx="3%">
          <Space h="md"/>
          <Text c="white">
            At the EPS corporation I played the role of a Testing Engineer. I migrated 
            hundreds of Junit and Selenium tests to support the transition of a product to
            a new target platform : Microsoft Edge. My other primary duty was the management
            of our Jenkins Automation server.
          </Text>
        </Box>
      </Box>


      <Divider variant="dashed" my="40px"/>

      <Box>
        <Text fw={700} size="xl" c="cyber-green" order={3}> The UPS Store</Text>
        <Box mx="3%">
          <Space h="md"/>
          <Text c="white">
            At the UPS store, I worked as sales representative. I engaged in the 
            thrilling task of selling boxes and packaging valuable items in boxes
            to be shipped around the world.
          </Text>
        </Box>
      </Box>


      <Divider variant="dashed" my="40px"/>

      <Box>
        <Text fw={700} size="xl" c="cyber-green" order={3}> Dominoes </Text>
        <Box mx="3%">
          <Space h="md"/>
          <Text c="white">
            Dominoes my beloved, a canon event in the life of early college student. I
            dilligently slung 'za from car to those with empty stomaches.
          </Text>
        </Box>
      </Box>

    </Box>
  )
}
