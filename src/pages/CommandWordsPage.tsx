import { Link } from 'react-router-dom';
import { COMMAND_WORDS, MODULES } from '../data';
import { Card, PageHeading, BulletList, Badge } from '../components/ui';

export default function CommandWordsPage() {
  return <div className="space-y-5">
    <PageHeading kicker="Command Word Decoder" title="What the examiner is really asking" sub="Use this page before writing. Each command word shows the expectation, structure, mini paragraph and common mistakes." />
    <div className="grid gap-4 md:grid-cols-2">
      {COMMAND_WORDS.map((w)=><Card key={w.word} title={w.word} tone="white" right={<Badge tone="gold">{w.tier}</Badge>}>
        <p><strong>Meaning:</strong> {w.meaning}</p>
        <p><strong>Examiner wants:</strong> {w.examinerExpectation}</p>
        <div><p className="font-bold">Answer structure</p><BulletList items={w.structure} /></div>
        <div className="rounded-2xl border border-[#E4CE92] bg-[#FBF7EC] p-3"><p className="font-bold">Mini paragraph</p><p>{w.exampleParagraph}</p></div>
        <div><p className="font-bold">Common mistakes</p><BulletList items={w.commonMistakes} /></div>
        <div className="flex flex-wrap gap-2 pt-2">
          {MODULES.map((m)=><Link key={m.id} to={`/${m.id}/exam-builder`} className="rounded-full bg-[#F4F1FA] px-3 py-2 text-xs font-bold text-[#3B1D6E]">{m.code} Exam Builder</Link>)}
        </div>
      </Card>)}
    </div>
  </div>;
}
