import React from 'react';
import { Text, Box, Space } from '@mantine/core'

export default function Projects() {

  return (
    // <Box bg="--mantine-color-cyber-green-1" mx="10%">
    <Box bg="cyber-dark-grey" mx="10%">
    <h1> Projects </h1>

    <div> 
      <Text size="xl" c="cyber-green"> Enigma </Text>
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
      <Space h="md"/>
      <Text size="xl" c="cyber-pink">Stack</Text>
      <Space h="md"/>
      <Text c="cyber-purple"> C#, Terminal.GUI, sqlite </Text>

    </div>

    <div> 
      <h3> Flummox </h3>
      <Text>
        Flummox is a online platform to play Boggle™ with various customizations to the board and ruleset. While the obvious modifications of the game
        are present such as time limit changes, scoring changes (first finder, any, unique), and board size. The most unqiue feature is the ability to play
        the game in new topologies. For the word and math inclined, it is a dream to flex your lexicon on the surface of a torus or a klien bottle.
      </Text>

      <h4>Stack</h4>
      <Text> Java, Spring MVC, Spring Security, Spring JDBC, Mariadb, Nginx, React, MantineUI, JS/TS </Text>

    </div>

    <div> 
      <h3> Proximity </h3>
      <Text>
        Proximity is a website that aggregates upcoming event data from various event providers and compiles into one place. For the outgoing
        tech nerd, you no longer need to scour multiple sites to find out the local happenings. Proximity allows users to define different geographical
        regions to scrape event data for and exports this information into different datasets depending on the users needs. Proximity supports
        the creation of export endpoints that can deliver 'icalenders', 'rss feeds', or 'json payloads'.
      </Text>

      <h4>Stack</h4>
      <Text> Java, Spring MVC, Spring Security, Spring JDBC, Mariadb, React, MantineUI, JS/TS </Text>
    </div>

    <div> 
      <h3> Sound Drop </h3>
      <Text>
        Sound drop is an interactive audio-visual experience that lets the user create beats using dynamics of balls falling
        on lines. The length of line affects the pitch triggered by the collision and this pitch can be coerced into different scales such as
        Major, Minor, Pentatonic ... .
      </Text>

      <h4>Stack</h4>
      <Text>C++, soloud, opengl, glfw, imgui </Text>
    </div>

    </Box>
  )
}
