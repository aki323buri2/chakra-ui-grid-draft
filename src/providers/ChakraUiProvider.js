import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
})

export default function ChakraUiProvider(props) {
  return (
    <ChakraProvider theme={theme}>
      {props.children}
    </ChakraProvider>
  )
}