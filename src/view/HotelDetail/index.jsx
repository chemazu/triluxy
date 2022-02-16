import React from "react";
import "./style.scss";
import { useInput } from "../../hooks/input-hook";
import Button from "../../components/Button";


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
          <Button type="submit" title="Find Hotel"/>
        </form>
      </div>
      <div className="gallery"></div>
       amenities description book room(hotels.ng) terms and conditions
      footer
    </div>
  );
}
