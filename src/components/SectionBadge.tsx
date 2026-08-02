import { cn } from "@/lib/utils";

export type SectionBadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "card";
  className?: string;
};

export function SectionBadge({
  children,
  variant = "default",
  className,
}: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-2 px-5 py-2 text-base font-semibold uppercase tracking-[0.1em] text-muted-foreground",
        variant === "default" && "border-border bg-background",
        variant === "card" && "border-border bg-card",
        className
      )}
    >
      {children}
    </div>
  );
}
