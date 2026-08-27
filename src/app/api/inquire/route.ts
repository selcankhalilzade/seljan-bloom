import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.name || !body?.email || !body?.message) {
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
