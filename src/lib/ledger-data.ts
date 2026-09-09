export type Action = "none" | "accept" | "reject" | "pending";

export type LedgerRecord = {
  id: string;
  doc: string;
  supplier: string;
  type: string;
  amount: number;
  match: "Matched" | "Mismatch" | "Missing";
  portal: string;
  rec: "Accept" | "Reject" | "Review";
  confidence: number;
  risk: "Low" | "Medium" | "High";
  exposure: number;
  why: string[];
};

export const records: LedgerRecord[] = [
  {
    id: "r1",
    doc: "INV-31204",
    supplier: "Solace Components Ltd",
    type: "B2B Invoice",
    amount: 186400,
    match: "Mismatch",
    portal: "No action",
    rec: "Reject",
    confidence: 96,
    risk: "High",
    exposure: 186400,
    why: ["Vendor return not filed", "Tax mismatch detected", "Duplicate pattern detected"],
  },
  {
    id: "r2",
    doc: "INV-31288",
    supplier: "Harborline Logistics Pvt Ltd",
    type: "B2B Invoice",
    amount: 143250,
    match: "Matched",
    portal: "No action",
    rec: "Accept",
    confidence: 99,
    risk: "Low",
    exposure: 0,
    why: ["Values match line-for-line", "Vendor return filed on time", "No prior disputes"],
  },
  {
    id: "r3",
    doc: "CDN-2074",
    supplier: "Crestview Chemicals LLP",
    type: "Credit Note",
    amount: 58900,
    match: "Mismatch",
    portal: "Pending",
    rec: "Review",
    confidence: 74,
    risk: "Medium",
    exposure: 58900,
    why: ["Rate difference of 2%", "Amendment expected next cycle", "Vendor historically corrects"],
  },
  {
    id: "r4",
    doc: "INV-31356",
    supplier: "Ferro Steel Traders",
    type: "B2B Invoice",
    amount: 412600,
    match: "Matched",
    portal: "No action",
    rec: "Accept",
    confidence: 93,
    risk: "Low",
    exposure: 0,
    why: ["Portal status confirmed", "Place of supply consistent", "Vendor active"],
  },
  {
    id: "r5",
    doc: "INV-31402",
    supplier: "Alderwood Tooling Systems",
    type: "B2B Invoice",
    amount: 76480,
    match: "Missing",
    portal: "Not found",
    rec: "Reject",
    confidence: 91,
    risk: "High",
    exposure: 76480,
    why: ["Document absent on portal", "Vendor ID inactive", "No amendment history"],
  },
  {
    id: "r6",
    doc: "INV-31477",
    supplier: "Northgate Packaging Co",
    type: "B2B Invoice",
    amount: 197320,
    match: "Matched",
    portal: "No action",
    rec: "Accept",
    confidence: 95,
    risk: "Low",
    exposure: 0,
    why: ["Values reconciled", "Filing validated for prior period", "Stable vendor pattern"],
  },
];

export const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export const failedRecords = [
  { id: "f1", doc: "INV-31519", supplier: "Bellcrest Logistics Pvt Ltd", cause: "Vendor ID inactive or suspended" },
  { id: "f2", doc: "INV-31544", supplier: "Vantage Global Ltd", cause: "Place of Supply state-code mismatch" },
  { id: "f3", doc: "INV-31570", supplier: "Prairie Solutions Pvt", cause: "Duplicate submission detected" },
];

export const journey = [
  { n: "01", title: "LMS Dashboard", ai: "AI prioritises work", desc: "The analyst opens the Ledger Management System cycle and sees what needs attention first — not a list of everything.", screen: "dashboard" },
  { n: "02", title: "Record Workbench", ai: "AI recommends invoice actions", desc: "Each record carries a recommendation, a confidence score, a rationale and an exposure figure.", screen: "records" },
  { n: "03", title: "Bulk Action Center", ai: "AI processes high-volume batches", desc: "Confident groups are handled together, with a business-impact preview before anything is staged.", screen: "bulk" },
  { n: "04", title: "Error Resolution Center", ai: "AI diagnoses and suggests fixes", desc: "Failures are grouped by root cause, with a recommended fix sequence the analyst confirms.", screen: "errors" },
  { n: "05", title: "Save / Sync", ai: "Controlled, chunked submission", desc: "Staged actions reach the portal in sequenced chunks, each streaming its own state back.", screen: "save" },
  { n: "06", title: "Report Generation", ai: "Results are recomputed", desc: "Changed actions invalidate the draft, so the report is regenerated and consolidated.", screen: "report" },
] as const;
