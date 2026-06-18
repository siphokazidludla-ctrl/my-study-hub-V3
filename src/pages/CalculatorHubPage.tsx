import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageHeading, Card, Input, Badge, BulletList } from "../components/ui";
import { OM_CALCULATORS, getOMCalculator } from "../data/modules/om/calculators";
import { useModule } from "./helpers";

export default function CalculatorHubPage() {
  const { id, module } = useModule();
  const { formulaId } = useParams();
  const [query, setQuery] = useState("");

  const selectedFormula =
    getOMCalculator(formulaId) ?? OM_CALCULATORS[0];

  const [currentId, setCurrentId] = useState(selectedFormula.id);
  const currentFormula = getOMCalculator(currentId) ?? OM_CALCULATORS[0];

  const solveOptions = currentFormula.variables.filter(
    (variable) => variable.canSolve !== false
  );
  const [solveFor, setSolveFor] = useState(solveOptions[0].key);
  const [values, setValues] = useState<Record<string, number>>({});

  useEffect(() => {
    setCurrentId(selectedFormula.id);
    setSolveFor(
      selectedFormula.variables.find((variable) => variable.canSolve !== false)?.key ??
        selectedFormula.variables[0].key
    );
    setValues({});
  }, [selectedFormula.id]);

  const filtered = useMemo(() => {
    return OM_CALCULATORS.filter((formula) =>
      [formula.name, formula.category, formula.formula, formula.description]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  if (id !== "om") {
    return (
      <Card title="Calculator hub is only available for OM" tone="gold">
        <p>
          Formula calculators are currently part of Operations Management. Use the
          {` ${module.code} `}unit, theory, case and exam tools for this module.
        </p>
      </Card>
    );
  }

  function updateFormula(nextId: string) {
    const next = getOMCalculator(nextId) ?? OM_CALCULATORS[0];
    const nextSolveOptions = next.variables.filter(
      (variable) => variable.canSolve !== false
    );
    setCurrentId(next.id);
    setSolveFor(nextSolveOptions[0]?.key ?? next.variables[0].key);
    setValues({});
  }

  function setValue(key: string, value: string) {
    setValues((prev) => ({
      ...prev,
      [key]: Number(value),
    }));
  }

  const requiredVariables = currentFormula.variables.filter(
    (variable) => variable.key !== solveFor
  );
  const canCalculate = requiredVariables.every(
    (variable) =>
      values[variable.key] !== undefined && !Number.isNaN(values[variable.key])
  );

  const result = canCalculate
    ? currentFormula.calculate(solveFor, values)
    : NaN;
  const solveLabel =
    currentFormula.variables.find((variable) => variable.key === solveFor)
      ?.label ?? solveFor;

  return (
    <div className="space-y-5">
      <PageHeading
        kicker={`${module.code} Calculator Hub`}
        title="Operations Management Formula Solver"
        sub="Choose a formula, choose the variable you want to solve for, enter the known values, and the calculator rearranges the formula."
      />

      <Card title="Formula solver" tone="gold">
        <div className="grid gap-4 lg:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
              Choose formula
            </span>
            <select
              value={currentFormula.id}
              onChange={(event) => updateFormula(event.target.value)}
              className="w-full rounded-2xl border border-[#D9D2EC] bg-white px-3 py-2 text-sm"
            >
              {OM_CALCULATORS.map((formula) => (
                <option key={formula.id} value={formula.id}>
                  {formula.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
              Solve for
            </span>
            <select
              value={solveFor}
              onChange={(event) => setSolveFor(event.target.value)}
              className="w-full rounded-2xl border border-[#D9D2EC] bg-white px-3 py-2 text-sm"
            >
              {solveOptions.map((variable) => (
                <option key={variable.key} value={variable.key}>
                  {variable.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4 rounded-2xl bg-white p-4">
          <Badge>{currentFormula.category}</Badge>
          <h2 className="mt-2 text-xl font-extrabold text-[#241349]">
            {currentFormula.name}
          </h2>
          <p className="mt-1 font-mono text-sm text-slate-600">
            {currentFormula.formula}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            {currentFormula.description}
          </p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {requiredVariables.map((variable) => (
            <label key={variable.key} className="block">
              <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                {variable.label}
              </span>
              <input
                type="number"
                value={values[variable.key] ?? ""}
                onChange={(event) => setValue(variable.key, event.target.value)}
                className="w-full rounded-2xl border border-[#D9D2EC] bg-white px-3 py-2 text-sm"
                placeholder="Enter value"
              />
            </label>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-[#E6E1F2] bg-[#FBF7EC] p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#9A93AD]">
            Result
          </p>
          {canCalculate && Number.isFinite(result) ? (
            <p className="mt-1 text-2xl font-extrabold text-[#241349]">
              {solveLabel} = {result.toFixed(4)}
            </p>
          ) : (
            <p className="mt-1 text-sm text-slate-600">
              Enter all required values to calculate.
            </p>
          )}
        </div>
      </Card>

      <Card title="Search calculators" tone="white">
        <Input
          value={query}
          onChange={setQuery}
          placeholder="Search EOQ, exponential smoothing, MAD, ROP..."
        />

        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((formula) => (
            <div
              key={formula.id}
              className="block rounded-lg border border-slate-200 p-4 text-left hover:border-[#3B1D6E] hover:bg-slate-50"
            >
              <button
                type="button"
                onClick={() => updateFormula(formula.id)}
                className="block w-full text-left"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {formula.category}
                    </p>
                    <h3 className="font-semibold text-slate-900">
                      {formula.name}
                    </h3>
                  </div>
                  <Badge>Formula</Badge>
                </div>

                <p className="mt-2 font-mono text-sm text-slate-600">
                  {formula.formula}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {formula.description}
                </p>
              </button>

              {formula.detailFormulaId && (
                <div className="mt-3">
                  <Link
                    to={`/${id}/formulas/${formula.detailFormulaId}`}
                    className="text-sm font-bold text-[#3B1D6E] hover:underline"
                  >
                    View formula details
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-4 rounded-2xl border border-[#E6E1F2] bg-[#FBF7EC] p-4">
            <p>Try a broader search term, such as EOQ, forecasting or productivity.</p>
          </div>
        )}
      </Card>

      <Card title="How to use this hub" tone="gold">
        <BulletList
          items={[
            "Select a calculator from the dropdown or search tiles.",
            "Choose the variable you want to solve for.",
            "Enter the remaining known values.",
            "Use the result in your exam answer, but always explain what the number means.",
            "For theory context, open the formula detail page.",
          ]}
        />
      </Card>
    </div>
  );
}
