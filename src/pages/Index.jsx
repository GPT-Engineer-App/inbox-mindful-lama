import React from "react";
import { Box, Button, Container, Divider, Flex, Heading, Image, Stack, Text, useColorModeValue, IconButton, Tooltip } from "@chakra-ui/react";
import { FaEnvelopeOpenText, FaPlayCircle, FaUndo, FaSearch, FaSlidersH } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Stack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1589182337358-2cb63099350c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsbGFtYXxlbnwwfHx8fDE3MDg3MjI0ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="EmailiLama Logo" />
        <Heading as="h1" size="2xl" textAlign="center">
          EmailiLama: Your Inbox Transformation Guide
        </Heading>
        <Text fontSize="xl" textAlign="center" maxW="600px">
          Transform the chore of email management into a journey towards digital balance with EmailiLama.
        </Text>

        <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" w="full">
          <FeatureButton icon={<FaEnvelopeOpenText />} label="Inbox Sensei" />
          <FeatureButton icon={<FaUndo />} label="Undo & Progress" />
          <FeatureButton icon={<FaSearch />} label="Powerful Search" />
          <FeatureButton icon={<FaSlidersH />} label="Customizable Tools" />
        </Flex>

        <Divider />

        <Stack spacing={6} align="center" w="full">
          <Heading as="h2" size="xl">
            Core Features
          </Heading>
          <FeatureDescription title="Inbox Sensei" description="AI-powered email categorization tailored to your habits." />
          <FeatureDescription title="Llama Recommends" description="Personalized suggestions to keep your inbox tidy." />
          <FeatureDescription title="Zen Focus Mode" description="A calming interface to help you focus." />
        </Stack>
      </Stack>
    </Container>
  );
};

const FeatureButton = ({ icon, label }) => (
  <Tooltip hasArrow label={label} bg={useColorModeValue("gray.700", "gray.300")} color={useColorModeValue("white", "black")}>
    <IconButton m={2} fontSize="2xl" variant="ghost" color="current" icon={icon} aria-label={label} isRound />
  </Tooltip>
);

const FeatureDescription = ({ title, description }) => (
  <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

export default Index;
