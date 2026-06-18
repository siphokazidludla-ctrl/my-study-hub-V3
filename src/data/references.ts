import type { Reference } from '../types';

export const REFERENCES: Record<string, Reference> = {
  'MANCOSA IKM Module Guide (2026)': { inText: 'MANCOSA IKM Module Guide (2026)', full: 'MANCOSA (2026). Information and Knowledge Management: Module Guide. Durban: MANCOSA.', tier: 'Module Guide' },
  'MANCOSA OM Module Guide (2026)': { inText: 'MANCOSA OM Module Guide (2026)', full: 'MANCOSA (2026). Operations Management: Module Guide. Durban: MANCOSA.', tier: 'Module Guide' },
  'MANCOSA MM Module Guide (2026)': { inText: 'MANCOSA MM Module Guide (2026)', full: 'MANCOSA (2026). Marketing Management: Module Guide. Durban: MANCOSA.', tier: 'Module Guide' },
  'Laudon and Laudon (2023)': { inText: 'Laudon and Laudon (2023)', full: 'Laudon, K.C. and Laudon, J.P. (2023). Management Information Systems: Managing the Digital Firm. 18th ed. London: Pearson.', tier: 'Prescribed Textbook' },
  'Saffady (2021)': { inText: 'Saffady (2021)', full: 'Saffady, W. (2021). Records and Information Management: Fundamentals of Professional Practice. 4th ed. Lanham: Rowman & Littlefield.', tier: 'Prescribed Textbook' },
  'Heizer, Render and Munson (2020)': { inText: 'Heizer, Render and Munson (2020)', full: 'Heizer, J., Render, B. and Munson, C. (2020). Operations Management: Sustainability and Supply Chain Management. 13th ed. Harlow: Pearson.', tier: 'Prescribed Textbook' },
  'Slack, Jones and Burgess (2022)': { inText: 'Slack, Jones and Burgess (2022)', full: 'Slack, N., Jones, B. and Burgess, N. (2022). Operations Management. 10th ed. Harlow: Pearson.', tier: 'Prescribed Textbook' },
  'Kotler and Armstrong (2020)': { inText: 'Kotler and Armstrong (2020)', full: 'Kotler, P. and Armstrong, G. (2020). Principles of Marketing. 18th ed. London: Pearson.', tier: 'Prescribed Textbook' },
  'Dalkir (2022)': { inText: 'Dalkir (2022)', full: 'Dalkir, K. (2022). Knowledge Management in Theory and Practice. 4th ed. Cambridge: MIT Press.', tier: 'Recommended Textbook' },
  'Hislop, Bosua and Helms (2023)': { inText: 'Hislop, Bosua and Helms (2023)', full: 'Hislop, D., Bosua, R. and Helms, R. (2023). Knowledge Management in Organisations: A Critical Introduction. 5th ed. Oxford: Oxford University Press.', tier: 'Recommended Textbook' },
  'MANCOSA Referencing Guide (2026)': { inText: 'MANCOSA Referencing Guide (2026)', full: 'MANCOSA (2026). Harvard-style Referencing Guide 2026. Durban: MANCOSA.', tier: 'Referencing Guide' },
};

export function cite(key: string) {
  return REFERENCES[key]?.inText ?? 'Source status: Requires verification';
}
