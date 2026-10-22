import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="flex w-full flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">My Booking</h1>
      <BookingList />
    </main>
  );
}
