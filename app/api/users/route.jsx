import { NextResponse } from "next/server";
import users from "./data.json";


export async function GET(request) {
    return NextResponse.json(users);
}