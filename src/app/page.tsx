
"use client";
import { useState } from "react";

export default function Home() {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string|null>(null);
  const [result, setResult] = useState<any>(null);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return;
    setBusy(true); setErr(null); setResult(null);
    const fd = new FormData();
    fd.append("file", e.target.files[0]);
    const res = await fetch("/api/convert", { method: "POST", body: fd });
    setBusy(false);
    const ct = res.headers.get("Content-Type") || "";
    if (!res.ok) {
      try { const j = await res.json(); setErr(j.error || "Error"); }
      catch { setErr("Error"); }
      return;
    }
    if (ct.includes("application/pdf")) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "CA-540.pdf"; a.click();
    } else if (ct.includes("application/json")) {
      const j = await res.json();
      setResult(j);
    }
  }

  return (
    <main>
      <section className="hero">
        <h1>Convert your Federal return into a State return using Artificial Intelligence, for free.</h1>
        <p>Upload your basic federal return (<b>IRS XML preferred</b>, PDF fallback). We’ll draft your California Form 540 in seconds. Your data stays private—processing happens on the server you control.</p>
      </section>

      <section className="hero">
        <div className="card">
          <label style={{display:'block',fontWeight:600,marginBottom:8}}>Upload your return (.xml or .pdf)</label>
          <input type="file" accept=".xml,.pdf" onChange={onUpload} disabled={busy} />
          {busy && <p style={{marginTop:12}}>Processing…</p>}
          {err && <p style={{marginTop:12,color:'#b00020'}}>{err}</p>}
          {result && (
            <pre className="json" style={{marginTop:12}}>{JSON.stringify(result,null,2)}</pre>
          )}
          <p className="note" style={{marginTop:12}}>
            Not legal advice. Review carefully before filing.
          </p>
        </div>
      </section>
    </main>
  );
}
