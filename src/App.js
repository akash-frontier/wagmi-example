import { WagmiConfig, createClient } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'
import './App.css'

const client = createClient({
  autoConnect: true,
  connectors:[new InjectedConnector()]
})
 
console.log(client)
 function App() {
  return (
    <div className="App">
       <WagmiConfig client={client}>
      <div className="App">{client.config.connectors[0]?.name}</div>
    </WagmiConfig>
    </div>
  );
}

export default App;
