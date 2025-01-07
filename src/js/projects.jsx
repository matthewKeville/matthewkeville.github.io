import React from 'react';
import { Text, Title, Box, Space, Divider, Center } from '@mantine/core'
import { IconBrandGithub} from '@tabler/icons-react'

function Project({title ="default",githubLink="",body=<></>,stack=[], tags=[]}) {

  let stackString = ""
  stack.forEach( stack => (
    stackString+= stack + "\xa0\xa0\xa0" 
  ))

  let tagsString = ""
  tags.forEach( tag => (
    tagsString+= tag + "\xa0\xa0\xa0" 
  ))

  return (
    <Box> 
      <Text fw={700} span mr="4px" size="xl" c="cyber-green">{title}</Text>
      <a href={githubLink}><IconBrandGithub style={{verticalAlign:"-10px"}} size={32} color="purple"/></a>
      <Box mx="3%">
        {body}
        <Space h="md"/>
      </Box>
      <Space h="md"/>
      <Text fw={700} size="xl" c="cyber-pink">Stack</Text>
      <Space h="md"/>
      <Box mx="3%">
        <Text fw={700} c="cyber-purple">{stackString}</Text>
      </Box>
      <Space h="md"/>
      <Center>
        <Text size="sm" span fw={700} c="white">{tagsString}</Text>
      </Center>
    </Box>
  )
}

export default function Projects() {

  let enigma = 
    <Project 
      title="enigma" 
      githubLink="https://github.com/matthewKeville/enigma" 
      body={<>
        <Space h="md"/>
        <Text c="white">
          Enigma is a vim-inspired TUI (Terminal User Inteface) to play crosswords. As a crossword
          enjoyer and vim-lover, I found the existenting web solutions for crossword players lacking. There user interfaces
          felt cumbersome, frustrating, behaving in ways that were intuitive me. This took me out of my joy for
          the puzzle and I felt inspired to create a better experience myself.
        </Text>
        <Space h="md"/>
        <Text c="white">
          Being a vim-inspired program there are two design choices that are reminiscent of my beloved vim.  Modality and Key Sequences.
          Inside the captive interface of the program the "grid", you manipulate your crossword with keystrokes scoped into different modes.
          In normal mode, you are navigating the board across grid squares or along clue axes. Here you can perform actions that
          would be intuitive to a seasoned vimmer, such 'd,w' to delete a word (clue) or it's variant 'd,i,w' to delete the entire word (clue).
          Likewise 'c,w' and 'c,i,w' delete the word (clue) but change your mode to insert mode, which is exited by 'escape'. While jumping clues
          with the motions 'w' and 'b' are a much welcomed feature, the implementation of gg(digit)(digit) is an example where this philosphy really shines.
          The grid is juxtaposed to a dynamic clues views, displaying each clue and it's ordinal. So if something catches your eye, you don't need to play
          I spy and locate where the clue resides, you can use the sequence gg12, to jump to the 12th ordinal directly.  
        </Text>
        </>}
      stack={[ "C#", "NuGet", "Terminal.GUI", "SQLite" ]}
      tags={[ "CLI", "TUI", "Webscraper", "ORM" ]}
    />

  let ReBoggled = 
    <Project 
      title="Reboggled" 
      githubLink="https://github.com/matthewKeville/ReBoggled" 
      body={
        <>
          <Space h="md"/>
          <Text c="white">
            Flummox is a online platform to play Boggle™ with various customizations to the board and ruleset. While the obvious modifications of the game
            are present such as time limit changes, scoring changes (first finder, any, unique), and board size. The most unqiue feature is the ability to play
            the game in new topologies. For the word and math inclined, it is a dream to flex your lexicon on the surface of a torus or a klien bottle.
          </Text>
        </>}
      stack={[ "Java", "Maven", "Spring MVC", "Spring Security", "Spring JDBC", "MariaDB", "Nginx", "React", "MantineUI", "JS", "TS" ]}
      tags={[ "Front End", "Back End", "Security", "Stateful Applications", "Graph Problems", "Authentication", "Authorization" ]}
    />

  let proximity = 
    <Project 
      title="proximity" 
      githubLink="https://github.com/matthewKeville/proximity2" 
      body={
        <>
          <Text c="white">
            Proximity is a website that aggregates upcoming event data from various event providers and compiles into one place. For the outgoing
            tech nerd, you no longer need to scour multiple sites to find out the local happenings. Proximity allows users to define different geographical
            regions to scrape event data for and exports this information into different datasets depending on the users needs. Proximity supports
            the creation of export endpoints that can deliver 'icalenders', 'rss feeds', or 'json payloads'.
          </Text>
        </>}
      stack={[ "Java", "Maven",  "Spring MVC", "Spring Security", "Spring JDBC", "MariaDB", "React", "MantineUI", "JS"]}
      tags={[ "Front End", "Back End", "Security", "Web Scraping", "Automation" ]}
    />

  let SoundDropSD = 
    <Project 
      title="Sound Drop SD" 
      githubLink="https://github.com/matthewKeville/Sound-Drop-SD" 
      body={
        <>
          <Text c="white">
            Sound drop is an interactive audio-visual experience that lets the user create beats using dynamics of balls falling
            on lines. The length of line affects the pitch triggered by the collision and this pitch can be coerced into different scales such as
            Major, Minor, Pentatonic ... .
          </Text>
        </>}
      stack={[ "C++" , "SoLoud" , "OpenGL", "GLFW3", "ImGui" ]}
      tags={[ "Graphics Programming", "Audio Programming" ]}
    />

  return (

    <Box bg="cyber-dark-grey">

      <Title order={2} c="cyber-orange"> Projects </Title>
      <Divider variant="solid" my="10px"/>
      {enigma}
      <Divider variant="dashed" my="40px"/>
      {ReBoggled}
      <Divider variant="dashed" my="40px"/>
      {proximity}
      <Divider variant="dashed" my="40px"/>
      {SoundDropSD}

    </Box>
  )
}
