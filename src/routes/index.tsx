import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, Mic, Package, Zap, Check, ShieldCheck, ArrowRight, Code2, Upload, TrendingUp, PhoneIncoming, Truck, AudioLines,
} from "lucide-react";
import watch from "@/assets/watch.jpg";

const TITLE = "Vocallis — AI Voice Sales & 60-Second Callbacks for E-Commerce";
const DESC = "Replace text chatbots with a human-like AI voice sales rep that answers questions, tracks orders, and calls back hot leads in under 60 seconds.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
        <AudioLines className="h-4 w-4" />
      </span>
      Vocallis
    </a>
  );
}

function Btn({ children, variant = "primary", className = "", ...p }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" }) {
  const v = variant === "primary"
    ? "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_0_30px_-8px_var(--primary)]"
    : "border border-input bg-secondary/50 text-foreground hover:bg-secondary";
  return (
    <button {...p} className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${v} ${className}`}>
      {children}
    </button>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {[["Features", "#features"], ["Interactive Demo", "#demo"], ["How It Works", "#how"], ["Pricing", "#pricing"]].map(([l, h]) => (
              <a key={h} href={h} className="transition-colors hover:text-foreground">{l}</a>
            ))}
          </nav>
          <div className="flex gap-2">
            <Btn variant="ghost" className="hidden px-4 py-2 sm:inline-flex">Book a Demo</Btn>
            <Btn className="px-4 py-2">Start Free Trial</Btn>
          </div>
        </div>
      </header>

      <Hero />
      <Demo />
      <Features />
      <How />
      <Pricing />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-20 text-center md:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border bg-secondary/60 px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-muted-foreground">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          THE #1 VOICE AI CONVERSION ENGINE FOR MODERN STORES
        </span>
        <h1 className="mt-8 text-4xl font-bold leading-[1.05] md:text-7xl">
          Call Back Every Lead in <span className="text-primary">60 Seconds</span> & Close Sales on Autopilot.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Replace lifeless text chatbots. When a high-intent shopper leaves their number or asks a question, Vocallis AI calls them in under 60 seconds to answer questions, recommend products, and close the order.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Btn className="px-7 py-4 text-base">Start 14-Day Free Trial <ArrowRight className="h-4 w-4" /></Btn>
          <a href="#demo"><Btn variant="ghost" className="w-full px-7 py-4 text-base"><Mic className="h-4 w-4" /> Try Interactive Voice Demo</Btn></a>
        </div>
        <p className="mt-16 text-sm text-muted-foreground">Works seamlessly with Shopify, WooCommerce, Webflow, and Custom Stores</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 font-display text-xl font-semibold text-muted-foreground/70">
          <span>shopify</span><span>WooCommerce</span><span>Webflow</span><span className="flex items-center gap-2"><Code2 className="h-5 w-5" />Custom</span>
        </div>
      </div>
    </section>
  );
}

const TABS = [
  { id: "cb", label: "60-Second Lead Callback", icon: Phone },
  { id: "voice", label: "Live Voice Product Advisor", icon: Mic },
  { id: "order", label: "Instant Order Status", icon: Package },
] as const;

function Demo() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("cb");
  return (
    <section id="demo" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Interactive Demo</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">See Vocallis sell, live.</h2>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${tab === t.id ? "border-primary bg-primary text-primary-foreground" : "bg-secondary/40 text-muted-foreground hover:text-foreground"}`}>
            <t.icon className="h-4 w-4" />{t.label}
          </button>
        ))}
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border bg-card shadow-2xl">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-destructive/70" /><span className="h-3 w-3 rounded-full bg-muted-foreground/40" /><span className="h-3 w-3 rounded-full bg-success/70" />
          <span className="ml-4 rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">aurelia-watches.com/products/meridian-chrono</span>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <img src={watch} alt="Meridian Chronograph luxury watch" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
          </div>
          <div className="flex flex-col p-8 md:pl-0">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Aurelia Watches</p>
            <h3 className="mt-2 text-3xl font-bold">Meridian Chronograph</h3>
            <p className="mt-2 text-2xl text-primary">$1,890</p>
            <p className="mt-3 text-sm text-muted-foreground">Sapphire crystal, 42mm brushed steel case, Swiss automatic movement, 100m water resistance.</p>
            <div className="mt-6 flex-1 rounded-xl border bg-background p-5">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-success" /> Vocallis AI · Online
              </div>
              {tab === "cb" && <Callback />}
              {tab === "voice" && <Voice />}
              {tab === "order" && <Order />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Callback() {
  const [phone, setPhone] = useState("+1 (555) 214-8890");
  const [t, setT] = useState<number | null>(null);
  useEffect(() => {
    if (t === null || t <= 0) return;
    const id = setTimeout(() => setT(t - 1), t > 48 ? 1000 : 60);
    return () => clearTimeout(id);
  }, [t]);
  const ringing = t !== null && t <= 45;
  if (t === null) return (
    <form onSubmit={(e) => { e.preventDefault(); setT(60); }} className="space-y-3">
      <p className="text-sm">Have a question? Get a call from our expert in under 60 seconds.</p>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-input bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
      <Btn type="submit" className="w-full"><Phone className="h-4 w-4" /> Call Me Now</Btn>
    </form>
  );
  return (
    <div className="flex flex-col items-center py-2 text-center">
      {!ringing ? (
        <>
          <div className="font-display text-6xl font-bold tabular-nums text-primary">{t}s</div>
          <p className="mt-2 text-sm text-muted-foreground">AI rep dialing {phone}…</p>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted"><div className="h-full bg-primary transition-all" style={{ width: `${((60 - t) / 15) * 100}%` }} /></div>
        </>
      ) : (
        <>
          <div className="ring-pulse grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground"><PhoneIncoming className="h-7 w-7" /></div>
          <p className="mt-4 font-semibold">Incoming call · Aurelia Watches</p>
          <p className="text-sm text-muted-foreground">Connected in {60 - 45} seconds — while shopper is still on page</p>
          <button onClick={() => setT(null)} className="mt-4 text-xs text-muted-foreground underline">Reset demo</button>
        </>
      )}
    </div>
  );
}

const QA = [
  { q: "Will the 42mm fit a smaller wrist, around 6.5 inches?", a: "Great question! The Meridian's lug-to-lug is 48mm, so it sits comfortably on a 6.5\" wrist. I'd also suggest the leather strap — it tapers nicely. Want me to apply 10% off for first-time buyers?" },
];

function Voice() {
  const [state, setState] = useState<"idle" | "listen" | "answer">("idle");
  const [typed, setTyped] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
    if (state === "listen") timer.current = setTimeout(() => setState("answer"), 2200);
    if (state === "answer") {
      let i = 0;
      const id = setInterval(() => { i += 2; setTyped(QA[0]!.a.slice(0, i)); if (i >= QA[0]!.a.length) clearInterval(id); }, 20);
      return () => clearInterval(id);
    }
    return () => clearTimeout(timer.current);
  }, [state]);
  return (
    <div className="flex flex-col items-center gap-4">
      <button onClick={() => { setTyped(""); setState("listen"); }}
        className={`grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 ${state === "listen" ? "ring-pulse" : ""}`}
        aria-label="Talk to AI">
        <Mic className="h-7 w-7" />
      </button>
      <div className="flex h-10 items-center gap-1">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className={`w-1 rounded-full bg-accent ${state === "idle" ? "h-1" : "wave-bar h-10"}`} style={{ animationDelay: `${(i % 7) * 0.1}s` }} />
        ))}
      </div>
      {state === "idle" && <p className="text-sm text-muted-foreground">Tap the mic and ask about sizing or specs</p>}
      {state !== "idle" && (
        <div className="w-full space-y-3 text-sm">
          <div className="ml-auto max-w-[85%] rounded-lg bg-secondary px-3 py-2">{QA[0]!.q}</div>
          {state === "answer" && <div className="max-w-[90%] rounded-lg border border-primary/30 bg-primary/10 px-3 py-2">{typed}</div>}
        </div>
      )}
    </div>
  );
}

