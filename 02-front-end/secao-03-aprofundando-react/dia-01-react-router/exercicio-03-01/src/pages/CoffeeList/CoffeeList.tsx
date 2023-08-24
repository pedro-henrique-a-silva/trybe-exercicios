// src/pages/coffee-list/index.tsx
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { coffeeList } from '../../data';


function CoffeeList() {
  const location = useLocation();
  console.log(location);
  
  return (
    <div>
      <h1>Nossos cafés</h1>
      <main>
        <ul>
          {
            coffeeList.map((coffee) => (
              <Link to={ `/coffee/${coffee.slug}` } key={ coffee.id }>
                <li>{ coffee.title }</li>
              </Link>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default CoffeeList;
