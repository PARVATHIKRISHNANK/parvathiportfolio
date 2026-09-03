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
    doc: "INV-24817",
    supplier: "Solace Components Ltd",
    type: "B2B Invoice",
    amount: 248500,
    match: "Mismatch",
    portal: "No action",
    rec: "Reject",
    confidence: 94,
    risk: "High",
    exposure: 248500,
    why: ["Vendor return not filed", "Tax mismatch detected", "Duplicate pattern detected"],
  },
  {
    id: "r2",
    doc: "INV-24902",
    supplier: "Harborline Logistics Pvt Ltd",
    type: "B2B Invoice",
    amount: 118400,
    match: "Matched",
    portal: "No action",
    rec: "Accept",
    confidence: 98,
    risk: "Low",
    exposure: 0,
    why: ["Values match line-for-line", "Vendor return filed on time", "No prior disputes"],
  },
  {
    id: "r3",
    doc: "CDN-1188",
    supplier: "Crestview Chemicals LLP",
    type: "Credit Note",
    amount: 64230,
    match: "Mismatch",
    portal: "Pending",
    rec: "Review",
    confidence: 71,
    risk: "Medium",
    exposure: 64230,
    why: ["Rate difference of 2%", "Amendment expected next cycle", "Vendor historically corrects"],
  },
  {
    id: "r4",
    doc: "INV-25011",
    supplier: "Ferro Steel Traders",
    type: "B2B Invoice",
    amount: 392750,
    match: "Matched",
    portal: "No action",
    rec: "Accept",
    confidence: 96,
    risk: "Low",
    exposure: 0,
    why: ["Portal status confirmed", "Place of supply consistent", "Vendor active"],
  },
  {
    id: "r5",
    doc: "INV-25044",
    supplier: "Alderwood Tooling Systems",
    type: "B2B Invoice",
    amount: 87620,
    match: "Missing",
    portal: "Not found",
    rec: "Reject",
    confidence: 89,
    risk: "High",
    exposure: 87620,
    why: ["Document absent on portal", "Vendor ID inactive", "No amendment history"],
  },
  {
    id: "r6",
    doc: "INV-25090",
    supplier: "Northgate Packaging Co",
    type: "B2B Invoice",
    amount: 211202,
    match: "Matched",
    portal: "No action",
    rec: "Accept",
    confidence: 92,
    risk: "Low",
    exposure: 0,
    why: ["Values reconciled", "Filing validated for prior period", "Stable vendor pattern"],
  },
];

export const inr = (n: number) =>
  "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export const failedRecords = [
  { id: "f1", doc: "INV-24817", supplier: "Bellcrest Logistics Pvt Ltd", cause: "Vendor ID inactive or suspended" },
  { id: "f2", doc: "INV-25120", supplier: "Vantage Global Ltd", cause: "Place of Supply state-code mismatch" },
  { id: "f3", doc: "INV-25133", supplier: "Prairie Solutions Pvt", cause: "Duplicate submission detected" },
];

export const journey = [
  { n: "01", title: "IMS Dashboard", ai: "AI prioritises work", desc: "The analyst opens the cycle and sees what needs attention first — not a list of everything.", screen: "dashboard" },
  { n: "02", title: "Record Workbench", ai: "AI recommends invoice actions", desc: "Each record carries a recommendation, a confidence score, a rationale and an exposure figure.", screen: "records" },
  { n: "03", title: "Bulk Action Center", ai: "AI processes high-volume batches", desc: "Confident groups are handled together, with a business-impact preview before anything is staged.", screen: "bulk" },
  { n: "04", title: "Error Resolution Center", ai: "AI diagnoses and suggests fixes", desc: "Failures are grouped by root cause, with a recommended fix sequence the analyst confirms.", screen: "errors" },
  { n: "05", title: "Save / Sync", ai: "Controlled, chunked submission", desc: "Staged actions reach the portal in sequenced chunks, each streaming its own state back.", screen: "save" },
  { n: "06", title: "Report Generation", ai: "Results are recomputed", desc: "Changed actions invalidate the draft, so the report is regenerated and consolidated.", screen: "report" },
] as const;
