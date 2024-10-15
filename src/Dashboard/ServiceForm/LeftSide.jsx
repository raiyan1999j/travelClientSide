import { useFormikContext } from "formik";
import { useState } from "react";

export default function LeftSide({ purpose }) {
  const [activation, setActivation] = useState(true);
  const {values,handleChange,errors,touched} = useFormikContext();
  return (
    <>
      <section>
        {purpose == "event" || purpose == "usual" ? (
          <div>
            <h2 className="text-2xl font-Helvetica font-bold capitalize text-gray-800 text-center mb-4">
              Destination
            </h2>
            <div className="grid grid-cols-2 justify-between gap-x-3">
              <div>
                <label
                  htmlFor="from"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  from
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="from"
                      className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      placeholder="Current place"
                      value={values.from}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div>
                <label
                  htmlFor="to"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  to
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="to"
                      className="h-full w-full border border-gray-300 bg-transparent rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      placeholder="Next destination"
                      value={values.to}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        ) : null}

        {purpose == "event" ? (
          <div className="mt-10">
            <h2 className="text-2xl font-Helvetica font-bold capitalize text-gray-800 text-center mb-4">
              Place information
            </h2>
            <div className="grid grid-cols-3 gap-x-3">
              <div>
                <label
                  htmlFor="hotel"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  hotel
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="hotel"
                      className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      value={values.hotel}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div>
                <label
                  htmlFor="person"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  person
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="person"
                      className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      value={values.person}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  category
                  <div className="w-full h-10 mt-2">
                    {/* <input
                      type="text"
                      id="category"
                      className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      value={values.category}
                      onChange={handleChange}
                    /> */}
                    <select id="category" className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans capitalize" 
                      value={values.category}
                      onChange={handleChange}>
                      <option value="hill">hill</option>
                      <option value="beach">beach</option>
                      <option value="cities">cities</option>
                      <option value="mountains">mountains</option>
                      <option value="camping">camping</option>
                      <option value="country">country</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
          </div>
        ) : null}

        {purpose == "event" || purpose == "usual" ? (
          <div className="mt-10">
            <h2 className="text-2xl font-Helvetica font-bold capitalize text-gray-800 text-center mb-4">
              Ticket information
            </h2>
            <div className="grid grid-cols-2 gap-x-3">
              <div>
                {purpose == "event" && purpose != "offers" ? (
                  <label
                    htmlFor="totalPrice"
                    className="capitalize font-poppins text-slate-900 font-medium pl-2"
                  >
                    total price
                    <div className="w-full h-10 mt-2">
                      <input
                        type="text"
                        id="totalPrice"
                        className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                        placeholder="Total price"
                        value={values.totalPrice}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                ) : (
                  <label
                    htmlFor="price"
                    className="capitalize font-poppins text-slate-900 font-medium pl-2"
                  >
                    price
                    <div className="w-full h-10 mt-2">
                      <input
                        type="text"
                        id="perSeat"
                        className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                        placeholder="Per seat price"
                        value={values.perSeat}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                )}
              </div>
              <div className="grid grid-cols-2 gap-x-2">
                <label
                  htmlFor="coupon"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  <input
                    type="checkbox"
                    onClick={() => {
                      setActivation(!activation);
                    }}
                    className="mr-2"
                  />
                  coupon
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      placeholder="code"
                      id="coupon"
                      className={`w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans ${
                        activation
                          ? "opacity-50 bg-[#F8EFBA]/50"
                          : "opacity-100"
                      }`}
                      disabled={activation}
                      value={values.coupon}
                      onChange={handleChange}
                    />
                  </div>
                </label>
                <label
                  htmlFor="discount"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  discount
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="discount"
                      className={`w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans ${
                        activation
                          ? "opacity-50 bg-[#F8EFBA]/50"
                          : "opacity-100"
                      }`}
                      placeholder="0%"
                      disabled={activation}
                      value={values.discount}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        ) : null}

        {purpose == "event" ? (
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-x-3">
              <div>
                <h2 className="text-2xl font-Helvetica font-bold capitalize text-gray-800 text-center mb-4">
                  Stays
                </h2>
                <div className="grid grid-cols-2 gap-x-2">
                  <label
                    htmlFor="stayDay"
                    className="capitalize font-poppins text-slate-900 font-medium pl-2"
                  >
                    Days
                    <div className="w-full h-10 mt-2">
                      <input
                        type="text"
                        id="stayDay"
                        className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                        value={values.stayDay}
                        onChange={handleChange}
                      />
                    </div>
                  </label>

                  <label
                    htmlFor="stayNight"
                    className="capitalize font-poppins text-slate-900 font-medium pl-2"
                  >
                    Nights
                    <div className="w-full h-10 mt-2">
                      <input
                        type="text"
                        id="stayNight"
                        className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                        value={values.stayNight}
                      onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-Helvetica font-bold capitalize text-gray-800 mb-4">
                  transportation
                </h2>
                <div>
                  <label
                    htmlFor="transport"
                    className="capitalize font-poppins text-slate-900 font-medium pl-2"
                  >
                    transport
                    <div className="w-[50%] h-10 mt-2">
                      <input
                        type="text"
                        id="transport"
                        className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                        value={values.transport}
                      onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {purpose == "offers" ? (
          <div className="mt-10">
            <h2 className="text-2xl font-Helvetica font-bold capitalize text-gray-800 text-center mb-4">
              Offers Information
            </h2>
            <div className="grid grid-cols-2 gap-x-3">
              <div>
                <label
                  htmlFor="title"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  title
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="title"
                      className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      value={values.title}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div>
                <label
                  htmlFor="place"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  place
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="place"
                      className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      value={values.place}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-10">
          <h2 className="text-2xl font-Helvetica font-bold capitalize text-gray-800 text-center mb-4">
            description
          </h2>
          <div className="border border-gray-500 rounded-xl">
            <textarea
              className="h-[250px] w-full bg-transparent rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
              placeholder="write your description"
              id="description"
              value={values.description}
              onChange={handleChange}
            ></textarea>
          </div>
          {purpose == "offers" ? (
            <div className="mt-4">
              <label
                htmlFor="addCoupon"
                className="capitalize font-poppins text-slate-900 font-medium pl-2 flex flex-row gap-x-2"
              >
                coupon
                <div className="w-[20%]">
                  <input
                    type="text"
                    id="addCoupon"
                    className="bg-transparent border border-gray-300 rounded-md text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans w-full"
                    value={values.addCoupon}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
          ) : null}
        </div>

        {purpose == "usual" ? (
          <div className="mt-10">
            <h2 className="text-2xl font-Helvetica font-bold capitalize text-gray-800 text-center mb-4">
              shifts
            </h2>
            <div className="grid grid-cols-3 justify-between gap-x-3">
              <div>
                <label
                  htmlFor="morning"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  morning
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="morning"
                      className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      placeholder="Total seat"
                      value={values.morning}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div>
                <label
                  htmlFor="day"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  day
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="day"
                      className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      placeholder="Total seat"
                      value={values.day}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div>
                <label
                  htmlFor="night"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  night
                  <div className="w-full h-10 mt-2">
                    <input
                      type="text"
                      id="night"
                      className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      placeholder="Total seat"
                      value={values.night}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        ) : null}

        {purpose == "event" || purpose == "usual" ? (
          <div className="mt-10">
            <h2 className="text-2xl font-Helvetica font-bold capitalize text-gray-800 text-center mb-4">
              duration
            </h2>
            {purpose == "event" && purpose != "offers" ? (
              <div>
                <label
                  htmlFor="eventDate"
                  className="capitalize font-poppins text-slate-900 font-medium pl-2"
                >
                  Event Starting Date
                  <div className="w-[50%] h-10 mt-2">
                    <input
                      type="date"
                      id="eventDate"
                      className="h-full w-full border border-gray-300 bg-transparent rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                      value={values.eventDate}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-3">
                <div>
                  <label
                    htmlFor="startingDate"
                    className="capitalize font-poppins text-slate-900 font-medium pl-2"
                  >
                    Starting Date
                    <div className="w-full h-10 mt-2">
                      <input
                        type="date"
                        id="startingDate"
                        className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                        value={values.startingDate}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="endingDate"
                    className="capitalize font-poppins text-slate-900 font-medium pl-2"
                  >
                    Ending Date
                    <div className="w-full h-10 mt-2">
                      <input
                        type="date"
                        id="endingDate"
                        className="w-full h-full bg-transparent border border-gray-300 rounded-xl text-slate-700 font-medium pl-2 font-poppins placeholder:pl-2 placeholder:font-normal placeholder:font-sans"
                        value={values.endingDate}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </div>
              </div>
            )}
          </div>
        ) : null}

        

        
      </section>
    </>
  );
}
