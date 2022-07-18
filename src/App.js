import { Box, Stack } from "@chakra-ui/react";
import Grid from "./components/Grid";
import { getData } from "./api/data"
import { useQuery} from "react-query"
import Uploader from "./components/Uploader";
import TextField from "./components/TextField";
import DatePicker from "./components/DatePicker";

export default function App(props) {
  const { data } = useQuery(["data", getData])
  return (
    <Stack bg="gray.100" p={3} spacing={3} h="100vh">
      <Box bg="gray.200" p={3}>
        <Stack direction="row">
          <TextField label="text 1" />
          <TextField label="text 2" />
          <DatePicker label="計上日" />
        </Stack>
      </Box>
      <Box bg="gray.200" p={3}>
        <Uploader />
      </Box>
      <Box bg="gray.200" p={3} flexGrow={1}>
        <Grid />
      </Box>
    </Stack>
  )
}