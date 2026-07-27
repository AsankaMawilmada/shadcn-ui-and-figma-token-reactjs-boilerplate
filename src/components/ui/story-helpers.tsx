export function Row({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <div className="text-xs font-medium text-muted-foreground">{label}</div>}
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  )
}

export function Showcase({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>
}
