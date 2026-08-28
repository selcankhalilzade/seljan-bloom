import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.email) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (body.waitlist) {
      console.info("Seljan waitlist", { email: body.email });
      return NextResponse.json({ ok: true });
    }
    if (!body?.name || !body?.message) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    console.info("Seljan inquiry", {
      name: body.name,
      email: body.email,
      piece: body.piece ?? "",
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
