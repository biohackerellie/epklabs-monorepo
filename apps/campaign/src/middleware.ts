import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const blockedCountries = [
  "CN",
  "RU",
  "KP",
  "IR",
  "SY",
  "CU",
  "IQ",
  "LY",
  "SD",
  "VN",
  "RO",
];

export function middleware(req: NextRequest) {

  return NextResponse.next();
}
