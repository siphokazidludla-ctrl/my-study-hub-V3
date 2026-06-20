import type { CommandWord } from '../types';

export const COMMAND_WORDS: CommandWord[] = [
  ['Apply','Explain / apply','Use the theory in the specific case.','Theory plus case evidence plus consequence.'],
  ['Analyse','Analyse / evaluate','Break the issue into parts and explain relationships.','Causes, links, consequences and theory.'],
  ['Appraise','Analyse / evaluate','Assess value, quality or effectiveness.','A judgement based on criteria and evidence.'],
  ['Attribute','Analyse / evaluate','Assign a likely cause to behaviour or outcomes.','Cause-and-effect reasoning; consider person and situation.'],
  ['Compare','Analyse / evaluate','Show similarities and differences.','Side-by-side comparison and judgement.'],
  ['Contrast','Analyse / evaluate','Focus on differences.','Clear distinctions and implications.'],
  ['Critically discuss','Analyse / evaluate','Explain and evaluate strengths and limitations.','Description, application, critique and judgement.'],
  ['Differentiate','Explain / apply','Show how concepts are not the same.','Clear definitions and differences.'],
  ['Discuss','Explain / apply','Explain from more than one angle.','Balanced explanation with examples.'],
  ['Evaluate','Analyse / evaluate','Make a reasoned judgement.','Advantages, limitations, case evidence and conclusion.'],
  ['Explain','Explain / apply','Make clear how or why something works.','Definition, mechanism and example.'],
  ['Identify','Describe / recall','Name the relevant concept or issue.','Accurate selection and brief evidence.'],
  ['Justify / Motivate','Analyse / evaluate','Give reasons for your answer.','Theory reason plus case reason.'],
  ['Outline','Describe / recall','Give main points only.','Concise structured summary.'],
  ['Recommend','Analyse / evaluate','Give practical actions.','Specific, realistic, theory-based solutions.'],
  ['Tabulate','Describe / recall','Present information in a table.','Side-by-side short points.'],
].map(([word,tier,meaning,examinerExpectation]) => ({
  word, tier: tier as CommandWord['tier'], meaning, examinerExpectation,
  structure: ['Define the issue', 'Link to theory', 'Apply case evidence', 'Add analysis or judgement', 'Conclude or recommend'],
  exampleParagraph: `${word}: [Theory] explains [case evidence]. This means [consequence]. Therefore management should [recommendation].`,
  commonMistakes: ['Writing generic theory without case evidence.', 'Ignoring the command word.', 'Failing to conclude with judgement or action where required.'],
  pairsWith: ['Apply','Evaluate','Recommend'].filter((x) => x !== word),
}));
