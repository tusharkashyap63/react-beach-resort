import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat',
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info: 'aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat',
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info: 'aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat',
      },
      {
        icon: <FaBeer />,
        title: 'strongest beer',
        info: 'aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((service, index) => (
            <article key={index} className='service'>
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
