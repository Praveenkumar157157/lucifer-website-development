"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "AI Chat", href: "/chat" },
  { label: "API Explorer", href: "/api-explorer" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08080b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black tracking-[-0.06em] text-white">Lucifer<span className="text-cyan-300">AI</span></Link>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="group grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
          {open ? <X className="text-cyan-300" /> : <span className="grid gap-1.5"><i className="block h-0.5 w-5 bg-cyan-300 transition group-hover:w-6" /><i className="block h-0.5 w-5 bg-fuchsia-400" /><i className="block h-0.5 w-5 bg-white transition group-hover:w-4" /></span>}
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/10 bg-[#0d0d12]">
          <div className="mx-auto grid max-w-7xl gap-2 px-6 py-5 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link, index) => <motion.div key={link.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}><Link href={link.href} onClick={() => setOpen(false)} className="group flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 text-white/75 transition hover:border-cyan-300/50 hover:bg-white/[0.04] hover:text-white"><span>{link.label}</span><span className="font-mono text-xs text-white/30 transition group-hover:text-cyan-300">0{index + 1}</span></Link></motion.div>)}
          </div>
        </motion.div>}
      </AnimatePresence>
    </motion.nav>
  )
}