function Order() {
  const [asked, setAsked] = useState(false);
  return (
    <div className="space-y-3 text-sm">
      {!asked ? (
        <Btn variant="ghost" className="w-full" onClick={() => setAsked(true)}>"Where is my order #1042?"</Btn>
      ) : (
        <>
          <div className="ml-auto max-w-[85%] rounded-lg bg-secondary px-3 py-2">Where is my order #1042?</div>
          <div className="animate-in fade-in slide-in-from-bottom-2 rounded-lg border border-primary/30 bg-primary/10 p-4">
            <div className="flex items-center gap-2 font-semibold"><Truck className="h-4 w-4 text-primary" /> Order #1042 · Out for delivery</div>
            <p className="mt-1 text-muted-foreground">UPS 1Z999AA10123456784 · Arriving <b className="text-foreground">today by 6:00 PM</b></p>
            <div className="mt-3 flex gap-1">
              {["Ordered", "Shipped", "Out for delivery", "Delivered"].map((s, i) => (
                <div key={s} className="flex-1"><div className={`h-1.5 rounded-full ${i < 3 ? "bg-primary" : "bg-muted"}`} /><p className="mt-1 text-[10px] text-muted-foreground">{s}</p></div>
              ))}
            </div>
          </div>
          <button onClick={() => setAsked(false)} className="text-xs text-muted-foreground underline">Reset demo</button>
        </>
      )}
    </div>
  );
}

