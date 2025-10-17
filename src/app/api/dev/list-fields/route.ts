
export async function GET() {
  // Placeholder: return a small sample list of fields
  return new Response(JSON.stringify({ fields: ["filing_status", "first_name", "last_name", "ssn", "address", "line_13", "line_14"] }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
