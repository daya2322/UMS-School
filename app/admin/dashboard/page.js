"use client";

import { useState } from "react";

export default function AdminDashboard() {
//   const [me, setMe] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const res = await fetch("/api/admin/me");
//       if (res.ok) {
//         const data = await res.json();
//         setMe(data.admin);
//       } else {
//         window.location.href = "/admin/login";
//       }
//     })();
//   }, []);



  return (
    <div className="container py-5">
      <h1 className="mb-3">Welcome to Admin Pannel </h1>
     
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          
          window.location.href = "/admin/admin-login";
        }}
      >
        <button className="btn btn-outline-danger">Logout</button>
      </form>
    </div>
  );
}
