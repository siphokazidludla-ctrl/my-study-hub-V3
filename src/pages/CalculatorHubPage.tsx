import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageHeading, Card, Input, Badge, BulletList } from "../components/ui";
import { useModule } from "./helpers";

type Variable = {
  key: string;
  label: string;
  unit?: string;
};

type CalculatorFormula = {
  id: string;
  name: string;
  category: string;
  formula: string;
  description: string;
  variables: Variable[];
};

const CALCULATORS: CalculatorFormula[] = [
  {
    id: "productivity",
    name: "Productivity",
    category: "Productivity",
    formula: "Productivity = Output / Input",
    description: "Measures how efficiently inputs are converted into outputs.",
    variables: [
      { key: "productivity", label: "Productivity" },
      { key: "output", label: "Output" },
      { key: "input", label: "Input" },
    ],
  },
  {
    id: "multifactor-productivity",
    name: "Multifactor Productivity",
    category: "Productivity",
    formula: "MFP = Output / (Labour + Material + Overhead)",
    description: "Measures output against multiple input costs.",
    variables: [
      { key: "mfp", label: "Multifactor Productivity" },
      { key: "output", label: "Output" },
      { key: "labour", label: "Labour Cost" },
      { key: "material", label: "Material Cost" },
      { key: "overhead", label: "Overhead Cost" },
    ],
  },
  {
    id: "utilisation",
    name: "Capacity Utilisation",
    category: "Capacity",
    formula: "Utilisation = Actual Output / Design Capacity × 100",
    description: "Shows how much of design capacity is being used.",
    variables: [
      { key: "utilisation", label: "Utilisation (%)" },
      { key: "actualOutput", label: "Actual Output" },
      { key: "designCapacity", label: "Design Capacity" },
    ],
  },
  {
    id: "efficiency",
    name: "Efficiency",
    category: "Capacity",
    formula: "Efficiency = Actual Output / Effective Capacity × 100",
    description: "Shows performance against realistic effective capacity.",
    variables: [
      { key: "efficiency", label: "Efficiency (%)" },
      { key: "actualOutput", label: "Actual Output" },
      { key: "effectiveCapacity", label: "Effective Capacity" },
    ],
  },
  {
    id: "eoq",
    name: "Economic Order Quantity",
    category: "Inventory",
    formula: "EOQ = √((2DS) / H)",
    description: "Calculates the optimal order quantity that balances ordering and holding costs.",
    variables: [
      { key: "eoq", label: "EOQ" },
      { key: "demand", label: "Annual Demand (D)" },
      { key: "orderingCost", label: "Ordering Cost (S)" },
      { key: "holdingCost", label: "Holding Cost (H)" },
    ],
  },
  {
    id: "rop",
    name: "Reorder Point",
    category: "Inventory",
    formula: "ROP = Demand During Lead Time + Safety Stock",
    description: "Shows when a new order should be placed.",
    variables: [
      { key: "rop", label: "Reorder Point" },
      { key: "demandLeadTime", label: "Demand During Lead Time" },
      { key: "safetyStock", label: "Safety Stock" },
    ],
  },
  {
    id: "inventory-turnover",
    name: "Inventory Turnover",
    category: "Inventory",
    formula: "Inventory Turnover = Cost of Goods Sold / Average Inventory",
    description: "Shows how many times inventory is sold or used during a period.",
    variables: [
      { key: "turnover", label: "Inventory Turnover" },
      { key: "cogs", label: "Cost of Goods Sold" },
      { key: "averageInventory", label: "Average Inventory" },
    ],
  },
  {
    id: "break-even",
    name: "Break-even Quantity",
    category: "Decision Analysis",
    formula: "Break-even Quantity = Fixed Cost / (Price - Variable Cost)",
    description: "Calculates how many units must be sold to cover costs.",
    variables: [
      { key: "breakEven", label: "Break-even Quantity" },
      { key: "fixedCost", label: "Fixed Cost" },
      { key: "price", label: "Selling Price per Unit" },
      { key: "variableCost", label: "Variable Cost per Unit" },
    ],
  },
  {
    id: "forecast-error",
    name: "Forecast Error",
    category: "Forecasting",
    formula: "Forecast Error = Actual Demand - Forecast Demand",
    description: "Shows the difference between what happened and what was forecast.",
    variables: [
      { key: "error", label: "Forecast Error" },
      { key: "actual", label: "Actual Demand" },
      { key: "forecast", label: "Forecast Demand" },
    ],
  },
  {
    id: "mad",
    name: "Mean Absolute Deviation",
    category: "Forecasting",
    formula: "MAD = Sum of Absolute Errors / Number of Periods",
    description: "Measures average forecast error without considering direction.",
    variables: [
      { key: "mad", label: "MAD" },
      { key: "sumAbsoluteErrors", label: "Sum of Absolute Errors" },
      { key: "periods", label: "Number of Periods" },
    ],
  },
  {
    id: "mse",
    name: "Mean Squared Error",
    category: "Forecasting",
    formula: "MSE = Sum of Squared Errors / Number of Periods",
    description: "Penalises larger forecast errors more heavily.",
    variables: [
      { key: "mse", label: "MSE" },
      { key: "sumSquaredErrors", label: "Sum of Squared Errors" },
      { key: "periods", label: "Number of Periods" },
    ],
  },
  {
    id: "mape",
    name: "Mean Absolute Percentage Error",
    category: "Forecasting",
    formula: "MAPE = Sum of Absolute Percentage Errors / Number of Periods",
    description: "Shows forecast error as a percentage.",
    variables: [
      { key: "mape", label: "MAPE (%)" },
      { key: "sumAbsolutePercentageErrors", label: "Sum of Absolute Percentage Errors" },
      { key: "periods", label: "Number of Periods" },
    ],
  },
  {
    id: "moving-average",
    name: "Moving Average",
    category: "Forecasting",
    formula: "Moving Average = Sum of Demand Values / Number of Periods",
    description: "Forecasts using the average of recent demand values.",
    variables: [
      { key: "movingAverage", label: "Moving Average" },
      { key: "sumDemand", label: "Sum of Demand Values" },
      { key: "periods", label: "Number of Periods" },
    ],
  },
  {
    id: "weighted-moving-average",
    name: "Weighted Moving Average",
    category: "Forecasting",
    formula: "WMA = Sum(Demand × Weight) / Sum of Weights",
    description: "Forecasts demand using weights to give some periods more importance.",
    variables: [
      { key: "wma", label: "Weighted Moving Average" },
      { key: "weightedDemand", label: "Sum of Demand × Weight" },
      { key: "sumWeights", label: "Sum of Weights" },
    ],
  },
  {
    id: "exponential-smoothing",
    name: "Exponential Smoothing",
    category: "Forecasting",
    formula: "New Forecast = Old Forecast + α(Actual Demand - Old Forecast)",
    description: "Updates a forecast using the previous forecast and the latest actual demand.",
    variables: [
      { key: "newForecast", label: "New Forecast" },
      { key: "oldForecast", label: "Old Forecast" },
      { key: "alpha", label: "Alpha (α)" },
      { key: "actualDemand", label: "Actual Demand" },
    ],
  },
];

