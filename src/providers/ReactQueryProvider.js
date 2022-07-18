import {
  QueryClient, 
  QueryClientProvider, 
} from "react-query"

const client = new QueryClient()

export default function ReactQueryProvider(props) {
  return (
    <QueryClientProvider client={client}>
      {props.children}
    </QueryClientProvider>
  )
}