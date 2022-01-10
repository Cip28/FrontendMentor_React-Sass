import './App.css';
import data from './data.js'
import data2 from './data2.js'
import Header from './Header';
import TopCards from './TopCards';
import BottomCards from './BottomCards';
import {useState} from 'react'

function App () {
  
  const [state,setState]=useState(true)
  const { profiles } = data;
  const { overviews } = data2;


  const handleClick = () => {
    setState(prev => !prev)
    console.log(state)
  }
  
  const dark = 'hsl(230, 17%, 14%)'
  const light = 'hsl(0, 0%, 100%)'
  
  return (
    <div className='App'
      style={{
        backgroundColor: state ? light : dark
      }}>  
      <div className='top-cards' style={{position:'absolute',zIndex:'1000', top:'0',width:'100%',backgroundColor:state ? light : dark }}>
          <Header 
            onChange={handleClick}
            state={state}
          />
      <main>
            <TopCards
              profiles={profiles}
              state={state}
              style={{width:'100%'}}
              
              />
          
          <BottomCards
            overviews={overviews}
            state={state}
            style={{width:'100%'}}
            />
        </main> 
      </div>

    </div>
  );
}

export default App;
