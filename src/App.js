import React from "react";
import Zdjecie1 from './Zdjecia/kwiaty.jpg';
import Zdjecie2 from './Zdjecia/martwa-natura-kwiaty-1024x680.jpg';
import Zdjecie3 from './Zdjecia/1269572_1673518805_66135900.jpg';
import Zdjecie5 from './Zdjecia/niebo.jfif';
import Zdjecie6 from './Zdjecia/krajobraz.jfif';
import Zdjecie7 from './Zdjecia/images.jfif';
import Zdjecie8 from './Zdjecia/kreski.jfif';

import Zdjecie4 from './Zdjecia/D-Gromacki_Podlasie-2_50x50_olej-na-plotnie_2023-300x296.webp';
import './App.css';

function App() {
  const obraz = [
    {
      name:'Kwiaty na płutnie',
      description: 'Kwiaty na płutnie symbolizujace piękno i elegancję',
      imageUrl: Zdjecie1,
      prince:'1 000 000 zł'
    },
    {
      name: 'Martwa natura',
      description: 'Martwa natura czesto wsytępuje podczas załamania artysty.',
      imageUrl: Zdjecie2,
      prince:'500 000 zł'

    },
    {
      name: 'Kobieta z zamkniętymi oczami',
      description: 'Obraz przedstawia kobietę z zamkniętymi oczami',
      imageUrl: Zdjecie3,
      prince:'5 000 000 zł'
    },
    {
      name: 'Malownicza wieś',
      description: 'Obraz przedstawia malowniczą wies podczas jesieni',
      imageUrl: Zdjecie4,
      prince:'10 000 000 zł'
    },
    {
      name: 'Piekne niebo',
      description: 'Obraz przedstawia niebo na wietrze',
      imageUrl: Zdjecie5,
      prince:'10 000 000 zł'
    },
    {
      name: 'Piekny karajobraz',
      description: 'Obraz przedstawia Pustynię',
      imageUrl: Zdjecie6,
      prince:'10 000 000 zł'
    },
    {
      name: 'Coś pięknego',
      description: 'Obraz przedstawia jeden z najpiękniejszych obrazów',
      imageUrl: Zdjecie7,
      prince:'5 000 000 zł'
    },
    {
      name: 'Kreski',
      description: 'Obraz przedstawia szał artysty na d dziełem.',
      imageUrl: Zdjecie8,
      prince:'500 000 zł'

    },
  ];
  return (
    <div className="App">
      <h1>Galeria obrazów</h1>
      <div className="Gallery-grid">
        {obraz.map((obraz, index) =>(
                <div key={index} className="gallery-item">
                  <img
                      src={obraz.imageUrl}
                      alt={obraz.name} className="imagin"
                  />
                  <h2>{obraz.name}</h2>
                  <p>{obraz.description}</p>
                  <p>{obraz.prince}</p>

                </div>
            ))}
            </div>
          </div>
  );
}

export default App;
