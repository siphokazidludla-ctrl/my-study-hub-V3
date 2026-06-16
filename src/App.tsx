import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ModuleHomePage from './pages/ModuleHomePage';
import UnitsPage from './pages/UnitsPage';
import UnitDetailPage from './pages/UnitDetailPage';
import TheoriesPage from './pages/TheoriesPage';
import TheoryDetailPage from './pages/TheoryDetailPage';
import CasesPage from './pages/CasesPage';
import PastPapersPage from './pages/PastPapersPage';
import ExamBuilderPage from './pages/ExamBuilderPage';
import ParagraphBankPage from './pages/ParagraphBankPage';
import ChecklistPage from './pages/ChecklistPage';
import CommandWordsPage from './pages/CommandWordsPage';
import ReferencesPage from './pages/ReferencesPage';
import OrbApp from './ob/OrbApp';

export default function App() {
  return (
    <Routes>
      <Route path="/ob/*" element={<OrbApp />} />
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/command-words" element={<CommandWordsPage />} />
        <Route path="/references" element={<ReferencesPage />} />
        <Route path="/:moduleId" element={<ModuleHomePage />} />
        <Route path="/:moduleId/units" element={<UnitsPage />} />
        <Route path="/:moduleId/units/:unitId" element={<UnitDetailPage />} />
        <Route path="/:moduleId/theories" element={<TheoriesPage />} />
        <Route path="/:moduleId/theories/:theoryId" element={<TheoryDetailPage />} />
        <Route path="/:moduleId/cases" element={<CasesPage />} />
        <Route path="/:moduleId/past-papers" element={<PastPapersPage />} />
        <Route path="/:moduleId/exam-builder" element={<ExamBuilderPage />} />
        <Route path="/:moduleId/paragraph-bank" element={<ParagraphBankPage />} />
        <Route path="/:moduleId/checklist" element={<ChecklistPage />} />
      </Route>
    </Routes>
  );
}
