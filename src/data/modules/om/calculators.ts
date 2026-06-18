import { getOMFormula } from './formulas';

export type OMCalculatorVariable = {
  key: string;
  label: string;
  unit?: string;
  canSolve?: boolean;
};

export type OMCalculatorFormula = {
  id: string;
  name: string;
  category: string;
  formula: string;
  description: string;
  variables: OMCalculatorVariable[];
  detailFormulaId?: string;
  calculate: (solveFor: string, values: Record<string, number>) => number;
};

type CalculatorOptions = {
  name?: string;
  category?: string;
  formula?: string;
  description?: string;
};

function fromOMFormula(
  formulaId: string,
  variables: OMCalculatorVariable[],
  calculate: OMCalculatorFormula['calculate'],
  options: CalculatorOptions = {}
): OMCalculatorFormula {
  const formula = getOMFormula(formulaId);

  if (!formula) {
    throw new Error(`Missing OM formula metadata for calculator: ${formulaId}`);
  }

  return {
    id: formulaId,
    name: options.name ?? formula.name,
    category: options.category ?? formula.category,
    formula: options.formula ?? formula.formula,
    description: options.description ?? formula.plainMeaning,
    variables,
    detailFormulaId: formulaId,
    calculate,
  };
}

function supplementalCalculator(
  calculator: OMCalculatorFormula
): OMCalculatorFormula {
  return calculator;
}

