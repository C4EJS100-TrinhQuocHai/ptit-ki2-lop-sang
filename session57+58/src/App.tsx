
import Create from './components/Create'
import Delete from './components/Delete'
import Read from './components/Read'
import Update from './components/Update'

export default function App() {
  return (
    <div>App
      <Read></Read>
      {/* <Create></Create> */}
      <Delete></Delete>
      <Update></Update>
    </div>
  )
}
