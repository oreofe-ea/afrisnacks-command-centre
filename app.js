const app = document.getElementById("app");

const nav = [
  ["mission", "▦", "Mission Control"],
  ["cash", "▣", "Cash Management"],
  ["supply", "▱", "Supply Chain Finance"],
  ["payments", "$", "Payments & FX"],
  ["distributors", "♧", "Distributors"],
  ["analytics", "▥", "Analytics"],
  ["reports", "▤", "Reports"],
  ["settings", "⚙", "Settings"]
];

let state = { page: "mission" };

function layout(content) {
  app.innerHTML = `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="brand-mark">◉</div>
          <div>
            <strong>AfriSnacks</strong>
            <span>Digital Command Centre</span>
          </div>
        </div>

        <nav class="nav">
          ${nav.map(([id, icon, label]) => `
            <button
              class="nav-item ${state.page === id ? "active" : ""}"
              data-page="${id}"
            >
              <span class="nav-icon">${icon}</span>
              <span>${label}</span>
            </button>
          `).join("")}
        </nav>

        <div class="sidebar-footer">
          <div>
            <span class="status-dot"></span>
            <b>System Status</b>
          </div>
          <small>
            All Systems Operational<br>
            Last updated: 2 mins ago
          </small>
        </div>
      </aside>

      <main class="main">
        <header class="topbar">
          <div class="topbar-title">
            AfriSnacks Digital Command Centre
          </div>

          <div class="top-actions">
            <button class="icon-btn">⌕</button>
            <button class="icon-btn">♧</button>
            <div class="avatar">TA</div>
            ⌄
          </div>
        </header>

        <section class="content">
          ${content}
        </section>
      </main>
    </div>
  `;

  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.onclick = () => {
      state.page = btn.dataset.page;
      render();
    };
  });

  document.querySelectorAll("[data-go]").forEach(btn => {
    btn.onclick = () => {
      state.page = btn.dataset.go;
      render();
    };
  });
}

const chartSVG = (green = false) => `
  <svg viewBox="0 0 700 260" preserveAspectRatio="none">

    <defs>
      <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
        <stop
          offset="0"
          stop-color="${green ? "#22C55E" : "#57a9e8"}"
          stop-opacity=".32"
        />
        <stop
          offset="1"
          stop-color="${green ? "#22C55E" : "#57a9e8"}"
          stop-opacity="0"
        />
      </linearGradient>
    </defs>

    <path class="chart-grid" d="
      M0 55H700
      M0 115H700
      M0 175H700
      M0 235H700
    "/>

    <path
      class="chart-area"
      d="
        M0 205
        L55 172
        L105 186
        L155 143
        L205 158
        L255 110
        L305 128
        L355 85
        L405 105
        L455 74
        L505 112
        L555 95
        L605 48
        L655 62
        L700 30
        L700 260
        L0 260Z
      "
    />

    <path
      class="chart-line"
      style="stroke:${green ? "#22C55E" : "#57a9e8"}"
      d="
        M0 205
        L55 172
        L105 186
        L155 143
        L205 158
        L255 110
        L305 128
        L355 85
        L405 105
        L455 74
        L505 112
        L555 95
        L605 48
        L655 62
        L700 30
      "
    />
  </svg>
`;

