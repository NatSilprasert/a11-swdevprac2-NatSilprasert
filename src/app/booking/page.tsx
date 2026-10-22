import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getServerSession } from "next-auth";
import DateReserve from "@/components/DateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  const profile = session?.user?.token
    ? await getUserProfile(session.user.token)
    : null;
  const user = profile?.data;

  return (
    <main className="flex w-full flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Venue Booking</h1>
      {user && (
        <table className="mb-8 text-left">
          <tbody>
            <tr><td className="pr-4 font-semibold">Name</td><td>{user.name}</td></tr>
            <tr><td className="pr-4 font-semibold">Email</td><td>{user.email}</td></tr>
            <tr><td className="pr-4 font-semibold">Tel.</td><td>{user.tel}</td></tr>
            <tr>
              <td className="pr-4 font-semibold">Member Since</td>
              <td>{new Date(user.createdAt).toString()}</td>
            </tr>
          </tbody>
        </table>
      )}
      <Box
        component="form"
        className="flex w-full max-w-[420px] flex-col items-center gap-6"
      >
        <DateReserve />
        <Button type="submit" name="Book Venue" variant="contained">
          Book Venue
        </Button>
      </Box>
    </main>
  );
}
