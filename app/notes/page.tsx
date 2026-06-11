import NotesSidebar from "@/components/notes-sidebar";
import { sortedNotes } from "@/lib/notes";

export default function NotesIndex() {
  return (
    <div className="flex h-full">
      <NotesSidebar
        notes={sortedNotes()}
        className="h-full w-full md:w-80 md:shrink-0 md:border-r md:border-black/10 md:dark:border-white/10"
      />
      <main className="hidden flex-1 items-center justify-center md:flex">
        <p className="text-sm opacity-40">select a note</p>
      </main>
    </div>
  );
}
