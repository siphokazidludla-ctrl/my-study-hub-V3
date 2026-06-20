import { useMemo, useState } from 'react';
import { COMMAND_WORDS, theoriesFor } from '../data';
import { Card, PageHeading, Input, Badge } from '../components/ui';
import { useModule } from './helpers';

export default function ExamBuilderPage() {
  const { id, module } = useModule();
  const theories = theoriesFor(id);
  const [command,setCommand]=useState(COMMAND_WORDS[0]?.word ?? 'Apply');
  const [theoryId,setTheoryId]=useState(theories[0]?.id ?? '');
  const [evidence,setEvidence]=useState('');
  const [recommendation,setRecommendation]=useState('');
  const theory = theories.find((t)=>t.id===theoryId) ?? theories[0];
  const word = COMMAND_WORDS.find((w)=>w.word===command) ?? COMMAND_WORDS[0];
  const output = useMemo(()=> theory ? [
    `Introduction: This answer ${word.meaning.toLowerCase()} in the context of the case. The key issue is linked to ${theory.name}.`,
    `Theory: ${theory.definition}`,
    `Application: In the case, ${evidence || '[insert specific case evidence]'}. This evidence suggests that ${theory.name} is relevant because ${theory.plain.toLowerCase()}`,
    `Critical analysis: The framework is useful because ${theory.advantages[0]?.toLowerCase()}. However, it is limited because ${theory.limitations[0]?.toLowerCase()}.`,
    `Recommendation: ${recommendation || theory.examTriggers[0] ? 'Management should take targeted action based on the diagnosis.' : '[insert recommendation]'}`,
    `Conclusion: Overall, the strongest answer links the command word, the theory, case evidence and a practical management response.`,
  ] : [] ,[word,theory,evidence,recommendation]);
  return <div className="space-y-5">
    <PageHeading kicker={`${module.code} Exam Builder`} title="Build a structured open-book answer" sub="Select a command word and theory, then add case evidence. Use the generated scaffold as a starting point, not a final answer." />
    <div className="grid gap-4 lg:grid-cols-2">
      <Card title="Inputs" tone="gold">
        <label className="block"><span className="font-bold">Command word</span><select value={command} onChange={(e)=>setCommand(e.target.value)} className="mt-1 w-full rounded-full border p-2">{COMMAND_WORDS.map((w)=><option key={w.word}>{w.word}</option>)}</select></label>
        <label className="block"><span className="font-bold">Theory</span><select value={theoryId} onChange={(e)=>setTheoryId(e.target.value)} className="mt-1 w-full rounded-full border p-2">{theories.map((t)=><option key={t.id} value={t.id}>{t.name}</option>)}</select></label>
        <label className="block"><span className="font-bold">Case evidence</span><Input value={evidence} onChange={setEvidence} placeholder="Paste or summarise one case fact..." /></label>
        <label className="block"><span className="font-bold">Recommendation</span><Input value={recommendation} onChange={setRecommendation} placeholder="What should management do?" /></label>
      </Card>
      <Card title="Generated scaffold">
        {output.map((p,i)=><p key={i}>{p}</p>)}
        <Badge tone="gold">Edit this before submission</Badge>
      </Card>
    </div>
  </div>;
}
