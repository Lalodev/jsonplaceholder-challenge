import { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import Table from './components/Table';

function App() {
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  const API_URL = 'https://jsonplaceholder.typicode.com/';

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${API_URL}${reqType}`);
        const data = await res.json();
        //console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/*<List items={items} />*/}
      <Table items={items} />
    </div>
  );
}

export default App;
