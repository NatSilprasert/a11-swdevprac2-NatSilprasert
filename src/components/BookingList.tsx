"use client";

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function BookingList() {
  const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  if (bookItems.length === 0) {
    return <div className="text-center text-lg">No Venue Booking</div>;
  }

  return (
    <div className="flex w-full max-w-[420px] flex-col gap-4">
      {bookItems.map((item) => (
        <div
          key={`${item.venue}-${item.bookDate}-${item.tel}`}
          className="rounded-md border border-gray-200 p-4"
        >
          <div>Name-Lastname: {item.nameLastname}</div>
          <div>Contact-Number: {item.tel}</div>
          <div>Venue: {item.venue}</div>
          <div>Booking Date: {item.bookDate}</div>
          <Button
            className="mt-2"
            variant="outlined"
            color="error"
            onClick={() => dispatch(removeBooking(item))}
          >
            Cancel Booking
          </Button>
        </div>
      ))}
    </div>
  );
}
