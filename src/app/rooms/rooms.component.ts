import { Component , OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Coffee Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms:Room={
  totalRooms:20,
  availableRooms:10,
  bookedRooms:5,
  };

  roomList : RoomList[]=[{
    roomNumber:1,
    roomType: 'Delux room',
    amenties: 'Air Conditioner,Free wifi,bathroom,Kitchen',
    price:500,
    photos:'https://unsplash.com/photos/a-person-in-a-green-jacket-and-a-person-in-a-green-jacket--Px2U8xjqv8',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov2023'),  
  
  },
  {
    roomNumber:2,
    roomType: 'Delux room',
    amenties: 'Air Conditioner,Free wifi,bathroom,Kitchen',
    price:500,
    photos:'https://unsplash.com/photos/a-person-in-a-green-jacket-and-a-person-in-a-green-jacket--Px2U8xjqv8',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov2023'),  
  
  },
  {
    roomNumber:3,
    roomType: 'Private suit',
    amenties: 'Air Conditioner,Free wifi,bathroom,Kitchen',
    price:500,
    photos:'https://unsplash.com/photos/a-person-in-a-green-jacket-and-a-person-in-a-green-jacket--Px2U8xjqv8',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('12-Nov2023'),  
  
  },

];


  constructor () {}
  ngOnInit(): void {
    debugger
    console.log(this.rooms)
  }
  toggle()
  {
    this.hideRooms=!this.hideRooms;
  }

}
