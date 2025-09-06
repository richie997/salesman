"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getmany);
  const addUser = useMutation(api.users.addUser);
  const deleteUser = useMutation(api.users.deleteUser);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/widget</p>
      <Button onClick={() => addUser()}>Add</Button>
      <Button onClick={() => users?.[0]?._id && deleteUser({ id: users[0]._id })}>Delete</Button>

      <div className="max-w-sm w-full mx-auto">
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  )
}
