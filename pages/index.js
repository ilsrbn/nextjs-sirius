import Head from 'next/head'
import Home from '../components/Content'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


export default function App() {
   return (
    <div className="App">
      <Header /><Sidebar /><Home />
    </div>
)
}
