import Image from "next/image";
import { Appbar } from "./components/Appbar";

export default function Home() {
  return (
   <>
   <Appbar/>
   </>
  );
}
"use client"

// import { useSession } from "next-auth/react";

// export default function Home() {
//   const session = useSession();
//   return (
//     <div>
//       {JSON.stringify(session.data?.user)}
//     </div>
//   );
// }