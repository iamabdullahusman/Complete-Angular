import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit , DoCheck{
  hotelName = 'Coffee Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  title= 'Room List';
 selectedRoom ! : RoomList;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  roomList: RoomList[] = [];
  ngDoCheck(): void {  
  }
  
  constructor() { }
  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Delux room',
        amenties: 'Air Conditioner,Free wifi,bathroom,Kitchen',
        price: 500,
        photos: 'https://unsplash.com/photos/a-person-in-a-green-jacket-and-a-person-in-a-green-jacket--Px2U8xjqv8',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov2023'),
        rating: 5.5,

      },
      {
        roomNumber: 2,
        roomType: 'Delux room',
        amenties: 'Air Conditioner,Free wifi,bathroom,Kitchen',
        price: 500,
        photos: 'https://unsplash.com/photos/a-person-in-a-green-jacket-and-a-person-in-a-green-jacket--Px2U8xjqv8',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov2023'),
        rating: 4.0,

      },
      {
        roomNumber: 3,
        roomType: 'Private suit',
        amenties: 'Air Conditioner,Free wifi,bathroom,Kitchen',
        price: 500,
        photos: 'https://unsplash.com/photos/a-person-in-a-green-jacket-and-a-person-in-a-green-jacket--Px2U8xjqv8',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date('12-Nov2023'),
        rating: 2.7,

      }];
}
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Room List";
  }
  selectRoom(room:RoomList){
    this.selectedRoom = room;

  }
  addRoom(){
    const room:RoomList = {
      roomNumber:4,
      roomType:'Delux Room',
      amenties:'Air Condition,Free WiFi, TV, Bathroom , Kitchen , ',
      price: 500,
      photos:'https://unsplash.com/photos/a-person-in-a-green-jacket-and-a-person-in-a-green-jacket--Px2U8xjqv8',
      checkinTime: new Date ('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating:4.5,
    };
    this.roomList = [...this.roomList,room];
  }
}