function mission() {
  return `

    <div class="hero-grid">

      <div class="hero-copy">
        <span class="eyebrow">
          Welcome back, AfriSnacks Treasury Team
        </span>

        <h2>
          Run Africa from<br>
          One Command Centre.
        </h2>

        <p>
          Real-time visibility. Smarter liquidity.<br>
          Stronger supply chains.
        </p>
      </div>

      <div class="card card-pad liquidity-card">

        <div class="label">Total Liquidity</div>

        <div class="big-number green">
          $48.62M
        </div>

        <p class="sub">
          Available across all accounts
        </p>

        <div class="delta">
          ↑ 3.61% vs yesterday
        </div>

      </div>

    </div>

    <div class="kpi-grid">

      ${kpi(
        "Collections Today",
        "₦18.2M",
        "↑ 12.4% vs yesterday",
        "▣"
      )}

      ${kpi(
        "PAPSS Settlement",
        "Active",
        "Real-time cross-border settlements",
        "◎",
        true
      )}

      ${kpi(
        "Distributor Network",
        "1,200",
        "Active across Africa",
        "♧"
      )}

      ${kpi(
        "Currencies",
        "12",
        "Supported",
        "$"
      )}

    </div>

    <div class="card alert-strip">

      <span class="success-icon">✓</span>

      <span class="grow">
        All treasury operations running smoothly.
      </span>

      <span class="sep"></span>

      <span>
        You have 3 pending approvals
      </span>

      <span
        class="link-action"
        data-go="supply"
      >
        View Approvals →
      </span>

    </div>

    <div class="feature-grid">

      <div class="card feature">

        <div class="feature-row">

          <div class="feature-icon">
            ▣
          </div>

          <div>

            <h3>Cash Management</h3>

            <p>
              Optimize liquidity, collections,
              and treasury operations.
            </p>

            <span class="tag">
              Liquidity Visibility
            </span>

            <span class="tag">
              Collections
            </span>

            <span class="tag">
              Cash Concentration
            </span>

            <br>

            <button
              class="btn"
              data-go="cash"
            >
              Go to Cash Management →
            </button>

          </div>

        </div>

      </div>

      <div class="card feature">

        <div class="feature-row">

          <div class="feature-icon">
            ▱
          </div>

          <div>

            <h3>
              Supply Chain Finance
            </h3>

            <p>
              Empower distributors.
              Unlock working capital.
              Drive growth.
            </p>

            <span class="tag">
              Invoice Financing
            </span>

            <span class="tag">
              Distributor Finance
            </span>

            <span class="tag">
              Payments
            </span>

            <br>

            <button
              class="btn"
              data-go="supply"
            >
              Go to Supply Chain Finance →
            </button>

          </div>

        </div>

      </div>

    </div>

    <div class="card quick-bar">

      ${quick(
        "✈",
        "Create Payment",
        "Initiate a new payment"
      )}

      ${quick(
        "$",
        "FX Deal",
        "Buy or sell currency"
      )}

      ${quick(
        "⇧",
        "Upload Collection File",
        "Bulk upload payments"
      )}

      ${quick(
        "▥",
        "View Reports",
        "Access detailed reports"
      )}

    </div>
  `;
}

function kpi(label, value, sub, icon, greenText = false) {
  return `
    <div class="card kpi-card">

      <span class="kpi-icon">
        ${icon}
      </span>

      <div class="label">
        ${label}
      </div>

      <div class="value ${greenText ? "green" : ""}">
        ${value}
      </div>

      <div class="sub ${sub.includes("↑") ? "green" : ""}">
        ${sub}
      </div>

    </div>
  `;
}

function quick(icon, title, sub) {
  return `
    <div class="quick">

      <div class="kpi-icon">
        ${icon}
      </div>

      <div>
        <b>${title}</b>
        <small>${sub}</small>
      </div>

    </div>
  `;
}

function cash() {
  return `

    <div class="page-head">

      <div>
        <h1>Cash Management Overview</h1>

        <p>
          Real-time liquidity, regional cash positions
          and collections intelligence.
        </p>
      </div>

      <button class="btn">
        Create Payment →
      </button>

    </div>

    <div class="kpi-grid">

      ${kpi(
        "Total Liquidity",
        "$48.62M",
        "↑ 3.61% vs yesterday",
        ""
      )}

      ${kpi(
        "Total Collections (Today)",
        "₦18.2M",
        "↑ 12.4% vs yesterday",
        ""
      )}

      ${kpi(
        "Total Disbursements",
        "₦12.7M",
        "↓ 4.2% vs yesterday",
        ""
      )}

      ${kpi(
        "Cash Concentration",
        "82%",
        "↑ 5% vs yesterday",
        ""
      )}

    </div>

    <div class="two-col">

      <div class="card card-pad">

        <h3 class="section-title">
          Liquidity Forecast
        </h3>

        <div class="chart">
          ${chartSVG()}
        </div>

      </div>

      <div class="card card-pad">

        <h3 class="section-title">
          Regional Balances
        </h3>

        <div class="balance-list">

          ${balance("Nigeria", 82, "$24.3M")}
          ${balance("Ghana", 60, "$9.8M")}
          ${balance("Kenya", 48, "$7.1M")}
          ${balance("Rwanda", 28, "$4.5M")}
          ${balance("Other", 16, "$2.9M")}

        </div>

      </div>

    </div>

    <div
      class="two-col"
      style="margin-top:20px"
    >

      <div class="card card-pad">

        <h3 class="section-title">
          Cash Concentration
        </h3>

        <div class="big-number">
          82%
        </div>

        <p class="green">
          Well Concentrated ↑ 5% vs yesterday
        </p>

      </div>

      <div class="card card-pad">

        <h3 class="section-title">
          Collections Feed
        </h3>

        <div class="feed">

          ${feed("MTN Ghana Ltd", "₦2.4M")}
          ${feed("Kenya Retailers Ltd", "₦1.8M")}
          ${feed("Rwanda Distributors", "₦1.2M")}
          ${feed("Uganda Stores", "₦960K")}

        </div>

      </div>

    </div>
  `;
}

