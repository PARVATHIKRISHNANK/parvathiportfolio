/* High-fidelity MOBILE product UI mockups for the SponsorSphere "Full Throttle UI" gallery. */

const TABS = [
  { label: "Home", dot: "●" },
  { label: "Match", dot: "◆" },
  { label: "Teams", dot: "▲" },
  { label: "Chat", dot: "✦" },
  { label: "You", dot: "◉" },
];

function Phone({
  title,
  active,
  children,
  badge,
}: {
  title: string;
  active: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative flex h-full aspect-[9/19] max-w-full flex-col overflow-hidden rounded-[18px] border border-white/15 bg-carbon p-[3px] shadow-[0_18px_50px_oklch(0_0_0/0.6)]">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[15px] bg-[oklch(0.12_0.02_260)] text-[6px] leading-tight text-foreground">
          {/* status bar */}
          <div className="flex items-center justify-between px-2.5 pt-1.5 text-[5px] text-muted-foreground">
            <span>9:41</span>
            <span className="absolute left-1/2 top-[3px] h-[7px] w-[26px] -translate-x-1/2 rounded-full bg-black" />
            <span className="flex gap-[2px]">
              <span className="h-[4px] w-[4px] rounded-[1px] bg-white/50" />
              <span className="h-[4px] w-[7px] rounded-[1px] bg-white/50" />
            </span>
          </div>

          {/* app bar */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5">
            <span className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-[4px] bg-racing text-[5px] font-black">
              S
            </span>
            <span className="truncate text-[7px] font-bold tracking-tight">{title}</span>
            <span className="relative ml-auto h-3 w-3 rounded-full bg-white/10">
              {badge && (
                <span className="absolute -right-[1px] -top-[1px] grid h-[6px] w-[6px] place-items-center rounded-full bg-racing text-[3.5px] font-bold">
                  {badge}
                </span>
              )}
            </span>
            <span className="h-3 w-3 rounded-full bg-gradient-to-br from-electric to-racing" />
          </div>

          {/* search */}
          <div className="px-2.5">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-2 py-[3px] text-[5px] text-muted-foreground">
              <span className="h-[5px] w-[5px] rounded-full border border-white/40" />
              Search sponsors, teams, events…
            </div>
          </div>

          {/* body */}
          <div className="min-h-0 flex-1 space-y-1.5 overflow-hidden p-2.5">{children}</div>

          {/* tab bar */}
          <div className="flex items-center justify-around border-t border-white/8 bg-white/[0.03] px-1 pb-1.5 pt-1">
            {TABS.map((t) => (
              <span
                key={t.label}
                className={`flex flex-col items-center gap-[1px] text-[4.5px] ${
                  t.label === active ? "text-electric" : "text-muted-foreground"
                }`}
              >
                <span className="text-[7px] leading-none">{t.dot}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
      <p className="text-[4.5px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-[9px] font-bold leading-none">{value}</p>
      <p className="mt-[2px] text-[4.5px] text-electric">{delta}</p>
    </div>
  );
}

function Bars({ data, color = "electric" }: { data: number[]; color?: string }) {
  return (
    <div className="flex h-full items-end gap-[3px]">
      {data.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-[2px] ${
            color === "racing"
              ? "bg-gradient-to-t from-racing/25 to-racing"
              : "bg-gradient-to-t from-electric/25 to-electric"
          }`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function Spark({ points, stroke = "var(--electric)" }: { points: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 100 32" preserveAspectRatio="none" className="h-full w-full">
      <polyline points={points} fill="none" stroke={stroke} strokeWidth="1.6" />
      <polyline points={`0,32 ${points} 100,32`} fill={stroke} fillOpacity="0.12" stroke="none" />
    </svg>
  );
}

function Ring({ value, label }: { value: number; label: string }) {
  const c = 2 * Math.PI * 13;
  return (
    <div className="relative grid h-[34px] w-[34px] shrink-0 place-items-center">
      <svg viewBox="0 0 32 32" className="absolute inset-0 -rotate-90">
        <circle cx="16" cy="16" r="13" fill="none" stroke="oklch(1 0 0/0.12)" strokeWidth="3" />
        <circle
          cx="16"
          cy="16"
          r="13"
          fill="none"
          stroke="var(--electric)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * c} ${c}`}
        />
      </svg>
      <span className="text-[6px] font-bold">{label}</span>
    </div>
  );
}

function Chip({ text, tone = "muted" }: { text: string; tone?: "muted" | "electric" | "racing" }) {
  const cls =
    tone === "electric"
      ? "border-electric/40 bg-electric/12 text-electric"
      : tone === "racing"
        ? "border-racing/40 bg-racing/12 text-racing"
        : "border-white/12 bg-white/[0.05] text-muted-foreground";
  return <span className={`rounded-full border px-1.5 py-[2px] text-[4.5px] ${cls}`}>{text}</span>;
}

/* ------------------------------ 01 dashboard ----------------------------- */
function Dashboard() {
  return (
    <Phone title="AI Match Dashboard" active="Home" badge="3">
      <div className="grid grid-cols-3 gap-1">
        <Stat label="Matches" value="24" delta="+6 new" />
        <Stat label="Deals" value="₹4.2M" delta="+18%" />
        <Stat label="Score" value="92" delta="AI avg" />
      </div>

      <p className="pt-0.5 text-[5px] font-semibold uppercase tracking-wide text-muted-foreground">
        Top sponsor recommendations
      </p>
      {[
        { n: "Velocity Energy", s: 96, t: "Beverage · ₹1.2M" },
        { n: "Apex Tyres", s: 91, t: "Automotive · ₹880K" },
        { n: "NovaTech", s: 87, t: "Technology · ₹1.5M" },
      ].map((r) => (
        <div
          key={r.n}
          className="flex items-center gap-1.5 rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5"
        >
          <span className="grid h-4 w-4 place-items-center rounded-[4px] bg-gradient-to-br from-electric/70 to-racing/70 text-[5px] font-black">
            {r.n[0]}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[6px] font-semibold">{r.n}</span>
            <span className="block text-[4.5px] text-muted-foreground">{r.t}</span>
          </span>
          <Ring value={r.s} label={`${r.s}`} />
        </div>
      ))}

      <div className="grid grid-cols-2 gap-1">
        <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
          <p className="text-[4.5px] uppercase text-muted-foreground">Recent activity</p>
          <p className="mt-[3px] text-[4.5px] text-silver">Apex Tyres opened proposal</p>
          <p className="mt-[2px] text-[4.5px] text-silver">NovaTech shortlisted you</p>
        </div>
        <div className="rounded-[6px] border border-racing/25 bg-racing/[0.07] p-1.5">
          <p className="text-[4.5px] uppercase text-racing">Upcoming meeting</p>
          <p className="mt-[3px] text-[5.5px] font-semibold">Velocity Energy</p>
          <p className="text-[4.5px] text-muted-foreground">Today · 4:30 PM</p>
        </div>
      </div>
    </Phone>
  );
}

/* --------------------------- 02 recommendations -------------------------- */
function Recommendations() {
  return (
    <Phone title="Smart Recommendations" active="Match">
      <div className="flex flex-wrap gap-1">
        <Chip text="Industry ▾" tone="electric" />
        <Chip text="Budget ▾" />
        <Chip text="Category ▾" />
        <Chip text="Region ▾" />
      </div>
      {[
        { n: "Velocity Energy", c: 96, b: "₹1.2M", i: "Beverage", f: "Audience overlap 84%" },
        { n: "Apex Tyres", c: 91, b: "₹880K", i: "Automotive", f: "Brand values aligned" },
        { n: "NovaTech Labs", c: 87, b: "₹1.5M", i: "Technology", f: "Prior motorsport deals" },
      ].map((r) => (
        <div key={r.n} className="rounded-[7px] border border-white/10 bg-white/[0.035] p-1.5">
          <div className="flex items-center gap-1.5">
            <span className="grid h-4 w-4 place-items-center rounded-[4px] bg-white/10 text-[5px] font-black">
              {r.n[0]}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[6px] font-semibold">{r.n}</span>
              <span className="block text-[4.5px] text-muted-foreground">
                {r.i} · Budget {r.b}
              </span>
            </span>
            <span className="rounded-full border border-electric/40 bg-electric/12 px-1.5 py-[2px] text-[4.5px] font-bold text-electric">
              {r.c}% confident
            </span>
          </div>
          <div className="mt-1 h-[3px] w-full rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-electric to-racing"
              style={{ width: `${r.c}%` }}
            />
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-[4.5px] text-silver">✦ {r.f}</span>
            <span className="rounded-full bg-electric px-1.5 py-[2px] text-[4.5px] font-bold text-carbon">
              Connect
            </span>
          </div>
        </div>
      ))}
      <p className="text-center text-[4.5px] text-muted-foreground">12 more matches below</p>
    </Phone>
  );
}

/* ----------------------------- 03 profiles ------------------------------- */
function Profiles() {
  return (
    <Phone title="Sponsor Profile" active="Match">
      <div className="rounded-[7px] border border-white/10 bg-gradient-to-br from-electric/10 to-racing/10 p-2">
        <div className="flex items-center gap-1.5">
          <span className="grid h-6 w-6 place-items-center rounded-[6px] bg-gradient-to-br from-electric to-racing text-[8px] font-black">
            V
          </span>
          <span>
            <span className="block text-[7px] font-bold">Velocity Energy</span>
            <span className="block text-[4.5px] text-muted-foreground">
              Beverage · Global · Verified ✓
            </span>
          </span>
          <span className="ml-auto rounded-full border border-electric/40 bg-electric/12 px-1.5 py-[2px] text-[4.5px] text-electric">
            96% match
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1">
        <Stat label="Budget" value="₹1.2M" delta="per season" />
        <Stat label="Audience" value="8.4M" delta="18–34 core" />
        <Stat label="Deals" value="17" delta="since 2019" />
      </div>

      <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
        <p className="text-[4.5px] uppercase text-muted-foreground">Overview</p>
        <p className="mt-[3px] text-[4.5px] leading-[1.5] text-silver">
          Performance drinks brand targeting motorsport fans across APAC and EU circuits.
        </p>
      </div>

      <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
        <p className="text-[4.5px] uppercase text-muted-foreground">Brand values</p>
        <div className="mt-1 flex flex-wrap gap-1">
          <Chip text="Speed" tone="racing" />
          <Chip text="Youth" />
          <Chip text="Sustainability" />
          <Chip text="Performance" tone="electric" />
        </div>
      </div>

      <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
        <p className="text-[4.5px] uppercase text-muted-foreground">Past partnerships</p>
        <p className="mt-[3px] text-[4.5px] text-silver">Redline GP · Monza Cup · Circuit9</p>
      </div>

      <div className="flex gap-1">
        <span className="flex-1 rounded-full bg-electric py-[4px] text-center text-[5px] font-bold text-carbon">
          Send Proposal
        </span>
        <span className="rounded-full border border-white/15 px-2 py-[4px] text-center text-[5px]">
          Save
        </span>
      </div>
    </Phone>
  );
}

/* ----------------------------- 04 analytics ------------------------------ */
function Analytics() {
  return (
    <Phone title="Team Analytics" active="Teams">
      <div className="grid grid-cols-3 gap-1">
        <Stat label="Followers" value="412K" delta="+3.4%" />
        <Stat label="Reach" value="2.8M" delta="+11%" />
        <Stat label="Growth" value="+18%" delta="QoQ" />
      </div>

      <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
        <p className="text-[4.5px] uppercase text-muted-foreground">Race-day engagement</p>
        <div className="mt-1 h-[34px]">
          <Bars data={[38, 52, 44, 68, 58, 82, 71, 94, 66, 88]} />
        </div>
        <div className="mt-[2px] flex justify-between text-[4px] text-muted-foreground">
          <span>R1</span>
          <span>R5</span>
          <span>R10</span>
        </div>
      </div>

      <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
        <p className="text-[4.5px] uppercase text-muted-foreground">Reach trend</p>
        <div className="mt-1 h-[26px]">
          <Spark points="0,26 14,22 28,24 42,15 56,17 70,9 84,11 100,3" />
        </div>
      </div>

      <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
        <p className="text-[4.5px] uppercase text-muted-foreground">Audience demographics</p>
        {[
          { l: "18–24", v: 34 },
          { l: "25–34", v: 41 },
          { l: "35–44", v: 17 },
          { l: "45+", v: 8 },
        ].map((d) => (
          <div key={d.l} className="mt-1 flex items-center gap-1">
            <span className="w-[16px] text-[4.5px] text-muted-foreground">{d.l}</span>
            <span className="h-[4px] flex-1 rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-electric to-racing"
                style={{ width: `${d.v * 2.2}%` }}
              />
            </span>
            <span className="w-[12px] text-right text-[4.5px]">{d.v}%</span>
          </div>
        ))}
      </div>
    </Phone>
  );
}

/* ----------------------------- 05 workspace ------------------------------ */
function Workspace() {
  return (
    <Phone title="Workspace" active="Chat" badge="5">
      <div className="flex gap-1">
        <Chip text="Chats" tone="electric" />
        <Chip text="Documents" />
        <Chip text="Meetings" />
      </div>

      {[
        { n: "Velocity Energy", m: "Can we review the tier-2 package?", t: "2m", u: 2 },
        { n: "Apex Tyres — Legal", m: "Contract draft v3 attached", t: "1h", u: 0 },
      ].map((c) => (
        <div
          key={c.n}
          className="flex items-center gap-1.5 rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5"
        >
          <span className="grid h-4 w-4 place-items-center rounded-full bg-white/10 text-[5px] font-black">
            {c.n[0]}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[6px] font-semibold">{c.n}</span>
            <span className="block truncate text-[4.5px] text-muted-foreground">{c.m}</span>
          </span>
          <span className="text-[4px] text-muted-foreground">{c.t}</span>
          {c.u > 0 && (
            <span className="grid h-[8px] w-[8px] place-items-center rounded-full bg-racing text-[4px] font-bold">
              {c.u}
            </span>
          )}
        </div>
      ))}

      <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
        <p className="text-[4.5px] uppercase text-muted-foreground">Proposal review</p>
        <div className="mt-1 flex items-center gap-1">
          <span className="grid h-4 w-3 place-items-center rounded-[2px] bg-electric/20 text-[4px] text-electric">
            PDF
          </span>
          <span className="min-w-0 flex-1 truncate text-[5px]">SponsorSphere_Tier2_v3.pdf</span>
          <span className="rounded-full border border-electric/40 px-1 py-[1px] text-[4px] text-electric">
            In review
          </span>
        </div>
        <div className="mt-1 h-[3px] w-full rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-electric" />
        </div>
      </div>

      <div className="rounded-[6px] border border-racing/25 bg-racing/[0.07] p-1.5">
        <p className="text-[4.5px] uppercase text-racing">Meeting schedule</p>
        {[
          { t: "4:30 PM", n: "Velocity Energy · Kickoff" },
          { t: "Tomorrow", n: "Apex Tyres · Negotiation" },
        ].map((m) => (
          <div key={m.t} className="mt-[3px] flex items-center gap-1">
            <span className="h-[4px] w-[4px] rounded-full bg-racing" />
            <span className="text-[4.5px] font-semibold">{m.t}</span>
            <span className="truncate text-[4.5px] text-muted-foreground">{m.n}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-2 py-[3px] text-[4.5px] text-muted-foreground">
        Message Velocity Energy…
        <span className="ml-auto rounded-full bg-electric px-1.5 py-[1px] text-[4px] font-bold text-carbon">
          Send
        </span>
      </div>
    </Phone>
  );
}

/* ----------------------------- 06 ai insights ---------------------------- */
function Insights() {
  return (
    <Phone title="AI Insights" active="You">
      <div className="rounded-[7px] border border-electric/30 bg-electric/[0.08] p-1.5">
        <p className="text-[4.5px] uppercase tracking-wide text-electric">AI summary</p>
        <p className="mt-[3px] text-[4.5px] leading-[1.5] text-silver">
          Beverage sponsors show a 23% higher close rate this quarter. Prioritise Velocity Energy
          before the Monza round.
        </p>
        <div className="mt-1 flex items-center gap-1">
          <Ring value={94} label="94" />
          <span className="text-[4.5px] text-muted-foreground">Confidence score</span>
        </div>
      </div>

      <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
        <p className="text-[4.5px] uppercase text-muted-foreground">Opportunity heatmap</p>
        <div className="mt-1 grid grid-cols-8 gap-[2px]">
          {[
            18, 42, 66, 88, 34, 72, 95, 25, 55, 30, 80, 60, 44, 90, 20, 70, 38, 84, 50, 28, 76, 62,
            40, 92,
          ].map((v, i) => (
            <span
              key={i}
              className="h-[7px] rounded-[1.5px]"
              style={{
                background:
                  v > 75
                    ? "var(--racing)"
                    : v > 50
                      ? "var(--electric)"
                      : "oklch(1 0 0 / 0.12)",
                opacity: v > 50 ? 0.4 + v / 200 : 1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
        <p className="text-[4.5px] uppercase text-muted-foreground">Predicted deal value</p>
        <div className="mt-1 h-[26px]">
          <Spark points="0,24 16,20 32,22 48,13 64,15 80,7 100,2" stroke="var(--racing)" />
        </div>
        <p className="mt-[2px] text-[4.5px] text-silver">₹6.1M projected by season end (+27%)</p>
      </div>

      {[
        { t: "Re-engage NovaTech Labs", d: "Dormant 21 days · 68% revive odds" },
        { t: "Bundle Tier-2 + hospitality", d: "Adds ₹340K expected value" },
      ].map((r) => (
        <div
          key={r.t}
          className="flex items-center gap-1.5 rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5"
        >
          <span className="text-[7px] text-electric">✦</span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[5.5px] font-semibold">{r.t}</span>
            <span className="block truncate text-[4.5px] text-muted-foreground">{r.d}</span>
          </span>
          <span className="rounded-full border border-white/15 px-1.5 py-[1px] text-[4px]">
            Apply
          </span>
        </div>
      ))}
    </Phone>
  );
}

const SCREENS = [Dashboard, Recommendations, Profiles, Analytics, Workspace, Insights];

export function ScreenMock({ index }: { index: number }) {
  const Comp = SCREENS[index % SCREENS.length];
  return <Comp />;
}
