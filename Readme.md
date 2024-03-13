### Hall booking Api 

it was created by using node.js and  other third party libraries  
this app deployed in rendor.com

deployed URL ``

##### Creating New Room
To create a new Room we have to enter `` this URL in postman using post call method and  we have to pass the payload like

```
{"capacity":100,
"amenities":"nothing",
"price_per_Hour":10000}
```
##### Booking Room

to book a room we have to enter `` this URL in postman using post call method and  we have to pass the payload like

```
{
    "customerName":"gokul",
    "date":"13-3-2024",
    "startTime":1,
    "endTime":24,
    "roomNo":2
}
```
* by default i have created three rooms and stored in local so we can book rooms up to three only , if we want to book a new room first we to create new room and then we can book that particular room with room number
*

##### list all rooms with booked data

we have to make get call for this URL `` to get above details


##### list all customer with booked data

we have to make get call for this URL `` to get above details

##### list booked customer with count

we have to make get call for this URL ``  to get above details