function Features() {
  const items = [
    { icon: Zap, t: "Sub-60 Second Speed to Lead", d: "Harvard Business Review proves calling within 5 minutes increases sales conversion by 21x. Vocallis does it in 45 seconds while the shopper is still on your page." },
    { icon: Mic, t: "In-Browser Voice Shopping Assistant", d: "Shoppers speak naturally to ask about sizing, material, compatibility, and discounts instead of reading lengthy FAQs." },
    { icon: Package, t: "Automated WISMO & Support Resolution", d: "Resolves 60% of repetitive 'Where is my order?' inquiries automatically via direct Shopify integration." },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Three pillars that turn browsers into buyers.</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((f) => (
          <div key={f.t} className="group rounded-2xl border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><f.icon className="h-6 w-6" /></div>
            <h3 className="mt-6 text-xl font-semibold">{f.t}</h3>
            <p className="mt-3 text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { icon: Code2, t: "Install with 1 Click", d: "Shopify app or 1 line of JavaScript script tag." },
    { icon: Upload, t: "Upload catalog & brand tone", d: "Train your AI rep on products and voice in 5 minutes." },
    { icon: TrendingUp, t: "Watch conversions jump", d: "Visitor-to-buyer conversion up by 35%+." },
  ];
  return (
    <section id="how" className="scroll-mt-20 border-y bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">How It Works</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">Live in under 10 minutes.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.t}>
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-bold text-primary/30">0{i + 1}</span>
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 overflow-x-auto rounded-xl border bg-background p-4 font-mono text-sm text-muted-foreground">
          <span className="text-accent">&lt;script</span> src="https://cdn.vocallis.ai/widget.js" data-store="your-store"<span className="text-accent">&gt;&lt;/script&gt;</span>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { n: "Starter", p: 49, f: ["Up to 150 voice minutes", "In-browser Voice Widget", "Basic order tracking"] },
    { n: "Growth", p: 149, pop: true, f: ["Up to 600 voice minutes", "60-Second Instant Callbacks", "Full Shopify Sync", "Custom Voice & Tone"] },
    { n: "Scale", p: 299, f: ["Unlimited voice minutes", "Priority routing", "Dedicated outbound phone number", "CRM & Webhook integrations"] },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Transparent pricing. No sales call needed.</h2>
        <p className="mt-4 text-muted-foreground">14-day free trial on every plan. Cancel anytime.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {plans.map((pl) => (
          <div key={pl.n} className={`relative flex flex-col rounded-2xl border p-8 ${pl.pop ? "border-primary bg-card shadow-[0_0_60px_-20px_var(--primary)] md:-translate-y-3" : "bg-card/60"}`}>
            {pl.pop && <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Most Popular</span>}
            <h3 className="text-lg font-semibold">{pl.n}</h3>
            <p className="mt-4"><span className="font-display text-5xl font-bold">${pl.p}</span><span className="text-muted-foreground">/month</span></p>
            <ul className="mt-8 flex-1 space-y-3 text-sm">
              {pl.f.map((x) => <li key={x} className="flex gap-3"><Check className="h-4 w-4 shrink-0 text-primary" />{x}</li>)}
            </ul>
            <Btn variant={pl.pop ? "primary" : "ghost"} className="mt-8 w-full">Start Free Trial</Btn>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  const [done, setDone] = useState(false);
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card px-8 py-16 text-center">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
        <h2 className="relative mx-auto max-w-3xl text-3xl font-bold md:text-5xl">Stop Losing 97% of Your Store Visitors. Activate Vocallis Today.</h2>
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="relative mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input required placeholder="Enter your store URL" className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <Btn type="submit">{done ? "Demo on its way ✓" : "Get Instant Demo"}</Btn>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div><Logo /><p className="mt-3 text-sm text-muted-foreground">© 2026 Vocallis. 24/7 AI voice sales for online brands.</p></div>
        <div className="flex flex-wrap gap-3">
          {["GDPR Ready", "CAN-SPAM", "TCPA Compliant Opt-in"].map((b) => (
            <span key={b} className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs text-muted-foreground"><ShieldCheck className="h-3.5 w-3.5 text-primary" />{b}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
