import React from "react";
import "./style.scss";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";
import CarouselApp from "../../components/Carousel";
import bar from "../../imgs/bar.svg";
import RoomOption from "../../components/RoomOption";

export default function HotelDetail() {
  const { value: where, change: changeWhere, reset: resetWhere } = useInput("");
  const {
    value: checkIn,
    change: changeCheckIn,
    reset: resetCheckIn,
  } = useInput("");
  const {
    value: checkOut,
    change: changeCheckOut,
    reset: resetCheckOut,
  } = useInput("");
  const { value: adult, change: changeAdult, reset: resetAdult } = useInput("");
  const {
    value: children,
    change: changeChildren,
    reset: resetChildren,
  } = useInput("");
  const { value: room, change: changeRoom, reset: resetRoom } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(where, checkIn, checkOut, adult, room);
    resetWhere();
    resetAdult();
    resetCheckIn();
    resetCheckOut();
    resetRoom();
    resetChildren();
  };
  const hotelDetail = {
    title: "Lagos Marriott Hotel Ikeja",
    address: "122 Joel Ogunnaike St, GRA 100271, Ikeja Phone: 0908 825 2020",
    shortdescription:
      "Flanked by palm trees, this upscale hotel is 1 km from Ikeja Golf Club and 7 km from Murtala Muhammed International Airport.There's a lobby bar, an informal grill, and a buffet restaurant featuring a terrace",
    roomTypes: [
      {
        title: "Double Room with Two Double Beds",
        price: "100,622",
        size: "34 m²",
        bed: "2 double beds",
        bath: "Jacuzzi , Shower, Half Bath",
      },
      {
        title: "King Guest Room",
        price: "100,622",
        size: "34 m²",
        bed: "2 double beds",
        bath: "Jacuzzi , Shower, Half Bath",
      },
      {
        title: "Junior King Suite",
        price: "100,622",
        size: "34 m²",
        bed: "2 double beds",
        bath: "Jacuzzi , Shower, Half Bath",
      },
    ],
  };
  const { title, address, shortdescription, longDescription, roomTypes } =
    hotelDetail;
  return (
    <div className="hotel-detail">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <div className="place-search">
            <div className="search-item">
              <label>Where are you going ? </label>
              <input
                type="text"
                list="listid"
                {...changeWhere}
                placeholder="Where are you going?"
              />
              <datalist id="listid">
                <option label="Popular Destinations" value="&zwnj;" />{" "}
                {/* write a condition for this , incase someone sends this above empty value */}
                <option value="Abuja " label="Nigeria" />
                <option value="Lagos" label="Nigeria" />
                <option value="Ikeja" label="Nigeria" />
                <option value="Lekki" label="Nigeria" />
                <option value="Ibadan" label="Nigeria" />
              </datalist>
            </div>
          </div>

          <div className="date-search">
            <div className="search-item">
              <label>Check-in </label>
              <input type="date" {...changeCheckIn} />
            </div>
            <div className="search-item">
              <label>Check-out </label>
              <input type="date" {...changeCheckOut} />
            </div>
          </div>

          <div className="info-search">
            <div className="search-item">
              <label>adults </label>
              <input type="number" placeholder="adults" {...changeAdult} />
            </div>

            <div className="search-item">
              <label>children</label>

              <input type="number" placeholder="children" {...changeChildren} />
            </div>
            <div className="search-item">
              <label>rooms </label>

              <input type="number" placeholder="rooms" {...changeRoom} />
            </div>
          </div>
          <Button type="submit" title="Find Hotel" />
        </form>
      </div>
      <div className="hotel-title">
        <h1>{title}</h1>
        <p>Address: {address}</p>
        <p>4.7 &#9734; &#9733; &#9733; &#9733; &#9733;2,315 Google reviews</p>
        <p>{shortdescription}</p>
      </div>
      <div className="gallery">
        <div className="hotel-summary">
          <h2>Hotel Details</h2>
          <div className="map"></div>
          <div className="amenities-detail">
            <div className="single-amenity">
              <img src={bar} alt="bar" />
              <p>Bar/Lounge</p>
            </div>
            <div className="single-amenity">
              <img src={bar} alt="bar" />
              <p>Bar/Lounge</p>
            </div>
            <div className="single-amenity">
              <img src={bar} alt="bar" />
              <p>Bar/Lounge</p>
            </div>
            <div className="single-amenity">
              <img src={bar} alt="bar" />
              <p>Bar/Lounge</p>
            </div>
            <div className="single-amenity">
              <img src={bar} alt="bar" />
              <p>Bar/Lounge</p>
            </div>
            <div className="single-amenity">
              <img src={bar} alt="bar" />
              <p>Bar/Lounge</p>
            </div>
            <div className="single-amenity">
              <img src={bar} alt="bar" />
              <p>Bar/Lounge</p>
            </div>
            <div className="single-amenity">
              <img src={bar} alt="bar" />
              <p>Bar/Lounge</p>
            </div>
          </div>

          <div className="hotel-type">
            <div>
              <strong>Hotel Type</strong>
              <p>Suites</p>
            </div>
            <div>
              <strong>Number of Rooms</strong>
              <p>169</p>
            </div>
            <div>
              <strong>Room Types</strong>
              <p>5</p>
            </div>
          </div>
        </div>
        <CarouselApp />
      </div>
      <div className="description">
        <div className="description-text">
          <p>
            Set in Lagos, 10 km from National Stadium Lagos, Lagos Marriott
            Hotel Ikeja offers accommodation with a restaurant, free private
            parking, an outdoor swimming pool and a bar. Featuring family rooms,
            this property also provides guests with a terrace. The accommodation
            features a 24-hour front desk, room service and currency exchange
            for guests.
          </p>
          <p>
            The units come with air conditioning, a flat-screen TV with
            satellite channels, a minibar, a kettle, a shower, a hairdryer and a
            desk. All rooms feature a private bathroom, free toiletries and bed
            linen.
          </p>
          <p>The hotel offers a continental or buffet breakfast.</p>
          <p>
            National Art Theatre is 12 km from Lagos Marriott Hotel Ikeja, while
            Iga Idungaran-OBA Of Lagos Palace is 14 km away.
          </p>
          <p>
            Couples particularly like the location — they rated it 8.8 for a
            two-person trip.
          </p>
          <div className="terms">
            <h3>Terms and Conditions</h3>
            <p>Check-in time 12 noon</p>
            <p>Check-out time 12 noon</p>
            <p>Pets are not allowed.</p>
            <p>No Smoking in the rooms.</p>
            <p>Babies are allowed in rooms.</p>
            <p>Cash and Card payments are accepted.</p>
            <p>Cancellation policy- 2 days to reservation date.</p>
          </div>
        </div>
        <div className="room-booking">
          Select a room type and the number of rooms you want to reserve.
          {roomTypes.map((roomType) => (
            <RoomOption roomType={roomType} />
          ))}
        </div>
      </div>
    </div>
  );
}
