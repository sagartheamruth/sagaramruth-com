import { notFound } from "next/navigation";
import NotesSidebar from "@/components/notes-sidebar";
import NoteView from "@/components/note-view";
import { getNote, notes, sortedNotes } from "@/lib/notes";

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const note = getNote((await params).slug);
  return { title: note ? `${note.title} — sagar amruth` : "sagar amruth" };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const note = getNote((await params).slug);
  if (!note) notFound();

  return (
    <div className="flex h-full">
      <NotesSidebar
        notes={sortedNotes()}
        activeSlug={note.slug}
        className="hidden h-full w-80 shrink-0 border-r border-black/10 md:flex dark:border-white/10"
      />
      <main className="h-full flex-1 overflow-y-auto">
        <NoteView note={note} />
      </main>
    </div>
  );
}