function calculate(formulaId: string, solveFor: string, values: Record<string, number>) {
  const v = values;

  switch (formulaId) {
    case "productivity":
      if (solveFor === "productivity") return v.output / v.input;
      if (solveFor === "output") return v.productivity * v.input;
      if (solveFor === "input") return v.output / v.productivity;
      break;

    case "multifactor-productivity": {
      const totalInput = v.labour + v.material + v.overhead;
      if (solveFor === "mfp") return v.output / totalInput;
      if (solveFor === "output") return v.mfp * totalInput;
      break;
    }

    case "utilisation":
      if (solveFor === "utilisation") return (v.actualOutput / v.designCapacity) * 100;
      if (solveFor === "actualOutput") return (v.utilisation / 100) * v.designCapacity;
      if (solveFor === "designCapacity") return v.actualOutput / (v.utilisation / 100);
      break;

    case "efficiency":
      if (solveFor === "efficiency") return (v.actualOutput / v.effectiveCapacity) * 100;
      if (solveFor === "actualOutput") return (v.efficiency / 100) * v.effectiveCapacity;
      if (solveFor === "effectiveCapacity") return v.actualOutput / (v.efficiency / 100);
      break;

    case "eoq":
      if (solveFor === "eoq") return Math.sqrt((2 * v.demand * v.orderingCost) / v.holdingCost);
      if (solveFor === "demand") return (v.eoq ** 2 * v.holdingCost) / (2 * v.orderingCost);
      if (solveFor === "orderingCost") return (v.eoq ** 2 * v.holdingCost) / (2 * v.demand);
      if (solveFor === "holdingCost") return (2 * v.demand * v.orderingCost) / (v.eoq ** 2);
      break;

    case "rop":
      if (solveFor === "rop") return v.demandLeadTime + v.safetyStock;
      if (solveFor === "demandLeadTime") return v.rop - v.safetyStock;
      if (solveFor === "safetyStock") return v.rop - v.demandLeadTime;
      break;

    case "inventory-turnover":
      if (solveFor === "turnover") return v.cogs / v.averageInventory;
      if (solveFor === "cogs") return v.turnover * v.averageInventory;
      if (solveFor === "averageInventory") return v.cogs / v.turnover;
      break;

    case "break-even":
      if (solveFor === "breakEven") return v.fixedCost / (v.price - v.variableCost);
      if (solveFor === "fixedCost") return v.breakEven * (v.price - v.variableCost);
      if (solveFor === "price") return v.fixedCost / v.breakEven + v.variableCost;
      if (solveFor === "variableCost") return v.price - v.fixedCost / v.breakEven;
      break;

    case "forecast-error":
      if (solveFor === "error") return v.actual - v.forecast;
      if (solveFor === "actual") return v.error + v.forecast;
      if (solveFor === "forecast") return v.actual - v.error;
      break;

    case "mad":
      if (solveFor === "mad") return v.sumAbsoluteErrors / v.periods;
      if (solveFor === "sumAbsoluteErrors") return v.mad * v.periods;
      if (solveFor === "periods") return v.sumAbsoluteErrors / v.mad;
      break;

    case "mse":
      if (solveFor === "mse") return v.sumSquaredErrors / v.periods;
      if (solveFor === "sumSquaredErrors") return v.mse * v.periods;
      if (solveFor === "periods") return v.sumSquaredErrors / v.mse;
      break;

    case "mape":
      if (solveFor === "mape") return v.sumAbsolutePercentageErrors / v.periods;
      if (solveFor === "sumAbsolutePercentageErrors") return v.mape * v.periods;
      if (solveFor === "periods") return v.sumAbsolutePercentageErrors / v.mape;
      break;

    case "moving-average":
      if (solveFor === "movingAverage") return v.sumDemand / v.periods;
      if (solveFor === "sumDemand") return v.movingAverage * v.periods;
      if (solveFor === "periods") return v.sumDemand / v.movingAverage;
      break;

    case "weighted-moving-average":
      if (solveFor === "wma") return v.weightedDemand / v.sumWeights;
      if (solveFor === "weightedDemand") return v.wma * v.sumWeights;
      if (solveFor === "sumWeights") return v.weightedDemand / v.wma;
      break;

    case "exponential-smoothing":
      if (solveFor === "newForecast") {
        return v.oldForecast + v.alpha * (v.actualDemand - v.oldForecast);
      }
      if (solveFor === "actualDemand") {
        return ((v.newForecast - v.oldForecast) / v.alpha) + v.oldForecast;
      }
      if (solveFor === "alpha") {
        return (v.newForecast - v.oldForecast) / (v.actualDemand - v.oldForecast);
      }
      if (solveFor === "oldForecast") {
        return (v.newForecast - v.alpha * v.actualDemand) / (1 - v.alpha);
      }
      break;
  }

  return NaN;
}

