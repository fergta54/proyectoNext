import React from 'react';
import deportesImg from './img/Univ.jpg';
import './DeporteItem.css';
import Fecha from './Otros/Fecha';
import Card from './Otros/Card';
// import Grid from '@mui/system/Unstable_Grid';
// import styled from '@mui/system/styled';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

// const Item = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   border: '1px solid',
//   borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
//   padding: theme.spacing(1),
//   borderRadius: '4px',
//   textAlign: 'center',
// }));

function DeporteItem() {
  return (
    <div>
      <header></header>
      <br />
      <h2>FUTSAL</h2>
      {/* <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid> */}

      {/* <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <Card>
            <Image src={deportesImg} width="50%" alt="IMAGEN FUTSAL" />
          </Card>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid> */}
      <div className="wrapper">
        <div className="item1"></div>

        <div className="item2">
          <h4>Ubicación</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
            ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
            cursus. Nulla aliquet porttitor lacus luctus accumsan. Arcu odio ut
            sem nulla pharetra diam sit. Dui id ornare arcu odio ut. Ornare
            suspendisse sed nisi lacus sed. Adipiscing tristique risus nec
            feugiat in fermentum posuere urna nec. Pharetra et ultrices neque
            ornare aenean. Mus mauris vitae ultricies leo integer malesuada nunc
            vel.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
            ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
            cursus. Nulla aliquet porttitor lacus luctus accumsan. Arcu odio ut
            sem nulla pharetra diam sit. Dui id ornare arcu odio ut. Ornare
            suspendisse sed nisi lacus sed. Adipiscing tristique risus nec
            feugiat in fermentum posuere urna nec. Pharetra et ultrices neque
            ornare aenean. Mus mauris vitae ultricies leo integer malesuada nunc
            vel.
          </p>
        </div>
        <br />
        <div className="item3">
          <h4>Ubicación</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15301.897736613437!2d-68.13097295218753!3d-16.502129045736044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f212477bb26cb%3A0x36db2efb4300a924!2sCampus%20Deportivo%20Univalle!5e0!3m2!1ses!2sbo!4v1696532805056!5m2!1ses!2sbo"
            width="450"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="item4">
          <h4>Requisitos</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
            ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
            cursus. Nulla aliquet porttitor lacus luctus accumsan. Arcu odio ut
            sem nulla pharetra diam sit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Dui id ornare arcu odio ut sem nulla pharetra.
            At auctor urna nunc id cursus. Nulla aliquet porttitor lacus luctus
            accumsan. Arcu odio ut sem nulla pharetra diam sit.
          </p>
        </div>

        <div className="item5">
          <h4>Horarios</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
            ornare arcu odio ut sem nulla pharetra.{' '}
          </p>
        </div>
        <div className="item6">
          <h4>Contacto</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
        </div>
        <div className="item8">
          <Image src={deportesImg} width="40%"></Image>
        </div>

        <div className="item7">
          <Fecha></Fecha>
        </div>
      </div>
    </div>
  );
}
export default DeporteItem;
