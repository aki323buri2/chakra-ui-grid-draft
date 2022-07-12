import ChakraUiProvider from "./ChakraUiProvider"

const providers = [
  // props => <div>provider 1{props.children}</div>, 
  // props => <div>provider 2{props.children}</div>, 
  // props => <div>provider 3{props.children}</div>, 
  ChakraUiProvider, 
]
export default function Providers(props) {
  return providers.reduce((children, Provider) => (
    <Provider>
      {children}
    </Provider>
  ), props.children)
}