import React, { useState } from 'react';
import { AppShell } from "@mantine/core";

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

      <AppShell.Header>
        <h1>welcome</h1>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <Bio/>
        <Projects/>
        <Employment/>
      </AppShell.Main>

    </AppShell>
  )
}
