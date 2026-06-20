import { Card, PageHeading } from '../components/ui';
import { useModule } from './helpers';

const templates = [
  ['Introduction','This answer examines [issue] using [theory/framework] in the context of [case]. The discussion first defines the concept, then applies it to the case, evaluates limitations and recommends practical action.'],
  ['Theory','[Theory] explains that [core idea]. Its main components are [components]. This is relevant because [link to case issue].'],
  ['Application','In the case, [case evidence] indicates [diagnosis]. This links to [theory] because [explanation]. The likely impact is [impact].'],
  ['Evaluation','The strength of this framework is [strength]. However, it is limited because [limitation]. Therefore, it should be used with [related theory/tool].'],
  ['Recommendation','Management should [action]. This is supported by [theory] because [reason]. The expected outcome is [improved performance/risk reduction/customer value].'],
  ['Conclusion','In conclusion, [theory] is useful for understanding [issue], but the strongest solution requires both theoretical insight and practical implementation.'],
];

export default function ParagraphBankPage() {
  const { module } = useModule();
  return <div className="space-y-5">
    <PageHeading kicker={`${module.code} Paragraph Bank`} title="Reusable academic writing templates" sub="Use these as scaffolds. Replace brackets with case evidence and module-specific theory." />
    <div className="grid gap-4 md:grid-cols-2">{templates.map(([title,text])=><Card key={title} title={title}><p>{text}</p></Card>)}</div>
  </div>;
}
