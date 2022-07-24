import {
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverHeader, 
  PopoverBody,
  Button,
  PopoverFooter,
  ButtonGroup,
  Box,
  FormControl,
  Input,
  FormLabel, 
} from "@chakra-ui/react"
import { forwardRef, useRef } from "react"
import TextField from "./TextField"

const TextFieldControl = forwardRef(({
  label, 
  ...props
}, ref) => {
  const inputRef = useRef(null)
  const labelRef = useRef(null)
  return (
    <FormControl variant="floating" w={200} {...props} ref={ref}>
      <Input 
        ref={inputRef}
        placeholder=" "
      />
      <FormLabel
        ref={labelRef}
      >
        {label}
      </FormLabel>
    </FormControl>
  )
})

export default function DatePicker({
  ...props 
}) {
  const inputRef = useRef()
  return (
    <Popover
      initialFocusRef={inputRef}
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        {/* <Button>Trigger</Button> */}
        <TextFieldControl {...props} ref={inputRef} />
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
        <PopoverHeader pt={4} fontWeight='bold' border='0'>
          Manage Your Channels
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </PopoverBody>
        <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <Box fontSize='sm'>Step 2 of 4</Box>
          <ButtonGroup size='sm'>
            <Button colorScheme='green'>Setup Email</Button>
            <Button colorScheme='blue'>
              Next
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}