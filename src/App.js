import { Box, Stack } from "@chakra-ui/react";
import Grid from "./components/Grid";

export default function App(props) {
  return (
    <Stack bg="gray.100" p={3} spacing={3} h="100vh">
      <Box bg="gray.200" p={3}>box1</Box>
      <Box bg="gray.200" p={3}>box2</Box>
      <Box bg="gray.200" p={3} flexGrow={1}>
        <Grid />
      </Box>
    </Stack>
  )
}