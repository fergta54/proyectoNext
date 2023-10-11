import React from 'react';
import Link from 'next/link';
import './Canchas.css';
import deportesImg from './img/deportes.jpg';
import futsalImg from './img/futsal.jpg';
import volleyImg from './img/volley.jpg';
import basquetImg from './img/basquet.jpg';
import Card from './Card';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Canchas = () => {
  const initial_deportes = [
    {
      id: 'd1',
      titulo: 'Futsal',
      imagen: { futsalImg },
    },
    {
      id: 'd2',
      titulo: 'Volley',
      imagen: { volleyImg },
    },
    {
      id: 'd3',
      titulo: 'Basquet',
      imagen: { basquetImg },
    },
  ];
  return (
    <div className="canchas">
      <div>
        <br />
        <center>
          <h2>CANCHAS</h2>
        </center>
        {/* <div className="grid-item elemento-en-segunda-celda"> */}
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
              ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
              cursus. Nulla aliquet porttitor lacus luctus accumsan. Arcu odio
              ut sem nulla pharetra diam sit. Dui id ornare arcu odio ut. Ornare
              suspendisse sed nisi lacus sed. Adipiscing tristique risus nec
              feugiat in fermentum posuere urna nec. Pharetra et ultrices neque
              ornare aenean. Mus mauris vitae ultricies leo integer malesuada
              nunc vel. Ut aliquam purus sit amet. At quis risus sed vulputate
              odio ut enim blandit. Et leo duis ut diam quam. Tempus urna et
              pharetra pharetra massa massa ultricies mi quis. Et leo duis ut
              diam quam nulla. Eu non diam phasellus vestibulum. Habitasse
              platea dictumst quisque sagittis purus sit. Praesent semper
              feugiat nibh sed pulvinar proin gravida hendrerit lectus. Pulvinar
              etiam non quam lacus. Sit amet facilisis magna etiam tempor orci.
              Nunc sed velit dignissim sodales ut eu. Tempor id eu nisl nunc mi
              ipsum. Dignissim suspendisse in est ante in nibh mauris. Aenean
              vel elit scelerisque mauris pellentesque pulvinar pellentesque.
              Vestibulum morbi blandit cursus risus at ultrices mi tempus
              imperdiet. Sit amet justo donec enim diam. Elit sed vulputate mi
              sit. Blandit massa enim nec dui nunc.
            </p>
          </div>

          <div className="col-1"></div>

          <div className="col-4">
            <Image src={deportesImg} width="80%" alt="Deportes" />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="row">
        <center>
          <h3>Deportes</h3>
        </center>
        <br />
        <br />
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2 deporte-item">
          <Link href="/Canchas/DeporteItem">
            <center>
              <h4>{initial_deportes[0].titulo}</h4>
              <Image src={futsalImg} alt={initial_deportes[0].titulo} />
            </center>
          </Link>
        </div>
        <div className="col-2"></div>

        <div className="col-2 deporte-item">
          <h4>{initial_deportes[1].titulo}</h4>

          <Image src={volleyImg} alt={initial_deportes[1].titulo} />
        </div>
        <div className="col-2"></div>
        <div className="col-2 deporte-item">
          <h4>{initial_deportes[2].titulo}</h4>

          <Image src={basquetImg} alt={initial_deportes[2].titulo} />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};
export default Canchas;
