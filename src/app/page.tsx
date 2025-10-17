"use client";
import { useState } from "react";

export default function Home() {
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    // For now, skip the server step and just offer the CA-540 blank download.
    setBusy(true);
    setErr(null);
    try {
      const a = document.createElement("a");
      a.href = "/assets/CA-540-blank.pdf";
      a.download = "CA-540.pdf";
      a.click();
      setOk(true);
    } catch (e: any) {
      setErr("Sorry, something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main>
      <section className="hero">
        <h1>Convert your Federal return into a State return using Artificial Intelligence, for free.</h1>
        <p>
          Upload your basic federal return (<b>IRS XML preferred</b>, PDF fallback). We’ll draft your
          California Form 540 in seconds. Your data stays private—processing happens on the server you
          control.
        </p>
      </section>

      <section className="hero">
        <div className="card">
          <label style={{ display: "block", fontWeight: 600, marginBottom: 8 }}>
            Upload your return (.xml or .pdf)
          </label>
          <input type="file" accept=".xml,.pdf" onChange={onUpload} disabled={busy} />
          {busy && <p style={{ marginTop: 12 }}>Processing…</p>}
          {ok && (
            <p style={{ marginTop: 12 }}>
              ✅ Download started. (This is a temporary preview using the blank CA-540; we’ll wire the
              AI conversion next.)
            </p>
          )}
          {err && <p style={{ marginTop: 12, color: "#b00020" }}>{err}</p>}
          <p className="note" style={{ marginTop: 12 }}>
            Not legal advice. Review carefully before filing.
          </p>
        </div>
      </section>
    </main>
  );
}
