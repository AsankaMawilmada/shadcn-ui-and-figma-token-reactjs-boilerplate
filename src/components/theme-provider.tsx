import * as React from "react"

import type { ThemeName } from "@/tokens"

type ThemeProviderProps = {
  /**
   * Theme name to activate, matching a key registered in src/tokens/index.ts
   * (and a `:root[data-theme="name"]` block in src/styles/themes/<name>.css).
   * Omit — or pass "default" — to use the library's default theme; no CSS
   * import or attribute is required for that case.
   */
  theme?: ThemeName | (string & {})
  children: React.ReactNode
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  React.useEffect(() => {
    const root = document.documentElement
    if (theme && theme !== "default") {
      root.setAttribute("data-theme", theme)
    } else {
      root.removeAttribute("data-theme")
    }
  }, [theme])

  return <>{children}</>
}

export { ThemeProvider }
export type { ThemeProviderProps }
