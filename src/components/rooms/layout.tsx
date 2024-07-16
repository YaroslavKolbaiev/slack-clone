import React from "react";

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-red-500 w-full items-center justify-center">
      {children}
    </div>
  );
}
