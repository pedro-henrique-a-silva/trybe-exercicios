// src/App.test.tsx

// import { render, screen } from '@testing-library/react';
import { screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import About from './About';
import { renderWithRouter } from './utils/renderWithRouter';


it('Renderiza texto da página inicial', () => {
  //  também podemos envolver o App com o BrowerRouter
  //  dessa forma 
  // render(<App />, { wrapper: BrowserRouter });
  // que também vai funcionar

  // render(
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // );

  renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})

it('Navega para página About', async () => {
  // render(<App />, { wrapper: BrowserRouter });
  renderWithRouter(<App />);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i});
  await userEvent.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})


it('Renderiza o componente About', () => {
  // render(<About />, { wrapper: BrowserRouter });
  renderWithRouter(<About />);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});


it('Navega para página Inicio', async () => {
  // render(<About />, { wrapper: BrowserRouter });
  // agora não precisamos mais importar o browserRouter nem o metodo render
  // pois eles já estão sendo importados no renderWithRouter
  // também podemos recuperar o metodo do userEvent atraves do retorno
  // da função renderWithRouter, assim podemos deixar de importar o userEvent
  // aqui também uma vez que já está sendo importado no renderWithRouter

  const { user } = renderWithRouter(<App />, {route: '/about'});

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  const homeLink = screen.getByRole('link', { name: /Início/i });
  await user.click(homeLink);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});


it('Testa rota not found', () => {
  renderWithRouter(<App />, { route: '/something-else' });

  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});