import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
export default async function DefaultNotificationsParallel() {
  const promiseLoad = await new Promise((r) => setTimeout(r, 2000));
  return (
    <div>
      {" "}
      <Card className="h-[200px] w-2/6">
        NotificationsParallel
        <Link
          className=" underline text-green-300 "
          href="/complex-dash/archived"
        >
          Archived
        </Link>
      </Card>{" "}
    </div>
  );
}
