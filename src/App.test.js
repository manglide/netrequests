import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

import COV from './services';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('check if service is used to fetch data from the API', async () => {
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://jsonmock.hackerrank.com/datetime').reply(200 , {
      "time": "11:41:59 AM", "date": "08-10-2018"
    });
    let res = await COV.getCovid();
    console.log(res.data)
    expect(res.data).toEqual('08-10-2018');
});

it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
