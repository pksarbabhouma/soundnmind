import { useState } from "react";

type MenuItem = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};

function getMenu(variant: "home" | "page"): MenuItem[] {
  const prefix = variant === "home" ? "#" : "/#";
  const homeHref = variant === "home" ? "#home" : "/";
  return [
    { label: "Home", href: homeHref },
    { label: "About Us", href: "/about" },
    { label: "Academy", href: `${prefix}academy` },
    {
      label: "Our Work",
      href: "/our-work",
      submenu: [
        { label: "Senior & Dementia Care", href: "/our-work#senior-care" },
        { label: "Schools", href: "/our-work#schools" },
        { label: "Cancer Warriors & Caregivers", href: "/our-work#cancer-warriors" },
      ],
    },
    { label: "Stories & Impact", href: `${prefix}videos` },
    {
      label: "Get Involved",
      href: `${prefix}get-involved`,
      submenu: [
        { label: "Partner With Us", href: `${prefix}partner` },
        { label: "Volunteer", href: `${prefix}volunteer` },
        { label: "Donate", href: `${prefix}donate` },
      ],
    },
    { label: "Contact Us", href: `${prefix}enquiry` },
  ];
}


export function Navbar({ variant }: { variant: "home" | "page" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const MENU = getMenu(variant);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground text-lg font-bold">
            S
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">Sound N Mind</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden items-center gap-1 lg:flex">
          {MENU.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
                {item.submenu && (
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              {item.submenu && (
                <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[240px] rounded-xl border border-border bg-card p-2 shadow-card">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a
            href="/#donate"
            className="ml-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-cta hover:bg-primary/90 transition-colors"
          >
            Donate
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted lg:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {MENU.map((item) => (
              <div key={item.label} className="py-1">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${openSub === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openSub === item.label && (
                      <div className="ml-3 mt-1 border-l border-border pl-3">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="/#donate"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-cta"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
