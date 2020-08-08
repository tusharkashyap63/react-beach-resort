import React, { Component } from 'react';
import { RoomContext } from '../context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';

export class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { featuredRooms, loading } = this.context;
    let rooms = featuredRooms.map((room) => <Room key={room.id} room={room} />);

    return (
      <section className='featured-rooms'>
        <Title title='featuredRooms' />
        <div className='featured-rooms-center'>{loading ? <Loading /> : rooms}</div>
      </section>
    );
  }
}

export default FeaturedRooms;
