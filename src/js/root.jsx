import React, { useState } from 'react';
import { AppShell, Box, Title, Divider, Flex } from "@mantine/core";

import Bio from "./bio.jsx"
import Projects from "./projects.jsx"
import Employment from "./employment.jsx"

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
          <Title order={3} ml="10%" c="cyber-green"> Matthew Keville </Title>
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
            <Employment/>
          </Box>

        </Box>
      </AppShell.Main>

    </AppShell>
  )
}
