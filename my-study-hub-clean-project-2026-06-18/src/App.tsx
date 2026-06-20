import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import { MODULES } from "./data";
import HomePage from "./pages/HomePage";
import ModuleHomePage from "./pages/ModuleHomePage";
import UnitsPage from "./pages/UnitsPage";
import UnitDetailPage from "./pages/UnitDetailPage";
import TheoriesPage from "./pages/TheoriesPage";
import TheoryDetailPage from "./pages/TheoryDetailPage";
import CasesPage from "./pages/CasesPage";
import CaseDetailPage from "./pages/CaseDetailPage";
import PastPapersPage from "./pages/PastPapersPage";
import PastPaperDetailPage from "./pages/PastPaperDetailPage";
import ExamBuilderPage from "./pages/ExamBuilderPage";
import ParagraphBankPage from "./pages/ParagraphBankPage";
import ChecklistPage from "./pages/ChecklistPage";
import CommandWordsPage from "./pages/CommandWordsPage";
import ReferencesPage from "./pages/ReferencesPage";
import FormulasPage from "./pages/FormulasPage";
import FormulaLibraryPage from "./pages/FormulaLibraryPage";
import FormulaDetailPage from "./pages/FormulaDetailPage";
import AppliedCalculationsPage from "./pages/AppliedCalculationsPage";
import CalculatorHubPage from "./pages/CalculatorHubPage";
import QuestionClassifierPage from "./pages/QuestionClassifierPage";
import MistakeLogPage from "./pages/MistakeLogPage";
import ConceptsPage from "./pages/ConceptsPage";
import ConceptDetailPage from "./pages/ConceptDetailPage";
import ObHomePage from "./ob/pages/HomePage";
import ObUnitsPage from "./ob/pages/UnitsPage";
import ObUnitDetailPage from "./ob/pages/UnitDetailPage";
import ObTheoriesPage from "./ob/pages/TheoriesPage";
import ObTheoryDetailPage from "./ob/pages/TheoryDetailPage";
import ObCaseAnalyzerPage from "./ob/pages/CaseAnalyzerPage";
import ObExamBuilderPage from "./ob/pages/ExamBuilderPage";
import ObParagraphBankPage from "./ob/pages/ParagraphBankPage";
import ObPastPapersPage from "./ob/pages/PastPapersPage";
import ObPastPaperDetailPage from "./ob/pages/PastPaperDetailPage";
import ObChecklistPage from "./ob/pages/ChecklistPage";
import ObCommandWordsPage from "./ob/pages/CommandWordsPage";
import ObReferencesPage from "./ob/pages/ReferencesPage";
import {
  MotivationPage,
  LeadershipPage,
  CultureChangePage,
  ConflictPowerPoliticsPage,
  StressWellbeingPage,
} from "./ob/pages/HubRoutes";

// --- 404 ---
import NotFound from "./pages/NotFound";

function ModuleRoute() {
  const { moduleId } = useParams();
  const isSupportedModule = MODULES.some((m) => m.id === moduleId && m.id !== "ob");
  return isSupportedModule ? <Outlet /> : <NotFound />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/command-words" element={<CommandWordsPage />} />
        <Route path="/references" element={<ReferencesPage />} />

        <Route path="/ob" element={<ObHomePage />} />
        <Route path="/ob/units" element={<ObUnitsPage />} />
        <Route path="/ob/units/:unitId" element={<ObUnitDetailPage />} />
        <Route path="/ob/theories" element={<ObTheoriesPage />} />
        <Route path="/ob/theories/:theoryId" element={<ObTheoryDetailPage />} />
        <Route path="/ob/case-analyzer" element={<ObCaseAnalyzerPage />} />
        <Route path="/ob/motivation" element={<MotivationPage />} />
        <Route path="/ob/leadership" element={<LeadershipPage />} />
        <Route path="/ob/culture-change" element={<CultureChangePage />} />
        <Route path="/ob/conflict-power-politics" element={<ConflictPowerPoliticsPage />} />
        <Route path="/ob/stress-wellbeing" element={<StressWellbeingPage />} />
        <Route path="/ob/exam-builder" element={<ObExamBuilderPage />} />
        <Route path="/ob/paragraph-bank" element={<ObParagraphBankPage />} />
        <Route path="/ob/past-papers" element={<ObPastPapersPage />} />
        <Route path="/ob/past-papers/:paperId" element={<ObPastPaperDetailPage />} />
        <Route path="/ob/command-words" element={<ObCommandWordsPage />} />
        <Route path="/ob/references" element={<ObReferencesPage />} />
        <Route path="/ob/checklist" element={<ObChecklistPage />} />

        <Route path="/:moduleId" element={<ModuleRoute />}>
          <Route index element={<ModuleHomePage />} />

          <Route path="units" element={<UnitsPage />} />
          <Route path="units/:unitId" element={<UnitDetailPage />} />

          <Route path="theories" element={<TheoriesPage />} />
          <Route path="theories/:theoryId" element={<TheoryDetailPage />} />

          <Route path="concepts" element={<ConceptsPage />} />
          <Route path="concepts/:conceptId" element={<ConceptDetailPage />} />

          <Route path="cases" element={<CasesPage />} />
          <Route path="cases/:caseId" element={<CaseDetailPage />} />

          <Route path="past-papers" element={<PastPapersPage />} />
          <Route path="past-papers/:paperId" element={<PastPaperDetailPage />} />

          <Route path="exam-builder" element={<ExamBuilderPage />} />
          <Route path="paragraph-bank" element={<ParagraphBankPage />} />
          <Route path="checklist" element={<ChecklistPage />} />

          <Route path="formulas" element={<FormulasPage />} />
          <Route path="formula-library" element={<FormulaLibraryPage />} />
          <Route path="formulas/:formulaId" element={<FormulaDetailPage />} />

          <Route path="applied-calculations" element={<AppliedCalculationsPage />} />
          <Route path="calculator" element={<CalculatorHubPage />} />
          <Route path="calculators" element={<CalculatorHubPage />} />
          <Route path="calculators/:formulaId" element={<CalculatorHubPage />} />

          <Route path="question-classifier" element={<QuestionClassifierPage />} />
          <Route path="mistake-log" element={<MistakeLogPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
