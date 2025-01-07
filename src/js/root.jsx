import React, { useState } from 'react';
import { AppShell, Box, Title, Divider, Flex, Text } from "@mantine/core";
import Marquee from "react-fast-marquee";

import Bio from "./bio.jsx"
import Projects from "./projects.jsx"
import Employments from "./employment.jsx"

export default function Root() {

  return (

    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: true, desktop: true },
        padding: "md"
      }}
    >

      <AppShell.Header bg="black" align="center">
        <Flex align="center" h="100%">
          {/*<Title span order={3} ml="10%" c="cyber-green"> Matthew Keville </Title>*/}
          <Marquee>

            <Text c="red" mx="7px"> Java </Text> 
            <Text c="red" mx="7px"> Bash </Text> 
            <Text c="red" mx="7px"> C++ </Text> 
            <Text c="red" mx="7px"> C# </Text> 
            <Text c="red" mx="7px"> Lua </Text> 
            <Text c="red" mx="7px"> JS </Text> 
            <Text c="red" mx="7px"> HTML </Text> 
            <Text c="red" mx="7px"> CSS </Text> 

            <Text c="yellow" mx="7px"> Maven </Text> 
            <Text c="yellow" mx="7px"> NPM </Text> 
            <Text c="yellow" mx="7px"> Git </Text> 
            <Text c="yellow" mx="7px"> APT </Text> 
            <Text c="yellow" mx="7px"> NuGet </Text> 

            <Text c="orange" mx="7px"> Blazor </Text> 
            <Text c="orange" mx="7px"> React </Text> 
            <Text c="orange" mx="7px"> ASP.NET </Text> 
            <Text c="orange" mx="7px"> Spring Boot </Text> 
            <Text c="orange" mx="7px"> Entity Framework</Text> 

            <Text c="cyber-green" mx="7px"> Development </Text> 
            <Text c="cyber-green" mx="7px"> Testing </Text> 
            <Text c="cyber-green" mx="7px"> Deployment </Text> 
            <Text c="cyber-green" mx="7px"> Automation </Text> 
            <Text c="cyber-green" mx="7px"> Linux </Text> 

          </Marquee>
        </Flex>
      </AppShell.Header>

      {/*<AppShell.Navbar p="md">Navbar</AppShell.Navbar>*/}

      <AppShell.Main bg="cyber-dark-grey">

         <Box mx="5%">

          <Box mx="5%" pt="2%">
          {/*<Bio/>*/}
          </Box>

          <Box mx="5%" pt="2%">
            <Projects/>
          </Box>

          <Divider my="60px"/>

          <Box mx="5%" pt="2%">
            <Employments/>
          </Box>

        </Box>
      </AppShell.Main>

    </AppShell>
  )
}
