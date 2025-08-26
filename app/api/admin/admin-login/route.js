// app/api/admin/login/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password required" }, { status: 400 });
    }

    const admin = await Admin.findOne({ email }).select("+password");
    if (!admin) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const token = signToken({ id: admin._id, email: admin.email });
    setAuthCookie(token);

    return NextResponse.json({
      message: "Logged in",
      admin: { id: admin._id, name: admin.name, email: admin.email },
    });
  } catch (err) {
    console.error("LOGIN_ERROR", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
