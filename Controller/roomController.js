// some local data for rooms

const room = [
    { roomNo: 1, capacity: 100, amenities: 'ac,washing Mechine,heater', price_per_Hour: 5000, booked: false },
    { roomNo: 2, capacity: 200, amenities: 'ac,washing Mechine,heater', price_per_Hour: 10000, booked: false },
    { roomNo: 3, capacity: 300, amenities: 'ac,washing Mechine,heater', price_per_Hour: 15000, booked: false }

]

//storing booked rooms

const bookedRooms = [{
    roomNo: 2,
    capacity: 200,
    amenities: 'ac,washing Mechine,heater',
    price_per_Hour: 10000,
    booked: true,
    booking_Id: 999,
    customerName: 'gokul',
    date: '1-5-2024',
    startTime: 9,
    endTime: 17
}];

// sending available rooms

export const availableRooms = (req, res) => {


    res.status(200).send(room)
}

//for creating new room

export const createRoom = (req, res) => {
    const { capacity, amenities, price_per_Hour } = req.body;
    const newRoom = {
        roomNo: room.length + 1,
        capacity: capacity,
        amenities: amenities,
        price_per_Hour: price_per_Hour,
        booked: false
    }
    room.push(newRoom);
    res.status(200).json({ message: 'New room created successfully', newRoom })
}

// for booking rooms

export const bookRoom = (req, res) => {
    const { customerName,
        date,
        startTime,
        endTime,
        roomNo } = req.body

    const findBookedRooms = bookedRooms.find((items) => items.roomNo === roomNo && items.date == date);

    const find = room.find((item) => item.roomNo === roomNo);


    if (find) {
        const val = parseInt(Math.random() * 100000)
        if (bookedRooms.length < 1) {


            const addToBooked = { ...find, booked: true, booking_Id: val, customerName, date, startTime, endTime, roomNo }

            bookedRooms.push(addToBooked)
            console.log('starting if block', bookedRooms);
            res.status(200).json({ message: 'Room booked successfully', Data: bookedRooms })

        }

        else if (!findBookedRooms) {


            bookedRooms.push({ ...find, booked: true, booking_Id: val, customerName, date, startTime, endTime, roomNo })
            res.status(200).json({ message: 'Room booked successfully', Data: bookedRooms })
            console.log(`first block`, bookedRooms);
        }
        else (res.status(500).json({ message: "Room not available" }))
    }
    else {
        console.log('room not found')
        return res.status(200).send('room not found')
    }

}
//  send all booked rooms

export const allBookedRooms = (req, res) => {

    const dummy = []
    bookedRooms.map((item) => {

        dummy.push({
            RoomNo: item.roomNo,
            bookedStatus: item.booked,
            customerName: item.customerName,
            date: item.date,
            startTime: item.startTime,
            endTime: item.endTime
        })

    })

    console.log(dummy)
    res.status(200).json({ message: "All booked room details", dummy });
}

// send all booked rooms with certain condition

export const bookedRoomshow = (req, res) => {

    const dummy1 = []
    bookedRooms.map((item) => {

        dummy1.push({
            RoomNo: item.roomNo,

            customerName: item.customerName,
            date: item.date,
            startTime: item.startTime,
            endTime: item.endTime
        })

    })

    console.log(dummy1)
    res.status(200).json({ message: "all booked customer with important data", Data: dummy1 });



}


// Booked count with customer name

export const bookedCount = (req, res) => {

    let { name } = req.params

    let count = bookedRooms.filter((item) => item.customerName === name)


    res.status(200).json({
        message: 'fetched succesfully',
        booked_count: count.length,
        customer_name: name,
        data: count
    })
}