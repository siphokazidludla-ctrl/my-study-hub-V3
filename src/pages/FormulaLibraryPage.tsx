import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeading, Input, Badge, Card, BulletList } from "../components/ui";
import { useModule } from "./helpers";
import { FORMULAS } from "../data/formulas";
import { OM_UNITS } from "../data/omUnits";
import { OM_FORMULAS } from "../data/modules/om";

export default function FormulaLibraryPage() {
  const { id, module } = useModule();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const omFormulas = id === "om" ? OM_FORMULAS : FORMULAS;

  const filtered = useMemo(() => {
    return omFormulas.filter((formula) => {
      const description =
        "description" in formula ? formula.description : formula.plainMeaning;

      const searchMatch = [
        formula.name,
        formula.formula,
        description,
        formula.category,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());

      const categoryMatch = category === "All" || formula.category === category;

      return searchMatch && categoryMatch;
    });
  }, [query, category, omFormulas]);

  const uniqueCategories = useMemo(() => {
    const cats = new Set(omFormulas.map((f) => f.category));
    return ["All", ...Array.from(cats)];
  }, [omFormulas]);

  if (id !== "om") {
    return (
      <Card title="Formula library is only available for OM" tone="gold">
        <p>
          The interactive formula library is currently part of Operations Management.
          Use the {module.code} unit, theory, case and exam tools for this module.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <PageHeading
        kicker={`${module.code} Formula Library`}
        title="Formula cards, units and calculator links"
        sub="Find each formula, explore the linked unit and concept, and jump straight to a worked example or calculator."
      />

      <Card title="Search and filter formulas" tone="white">
        <div className="space-y-4">
          <Input
            value={query}
            onChange={setQuery}
            placeholder="Search by formula name, equation or concept..."
          />

          <div className="flex flex-wrap gap-2">
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-[#3B1D6E] text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((formula) => {
          const unit = OM_UNITS.find((u) => u.id === formula.unitId);
          const description =
            "description" in formula ? formula.description : formula.plainMeaning;

          return (
            <Card key={formula.id} tone="white">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {unit && (
                      <p className="text-xs font-medium text-slate-500">
                        Unit {unit.number}
                      </p>
                    )}
                    <h3 className="font-semibold text-slate-900">
                      {formula.name}
                    </h3>
                  </div>
                  <Badge>{formula.category}</Badge>
                </div>

                <p className="text-sm text-slate-600">{description}</p>

                <div className="rounded-lg bg-slate-50 p-3 font-mono text-sm">
                  {formula.formula}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link
                    to={`/${id}/formulas/${formula.id}`}
                    className="rounded-full bg-[#3B1D6E] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#2d1654]"
                  >
                    View formula
                  </Link>

                  <Link
                    to={`/${id}/calculators/${formula.id}`}
                    className="rounded-full border border-[#3B1D6E] px-4 py-1.5 text-sm font-medium text-[#3B1D6E] hover:bg-[#3B1D6E] hover:text-white"
                  >
                    Open calculator
                  </Link>

                  <Link
                    to={`/${id}/applied-calculations/${formula.id}`}
                    className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
                  >
                    See worked example
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <Card title="No results" tone="gold">
          <p>No formulas matched that query. Try a different keyword or clear the search.</p>
        </Card>
      )}

      <Card title="How to use the formula library" tone="gold">
        <BulletList
          items={[
            "Search by formula name, equation, or related concept.",
            "Filter by category to focus on specific topics.",
            "Click View formula to see variables, steps, and exam tips.",
            "Click Open calculator for interactive calculations.",
            "Click See worked example for step-by-step practice.",
          ]}
        />
      </Card>
    </div>
  );
}
