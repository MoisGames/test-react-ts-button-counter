import './App.css'
import Button from './components/Button/Button'

function App() {
  
  return (
    <main className='app-main__wrapper'>
      <Button 
        text='Скажи как мне быть, если друг и не друг' 
        type='primary' 
        disabled={false} 
        counter={true}/>
    </main>
  )
}

export default App
