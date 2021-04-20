import React, {useState} from 'react';
import List from './list';

function Main (props) { 
   const [fishFarm] = useState(props.data) 
   return (
      fishFarm.map((fish, index) => {
         return <List key={index} fish={fish} index={index} />
      })
   )

}

export default Main;