export const OM_CALCULATORS: OMCalculatorFormula[] = [
  fromOMFormula(
    'productivity',
    [
      { key: 'productivity', label: 'Productivity' },
      { key: 'output', label: 'Output' },
      { key: 'input', label: 'Input' },
    ],
    (solveFor, v) => {
      if (solveFor === 'productivity') return v.output / v.input;
      if (solveFor === 'output') return v.productivity * v.input;
      if (solveFor === 'input') return v.output / v.productivity;
      return NaN;
    }
  ),
  supplementalCalculator({
    id: 'multifactor-productivity',
    name: 'Multifactor Productivity',
    category: 'Productivity',
    formula: 'MFP = Output / (Labour + Material + Overhead)',
    description: 'Measures output against multiple input costs.',
    variables: [
      { key: 'mfp', label: 'Multifactor Productivity' },
      { key: 'output', label: 'Output' },
      { key: 'labour', label: 'Labour Cost', canSolve: false },
      { key: 'material', label: 'Material Cost', canSolve: false },
      { key: 'overhead', label: 'Overhead Cost', canSolve: false },
    ],
    calculate: (solveFor, v) => {
      const totalInput = v.labour + v.material + v.overhead;
      if (solveFor === 'mfp') return v.output / totalInput;
      if (solveFor === 'output') return v.mfp * totalInput;
      return NaN;
    },
  }),
  fromOMFormula(
    'utilisation',
    [
      { key: 'utilisation', label: 'Utilisation (%)' },
      { key: 'actualOutput', label: 'Actual Output' },
      { key: 'designCapacity', label: 'Design Capacity' },
    ],
    (solveFor, v) => {
      if (solveFor === 'utilisation') return (v.actualOutput / v.designCapacity) * 100;
      if (solveFor === 'actualOutput') return (v.utilisation / 100) * v.designCapacity;
      if (solveFor === 'designCapacity') return v.actualOutput / (v.utilisation / 100);
      return NaN;
    }
  ),
  fromOMFormula(
    'efficiency',
    [
      { key: 'efficiency', label: 'Efficiency (%)' },
      { key: 'actualOutput', label: 'Actual Output' },
      { key: 'effectiveCapacity', label: 'Effective Capacity' },
    ],
    (solveFor, v) => {
      if (solveFor === 'efficiency') return (v.actualOutput / v.effectiveCapacity) * 100;
      if (solveFor === 'actualOutput') return (v.efficiency / 100) * v.effectiveCapacity;
      if (solveFor === 'effectiveCapacity') return v.actualOutput / (v.efficiency / 100);
      return NaN;
    }
  ),
  fromOMFormula(
    'eoq',
    [
      { key: 'eoq', label: 'EOQ' },
      { key: 'demand', label: 'Annual Demand (D)' },
      { key: 'orderingCost', label: 'Ordering Cost (S)' },
      { key: 'holdingCost', label: 'Holding Cost (H)' },
    ],
    (solveFor, v) => {
      if (solveFor === 'eoq') return Math.sqrt((2 * v.demand * v.orderingCost) / v.holdingCost);
      if (solveFor === 'demand') return (v.eoq ** 2 * v.holdingCost) / (2 * v.orderingCost);
      if (solveFor === 'orderingCost') return (v.eoq ** 2 * v.holdingCost) / (2 * v.demand);
      if (solveFor === 'holdingCost') return (2 * v.demand * v.orderingCost) / (v.eoq ** 2);
      return NaN;
    }
  ),
  fromOMFormula(
    'rop',
    [
      { key: 'rop', label: 'Reorder Point' },
      { key: 'dailyDemand', label: 'Daily Demand' },
      { key: 'leadTime', label: 'Lead Time' },
      { key: 'safetyStock', label: 'Safety Stock' },
    ],
    (solveFor, v) => {
      if (solveFor === 'rop') return v.dailyDemand * v.leadTime + v.safetyStock;
      if (solveFor === 'dailyDemand') return (v.rop - v.safetyStock) / v.leadTime;
      if (solveFor === 'leadTime') return (v.rop - v.safetyStock) / v.dailyDemand;
      if (solveFor === 'safetyStock') return v.rop - v.dailyDemand * v.leadTime;
      return NaN;
    }
  ),
  supplementalCalculator({
    id: 'inventory-turnover',
    name: 'Inventory Turnover',
    category: 'Inventory Management',
    formula: 'Inventory Turnover = Cost of Goods Sold / Average Inventory',
    description: 'Shows how many times inventory is sold or used during a period.',
    variables: [
      { key: 'turnover', label: 'Inventory Turnover' },
      { key: 'cogs', label: 'Cost of Goods Sold' },
      { key: 'averageInventory', label: 'Average Inventory' },
    ],
    calculate: (solveFor, v) => {
      if (solveFor === 'turnover') return v.cogs / v.averageInventory;
      if (solveFor === 'cogs') return v.turnover * v.averageInventory;
      if (solveFor === 'averageInventory') return v.cogs / v.turnover;
      return NaN;
    },
  }),
  supplementalCalculator({
    id: 'break-even',
    name: 'Break-even Quantity',
    category: 'Decision Analysis',
    formula: 'Break-even Quantity = Fixed Cost / (Price - Variable Cost)',
    description: 'Calculates how many units must be sold to cover costs.',
    variables: [
      { key: 'breakEven', label: 'Break-even Quantity' },
      { key: 'fixedCost', label: 'Fixed Cost' },
      { key: 'price', label: 'Selling Price per Unit' },
      { key: 'variableCost', label: 'Variable Cost per Unit' },
    ],
    calculate: (solveFor, v) => {
      if (solveFor === 'breakEven') return v.fixedCost / (v.price - v.variableCost);
      if (solveFor === 'fixedCost') return v.breakEven * (v.price - v.variableCost);
      if (solveFor === 'price') return v.fixedCost / v.breakEven + v.variableCost;
      if (solveFor === 'variableCost') return v.price - v.fixedCost / v.breakEven;
      return NaN;
    },
  }),
  supplementalCalculator({
    id: 'forecast-error',
    name: 'Forecast Error',
    category: 'Forecasting',
    formula: 'Forecast Error = Actual Demand - Forecast Demand',
    description: 'Shows the difference between what happened and what was forecast.',
    variables: [
      { key: 'error', label: 'Forecast Error' },
      { key: 'actual', label: 'Actual Demand' },
      { key: 'forecast', label: 'Forecast Demand' },
    ],
    calculate: (solveFor, v) => {
      if (solveFor === 'error') return v.actual - v.forecast;
      if (solveFor === 'actual') return v.error + v.forecast;
      if (solveFor === 'forecast') return v.actual - v.error;
      return NaN;
    },
  }),
  fromOMFormula(
    'mad',
    [
      { key: 'mad', label: 'MAD' },
      { key: 'sumAbsoluteErrors', label: 'Sum of Absolute Errors' },
      { key: 'periods', label: 'Number of Periods' },
    ],
    (solveFor, v) => {
      if (solveFor === 'mad') return v.sumAbsoluteErrors / v.periods;
      if (solveFor === 'sumAbsoluteErrors') return v.mad * v.periods;
      if (solveFor === 'periods') return v.sumAbsoluteErrors / v.mad;
      return NaN;
    }
  ),
  supplementalCalculator({
    id: 'mse',
    name: 'Mean Squared Error',
    category: 'Forecasting',
    formula: 'MSE = Sum of Squared Errors / Number of Periods',
    description: 'Penalises larger forecast errors more heavily.',
    variables: [
      { key: 'mse', label: 'MSE' },
      { key: 'sumSquaredErrors', label: 'Sum of Squared Errors' },
      { key: 'periods', label: 'Number of Periods' },
    ],
    calculate: (solveFor, v) => {
      if (solveFor === 'mse') return v.sumSquaredErrors / v.periods;
      if (solveFor === 'sumSquaredErrors') return v.mse * v.periods;
      if (solveFor === 'periods') return v.sumSquaredErrors / v.mse;
      return NaN;
    },
  }),
  supplementalCalculator({
    id: 'mape',
    name: 'Mean Absolute Percentage Error',
    category: 'Forecasting',
    formula: 'MAPE = Sum of Absolute Percentage Errors / Number of Periods',
    description: 'Shows forecast error as a percentage.',
    variables: [
      { key: 'mape', label: 'MAPE (%)' },
      { key: 'sumAbsolutePercentageErrors', label: 'Sum of Absolute Percentage Errors' },
      { key: 'periods', label: 'Number of Periods' },
    ],
    calculate: (solveFor, v) => {
      if (solveFor === 'mape') return v.sumAbsolutePercentageErrors / v.periods;
      if (solveFor === 'sumAbsolutePercentageErrors') return v.mape * v.periods;
      if (solveFor === 'periods') return v.sumAbsolutePercentageErrors / v.mape;
      return NaN;
    },
  }),
  fromOMFormula(
    'simple-moving-average',
    [
      { key: 'movingAverage', label: 'Simple Moving Average' },
      { key: 'sumDemand', label: 'Sum of Demand Values' },
      { key: 'periods', label: 'Number of Periods' },
    ],
    (solveFor, v) => {
      if (solveFor === 'movingAverage') return v.sumDemand / v.periods;
      if (solveFor === 'sumDemand') return v.movingAverage * v.periods;
      if (solveFor === 'periods') return v.sumDemand / v.movingAverage;
      return NaN;
    }
  ),
  fromOMFormula(
    'weighted-moving-average',
    [
      { key: 'wma', label: 'Weighted Moving Average' },
      { key: 'weightedDemand', label: 'Sum of Demand x Weight' },
      { key: 'sumWeights', label: 'Sum of Weights' },
    ],
    (solveFor, v) => {
      if (solveFor === 'wma') return v.weightedDemand / v.sumWeights;
      if (solveFor === 'weightedDemand') return v.wma * v.sumWeights;
      if (solveFor === 'sumWeights') return v.weightedDemand / v.wma;
      return NaN;
    }
  ),
  fromOMFormula(
    'exponential-smoothing',
    [
      { key: 'newForecast', label: 'New Forecast' },
      { key: 'oldForecast', label: 'Old Forecast' },
      { key: 'alpha', label: 'Alpha' },
      { key: 'actualDemand', label: 'Actual Demand' },
    ],
    (solveFor, v) => {
      if (solveFor === 'newForecast') return v.oldForecast + v.alpha * (v.actualDemand - v.oldForecast);
      if (solveFor === 'actualDemand') return (v.newForecast - v.oldForecast) / v.alpha + v.oldForecast;
      if (solveFor === 'alpha') return (v.newForecast - v.oldForecast) / (v.actualDemand - v.oldForecast);
      if (solveFor === 'oldForecast') return (v.newForecast - v.alpha * v.actualDemand) / (1 - v.alpha);
      return NaN;
    }
  ),
  fromOMFormula(
    'littles-law-queue',
    [
      { key: 'queueLength', label: 'Average Queue Length (Lq)' },
      { key: 'arrivalRate', label: 'Arrival Rate' },
      { key: 'waitingTime', label: 'Average Waiting Time in Queue' },
    ],
    (solveFor, v) => {
      if (solveFor === 'queueLength') return v.arrivalRate * v.waitingTime;
      if (solveFor === 'arrivalRate') return v.queueLength / v.waitingTime;
      if (solveFor === 'waitingTime') return v.queueLength / v.arrivalRate;
      return NaN;
    }
  ),
  fromOMFormula(
    'total-inventory-cost',
    [
      { key: 'totalCost', label: 'Total Annual Inventory Cost' },
      { key: 'demand', label: 'Annual Demand (D)', canSolve: false },
      { key: 'orderQuantity', label: 'Order Quantity (Q)', canSolve: false },
      { key: 'orderingCost', label: 'Ordering Cost (S)', canSolve: false },
      { key: 'holdingCost', label: 'Holding Cost (H)', canSolve: false },
    ],
    (solveFor, v) => {
      if (solveFor === 'totalCost') {
        return (v.demand / v.orderQuantity) * v.orderingCost + (v.orderQuantity / 2) * v.holdingCost;
      }
      return NaN;
    }
  ),
  fromOMFormula(
    'annual-holding-cost',
    [
      { key: 'annualHoldingCost', label: 'Annual Holding Cost' },
      { key: 'orderQuantity', label: 'Order Quantity (Q)' },
      { key: 'holdingCost', label: 'Holding Cost (H)' },
    ],
    (solveFor, v) => {
      if (solveFor === 'annualHoldingCost') return (v.orderQuantity / 2) * v.holdingCost;
      if (solveFor === 'orderQuantity') return (2 * v.annualHoldingCost) / v.holdingCost;
      if (solveFor === 'holdingCost') return (2 * v.annualHoldingCost) / v.orderQuantity;
      return NaN;
    }
  ),
  fromOMFormula(
    'annual-ordering-cost',
    [
      { key: 'annualOrderingCost', label: 'Annual Ordering Cost' },
      { key: 'demand', label: 'Annual Demand (D)' },
      { key: 'orderQuantity', label: 'Order Quantity (Q)' },
      { key: 'orderingCost', label: 'Ordering Cost (S)' },
    ],
    (solveFor, v) => {
      if (solveFor === 'annualOrderingCost') return (v.demand / v.orderQuantity) * v.orderingCost;
      if (solveFor === 'demand') return (v.annualOrderingCost * v.orderQuantity) / v.orderingCost;
      if (solveFor === 'orderQuantity') return (v.demand * v.orderingCost) / v.annualOrderingCost;
      if (solveFor === 'orderingCost') return (v.annualOrderingCost * v.orderQuantity) / v.demand;
      return NaN;
    }
  ),
];

const OM_CALCULATOR_ALIASES: Record<string, string> = {
  'moving-average': 'simple-moving-average',
  'littles-law': 'littles-law-queue',
  "little's-law": 'littles-law-queue',
  'multi-factor-productivity': 'multifactor-productivity',
};

export function resolveOMCalculatorId(id: string | undefined): string | undefined {
  if (!id) return undefined;
  return OM_CALCULATOR_ALIASES[id] ?? id;
}

export function getOMCalculator(id: string | undefined): OMCalculatorFormula | undefined {
  const resolvedId = resolveOMCalculatorId(id);
  return OM_CALCULATORS.find((calculator) => calculator.id === resolvedId);
}

export function hasOMCalculator(id: string | undefined): boolean {
  return Boolean(getOMCalculator(id));
}
