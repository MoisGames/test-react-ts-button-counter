import './App.css'
import Button from './components/Button/Button'

function App() {

  return (
    <main className='app-main__wrapper'>
      <Button type='primary' disabled={false} counter={true}/>
    </main>
  )
}

export default App
