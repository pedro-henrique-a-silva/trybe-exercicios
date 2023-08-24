// App.test.tsx

import { render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import { vi } from 'vitest';
import App from './App';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetch a joke', async () => {
    const MOCK_JOKE = {
      id: '7h3oGtrOfxc',
      joke: 'Thanks for explaining the word "many" to me. It means a lot.',
    };
    
    
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE,
    } as Response;

   

    // Podemos fazer assim também simplesmente
    // global.fetch = vi.fn(() => Promise.resolve({
    //   json: () => Promise.resolve(MOCK_JOKE),
    // } as Response));
    
    // ou assim
    // global.fetch = vi.fn(() => Promise.resolve(MOCK_RESPONSE));
    
    const mockFetch = vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce(MOCK_RESPONSE)

    render(<App />);

    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    
    expect(renderedJoke).toBeInTheDocument();
    // expect(global.fetch).toHaveBeenCalledTimes(1);
    // expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
    
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });


    const MOCK_JOKE2 = {
      id: "7h3oGtrOfcx",
      joke: 'What do you call a pig with three eyes? Piiig'
    }

     const MOCK_RESPONSE2 = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE2,
    } as Response;

    const mockFetch2 = vi.spyOn(global, 'fetch')
      .mockResolvedValue(MOCK_RESPONSE2)

    const newJokeButton = await screen.findByRole('button', {name: 'New Joke'});
    await userEvent.click(newJokeButton)
    
    const renderedJoke2 = await screen.findByText('What do you call a pig with three eyes? Piiig');
    expect(renderedJoke2).toBeInTheDocument();
    expect(mockFetch2).toHaveBeenCalledTimes(1);
  });
})