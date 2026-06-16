import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ModuleHomePage from './pages/ModuleHomePage';
import UnitsPage from './pages/UnitsPage';
import UnitDetailPage from './pages/UnitDetailPage';
import TheoriesPage from './pages/TheoriesPage';
import TheoryDetailPage from './pages/TheoryDetailPage';
import CasesPage from './pages/CasesPage';
import CaseDetailPage from './pages/CaseDetailPage';
import PastPapersPage from './pages/PastPapersPage';
import ExamBuilderPage from './pages/ExamBuilderPage';
import ParagraphBankPage from './pages/ParagraphBankPage';
import ChecklistPage from './pages/ChecklistPage';
import CommandWordsPage from './pages/CommandWordsPage';
import ReferencesPage from './pages/ReferencesPage';
import FormulasPage from './pages/FormulasPage';
import FormulaLibraryPage from './pages/FormulaLibraryPage';
import FormulaDetailPage from './pages/FormulaDetailPage';
import AppliedCalculationsPage from './pages/AppliedCalculationsPage';
import CalculatorHubPage from './pages/CalculatorHubPage';
import QuestionClassifierPage from './pages/QuestionClassifierPage';
import MistakeLogPage from './pages/MistakeLogPage';
import ConceptsPage from './pages/ConceptsPage';
import ConceptDetailPage from './pages/ConceptDetailPage';
import OrbApp from './ob/OrbApp';

// Marketing pages
import LandingPage from './pages/marketing/LandingPage';
import FeaturesPage from './pages/marketing/FeaturesPage';
import PricingPage from './pages/marketing/PricingPage';
import AboutPage from './pages/marketing/AboutPage';
import ContactPage from './pages/marketing/ContactPage';
import TermsPage from './pages/marketing/TermsPage';
import PrivacyPage from './pages/marketing/PrivacyPage';
import DisclaimerPage from './pages/marketing/DisclaimerPage';

// Auth pages
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import AccountPage from './pages/auth/AccountPage';
import CheckoutPage, { CheckoutCancelPage, CheckoutPendingPage } from './pages/auth/CheckoutPage';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Orb app has its own layout */}
        <Route path="/ob/*" element={<OrbApp />} />

        {/* Public marketing pages (no auth required) */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />

        {/* Auth pages */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/account" element={<AccountPage />} />

        {/* Checkout pages */}
        <Route path="/checkout/success" element={<CheckoutPage />} />
        <Route path="/checkout/cancel" element={<CheckoutCancelPage />} />
        <Route path="/checkout/pending" element={<CheckoutPendingPage />} />

        {/* Main dashboard with layout */}
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
          <Route path="/:moduleId/cases/:caseId" element={<CaseDetailPage />} />
          <Route path="/:moduleId/concepts" element={<ConceptsPage />} />
          <Route path="/:moduleId/concepts/:theoryId" element={<ConceptDetailPage />} />
          <Route path="/:moduleId/past-papers" element={<PastPapersPage />} />
          <Route path="/:moduleId/exam-builder" element={<ExamBuilderPage />} />
          <Route path="/:moduleId/formulas" element={<FormulasPage />} />
          <Route path="/:moduleId/formulas/:formulaId" element={<FormulaDetailPage />} />
          <Route path="/:moduleId/formula-library" element={<FormulaLibraryPage />} />
          <Route path="/:moduleId/formula-library/:formulaId" element={<FormulaDetailPage />} />
          <Route path="/:moduleId/applied-calculations" element={<AppliedCalculationsPage />} />
          <Route path="/:moduleId/applied-calculations/:formulaId" element={<AppliedCalculationsPage />} />
          <Route path="/:moduleId/calculators" element={<CalculatorHubPage />} />
          <Route path="/:moduleId/calculators/:formulaId" element={<CalculatorHubPage />} />
          <Route path="/:moduleId/question-classifier" element={<QuestionClassifierPage />} />
          <Route path="/:moduleId/mistake-log" element={<MistakeLogPage />} />
          <Route path="/:moduleId/paragraph-bank" element={<ParagraphBankPage />} />
          <Route path="/:moduleId/checklist" element={<ChecklistPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
