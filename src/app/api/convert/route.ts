export const runtime = "nodejs";

// Convert Buffer -> ArrayBuffer safely
function bufferToArrayBuffer(buf: Buffer) {
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

export async function POST(_request: Request) {
  const pdfPath = process.env.CA540_PDF_PATH || "public/assets/CA-540-blank.pdf";
  const fsPath = pdfPath.startsWith("/") ? pdfPath : `${process.cwd()}/${pdfPath}`;

  try {
    const fs = await import("node:fs/promises");
    const data = await fs.readFile(fsPath);           // data is a Node Buffer
    const ab = bufferToArrayBuffer(data);             // convert to ArrayBuffer

    return new Response(ab, {
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
