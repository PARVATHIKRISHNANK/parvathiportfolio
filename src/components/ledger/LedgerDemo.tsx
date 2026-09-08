import { useEffect, useMemo, useState } from "react";
import {
  LayoutDashboard, Table2, Layers, AlertTriangle, UploadCloud, FileBarChart,
  Sparkles, Check, X, Clock, ChevronRight, Loader2, ShieldCheck,
} from "lucide-react";
import { records as seedRecords, inr, failedRecords as seedFailed, type Action } from "@/lib/ledger-data";

export type ScreenKey = "dashboard" | "records" | "bulk" | "errors" | "save" | "report";

const screens: { key: ScreenKey; label: string; icon: typeof Table2 }[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "records", label: "Record Workbench", icon: Table2 },
  { key: "bulk", label: "Bulk Actions", icon: Layers },
  { key: "errors", label: "Error Resolution", icon: AlertTriangle },
  { key: "save", label: "Save / Sync", icon: UploadCloud },
  { key: "report", label: "Report", icon: FileBarChart },
];

const routeFor: Record<ScreenKey, string> = {
  dashboard: "/dashboard",
  records: "/records",
  bulk: "/bulk-actions",
  errors: "/error-resolution",
  save: "/save-status",
  report: "/reports/summary",
};

function Pill({ tone, children }: { tone: "ok" | "warn" | "bad" | "mute" | "ai"; children: React.ReactNode }) {
  const map = {
    ok: "bg-[#16A34A]/10 text-[#16A34A] border-[#16A34A]/25",
    warn: "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/25",
    bad: "bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/25",
    mute: "bg-[#6B7280]/10 text-[#6B7280] border-[#6B7280]/25",
    ai: "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/25",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${map[tone]}`}>
      {children}
    </span>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="text-[11px] uppercase tracking-[0.14em] text-[#6B7280]">{label}</div>
      <div className="mt-1.5 text-xl font-semibold" style={{ color: tone ?? "#111827" }}>{value}</div>
    </div>
  );
}

export function LedgerDemo({
  screen,
  setScreen,
}: {
  screen: ScreenKey;
  setScreen: (s: ScreenKey) => void;
}) {
  const [actions, setActions] = useState<Record<string, Action>>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [openRecord, setOpenRecord] = useState<string | null>("r1");
  const [modal, setModal] = useState(false);
  const [bulkApplied, setBulkApplied] = useState(false);
  const [saveState, setSaveState] = useState<"idle" | "running" | "done">("idle");
  const [chunk, setChunk] = useState(0);
  const [fixed, setFixed] = useState<string[]>([]);
  const [reportState, setReportState] = useState<"idle" | "queued" | "progress" | "done">("idle");
  const [loading, setLoading] = useState(false);

  // small realistic loading state on screen change
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 380);
    return () => clearTimeout(t);
  }, [screen]);

  const staged = useMemo(
    () => Object.entries(actions).filter(([, a]) => a !== "none").length + (bulkApplied ? 6 : 0),
    [actions, bulkApplied],
  );
  const selectedSum = useMemo(
    () => seedRecords.filter((r) => selected.includes(r.id)).reduce((s, r) => s + r.amount, 0),
    [selected],
  );
  const active = seedRecords.find((r) => r.id === openRecord);
  const failedOpen = seedFailed.filter((f) => !fixed.includes(f.id));

  const setAction = (id: string, a: Action) => setActions((p) => ({ ...p, [id]: a }));

  const runSave = () => {
    if (saveState === "running") return;
    setSaveState("running");
    setChunk(0);
    let i = 0;
    const iv = setInterval(() => {
      i += 1;
      setChunk(i);
      if (i >= 6) {
        clearInterval(iv);
        setTimeout(() => setSaveState("done"), 400);
      }
    }, 500);
  };

  const runReport = () => {
    setReportState("queued");
    setTimeout(() => setReportState("progress"), 600);
    setTimeout(() => setReportState("done"), 1700);
  };

  return (
    <div className="rounded-2xl border bg-white overflow-hidden shadow-[0_30px_80px_-40px_rgba(18,33,59,0.45)]">
      {/* chrome */}
      <div className="flex items-center gap-3 border-b bg-[#12213B] px-4 py-2.5 text-white">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>
        <div className="mx-auto rounded-md bg-white/10 px-3 py-1 font-mono text-[11px] text-white/80">
          ledger.app{routeFor[screen]}
        </div>
        <span className="rounded-full border border-[#2DD4BF]/40 bg-[#2DD4BF]/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-[#2DD4BF]">
          Interactive POC
        </span>
      </div>

      <div className="grid md:grid-cols-[190px_1fr]">
        {/* sidebar / mobile tab strip */}
        <nav
          aria-label="Ledger screens"
          className="flex md:flex-col gap-1 overflow-x-auto border-b md:border-b-0 md:border-r bg-[#F7F8FA] p-2"
        >
          {screens.map((s) => {
            const Icon = s.icon;
            const on = s.key === screen;
            return (
              <button
                key={s.key}
                onClick={() => setScreen(s.key)}
                aria-current={on ? "page" : undefined}
                className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2DD4BF] ${
                  on ? "bg-[#12213B] text-white" : "text-[#6B7280] hover:bg-black/5"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="whitespace-nowrap">{s.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="relative min-h-[520px] bg-[#F7F8FA] p-4 md:p-6">
          {loading && (
            <div className="absolute inset-0 z-10 grid place-items-center bg-[#F7F8FA]">
              <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading {screen}…
              </div>
            </div>
          )}

          {/* ---------------- DASHBOARD ---------------- */}
          {screen === "dashboard" && (
            <div className="space-y-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B7280]">
                Returns / Record Matching / Dashboard
              </div>
              <div>
                <h3 className="font-display text-2xl italic text-[#111827]">Good morning, Meera.</h3>
                <p className="text-sm text-[#6B7280]">Here's what needs you today.</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Stat label="Total Records" value="9,318" />
                <Stat label="Matched" value="6,742" tone="#16A34A" />
                <Stat label="Pending" value="1,984" tone="#D97706" />
                <Stat label="Exceptions" value="592" tone="#DC2626" />
              </div>

              <div className="rounded-xl border bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] text-white">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <div className="text-sm font-semibold">AI Priority Insights</div>
                  <Pill tone="ai">592 records need attention</Pill>
                </div>
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {[
                    ["Auto-Accept Candidates", "4,180", "#16A34A"],
                    ["Review Required", "508", "#D97706"],
                    ["Likely Reject", "84", "#DC2626"],
                  ].map(([l, v, c]) => (
                    <div key={l} className="rounded-lg border bg-[#F7F8FA] p-3">
                      <div className="text-[11px] text-[#6B7280]">{l}</div>
                      <div className="text-lg font-semibold" style={{ color: c }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-[#DC2626]/25 bg-[#DC2626]/5 p-3">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-[#6B7280]">
                    AI Insight · Potential Credit Impact
                  </div>
                  <div className="text-xl font-semibold text-[#DC2626]">₹2.4 Cr</div>
                  <div className="text-xs text-[#6B7280]">At risk across 84 high-risk exception records.</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => setScreen("records")}
                    className="rounded-lg bg-[#2DD4BF] px-4 py-2 text-xs font-semibold text-[#12213B] hover:brightness-95"
                  >
                    Open Record Workbench
                  </button>
                  <button
                    onClick={() => setScreen("bulk")}
                    className="rounded-lg border px-4 py-2 text-xs font-semibold hover:bg-black/5"
                  >
                    Go to Bulk Actions
                  </button>
                </div>
              </div>

              <div className="rounded-xl border bg-white">
                <div className="border-b px-4 py-3 text-sm font-semibold">This Month's Active Tasks</div>
                <ul className="divide-y text-xs">
                  {[
                    ["Reconciliation Pull", "09 Nov", "In progress", "#D97706"],
                    ["Outward Filing", "12 Nov", "Ready", "#16A34A"],
                    ["Summary Return", "18 Nov", "Blocked", "#DC2626"],
                    ["Document Generation", "21 Nov", "Scheduled", "#6B7280"],
                    ["Inward Record Action", "23 Nov", "Needs review", "#D97706"],
                  ].map(([t, d, s, c]) => (
                    <li key={t} className="flex items-center gap-3 px-4 py-2.5">
                      <span className="flex-1 font-medium">{t}</span>
                      <span className="text-[#6B7280]">Due {d}</span>
                      <span className="font-medium" style={{ color: c }}>{s}</span>
                      <button className="rounded-md border px-2 py-1 text-[11px] hover:bg-black/5">Open</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ---------------- RECORDS ---------------- */}
          {screen === "records" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">Record Review</h3>
                <span className="text-[11px] text-[#6B7280]">Nimbus Retail Pvt Ltd · Oct 2025</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2.5">
                <Sparkles className="h-4 w-4 text-[#8B5CF6]" />
                <input
                  aria-label="Ask Ledger"
                  placeholder="Ask about your documents, missing items, or next steps"
                  className="w-full bg-transparent text-xs outline-none placeholder:text-[#6B7280]"
                />
              </div>
              <div className="flex flex-wrap gap-2 text-[11px]">
                {["Entity ID", "Vendor", "Risk", "Status"].map((f) => (
                  <span key={f} className="rounded-full border bg-white px-3 py-1 text-[#6B7280]">{f} ▾</span>
                ))}
              </div>
              <div className="flex gap-1 text-[11px]">
                {["All", "Accept", "Review", "Reject", "Pending"].map((t, i) => (
                  <span key={t} className={`rounded-md px-2.5 py-1 ${i === 0 ? "bg-[#12213B] text-white" : "bg-white border text-[#6B7280]"}`}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid lg:grid-cols-[1fr_300px] gap-4">
                <div className="overflow-x-auto rounded-xl border bg-white">
                  <table className="w-full min-w-[720px] text-left text-[11px]">
                    <thead className="bg-[#F7F8FA] text-[10px] uppercase tracking-[0.1em] text-[#6B7280]">
                      <tr>
                        <th className="p-2"><span className="sr-only">Select</span></th>
                        <th className="p-2">Document</th>
                        <th className="p-2">Supplier</th>
                        <th className="p-2">Amount</th>
                        <th className="p-2">Match</th>
                        <th className="p-2">AI Recommendation</th>
                        <th className="p-2">Conf.</th>
                        <th className="p-2">Your Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {seedRecords.map((r) => {
                        const a = actions[r.id] ?? "none";
                        return (
                          <tr
                            key={r.id}
                            onClick={() => setOpenRecord(r.id)}
                            className={`cursor-pointer transition ${openRecord === r.id ? "bg-[#2DD4BF]/8" : "hover:bg-black/[0.02]"}`}
                          >
                            <td className="p-2">
                              <input
                                type="checkbox"
                                aria-label={`Select ${r.doc}`}
                                checked={selected.includes(r.id)}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  setSelected((p) => (p.includes(r.id) ? p.filter((x) => x !== r.id) : [...p, r.id]));
                                }}
                              />
                            </td>
                            <td className="p-2 font-mono">{r.doc}</td>
                            <td className="p-2">{r.supplier}</td>
                            <td className="p-2 tabular-nums">{inr(r.amount)}</td>
                            <td className="p-2">
                              <Pill tone={r.match === "Matched" ? "ok" : r.match === "Mismatch" ? "warn" : "bad"}>{r.match}</Pill>
                            </td>
                            <td className="p-2">
                              <Pill tone={r.rec === "Accept" ? "ok" : r.rec === "Reject" ? "bad" : "warn"}>{r.rec}</Pill>
                            </td>
                            <td className="p-2 tabular-nums">{r.confidence}%</td>
                            <td className="p-2">
                              {a === "none" ? (
                                <span className="text-[#6B7280]">—</span>
                              ) : (
                                <Pill tone={a === "accept" ? "ok" : a === "reject" ? "bad" : "mute"}>
                                  {a === "accept" ? "Accepted" : a === "reject" ? "Rejected" : "Pending"}
                                </Pill>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* AI decision panel */}
                {active && (
                  <aside className="rounded-xl border bg-white p-4">
                    <div className="flex items-center gap-2">
                      <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] text-white">
                        <Sparkles className="h-3.5 w-3.5" />
                      </span>
                      <div className="text-xs font-semibold">AI Decision Panel</div>
                    </div>
                    <div className="mt-3 font-mono text-[11px] text-[#6B7280]">{active.doc} · {active.supplier}</div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">Recommendation</div>
                    <div className="text-lg font-semibold" style={{ color: active.rec === "Accept" ? "#16A34A" : active.rec === "Reject" ? "#DC2626" : "#D97706" }}>
                      {active.rec === "Reject" ? "Reject Credit Claim" : active.rec === "Accept" ? "Accept Credit Claim" : "Manual Review"}
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                      <div className="rounded-lg border p-2">
                        <div className="text-[#6B7280]">Confidence</div>
                        <div className="font-semibold">{active.confidence}%</div>
                        <div className="mt-1 h-1.5 rounded-full bg-black/10">
                          <div className="h-full rounded-full bg-[#2DD4BF]" style={{ width: `${active.confidence}%` }} />
                        </div>
                      </div>
                      <div className="rounded-lg border p-2">
                        <div className="text-[#6B7280]">Risk</div>
                        <div className="font-semibold">{active.risk}</div>
                        <div className="text-[#6B7280]">Exposure {inr(active.exposure)}</div>
                      </div>
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">Why?</div>
                    <ul className="mt-1 space-y-1 text-[11px] text-[#111827]">
                      {active.why.map((w) => (
                        <li key={w} className="flex gap-2"><span className="text-[#8B5CF6]">•</span>{w}</li>
                      ))}
                    </ul>
                    <div className="mt-4 grid grid-cols-3 gap-1.5">
                      {(["accept", "reject", "pending"] as Action[]).map((a) => (
                        <button
                          key={a}
                          onClick={() => setAction(active.id, a)}
                          className={`rounded-lg border px-2 py-1.5 text-[11px] font-semibold capitalize transition ${
                            (actions[active.id] ?? "none") === a ? "bg-[#12213B] text-white" : "hover:bg-black/5"
                          }`}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-[10px] text-[#6B7280]">
                      AI never executes the action. You decide, and it is staged with an audit trail.
                    </p>
                  </aside>
                )}
              </div>

              {selected.length > 0 && (
                <div className="sticky bottom-2 flex flex-wrap items-center gap-3 rounded-xl border bg-[#12213B] px-4 py-3 text-white">
                  <span className="text-xs font-semibold">{selected.length} Selected</span>
                  <span className="text-xs text-white/70">{inr(selectedSum)}</span>
                  <div className="ml-auto flex gap-1.5">
                    {(["accept", "reject", "pending"] as Action[]).map((a) => (
                      <button
                        key={a}
                        onClick={() => {
                          setActions((p) => {
                            const next = { ...p };
                            selected.forEach((id) => (next[id] = a));
                            return next;
                          });
                          setSelected([]);
                        }}
                        className="rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-semibold capitalize hover:bg-white/20"
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ---------------- BULK ---------------- */}
          {screen === "bulk" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Bulk Action Center</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Stat label="Accepted Credit" value="₹3.1 Cr" tone="#16A34A" />
                <Stat label="Pending / Review" value="₹36 L" tone="#D97706" />
                <Stat label="Rejected Credit" value="₹9 L" tone="#DC2626" />
                <Stat label="Risk Mitigation" value="88%" tone="#12213B" />
              </div>

              <div className="grid lg:grid-cols-2 gap-3">
                <div className="rounded-xl border bg-white p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4 text-[#8B5CF6]" /> AI Recommendation Engine
                  </div>
                  <ul className="mt-3 space-y-2 text-xs">
                    {[
                      ["Auto-Accept Candidates", "4,180", "#16A34A"],
                      ["Manual Review Recommended", "508", "#D97706"],
                      ["Likely Non-Compliant / Mismatched", "84", "#DC2626"],
                    ].map(([l, v, c]) => (
                      <li key={l} className="flex items-center justify-between rounded-lg border bg-[#F7F8FA] px-3 py-2">
                        <span>{l}</span>
                        <span className="font-semibold" style={{ color: c }}>{v}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 text-[11px] text-[#6B7280]">
                    Confidence threshold: <span className="font-semibold text-[#111827]">92% — Strict Mode</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-black/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]" style={{ width: "92%" }} />
                  </div>
                </div>

                <div className="rounded-xl border bg-white p-4">
                  <div className="text-sm font-semibold">Staged this session</div>
                  <div className="mt-2 text-3xl font-semibold text-[#12213B]">{staged}</div>
                  <div className="text-xs text-[#6B7280]">actions carried over from the Record Workbench</div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg border p-2"><div className="text-[#6B7280]">Confidence</div><div className="font-semibold text-[#16A34A]">95% High</div></div>
                    <div className="rounded-lg border p-2"><div className="text-[#6B7280]">Est. time saved</div><div className="font-semibold">3h 40m</div></div>
                  </div>
                  <button
                    onClick={() => setModal(true)}
                    className="mt-4 w-full rounded-lg bg-[#2DD4BF] px-4 py-2.5 text-xs font-semibold text-[#12213B] hover:brightness-95"
                  >
                    Accept AI Recommendations
                  </button>
                </div>
              </div>

              <div className="rounded-xl border bg-white p-4">
                <div className="text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">AI Generated Remark</div>
                <p className="mt-2 text-sm italic text-[#111827]">
                  "Vendor filing validated against previous period and portal status. Recommended for acceptance."
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <span className="text-[11px] text-[#6B7280]">Generated by Ledger Intelligence Agent</span>
                  <button className="rounded-md border px-2.5 py-1 text-[11px] font-semibold hover:bg-black/5">Use AI Remark</button>
                  <span className="text-[11px] text-[#6B7280]">Editable before submission.</span>
                </div>
              </div>

              {modal && (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" role="dialog" aria-modal="true">
                  <div className="w-full max-w-md rounded-2xl border bg-white p-5">
                    <div className="text-base font-semibold">Confirm Bulk Action</div>
                    <dl className="mt-4 space-y-2 text-xs">
                      {[["Records", "6"], ["Impact", "₹10,74,950"], ["Groups", "Accept"], ["Estimated time saved", "18 min"]].map(([k, v]) => (
                        <div key={k} className="flex justify-between border-b pb-1.5">
                          <dt className="text-[#6B7280]">{k}</dt><dd className="font-semibold">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-3 rounded-lg bg-[#F7F8FA] p-3 text-[11px] text-[#6B7280]">
                      Actions are staged here with remarks and an audit trail. They reach the tax portal only after Save.
                    </p>
                    <div className="mt-4 flex justify-end gap-2">
                      <button onClick={() => setModal(false)} className="rounded-lg border px-4 py-2 text-xs font-semibold hover:bg-black/5">Cancel</button>
                      <button
                        onClick={() => { setBulkApplied(true); setModal(false); setScreen("save"); }}
                        className="rounded-lg bg-[#12213B] px-4 py-2 text-xs font-semibold text-white"
                      >
                        Apply to Records
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ---------------- ERRORS ---------------- */}
          {screen === "errors" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Error Resolution Center</h3>
              <div className="grid grid-cols-3 gap-3">
                <Stat label="Success" value="1,684" tone="#16A34A" />
                <Stat label="Failed" value={String(failedOpen.length + 12)} tone="#DC2626" />
                <Stat label="Requires Action" value={String(failedOpen.length + 12)} tone="#D97706" />
              </div>
              <div className="rounded-xl border bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-[#8B5CF6]" /> AI Root Cause Analysis
                </div>
                <ul className="mt-3 space-y-2 text-xs">
                  {[["Vendor ID inactive or suspended", 7], ["Place of Supply state-code mismatch", 3], ["Duplicate submission detected", 2]].map(([l, v]) => (
                    <li key={String(l)} className="flex items-center gap-3">
                      <span className="w-64 shrink-0">{l}</span>
                      <span className="h-2 flex-1 rounded-full bg-black/10">
                        <span className="block h-full rounded-full bg-[#DC2626]/70" style={{ width: `${(Number(v) / 7) * 100}%` }} />
                      </span>
                      <span className="w-6 text-right font-semibold">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid lg:grid-cols-[1fr_300px] gap-3">
                <div className="rounded-xl border bg-white">
                  <div className="border-b px-4 py-2.5 text-xs font-semibold">Failed records</div>
                  <ul className="divide-y text-xs">
                    {seedFailed.map((f) => (
                      <li key={f.id} className="flex items-center gap-3 px-4 py-2.5">
                        <span className="font-mono">{f.doc}</span>
                        <span className="flex-1 text-[#6B7280]">{f.supplier} · {f.cause}</span>
                        {fixed.includes(f.id) ? <Pill tone="ok">Fixed</Pill> : <Pill tone="bad">Failed</Pill>}
                      </li>
                    ))}
                  </ul>
                </div>
                <aside className="rounded-xl border bg-white p-4">
                  <div className="text-xs font-semibold">AI Fix Assistant</div>
                  <div className="mt-2 text-[11px] text-[#6B7280]">Selected error context: {failedOpen[0]?.cause ?? "All errors resolved"}</div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.14em] text-[#6B7280]">Recommended sequence</div>
                  <ol className="mt-1 space-y-1.5 text-[11px]">
                    {["Move status to Pending Verification", "Notify vendor to verify mapping", "Queue for automated retry"].map((s, i) => (
                      <li key={s} className="flex gap-2">
                        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#12213B] text-[9px] text-white">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                  <div className="mt-3 rounded-lg bg-[#16A34A]/10 p-2 text-[11px] text-[#16A34A]">
                    Success probability after fix: <span className="font-semibold">96%</span>
                  </div>
                  <div className="mt-3 grid gap-1.5">
                    <button
                      disabled={!failedOpen.length}
                      onClick={() => failedOpen[0] && setFixed((p) => [...p, failedOpen[0]!.id])}
                      className="rounded-lg bg-[#2DD4BF] px-3 py-2 text-[11px] font-semibold text-[#12213B] disabled:opacity-40"
                    >
                      Apply Suggested Fix
                    </button>
                    <button className="rounded-lg border px-3 py-2 text-[11px] font-semibold hover:bg-black/5">Retry Selected</button>
                  </div>
                  <p className="mt-2 text-[10px] text-[#6B7280]">Recommendations require your confirmation.</p>
                </aside>
              </div>
            </div>
          )}

          {/* ---------------- SAVE ---------------- */}
          {screen === "save" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Save to Portal</h3>
              <div className="rounded-xl border bg-white p-4 text-xs text-[#6B7280]">
                <span className="font-semibold text-[#111827]">Why does this take longer than a single-form filing?</span>{" "}
                Ledger sequences the save into chunks and streams each chunk's state back, so a failure never blocks the
                whole batch — and every action stays traceable.
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Stat label="Actions Staged" value={String(staged)} />
                <Stat label="Chunks Completed" value={`${chunk}/6`} />
                <Stat label="Saved" value={saveState === "done" ? String(Math.max(staged - 1, 0)) : "0"} tone="#16A34A" />
                <Stat label="Failed" value={saveState === "done" ? "1" : "0"} tone="#DC2626" />
              </div>
              <div className="rounded-xl border bg-white p-4">
                <div className="flex gap-1.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-2 flex-1 overflow-hidden rounded-full bg-black/10">
                      <div className={`h-full rounded-full bg-[#2DD4BF] transition-all duration-500 ${i < chunk ? "w-full" : "w-0"}`} />
                    </div>
                  ))}
                </div>
                <button
                  onClick={runSave}
                  className="mt-4 rounded-lg bg-[#2DD4BF] px-4 py-2 text-xs font-semibold text-[#12213B] disabled:opacity-50"
                  disabled={saveState === "running"}
                >
                  {saveState === "running" ? "Saving…" : saveState === "done" ? "Save again" : "Save to Portal"}
                </button>
              </div>

              {saveState === "done" && (
                <div className="rounded-xl border bg-white">
                  <table className="w-full text-left text-[11px]">
                    <thead className="bg-[#F7F8FA] text-[10px] uppercase tracking-[0.1em] text-[#6B7280]">
                      <tr><th className="p-2">Request ID</th><th className="p-2">Type</th><th className="p-2">Records</th><th className="p-2">Status</th></tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["REQ-77401", "Accept batch", "1,420", "SUCCESS"],
                        ["REQ-77402", "Accept batch", "1,380", "SUCCESS"],
                        ["REQ-77403", "Reject batch", "84", "SUCCESS"],
                        ["REQ-77404", "Pending batch", "508", "SUCCESS"],
                        ["REQ-77405", "Accept batch", "1,368", "SUCCESS"],
                        ["REQ-77406", "Accept batch", "12", "FAILED"],
                      ].map((r) => (
                        <tr key={r[0]}>
                          <td className="p-2 font-mono">{r[0]}</td><td className="p-2">{r[1]}</td><td className="p-2">{r[2]}</td>
                          <td className="p-2">{r[3] === "FAILED" ? <Pill tone="bad">FAILED</Pill> : <Pill tone="ok">SUCCESS</Pill>}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="border-t p-3">
                    <button onClick={() => setScreen("errors")} className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-[11px] font-semibold hover:bg-black/5">
                      Resolve Save Failures <ChevronRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ---------------- REPORT ---------------- */}
          {screen === "report" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Summary Report</h3>
              <div className="rounded-xl border border-[#D97706]/30 bg-[#D97706]/8 p-3 text-xs text-[#D97706]">
                Several actions changed during this session, so the previous draft is stale.
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Stat label="Credit Available" value="₹96.4 L" tone="#16A34A" />
                <Stat label="Credit Not Available" value="₹3.2 L" tone="#DC2626" />
                <Stat label="Credit Reversal" value="₹1.6 L" tone="#D97706" />
                <Stat label="Net Claimable Credit" value="₹94.8 L" tone="#12213B" />
              </div>
              <div className="rounded-xl border bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Generate &amp; Fetch</div>
                  <button onClick={runReport} className="rounded-lg bg-[#2DD4BF] px-4 py-2 text-xs font-semibold text-[#12213B]">Run</button>
                </div>
                <ol className="mt-3 space-y-2 text-xs">
                  {["Generate request sent", "Fetch recomputed data", "Consolidated report ready"].map((s, i) => {
                    const stage = reportState === "idle" ? -1 : reportState === "queued" ? 0 : reportState === "progress" ? 1 : 2;
                    const state = stage < i ? "Queued" : stage === i && reportState !== "done" ? "In Progress" : stage >= i ? "Done" : "Queued";
                    return (
                      <li key={s} className="flex items-center justify-between rounded-lg border bg-[#F7F8FA] px-3 py-2">
                        <span>{s}</span>
                        <span className="inline-flex items-center gap-1.5">
                          {state === "Done" ? <Check className="h-3 w-3 text-[#16A34A]" /> : state === "In Progress" ? <Loader2 className="h-3 w-3 animate-spin text-[#D97706]" /> : <Clock className="h-3 w-3 text-[#6B7280]" />}
                          <span className="text-[11px] text-[#6B7280]">{state}</span>
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Standard reconciliation sheet", "Enhanced reconciliation sheet"].map((s) => (
                  <div key={s} className="flex items-center justify-between rounded-xl border bg-white p-4 text-xs">
                    <span>{s}</span>
                    <span className="rounded-md border px-2 py-1 text-[11px]">Download</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border bg-white">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-[#F7F8FA] text-[10px] uppercase tracking-[0.1em] text-[#6B7280]">
                    <tr><th className="p-2">Section</th><th className="p-2">Records</th><th className="p-2">Value</th><th className="p-2">State</th></tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ["B2B Invoices", "6,742", "₹84.2 L"],
                      ["B2B Amendments", "318", "₹4.1 L"],
                      ["Credit/Debit Notes", "948", "₹5.6 L"],
                      ["CDN Amendments", "142", "₹1.3 L"],
                      ["ISD Credits", "64", "₹1.2 L"],
                    ].map((r) => (
                      <tr key={r[0]}><td className="p-2">{r[0]}</td><td className="p-2">{r[1]}</td><td className="p-2">{r[2]}</td>
                        <td className="p-2"><Pill tone="ok"><ShieldCheck className="h-3 w-3" /> Reconciled</Pill></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { screens as ledgerScreens };
export function ActionLegend() {
  return (
    <div className="flex flex-wrap gap-3 text-[11px] text-[#6B7280]">
      <span className="inline-flex items-center gap-1"><Check className="h-3 w-3 text-[#16A34A]" /> Accept</span>
      <span className="inline-flex items-center gap-1"><X className="h-3 w-3 text-[#DC2626]" /> Reject</span>
      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3 text-[#D97706]" /> Pending</span>
    </div>
  );
}