function balance(name, pct, val) {
  return `
    <div class="balance-row">

      <span>${name}</span>

      <div class="bar">
        <i style="width:${pct}%"></i>
      </div>

      <b>${val}</b>

    </div>
  `;
}

function feed(name, val) {
  return `
    <div class="feed-item">

      <span>
        ${name}
        <small>Collection received</small>
      </span>

      <b>${val}</b>

    </div>
  `;
}

function payments() {
  return `

    <div class="page-head">

      <div>
        <h1>PAPSS Settlement</h1>

        <p>
          Execute and monitor real-time
          cross-border treasury settlement.
        </p>
      </div>

    </div>

    <div class="card settlement">

      <div class="card party">

        <div class="flag">🇰🇪</div>

        <h3>Kenya Treasury</h3>

        <p class="label">Account</p>
        <b>•••• 1234</b>

        <p class="label">Bank</p>
        <b>Kenya Commercial Bank</b>

      </div>

      <div>

        <div class="route-payment"></div>

        <div class="settle-amount">
          $250,000
        </div>

        <div
          style="text-align:center;margin-top:15px"
        >
          <span class="success-badge">
            ✓ Settlement Successful
          </span>
        </div>

        <p
          class="label"
          style="text-align:center"
        >
          May 13, 2026 · 10:42 AM
        </p>

      </div>

      <div class="card party">

        <div class="flag">🇬🇭</div>

        <h3>Ghana Treasury</h3>

        <p class="label">Account</p>
        <b>•••• 3210</b>

        <p class="label">Bank</p>
        <b>Ghana Commercial Bank</b>

      </div>

    </div>

    <div
      class="two-col"
      style="margin-top:20px"
    >

      <div class="card card-pad">

        <h3 class="section-title">
          Payment Route
        </h3>

        <div class="chart">
          ${chartSVG()}
        </div>

      </div>

      <div class="card card-pad">

        <h3 class="section-title">
          Compliance & Settlement Timeline
        </h3>

        <div class="feed">

          ${timeline(
            "✓",
            "Payment Initiated",
            "May 13, 2026 · 10:38 AM"
          )}

          ${timeline(
            "✓",
            "Compliance Screening",
            "10:39 AM"
          )}

          ${timeline(
            "✓",
            "PAPSS Routing",
            "10:40 AM"
          )}

          ${timeline(
            "✓",
            "Settlement in Progress",
            "10:41 AM"
          )}

          ${timeline(
            "✓",
            "Settlement Completed",
            "10:42 AM"
          )}

        </div>

      </div>

    </div>
  `;
}

function timeline(icon, title, time) {
  return `
    <div class="feed-item">

      <span>
        <b class="green">${icon}</b>
        ${title}

        <small>${time}</small>
      </span>

    </div>
  `;
}

function supply() {
  return `

    <div class="page-head">

      <div>

        <h1>
          Supply Chain Finance Overview
        </h1>

        <p>
          Finance distributor invoices and monitor
          working capital performance.
        </p>

      </div>

      <button
        class="btn"
        data-go="distributors"
      >
        View Distributors →
      </button>

    </div>

    <div class="metric-grid">

      ${metric(
        "Active Distributors",
        "1,200",
        "↑ 4% this month"
      )}

      ${metric(
        "Pending Invoices",
        "₦28.6M",
        "₦12.5M in review"
      )}

      ${metric(
        "Financing Utilisation",
        "68%",
        "↑ 8% this month"
      )}

      ${metric(
        "Settlement Success Rate",
        "97.8%",
        "↑ 0.2% this month"
      )}

    </div>

    <div
      class="two-col"
      style="margin-top:20px"
    >

      <div class="card card-pad">

        <h3 class="section-title">
          Invoice Queue
        </h3>

        ${table(
          ["Invoice ID", "Distributor", "Amount", "Status"],
          [
            ["INV-00482", "AfriSnacks Ghana", "₦2.4M", "Pending"],
            ["INV-00483", "Nigeria Distributor", "₦1.8M", "Pending"],
            ["INV-00484", "Kenya Retail", "₦3.1M", "Approved"],
            ["INV-00485", "Rwanda Stores", "₦960K", "Pending"]
          ]
        )}

      </div>

      <div class="card card-pad">

        <h3 class="section-title">
          Approval Queue
        </h3>

        ${table(
          ["Distributor", "Amount", "Terms", "Action"],
          [
            ["Ghana Distributor", "₦4.6M", "30 days", "Review"],
            ["Kenya Distributor", "₦3.1M", "45 days", "Review"],
            ["Nigeria Distributor", "₦2.8M", "30 days", "Review"],
            ["Uganda Distributor", "₦1.2M", "25 days", "Review"]
          ]
        )}

      </div>

    </div>
  `;
}

