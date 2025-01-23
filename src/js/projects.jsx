import React, { useState } from 'react';
import { Text, Title, Box, Space, Divider, Center, Group, Image, SimpleGrid, Portal, Affix } from '@mantine/core'
import { IconBrandGithub} from '@tabler/icons-react'

function BodyText(props) {
  return <Text fw={550} c="white">{props.children}</Text>
}

function ProjectImage(props) {

  const [showModal, setShowModal] = useState(false)
  let modal = 
      <Portal>
        <Affix position={{top: 0, left: 0}}>
          {/* id like to center this Image but i'm throwing my hands up rn*/}
          <Image style={{cursor: "pointer"}} h={window.innerHeight*.8} width="auto" fit="contain" radius="md" src={props.src} onClick={() => setShowModal(!showModal)}/>
        </Affix>
      </Portal>
  return (
    <>
      {showModal && modal}
      <Image style={{cursor: "pointer"}} m="5%" radius="md" src={props.src} onClick={() => { setShowModal(!showModal); console.log(props.src)}}/>
    </>)

}

function Project({title ="default",githubLink="",webLink="", body=<></>, imgUrls=[], stack=[], tags=[]}) {

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
      <Group justify="space-between">
        <Text fw={700} span mr="4px" size="xl" c="cyber-green">{title}</Text>
        <Box>
          <a href={githubLink}>
            <Text mr="8px" fw={700} span size="sm" c="cyber-green">{githubLink.substring(8)}</Text>
          </a>
          <IconBrandGithub style={{verticalAlign:"-5px"}} size={20} color="purple"/>
        </Box>
      </Group>
      { webLink != "" &&
      <Group>
        <a href={webLink}>
          <Text mr="8px" fw={700} span size="sm" c="cyber-orange">{webLink.substring(8)}</Text>
        </a>
      </Group>
      }
      <Box mx="3%">
        <Space h="md"/>
        {body}
        <Space h="md"/>
      </Box>
      <Space h="md"/>
      <Box mx="3%">
        <SimpleGrid cols={3}>
          {imgUrls.map( url => (
            <ProjectImage 
              src={url}
              key={url}
            />
          ))}
        </SimpleGrid>
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
        <BodyText fw={600} c="white">
          Enigma is a vim-inspired TUI (Terminal User Inteface) to play crosswords. As a crossword
          enjoyer and vim-lover, I found the existenting web solutions for crossword players lacking. There user interfaces
          felt cumbersome, frustrating, behaving in ways that were intuitive me. This took me out of my joy for
          the puzzle and I felt inspired to create a better experience myself.
        </BodyText>
        <Space h="md"/>
        <BodyText c="white">
          Being a vim-inspired program there are two design choices that are reminiscent of my beloved vim.  Modality and Key Sequences.
          Inside the captive interface of the program the "grid", you manipulate your crossword with keystrokes scoped into different modes.
          In normal mode, you are navigating the board across grid squares or along clue axes. Here you can perform actions that
          would be intuitive to a seasoned vimmer, such 'd,w' to delete a word (clue) or it's variant 'd,i,w' to delete the entire word (clue).
          Likewise 'c,w' and 'c,i,w' delete the word (clue) but change your mode to insert mode, which is exited by 'escape'. 
        </BodyText>
        </>}
      imgUrls={["static/enigma/enigma-cli.png","static/enigma/enigma-single.png","static/enigma/enigma-split.png","static/enigma/enigma-help.png"]}
      stack={[ "C#", "NuGet", "Terminal.GUI", "SQLite" ]}
      tags={[ "CLI", "TUI", "Webscraper", "ORM" ]}
    />

  let flummox = 
    <Project 
      title="flummox" 
      githubLink="https://github.com/matthewKeville/ReBoggled" 
      webLink="https://flummox-app.duckdns.org"
      body={
        <>
          <BodyText>
            Flummox is a online platform to play Boggle™ with various customizations to the board and ruleset. While the obvious modifications of the game
            are present such as time limit changes, scoring changes (first finder, any, unique), and board size. The most unqiue feature is the ability to play
            the game in new topologies. For the word and math nerd, it is a pleasure to flex your lexicon on the surface of a torus or a klien bottle.
          </BodyText>
        </>}
      imgUrls={[
        "static/flummox/lobby.png",
        "static/flummox/in-game-1.png",
        "static/flummox/in-game-2.png",
        "static/flummox/post-game-1.png",
        "static/flummox/post-game-2.png",
      ]}
      stack={[ "Java", "Maven", "Spring MVC", "Spring Security", "Spring JDBC", "MariaDB", "Nginx", "React", "MantineUI", "JS", "TS" ]}
      tags={[ "Front End", "Back End", "Security", "Stateful Applications", "Graph Problems", "Authentication", "Authorization" ]}
    />

  let proximity = 
    <Project 
      title="proximity" 
      githubLink="https://github.com/matthewKeville/proximity2" 
      body={
        <>
          <BodyText>
            Proximity is a website that aggregates upcoming event data from various event providers and compiles into one place. For the outgoing
            tech nerd, you no longer need to scour multiple sites to find out the local happenings. Proximity allows users to define different geographical
            regions to scrape event data for and exports this information into different datasets depending on the users needs. Proximity supports
            the creation of export endpoints that can deliver 'icalenders', 'rss feeds', or 'json payloads'.
          </BodyText>
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
          <BodyText>
            Sound drop is an interactive audio-visual experience that lets the user create beats using dynamics of balls falling
            on lines. The length of line affects the pitch triggered by the collision and this pitch can be coerced into different scales such as
            Major, Minor, Pentatonic ... .
          </BodyText>
        </>}
      imgUrls={["static/SoundDropSD/picture1.png"]}
      stack={[ "C++" , "SoLoud" , "OpenGL", "GLFW3", "ImGui" ]}
      tags={[ "Graphics Programming", "Audio Programming" ]}
    />

  let website = 
    <Project 
      title="portfolio" 
      githubLink="https://github.com/matthewKeville/website" 
      body={
        <>
          <BodyText>
            The source code for this website.
          </BodyText>
        </>}
      imgUrls={[]}
      stack={[ "JavaScript", "React", "MantineUI", "Webpack", "CSS" ]}
      tags={[ "Web Programming", "Front-End Development" ]}
    />

  return (

    <Box id="projects-root" bg="cyber-dark-grey">

      <Title order={2} c="cyber-orange"> Projects </Title>
      <Divider variant="solid" my="10px"/>
      {enigma}
      <Divider variant="dashed" my="40px"/>
      {flummox}
      <Divider variant="dashed" my="40px"/>
      {proximity}
      <Divider variant="dashed" my="40px"/>
      {SoundDropSD}
      <Divider variant="dashed" my="40px"/>
      {website}

    </Box>
  )
}
