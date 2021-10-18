import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayok = ['Anwar', 'Jafor', 'Alomgir', 'Salman', 'Reja']
  const products = [
    { name: 'photoshop', price: '$450', vat: '10%' },
    { name: 'Illustrator', price: '$270', vat: '10%' },
    { name: 'adobe reader', price: '$350', vat: '10%' },
    { name: 'photo change', price: '$250', vat: '10%' },
    { name: 'background', price: '$40', vat: '10%' },
    { name: 'adobe eraser', price: '$50', vat: '10%' },
  ]


  return (
    <div className="App">
      <header className="App-header">

        <Users></Users>

        <Counter></Counter>

        {/* <h4 className="name" style={{ color: 'pink ' }}>Name : {person.name + " " + person.job}</h4> */}
        {/* <p style={style}> name : {person2.name} , job : {person2.job} , wife of {person.name}</p> */}
        {/* <ul>
          <li>{nayok[0]}</li>
          <li>{nayok[1]}</li>
          <li>{nayok[2]}</li>
          <li>{nayok[3]}</li>
          <li>{nayok[4]}</li>
        </ul> */}

        {/* <Product product={Products[0]}></Product>
        <Product product={Products[1]}></Product>
        <Product product={Products[2]}></Product>
        <Product product={Products[3]}></Product>
        <Product product={Products[4]}></Product>
        <Product product={Products[5]}></Product> */}

        {
          nayok.map(name => <Hero heroName={name}></Hero>)
        }
        {
          products.map(p => <Product product={p}></Product>)
        }


      </header>


    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])
  return (
    <div>
      <h1>Dynamic Users :{users.length}</h1>
      {
        users.map(user => <UserDetails users={user}></UserDetails>)
      }
    </div>
  )
}

function UserDetails(props) {
  const { name, email, phone, id, website } = props.users
  const style = {
    backgroundColor: 'green',
    padding: '10px',
    margin: '15px'
  }
  return (
    <div style={style}>
      <h1>id : {id}</h1>
      <h2>name : {name}</h2>
      <h3>email : {email}</h3>
      <h4>phone : {phone}</h4>
      <h5>website : {website}</h5>

    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(12)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px gray solid',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '350px',
    width: '300px',
    float: 'left',
    margin: '5px'
  }
  const { name, price, vat } = props.product
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>vat {vat}</p>
      <button>Buy now</button>

    </div>

  )
}

function Hero(props) {
  return (
    <h5 style={{ backgroundColor: 'blue' }}>{props.heroName}</h5>
  )
}


export default App;