function metric(label, value, sub) {
  return `
    <div class="card metric">

      <div class="label">
        ${label}
      </div>

      <div class="metric-value">
        ${value}
      </div>

      <small class="green">
        ${sub}
      </small>

    </div>
  `;
}

function table(headers, rows) {
  return `
    <table class="table">

      <thead>
        <tr>
          ${headers.map(h => `<th>${h}</th>`).join("")}
        </tr>
      </thead>

      <tbody>

        ${rows.map(r => `
          <tr>

            ${r.map((c, i) =>

              i === r.length - 1 &&
              ["Pending", "Approved"].includes(c)

                ? `<td>
                    <span
                      class="status ${c.toLowerCase()}"
                    >
                      ${c}
                    </span>
                  </td>`

                : `<td>${c}</td>`

            ).join("")}

          </tr>
        `).join("")}

      </tbody>

    </table>
  `;
}

function distributors() {
  return `

    <div class="page-head">

      <div>

        <h1>Distributor Profile</h1>

        <p>
          Credit, invoice and financing profile.
        </p>

      </div>

    </div>

    <div class="card profile-card">

      <div class="profile-top">

        <div class="profile-avatar">
          ▥
        </div>

        <div>

          <div class="profile-name">
            AfriSnacks Ghana Distributor
          </div>

          <p class="label">
            Distributor ID: DIST-GHA-000489
          </p>

          <span class="outline-badge">
            Eligible
          </span>

        </div>

      </div>

      <div class="profile-grid">

        ${profileStat(
          "Credit Limit",
          "₦12M"
        )}

        ${profileStat(
          "Outstanding Invoice",
          "₦4.8M"
        )}

        ${profileStat(
          "Financing Offer",
          "₦4.6M"
        )}

        ${profileStat(
          "Status",
          "Active"
        )}

      </div>

    </div>

    <div
      class="two-col"
      style="margin-top:20px"
    >

      <div class="card card-pad">

        <h3 class="section-title">
          Recent Invoices
        </h3>

        ${table(
          ["Invoice ID", "Amount", "Due Date", "Status"],
          [
            ["INV-00482", "₦2.4M", "May 20, 2026", "Approved"],
            ["INV-00473", "₦1.8M", "May 24, 2026", "Pending"],
            ["INV-00455", "₦600K", "May 28, 2026", "Pending"]
          ]
        )}

      </div>

      <div class="card card-pad">

        <h3 class="section-title">
          Credit Profile
        </h3>

        <p class="label">
          Outstanding balance
        </p>

        <div
          class="big-number"
          style="font-size:38px"
        >
          ₦4.8M
        </div>

        <div
          class="bar"
          style="margin:18px 0"
        >
          <i
            style="
              width:40%;
              background:var(--orange)
            "
          ></i>
        </div>

        <div class="green">
          40% of available credit utilised
        </div>

      </div>

    </div>
  `;
}

function profileStat(label, value) {
  return `
    <div class="card profile-stat">

      <span class="label">
        ${label}
      </span>

      <b>${value}</b>

    </div>
  `;
}

function analytics() {
  return `

    <div class="page-head">

      <div>

        <h1>Treasury Analytics</h1>

        <p>
          Executive intelligence across liquidity
          and regional operations.
        </p>

      </div>

    </div>

    <div class="three-col">

      ${metric(
        "Liquidity Growth",
        "0.68%",
        "+$330K today"
      )}

      ${metric(
        "Collections",
        "₦18.2M",
        "↑ 12.4%"
      )}

      ${metric(
        "Cash Concentration",
        "82%",
        "↑ 5%"
      )}

    </div>

    <div
      class="card card-pad"
      style="margin-top:20px"
    >

      <h3 class="section-title">
        Liquidity Trend
      </h3>

      <div class="chart">
        ${chartSVG(true)}
      </div>

    </div>
  `;
}

