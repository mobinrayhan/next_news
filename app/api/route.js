import { NextResponse } from "next/server";

export default function GET() {
  console.log("Log Something");
  return NextResponse("Hello world!");
}