export default function CalculatorHubPage() {
  const { id, module } = useModule();
  const { formulaId } = useParams();
  const [query, setQuery] = useState("");

  const selectedFormula =
    CALCULATORS.find((f) => f.id === formulaId) ?? CALCULATORS[0];

  const [currentId, setCurrentId] = useState(selectedFormula.id);
  const currentFormula = CALCULATORS.find((f) => f.id === currentId) ?? CALCULATORS[0];

  const [solveFor, setSolveFor] = useState(currentFormula.variables[0].key);
  const [values, setValues] = useState<Record<string, number>>({});

  const filtered = useMemo(() => {
    return CALCULATORS.filter((formula) =>
      [formula.name, formula.category, formula.formula, formula.description]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  function updateFormula(nextId: string) {
    const next = CALCULATORS.find((f) => f.id === nextId) ?? CALCULATORS[0];
    setCurrentId(next.id);
    setSolveFor(next.variables[0].key);
    setValues({});
  }

  function setValue(key: string, value: string) {
    setValues((prev) => ({
      ...prev,
      [key]: Number(value),
    }));
  }

  const requiredVariables = currentFormula.variables.filter((v) => v.key !== solveFor);
  const canCalculate = requiredVariables.every(
    (v) => values[v.key] !== undefined && !Number.isNaN(values[v.key])
  );

  const result = canCalculate ? calculate(currentFormula.id, solveFor, values) : NaN;
  const solveLabel =
    currentFormula.variables.find((v) => v.key === solveFor)?.label ?? solveFor;

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
              onChange={(e) => updateFormula(e.target.value)}
              className="w-full rounded-2xl border border-[#D9D2EC] bg-white px-3 py-2 text-sm"
            >
              {CALCULATORS.map((formula) => (
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
              onChange={(e) => setSolveFor(e.target.value)}
              className="w-full rounded-2xl border border-[#D9D2EC] bg-white px-3 py-2 text-sm"
            >
              {currentFormula.variables.map((variable) => (
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
                onChange={(e) => setValue(variable.key, e.target.value)}
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
            <button
              key={formula.id}
              onClick={() => updateFormula(formula.id)}
              className="block rounded-lg border border-slate-200 p-4 text-left hover:border-[#3B1D6E] hover:bg-slate-50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {formula.category}
                  </p>
                  <h3 className="font-semibold text-slate-900">{formula.name}</h3>
                </div>
                <Badge>Formula</Badge>
              </div>

              <p className="mt-2 font-mono text-sm text-slate-600">
                {formula.formula}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {formula.description}
              </p>

              <div className="mt-3">
                <Link
                  to={`/${id}/formulas/${formula.id}`}
                  className="text-sm font-bold text-[#3B1D6E] hover:underline"
                >
                  View formula details
                </Link>
              </div>
            </button>
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