function reports() {
  return `

    <div class="page-head">

      <div>

        <h1>Reports Centre</h1>

        <p>
          Download and review treasury and
          supply chain performance reports.
        </p>

      </div>

    </div>

    <div class="card card-pad">

      ${table(
        ["Report", "Period", "Status", "Action"],
        [
          [
            "Regional Liquidity Report",
            "August 2026",
            "Ready",
            "Download"
          ],
          [
            "Collections Performance",
            "August 2026",
            "Ready",
            "Download"
          ],
          [
            "Distributor Finance Summary",
            "Q3 2026",
            "Ready",
            "Download"
          ],
          [
            "PAPSS Settlement Report",
            "August 2026",
            "Ready",
            "Download"
          ]
        ]
      )}

    </div>
  `;
}

function settings() {
  return `

    <div class="page-head">

      <div>

        <h1>Settings</h1>

        <p>
          Manage user access, notifications
          and command centre preferences.
        </p>

      </div>

    </div>

    <div class="two-col">

      <div class="card card-pad">

        <h3 class="section-title">
          Notifications
        </h3>

        <div class="feed">

          ${feed(
            "Settlement confirmations",
            "Enabled"
          )}

          ${feed(
            "Large transaction alerts",
            "Enabled"
          )}

          ${feed(
            "Daily treasury digest",
            "Enabled"
          )}

        </div>

      </div>

      <div class="card card-pad">

        <h3 class="section-title">
          Security
        </h3>

        <div class="feed">

          ${feed(
            "Multi-factor authentication",
            "Enabled"
          )}

          ${feed(
            "Session timeout",
            "30 minutes"
          )}

          ${feed(
            "Last security review",
            "August 2026"
          )}

        </div>

      </div>

    </div>
  `;
}

function mapPage() {
  return `

    <div class="page-head">

      <div>

        <h1>
          Africa Treasury Operations Map
        </h1>

        <p>
          Visualise regional liquidity and
          cross-border payment routes.
        </p>

      </div>

    </div>

    <div class="card map-card">

      <div class="africa-map"></div>

      <span
        class="country"
        style="left:22%;top:39%"
      >
        Ghana
      </span>

      <span
        class="country"
        style="left:36%;top:30%"
      >
        Nigeria
      </span>

      <span
        class="country"
        style="left:63%;top:44%"
      >
        Uganda
      </span>

      <span
        class="country"
        style="left:72%;top:55%"
      >
        Kenya
      </span>

      <span
        class="country"
        style="left:65%;top:65%"
      >
        Rwanda
      </span>

      <i
        class="node"
        style="left:24%;top:42%"
      ></i>

      <i
        class="node"
        style="left:39%;top:34%"
      ></i>

      <i
        class="node"
        style="left:65%;top:46%"
      ></i>

      <i
        class="node"
        style="left:74%;top:58%"
      ></i>

      <i
        class="node"
        style="left:67%;top:68%"
      ></i>

      <i
        class="route"
        style="
          left:25%;
          top:43%;
          width:18%;
          transform:rotate(-8deg)
        "
      ></i>

      <i
        class="route"
        style="
          left:40%;
          top:35%;
          width:27%;
          transform:rotate(10deg)
        "
      ></i>

      <i
        class="route"
        style="
          left:66%;
          top:47%;
          width:11%;
          transform:rotate(38deg)
        "
      ></i>

      <div class="map-legend">

        <span class="orange">●</span>
        Active operating country

        <br>

        <span class="orange">━</span>
        PAPSS payment route

      </div>

      <div
        style="
          position:absolute;
          right:25px;
          top:25px;
          width:290px
        "
        class="card card-pad"
      >

        <h3 class="section-title">
          Live Transactions
        </h3>

        <div class="tx-panel">

          ${tx(
            "PAPSS Settlement",
            "Nigeria → Ghana",
            "$250,000"
          )}

          ${tx(
            "Collections Received",
            "Kenya → AfriSnacks",
            "$120,000"
          )}

          ${tx(
            "Payment Completed",
            "AfriSnacks → Rwanda",
            "$75,000"
          )}

        </div>

      </div>

    </div>
  `;
}

function tx(title, route, amount) {
  return `
    <div class="tx">

      <span class="success-icon">
        ✓
      </span>

      <div>

        <b>${title}</b>

        <small>${route}</small>

      </div>

      <div style="margin-left:auto">

        <b>${amount}</b>

      </div>

    </div>
  `;
}

