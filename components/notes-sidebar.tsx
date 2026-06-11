"use client";

import Link from "next/link";
import { useState } from "react";
import type { Note } from "@/lib/notes";
import { formatDate, previewText } from "@/lib/notes";
import ThemeToggle from "@/components/theme-toggle";

interface Props {
  notes: Note[];
  activeSlug?: string;
  className?: string;
}

export default function NotesSidebar({ notes, activeSlug, className = "" }: Props) {
  const [query, setQuery] = useState("");

  const visible = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <aside className={`flex flex-col bg-[#f7f7f5] dark:bg-[#1c1c1e] ${className}`}>
      <div className="px-4 pt-5 pb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">sagar amruth</h1>
          <ThemeToggle />
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-black/[0.06] px-3 py-1.5 dark:bg-white/[0.08]">
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 shrink-0 fill-none stroke-current opacity-50" strokeWidth="2">
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="m13 13 4 4" strokeLinecap="round" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none placeholder:opacity-50"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        <p className="px-2 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide opacity-40">
          Notes
        </p>
        <ul className="space-y-0.5">
          {visible.map((note) => {
            const active = note.slug === activeSlug;
            return (
              <li key={note.slug}>
                <Link
                  href={`/notes/${note.slug}`}
                  className={`block rounded-lg px-3 py-2.5 transition-colors ${
                    active
                      ? "bg-[#ffd60a]/90 text-black dark:bg-[#917320]"
                      : "hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                  }`}
                >
                  <p className={`truncate text-sm font-semibold ${active ? "dark:text-white" : ""}`}>
                    {note.emoji} {note.title}
                  </p>
                  <p
                    className={`mt-0.5 truncate text-xs ${
                      active ? "text-black/60 dark:text-white/70" : "opacity-50"
                    }`}
                  >
                    <span className="mr-2">{formatDate(note.date)}</span>
                    {previewText(note)}
                  </p>
                </Link>
              </li>
            );
          })}
          {visible.length === 0 && (
            <li className="px-3 py-2 text-sm opacity-50">no notes found</li>
          )}
        </ul>
      </nav>
    </aside>
  );
}
