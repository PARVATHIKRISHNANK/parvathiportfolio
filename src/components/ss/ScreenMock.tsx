/* High-fidelity product UI mockups for the SponsorSphere "Full Throttle UI" gallery. */

const NAV = ["Dashboard", "Sponsors", "Teams", "Analytics", "AI Insights", "Messages", "Settings"];

function Chrome({
  active,
  children,
}: {
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-xl border border-white/10 bg-carbon text-[6px] leading-tight text-foreground">
      {/* sidebar */}
      <aside className="hidden w-[74px] shrink-0 flex-col gap-1 border-r border-white/8 bg-white/[0.02] p-2 sm:flex">
        <div className="mb-2 flex items-center gap-1">
          <span className="grid h-4 w-4 place-items-center rounded-[4px] bg-racing text-[6px] font-black">S</span>
          <span className="text-[6px] font-bold tracking-tight">SponsorSphere</span>
        </div>
        {NAV.map((n) => (
          <span
            key={n}
            className={`flex items-center gap-1 rounded-[5px] px-1.5 py-[3px] ${
              n === active ? "bg-electric/15 text-electric" : "text-muted-foreground"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-[2px] ${n === active ? "bg-electric" : "bg-white/25"}`} />
            {n}
          </span>
        ))}
        <div className="mt-auto rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
          <p className="text-[5.5px] text-muted-foreground">AI credits</p>
          <div className="mt-1 h-1 w-full rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-electric to-racing" />
          </div>
        </div>
      </aside>

      {/* main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-2 border-b border-white/8 px-2.5 py-1.5">
          <span className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-[3px] text-[5.5px] text-muted-foreground">
            Search sponsors, teams, events…
          </span>
          <span className="relative h-3 w-3 rounded-full bg-white/10">
            <span className="absolute -right-0 -top-0 h-1 w-1 rounded-full bg-racing" />
          </span>
          <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-electric to-racing" />
        </header>
        <div className="min-h-0 flex-1 overflow-hidden p-2.5">{children}</div>
      </div>
    </div>
  );
}

function Stat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
      <p className="text-[5.5px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-[10px] font-bold leading-none">{value}</p>
      <p className="mt-0.5 text-[5.5px] text-electric">{delta}</p>
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

function Spark() {
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-full w-full">
      <polyline
        points="0,26 12,20 24,23 36,13 48,16 60,8 72,11 84,4 100,6"
        fill="none"
        stroke="var(--electric)"
        strokeWidth="1.6"
      />
      <polygon
        points="0,26 12,20 24,23 36,13 48,16 60,8 72,11 84,4 100,6 100,30 0,30"
        fill="var(--electric)"
        opacity="0.12"
      />
    </svg>
  );
}

/* ------------------------------- screens ------------------------------- */

function MatchDashboard() {
  return (
    <Chrome active="Dashboard">
      <div className="flex h-full flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[9px] font-bold">AI Match Dashboard</h4>
            <p className="text-[5.5px] text-muted-foreground">Velocity Racing · Season 2025</p>
          </div>
          <span className="rounded-full bg-racing px-2 py-[3px] text-[5.5px] font-semibold">
            View Recommendation
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          <Stat label="AI Match Score" value="92%" delta="▲ 6 this week" />
          <Stat label="Active Sponsors" value="14" delta="▲ 2 new" />
          <Stat label="New Opportunities" value="27" delta="▲ 9 today" />
          <Stat label="Pending Requests" value="05" delta="3 awaiting" />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.45fr_1fr] gap-1.5">
          <div className="flex min-h-0 flex-col rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
            <p className="text-[6px] font-semibold">Recommended Sponsors</p>
            <div className="mt-1 flex min-h-0 flex-1 flex-col gap-1">
              {[
                ["Tesla Mobility", "Automotive", "95%"],
                ["Aeroflux Energy", "Energy Drinks", "91%"],
                ["Nordvent Tools", "Engineering", "87%"],
              ].map(([n, ind, m]) => (
                <div key={n} className="rounded-[5px] border border-white/10 bg-carbon/70 p-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="grid h-3.5 w-3.5 place-items-center rounded-[3px] bg-electric/20 text-[5.5px] font-bold text-electric">
                      {n[0]}
                    </span>
                    <span className="text-[6.5px] font-semibold">{n}</span>
                    <span className="text-[5.5px] text-muted-foreground">{ind}</span>
                    <span className="ml-auto rounded-full bg-electric/15 px-1.5 py-[1px] text-[5.5px] font-bold text-electric">
                      {m} Match
                    </span>
                  </div>
                  <div className="mt-1 flex gap-1">
                    {["Audience Fit", "Budget Match", "Brand Alignment"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/12 px-1.5 py-[1px] text-[5px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-0 flex-col gap-1.5">
            <div className="flex-1 rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Trending Opportunities</p>
              <div className="mt-1 h-[70%]">
                <Spark />
              </div>
            </div>
            <div className="flex-1 rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Recent Activity</p>
              <ul className="mt-1 space-y-[3px]">
                {[
                  "Tesla Mobility viewed your deck",
                  "Proposal v3 approved",
                  "AI found 4 new matches",
                ].map((a) => (
                  <li key={a} className="flex gap-1 text-[5.5px] text-muted-foreground">
                    <span className="mt-[3px] h-1 w-1 shrink-0 rounded-full bg-electric" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[6px] border border-racing/40 bg-racing/10 p-1.5">
              <p className="text-[6px] font-semibold">Upcoming Meeting</p>
              <p className="text-[5.5px] text-muted-foreground">Aeroflux · Thu 14:00 · Video call</p>
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function SmartRecommendations() {
  return (
    <Chrome active="AI Insights">
      <div className="flex h-full flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <h4 className="text-[9px] font-bold">Smart Recommendations</h4>
          <div className="flex gap-1">
            {["Highest Match", "Newest", "Trending"].map((s, i) => (
              <span
                key={s}
                className={`rounded-full px-1.5 py-[2px] text-[5.5px] ${
                  i === 0 ? "bg-electric/20 text-electric" : "border border-white/12 text-muted-foreground"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-1">
          {["Industry", "Budget", "Location", "Category"].map((f) => (
            <span
              key={f}
              className="rounded-[4px] border border-white/12 bg-white/[0.03] px-1.5 py-[2px] text-[5.5px] text-muted-foreground"
            >
              {f} ▾
            </span>
          ))}
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-2 gap-1.5">
          {[
            ["Tesla Mobility", "Automotive", "95", "$1.2M–2.4M", "78%"],
            ["Aeroflux Energy", "Beverages", "91", "$600K–1.1M", "71%"],
            ["Nordvent Tools", "Engineering", "87", "$400K–900K", "64%"],
            ["Kalix Telecom", "Telecom", "83", "$800K–1.6M", "69%"],
          ].map(([n, ind, m, b, a]) => (
            <article
              key={n}
              className="flex flex-col rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5"
            >
              <div className="flex items-center gap-1.5">
                <span className="grid h-4 w-4 place-items-center rounded-[3px] bg-gradient-to-br from-electric/40 to-racing/40 text-[6px] font-black">
                  {n[0]}
                </span>
                <div>
                  <p className="text-[6.5px] font-semibold leading-none">{n}</p>
                  <p className="text-[5px] text-muted-foreground">{ind}</p>
                </div>
                <span className="ml-auto grid h-5 w-5 place-items-center rounded-full border border-electric/50 text-[5.5px] font-bold text-electric">
                  {m}%
                </span>
              </div>
              <div className="mt-1 grid grid-cols-2 gap-1 text-[5px] text-muted-foreground">
                <span>Budget · {b}</span>
                <span>Audience overlap · {a}</span>
              </div>
              <div className="mt-1 h-1 w-full rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-electric to-racing" style={{ width: `${m}%` }} />
              </div>
              <p className="mt-1 rounded-[4px] border border-electric/25 bg-electric/[0.08] px-1.5 py-1 text-[5px] leading-snug text-silver">
                <span className="font-semibold text-electric">AI · </span>
                This recommendation is based on audience similarity and previous motorsport
                partnerships.
              </p>
            </article>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

function SponsorProfile() {
  return (
    <Chrome active="Sponsors">
      <div className="flex h-full flex-col gap-1.5">
        <div className="flex items-center gap-1.5 rounded-[6px] border border-white/10 bg-white/[0.035] p-1.5">
          <span className="grid h-7 w-7 place-items-center rounded-[5px] bg-gradient-to-br from-electric to-racing text-[9px] font-black">
            T
          </span>
          <div>
            <p className="text-[8px] font-bold leading-none">Tesla Mobility</p>
            <p className="text-[5.5px] text-muted-foreground">Automotive · HQ Austin, TX · 12k employees</p>
          </div>
          <div className="ml-auto flex gap-1">
            {["Save Sponsor", "Compare"].map((c) => (
              <span key={c} className="rounded-full border border-white/15 px-2 py-[3px] text-[5.5px]">
                {c}
              </span>
            ))}
            <span className="rounded-full bg-racing px-2 py-[3px] text-[5.5px] font-semibold">Contact</span>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.3fr_1fr] gap-1.5">
          <div className="flex min-h-0 flex-col gap-1.5">
            <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Company Overview</p>
              <p className="mt-0.5 text-[5.5px] leading-snug text-muted-foreground">
                Global mobility brand investing in performance motorsport to reach a young,
                tech-forward audience across EMEA and North America.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <Stat label="Budget Range" value="$2.4M" delta="per season" />
              <Stat label="Audience" value="18–34" delta="62% male" />
              <Stat label="Deals Signed" value="11" delta="since 2019" />
            </div>
            <div className="min-h-0 flex-1 rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Previous Sponsorships</p>
              <div className="mt-1 space-y-[3px]">
                {[
                  ["Apex GP", "F2 · 2023", "ROI 3.2x"],
                  ["Redline Karting", "Karting · 2022", "ROI 2.4x"],
                  ["Nova Formula E", "FE · 2021", "ROI 2.9x"],
                ].map(([t, c, r]) => (
                  <div
                    key={t}
                    className="flex items-center gap-1.5 rounded-[4px] border border-white/10 bg-carbon/60 px-1.5 py-1"
                  >
                    <span className="text-[6px] font-semibold">{t}</span>
                    <span className="text-[5px] text-muted-foreground">{c}</span>
                    <span className="ml-auto text-[5.5px] text-electric">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-col gap-1.5">
            <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Brand Values</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {["Innovation", "Sustainability", "Performance", "Youth", "Technology"].map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-electric/30 bg-electric/10 px-1.5 py-[1px] text-[5px] text-electric"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Preferred Categories</p>
              <div className="mt-1 flex flex-wrap gap-1 text-[5px] text-muted-foreground">
                {["Formula E", "F2", "Endurance", "Karting"].map((c) => (
                  <span key={c} className="rounded-[3px] border border-white/12 px-1.5 py-[1px]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="min-h-0 flex-1 rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Recent Campaigns</p>
              <div className="mt-1 h-[64%]">
                <Bars data={[42, 68, 55, 80, 63, 91]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function TeamAnalytics() {
  return (
    <Chrome active="Analytics">
      <div className="flex h-full flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="grid h-5 w-5 place-items-center rounded-[4px] bg-racing text-[7px] font-black">V</span>
          <div>
            <h4 className="text-[8px] font-bold leading-none">Velocity Racing · Team Analytics</h4>
            <p className="text-[5.5px] text-muted-foreground">Formula 2 · Season 2025</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          <Stat label="Wins" value="07" delta="▲ 3 vs 2024" />
          <Stat label="Followers" value="248K" delta="▲ 12.4%" />
          <Stat label="Engagement" value="6.8%" delta="▲ 1.1pt" />
          <Stat label="Reach" value="4.2M" delta="▲ 320K" />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.4fr_1fr] gap-1.5">
          <div className="flex min-h-0 flex-col gap-1.5">
            <div className="min-h-0 flex-1 rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Fan Growth</p>
              <div className="mt-1 h-[72%]">
                <Spark />
              </div>
            </div>
            <div className="min-h-0 flex-1 rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Race Performance</p>
              <div className="mt-1 h-[70%]">
                <Bars data={[55, 72, 38, 88, 64, 92, 47, 76]} color="racing" />
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-col gap-1.5">
            <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Audience Demographics</p>
              {[
                ["18–24", 34],
                ["25–34", 41],
                ["35–44", 17],
                ["45+", 8],
              ].map(([l, v]) => (
                <div key={l as string} className="mt-1 flex items-center gap-1">
                  <span className="w-6 text-[5px] text-muted-foreground">{l}</span>
                  <span className="h-1 flex-1 rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full bg-electric"
                      style={{ width: `${v as number}%` }}
                    />
                  </span>
                  <span className="text-[5px] text-muted-foreground">{v}%</span>
                </div>
              ))}
            </div>
            <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Audience Geography</p>
              <div className="mt-1 grid grid-cols-4 gap-[3px]">
                {[70, 45, 88, 30, 62, 25, 91, 54, 38, 77, 20, 66].map((v, i) => (
                  <span
                    key={i}
                    className="h-2.5 rounded-[2px] bg-electric"
                    style={{ opacity: v / 100 }}
                  />
                ))}
              </div>
            </div>
            <div className="min-h-0 flex-1 rounded-[6px] border border-electric/30 bg-electric/[0.07] p-1.5">
              <p className="text-[6px] font-semibold text-electric">ROI Indicators</p>
              <p className="mt-0.5 text-[5.5px] leading-snug text-silver">
                Median sponsor ROI 3.1x · Brand recall +18% · Cost per impression $0.004
              </p>
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function Workspace() {
  return (
    <Chrome active="Messages">
      <div className="grid h-full grid-cols-[0.85fr_1.5fr_0.9fr] gap-1.5">
        <div className="flex min-h-0 flex-col rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
          <p className="text-[6px] font-semibold">Conversations</p>
          <div className="mt-1 space-y-1">
            {[
              ["Tesla Mobility", "Proposal v3 attached", true],
              ["Aeroflux Energy", "Can we meet Thursday?", false],
              ["Nordvent Tools", "Reviewing the deck", false],
              ["Kalix Telecom", "Contract sent", false],
            ].map(([n, m, act]) => (
              <div
                key={n as string}
                className={`rounded-[4px] px-1.5 py-1 ${act ? "bg-electric/12" : ""}`}
              >
                <div className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-electric/50 to-racing/50" />
                  <span className="text-[6px] font-semibold">{n}</span>
                </div>
                <p className="mt-0.5 truncate text-[5px] text-muted-foreground">{m}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 flex-col rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
          <div className="flex items-center gap-1">
            <span className="text-[6.5px] font-semibold">Tesla Mobility · Proposal thread</span>
            <span className="ml-auto rounded-full bg-electric/15 px-1.5 py-[1px] text-[5px] text-electric">
              Awaiting approval
            </span>
          </div>
          <div className="mt-1 flex min-h-0 flex-1 flex-col justify-end gap-1">
            <p className="max-w-[80%] self-start rounded-[6px] bg-white/[0.06] px-1.5 py-1 text-[5.5px] leading-snug">
              Sharing the updated activation plan for round 4 — hospitality included.
            </p>
            <div className="max-w-[70%] self-start rounded-[6px] border border-white/12 bg-carbon/70 px-1.5 py-1">
              <p className="text-[5.5px] font-semibold">Velocity_Proposal_v3.pdf</p>
              <p className="text-[5px] text-muted-foreground">4.2 MB · uploaded 2h ago</p>
            </div>
            <p className="max-w-[75%] self-end rounded-[6px] bg-electric/20 px-1.5 py-1 text-[5.5px] leading-snug">
              Looks strong. Legal is reviewing clause 4 today.
            </p>
            <span className="flex items-center gap-1 rounded-full border border-white/12 px-1.5 py-[3px] text-[5px] text-muted-foreground">
              Quick reply… <span className="ml-auto text-electric">Voice meeting</span>
            </span>
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-1.5">
          <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
            <p className="text-[6px] font-semibold">Shared Files</p>
            {["Deck_v3.pdf", "Media_kit.zip", "Contract_draft.docx"].map((f) => (
              <p key={f} className="mt-0.5 truncate text-[5px] text-muted-foreground">
                • {f}
              </p>
            ))}
          </div>
          <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
            <p className="text-[6px] font-semibold">Version History</p>
            {["v3 · today", "v2 · 4 days ago", "v1 · 12 days ago"].map((v) => (
              <p key={v} className="mt-0.5 text-[5px] text-muted-foreground">
                {v}
              </p>
            ))}
          </div>
          <div className="min-h-0 flex-1 rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
            <p className="text-[6px] font-semibold">Approval Status</p>
            {[
              ["Team lead", "Approved"],
              ["Sponsor brand", "Approved"],
              ["Legal", "In review"],
            ].map(([r, s]) => (
              <div key={r} className="mt-1 flex items-center gap-1">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${s === "Approved" ? "bg-electric" : "bg-racing"}`}
                />
                <span className="text-[5px] text-muted-foreground">{r}</span>
                <span className="ml-auto text-[5px]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function InsightsPanel() {
  return (
    <Chrome active="AI Insights">
      <div className="flex h-full flex-col gap-1.5">
        <div className="flex items-center gap-1.5 rounded-[6px] border border-electric/30 bg-electric/[0.08] p-1.5">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-electric/25 text-[7px]">✦</span>
          <div>
            <p className="text-[7px] font-bold">AI Summary</p>
            <p className="text-[5.5px] leading-snug text-silver">
              Two sponsors show rising intent this week. Energy category spend is up 14% — act
              before round 5.
            </p>
          </div>
          <span className="ml-auto grid h-6 w-6 place-items-center rounded-full border border-electric/50 text-[5.5px] font-bold text-electric">
            94%
          </span>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1.3fr_1fr] gap-1.5">
          <div className="flex min-h-0 flex-col gap-1.5">
            <div className="min-h-0 flex-1 rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Predictive Partnership Value</p>
              <div className="mt-1 h-[70%]">
                <Spark />
              </div>
            </div>
            <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Opportunity Heat Map</p>
              <div className="mt-1 grid grid-cols-12 gap-[2px]">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2 rounded-[2px] bg-racing"
                    style={{ opacity: 0.15 + ((i * 37) % 80) / 100 }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Recommendation Timeline</p>
              <div className="mt-1 flex items-center gap-1">
                {["Now", "R4", "R5", "R6", "Off-season"].map((t, i) => (
                  <span key={t} className="flex flex-1 items-center gap-1">
                    <span className={`h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-electric" : "bg-white/20"}`} />
                    <span className="text-[5px] text-muted-foreground">{t}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-col gap-1.5">
            <div className="rounded-[6px] border border-racing/40 bg-racing/10 p-1.5">
              <p className="text-[6px] font-semibold">Risk Alerts</p>
              {["Kalix contract expires in 21 days", "Engagement down 4% on IG"].map((r) => (
                <p key={r} className="mt-0.5 text-[5px] text-silver">
                  • {r}
                </p>
              ))}
            </div>
            <div className="rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Suggested Sponsors</p>
              {[
                ["Voltra Energy", "93%"],
                ["Hexon Tyres", "88%"],
                ["Arcline Air", "84%"],
              ].map(([n, m]) => (
                <div key={n} className="mt-0.5 flex items-center gap-1">
                  <span className="h-2.5 w-2.5 rounded-[2px] bg-electric/30" />
                  <span className="text-[5.5px]">{n}</span>
                  <span className="ml-auto text-[5px] text-electric">{m}</span>
                </div>
              ))}
            </div>
            <div className="min-h-0 flex-1 rounded-[6px] border border-white/10 bg-white/[0.03] p-1.5">
              <p className="text-[6px] font-semibold">Market Trends</p>
              {["Data-led deals ▲", "Sustainability briefs ▲", "Single-race deals ▼"].map((t) => (
                <p key={t} className="mt-0.5 text-[5px] text-muted-foreground">
                  {t}
                </p>
              ))}
            </div>
            <span className="rounded-full bg-racing px-2 py-1 text-center text-[5.5px] font-semibold">
              Action Recommendations
            </span>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

const SCREENS = [
  MatchDashboard,
  SmartRecommendations,
  SponsorProfile,
  TeamAnalytics,
  Workspace,
  InsightsPanel,
];

export function ScreenMock({ index }: { index: number }) {
  const Comp = SCREENS[index] ?? MatchDashboard;
  return <Comp />;
}
