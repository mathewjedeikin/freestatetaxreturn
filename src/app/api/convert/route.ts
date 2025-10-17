
export const runtime = "nodejs";

export async function POST(request: Request) {
  // For now, just return the blank CA-540 PDF so the download flow works.
  const pdfPath = process.env.CA540_PDF_PATH || "public/assets/CA-540-blank.pdf";
  // Vercel serves from process.cwd()
  const fsPath = pdfPath.startsWith("/") ? pdfPath : `${process.cwd()}/${pdfPath}`;
  try {
    const data = await import("node:fs/promises").then(fs => fs.readFile(fsPath));
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=CA-540.pdf"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: `PDF not found at ${fsPath}` }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
