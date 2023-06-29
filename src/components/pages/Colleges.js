import React from 'react';
import SearchBar from '../pages/Search';
import '../../components/pages/Colleges.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Search for Colleges Information</h1>
        <h8><i>Click <a href="https://tseamcetd.nic.in/auth/TSEAMCET2022FINALPHASE.pdf" target="_blank">here</a> to get TSEAMCET 2022 Last Rank Statement Final Phase </i></h8>
        <SearchBar />
        {/* Other components and content */}
      </div>
    );
  }
}

export default App;
