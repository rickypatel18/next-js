import { NextResponse } from "next/server";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = users.find((u) => u.id.toString() === params.id);
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}
