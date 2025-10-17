
export default function Privacy() {
  return (
    <main className="hero">
      <h1>Privacy Policy</h1>
      <p>Effective date: January 1, 2025</p>
      <p>Free State Tax Return, Inc. (“we”, “our”, “us”) cares deeply about your privacy. This page explains how we handle information when you use our tool.</p>

      <h2 style={{fontSize:22, margin:'16px 0 8px'}}>What we collect</h2>
      <ul>
        <li><b>No account required.</b> We don’t require you to create an account to use the tool.</li>
        <li><b>No persistent storage of your documents.</b> Your uploaded return is processed to generate a draft state return and is not saved to long‑term storage.</li>
        <li><b>No sale of personal information.</b> We do not sell your personal information.</li>
      </ul>

      <h2 style={{fontSize:22, margin:'16px 0 8px'}}>How processing works</h2>
      <p>Your uploaded file is processed to extract relevant tax fields and compute state adjustments. We strive to perform processing transiently and avoid retaining your documents or extracted data beyond what is necessary to deliver the requested output.</p>

      <h2 style={{fontSize:22, margin:'16px 0 8px'}}>Log data</h2>
      <p>We minimize logging and avoid including sensitive document contents in logs. Operational logs may include generic event information (e.g., success/failure, timestamps) solely to maintain and secure the service.</p>

      <h2 style={{fontSize:22, margin:'16px 0 8px'}}>Cookies and tracking</h2>
      <p>We do not use third‑party advertising cookies. We may use strictly necessary cookies to provide core functionality (e.g., session security).</p>

      <h2 style={{fontSize:22, margin:'16px 0 8px'}}>Data retention</h2>
      <p>We do not retain your uploaded returns or extracted data beyond the time needed to generate your output, absent a legal obligation or security need. If longer retention is ever required (for example, if you ask us to save a draft), we will explain and obtain your consent.</p>

      <h2 style={{fontSize:22, margin:'16px 0 8px'}}>Security</h2>
      <p>We use administrative, technical, and physical safeguards appropriate to the sensitivity of tax data. No method of transmission or storage is 100% secure; please review all results before filing.</p>

      <h2 style={{fontSize:22, margin:'16px 0 8px'}}>Children’s privacy</h2>
      <p>Our service is not directed to children under 13 and should not be used by them.</p>

      <h2 style={{fontSize:22, margin:'16px 0 8px'}}>Changes to this policy</h2>
      <p>We may update this Privacy Policy to reflect changes to our practices. We will post the revised version with an updated effective date.</p>

      <h2 style={{fontSize:22, margin:'16px 0 8px'}}>Contact us</h2>
      <p>If you have questions or requests, contact us at: <a href="mailto:info@freestatetaxreturn.com">info@freestatetaxreturn.com</a></p>
    </main>
  );
}
