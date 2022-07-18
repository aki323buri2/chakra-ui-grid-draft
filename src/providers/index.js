import ChakraUiProvider from "./ChakraUiProvider"
import ReactQueryProvider from "./ReactQueryProvider"

const providers = [
  // props => <div>provider 1{props.children}</div>, 
  // props => <div>provider 2{props.children}</div>, 
  // props => <div>provider 3{props.children}</div>, 
  ChakraUiProvider, 
  ReactQueryProvider, 
]
export default function Providers(props) {
  return providers.reduce((children, Provider) => (
    <Provider>
      {children}
    </Provider>
  ), props.children)
}