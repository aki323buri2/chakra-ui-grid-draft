import {
  FormControl, 
  FormLabel, 
  Input, 
} from "@chakra-ui/react"
import { forwardRef, useRef } from "react"
export default forwardRef(function TextField({
  label = "Label", 
  value, 
  onChange, 
  ...props 
}, ref) {
  const inputRef = useRef(ref)
  const labelRef = useRef(null)
  return (
    <FormControl variant="floating" w={200} {...props}>
      <Input 
        ref={inputRef}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <FormLabel
        ref={labelRef}
      >
        {label}
      </FormLabel>
    </FormControl>
  )
})