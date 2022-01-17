import React from 'react';
import Header from './components/header';
import Content from './components/content';

const App = () => {
  const [photos, setPhotos] = React.useState([]);
  const open = url => window.open(url);
  return (
    <div>
      <Header setPhotos={setPhotos} />
      <Content photos={photos} open={open}/>
    </div>
  );
}

export default App;