import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CVDocument } from "../../../lib/cv-document";

export async function GET() {
  try {
    const buffer = await renderToBuffer(CVDocument());

    // Convert Buffer to Uint8Array for NextResponse compatibility
    const uint8 = new Uint8Array(buffer);

    return new NextResponse(uint8, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Sebastian_David_Marcillo_CV.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[CV] Error generating PDF:", err);
    return NextResponse.json({ error: "Error generando el PDF" }, { status: 500 });
  }
}
