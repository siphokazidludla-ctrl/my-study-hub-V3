import { Card, PageHeading, BulletList } from '../components/ui';
import { useModule } from './helpers';

export default function ChecklistPage() {
  const { module } = useModule();
  return <div className="space-y-5">
    <PageHeading kicker={`${module.code} Final Check`} title="Before you submit" sub="Use this checklist to avoid the most common open-book exam mistakes." />
    <Card title="Answer checklist" tone="gold">
      <BulletList items={[
        'I answered the exact command word.',
        'I defined key concepts briefly and accurately.',
        'I used the module guide structure where relevant.',
        'I applied specific case evidence, not generic examples only.',
        'I included critical analysis where required.',
        'I included limitations or risks.',
        'I made practical recommendations linked to theory.',
        'I included South African context where appropriate.',
        'I avoided theory dumping.',
        'I concluded with a clear judgement or implication.',
      ]} />
    </Card>
  </div>;
}
