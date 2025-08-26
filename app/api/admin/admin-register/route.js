import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password, img } = await req.json();

    if (!name || !email || !password || !img) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existing = await Admin.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    const hash = await bcrypt.hash(password, 12);
    const admin = await Admin.create({
      name,
      email,
      password: hash,
      img,
    });

    const token = signToken({ id: admin._id, email: admin.email });

    // ✅ create a response object before setting cookie
    const res = NextResponse.json(
      {
        message: "Registered successfully",
        admin: { id: admin._id, name, email, img },
      },
      { status: 201 }
    );

    // ✅ attach cookie
    setAuthCookie(token, res);

    return res;
  } catch (err) {
    console.error("REGISTER_ERROR", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
