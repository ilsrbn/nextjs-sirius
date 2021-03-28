import Head from 'next/head'
import Header from '../components/Header'
import Home from '../components/Content'
import Sidebar from '../components/Sidebar'


export default function App() {
   return (
    <div className="App">
      <Header /><Sidebar /><Home />
    </div>
)
}
