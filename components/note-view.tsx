import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Note } from "@/lib/notes";
import { formatDate } from "@/lib/notes";
import ThemeToggle from "@/components/theme-toggle";

export default function NoteView({ note }: { note: Note }) {
  return (
    <article className="mx-auto w-full max-w-2xl px-6 py-8 md:py-12">
      <div className="mb-6 flex items-center justify-between md:hidden">
        <Link
          href="/notes"
          className="inline-flex items-center gap-1 text-sm text-[#e6a700]"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.5">
            <path d="m12 4-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Notes
        </Link>
        <ThemeToggle />
      </div>

      <p className="text-center text-xs opacity-40">{formatDate(note.date)}</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        {note.emoji} {note.title}
      </h1>

      <div className="note-content mt-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
      </div>

      {note.spotifyEmbed && (
        <iframe
          title="Spotify player"
          src={`https://open.spotify.com/embed/${note.spotifyEmbed}?theme=0`}
          width="100%"
          height="420"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="mt-6 rounded-xl"
        />
      )}
    </article>
  );
}
