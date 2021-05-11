import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from './components/Tabs';
import {useState} from 'react';

function App() {
  const [tabs, setTabs] = useState([
    {label: "jerry", content: "jerry's content here!", selected: true},
    {label: "jerome", content: "jerome's e!", selected: false},
    {label: "gerald", content: "gerald's pizza icontent here!", selected: false},
    {label: "jason", content: "jason's content bad at bowling here!", selected: false}
  ])

  const onClickHandler = (selectedIndex) => {
    console.log(tabs[selectedIndex].label)

    tabs.map((tab, i ) => {
      let t = tab;
      if(i === selectedIndex){
        t.selected = true;
      }
      else{
        t.selected = false;
      }
      return setTabs([...tabs.slice(0,i), t, ...tabs.slice(i+1)]);
    })
  }
  return (
    <div>
      {
        tabs.map((item, i) => <Tabs label={item.label} selected={item.selected} onClickHandler={onClickHandler} index={i} key={i} />)
      }

      {
        tabs.map((item, i) => {
          if(item.selected){
            return <h1 key={i}>{item.content}</h1>
          }
          else return null;
        })
      }
    </div>
  );
}

export default App;