function journey() {
  return `

    <div class="page-head">

      <div>

        <h1>
          Invoice Financing Journey
        </h1>

        <p>
          Track the complete distributor
          financing workflow.
        </p>

      </div>

    </div>

    <div class="card workflow">

      ${step(
        "✓",
        "Onboard",
        "Completed",
        "completed"
      )}

      ${step(
        "✓",
        "Invoice Uploaded",
        "Completed",
        "completed"
      )}

      ${step(
        "✓",
        "Invoice Approved",
        "Completed",
        "completed"
      )}

      ${step(
        "4",
        "Financing Generated",
        "May 13, 2026",
        "active"
      )}

      ${step(
        "5",
        "Settlement Completed",
        "Pending",
        ""
      )}

    </div>

    <div class="card card-pad">

      <h3 class="section-title">
        Journey Details
      </h3>

      ${table(
        [
          "Distributor",
          "Invoice ID",
          "Invoice Amount",
          "Financing Amount",
          "Tenor"
        ],
        [
          [
            "AfriSnacks Ghana Distributor",
            "INV-00482",
            "₦4.8M",
            "₦4.6M",
            "30 days"
          ]
        ]
      )}

      <div
        style="
          margin-top:20px;
          text-align:right
        "
      >

        <button
          class="btn"
          data-go="impact"
        >
          View Impact Dashboard →
        </button>

      </div>

    </div>
  `;
}

function step(number, title, sub, className) {
  return `
    <div class="step ${className}">

      <div class="step-dot">
        ${number}
      </div>

      <b>${title}</b>

      <small>${sub}</small>

    </div>
  `;
}

function impact() {
  return `

    <div class="page-head">

      <div>

        <h1>
          Regional Treasury Successfully Updated
        </h1>

        <p>
          Cross-border settlement has improved
          the regional treasury position.
        </p>

      </div>

      <span class="success-badge">
        ✓ Update Complete
      </span>

    </div>

    <div class="impact-grid">

      <div class="card before-after">

        <span class="label">
          Before
        </span>

        <div
          class="big-number"
          style="font-size:48px"
        >
          $48.62M
        </div>

        <small class="label">
          May 13, 2026
        </small>

        <div class="mini-chart">
          ${chartSVG()}
        </div>

      </div>

      <div class="impact-arrow">

        ↑

        <div
          class="green"
          style="font-size:14px"
        >
          +0.68%
        </div>

        <div
          class="green"
          style="font-size:12px"
        >
          +$330K
        </div>

      </div>

      <div class="card before-after">

        <span class="label">
          After
        </span>

        <div
          class="big-number green"
          style="font-size:48px"
        >
          $48.95M
        </div>

        <small class="label">
          May 13, 2026
        </small>

        <div class="mini-chart">
          ${chartSVG(true)}
        </div>

      </div>

    </div>

    <div class="card impact-summary">

      ${summary(
        "Collections Received",
        "+₦1.24M",
        "↑ 12.4%"
      )}

      ${summary(
        "Liquidity Improvement",
        "+$330K",
        "↑ 0.68%"
      )}

      ${summary(
        "Disbursements Optimised",
        "+₦920K",
        "↑ 0.5%"
      )}

      ${summary(
        "Cash Concentration",
        "82%",
        "↑ 5%"
      )}

    </div>

    <div
      class="card card-pad"
      style="margin-top:18px"
    >

      <span class="orange">
        ▣
      </span>

      <b>
        Live Update
      </b>

      <p class="label">
        Concentration received from Kenya Retailers Ltd:
        <b style="color:white">
          ₦1.8M
        </b>
      </p>

      <button class="btn">
        View All Updates →
      </button>

    </div>
  `;
}

function summary(label, value, delta) {
  return `
    <div>

      <small>${label}</small>

      <b>${value}</b>

      <small class="green">
        ${delta}
      </small>

    </div>
  `;
}

function render() {

  if (state.page === "payments") {
    layout(payments());

  } else if (state.page === "supply") {
    layout(supply());

  } else if (state.page === "distributors") {
    layout(distributors());

  } else if (state.page === "analytics") {
    layout(analytics());

  } else if (state.page === "reports") {
    layout(reports());

  } else if (state.page === "settings") {
    layout(settings());

  } else if (state.page === "cash") {
    layout(cash());

  } else if (state.page === "map") {
    layout(mapPage());

  } else if (state.page === "journey") {
    layout(journey());

  } else if (state.page === "impact") {
    layout(impact());

  } else {
    layout(mission());
  }
}

render();
