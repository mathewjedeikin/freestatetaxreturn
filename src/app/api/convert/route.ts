export const runtime = "nodejs";

export async function POST(_request: Request) {
  const pdfPath = process.env.CA540_PDF_PATH || "public/assets/CA-540-blank.pdf";
  const fsPath = pdfPath.startsWith("/") ? pdfPath : `${process.cwd()}/${pdfPath}`;

  try {
    const fs = await import("node:fs/promises");
    const buf = await fs.readFile(fsPath); // Node Buffer

    // ✅ Wrap Buffer as Uint8Array (compatible with Web Response)
    const body = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=CA-540.pdf",
      },
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ error: `PDF not found at ${fsPath}`, details: String(e?.message || e) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
