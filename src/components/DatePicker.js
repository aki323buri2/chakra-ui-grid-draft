import { Box, useDisclosure, useMergeRefs, useOutsideClick, usePopper } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import TextField from "./TextField";

export default function DatePicker({
  ...props 
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const popperRef = useRef()
  const inputRef = useRef()
  useOutsideClick({
    ref: popperRef, 
    handler: () => {
      isOpen && onClose()
    }, 
  })

  return (
    <>
      <TextField 
        ref={inputRef}
        onFocus={onOpen}
        {...props}
      />
      {isOpen && (
        <Box ref={popperRef} bg="green.100">
          clendar?
        </Box>
      )}
    </>
  )
}