import React from "react";

export default function DashLayout({
  children,
  feed,
  notifications,
  revenue,
  Login,
}: {
  children: React.ReactNode;
  feed: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  Login: React.ReactNode;
}) {
  const isLogged = true;
  return (
    <div>
      {isLogged ? (
        Login
      ) : (
        <div>
          {children} {feed} {notifications} {revenue}{" "}
        </div>
      )}
    </div>
  ); //renders page.tsx
}
