"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Dayjs } from "dayjs";
import DateReserve from "@/components/DateReserve";
import { addBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";

export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const makeBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameLastname || !tel || !venue || !bookDate) return;
    dispatch(
      addBooking({
        nameLastname,
        tel,
        venue,
        bookDate: bookDate.format("YYYY/MM/DD"),
      }),
    );
  };

  return (
    <main className="flex w-full flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Venue Booking</h1>
      <Box
        component="form"
        onSubmit={makeBooking}
        className="flex w-full max-w-[420px] flex-col items-center gap-6"
      >
        <DateReserve
          nameLastname={nameLastname}
          tel={tel}
          venue={venue}
          bookDate={bookDate}
          onNameLastnameChange={setNameLastname}
          onTelChange={setTel}
          onVenueChange={setVenue}
          onBookDateChange={setBookDate}
        />
        <Button type="submit" name="Book Venue" variant="contained">
          Book Venue
        </Button>
      </Box>
    </main>
  );
}
