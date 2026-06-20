import { useMemo, useState } from 'react';
import { Card, PageHeading, Badge, BulletList, Input, LinkCard, Select } from '../components/ui';
import { useModule } from './helpers';
import { unitsFor, THEORIES, CASES } from '../data';

type FormulaInput = {
  key: string;
  label: string;
  placeholder: string;
  suffix?: string;
};

type Formula = {
  id: string;
  name: string;
  category: string;
  formula: string;
  explanation: string;
  application: string;
  steps: string[];
  example: string;
  examTip: string;
  relatedUnitIds: string[];
  relatedTheoryIds: string[];
  relatedCaseIds: string[];
  inputs: FormulaInput[];
  useWhen: string[];
  compute: (values: Record<string, number>) => string;
};

const FORMULAS: Formula[] = [
  {
    id: 'productivity',
    name: 'Productivity',
    category: 'Productivity',
    formula: 'Output ÷ Input',
    explanation: 'Measures how efficiently an operation converts inputs into outputs.',
    application: 'Use for labour, machine or multi-factor productivity comparisons across departments.',
    steps: ['Identify the output quantity produced.', 'Identify the input quantity used for the same period.', 'Divide output by the chosen input measure.'],
    example: 'A factory produces 250 units using 50 labour hours, giving 5 units per labour hour.',
    examTip: 'State the formula, define output and input clearly, then substitute values and keep the units consistent.',
    relatedUnitIds: ['om-1'],
    relatedTheoryIds: ['om-productivity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'output', label: 'Output produced', placeholder: 'e.g. 250 units' },
      { key: 'input', label: 'Input used', placeholder: 'e.g. 50 labour hours', suffix: 'hours' },
    ],
    useWhen: ['Compare production efficiency', 'Measure output against labour or machine resources'],
    compute: (values) => {
      const result = values.output / values.input;
      return Number.isFinite(result) ? `${result.toFixed(2)} units per input` : 'Enter valid values';
    },
  },
  {
    id: 'labour-productivity',
    name: 'Labour Productivity',
    category: 'Productivity',
    formula: 'Units produced ÷ Labour-hours used',
    explanation: 'A single-factor productivity measure using labour as the input.',
    application: 'Use when comparing employee or shift performance.',
    steps: ['Measure total units produced.', 'Measure total labour hours used.', 'Divide units by labour hours.'],
    example: '300 calls handled over 8 hours gives 37.5 calls per hour.',
    examTip: 'Always label the units, e.g. units per labour hour, and mention the period.',
    relatedUnitIds: ['om-1'],
    relatedTheoryIds: ['om-productivity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'units', label: 'Units produced', placeholder: 'e.g. 300 calls' },
      { key: 'labourHours', label: 'Labour hours', placeholder: 'e.g. 8' },
    ],
    useWhen: ['Assess labour productivity', 'Compare workers or teams'],
    compute: (values) => {
      const result = values.units / values.labourHours;
      return Number.isFinite(result) ? `${result.toFixed(2)} units per hour` : 'Enter valid values';
    },
  },
  {
    id: 'multifactor-productivity',
    name: 'Multifactor Productivity',
    category: 'Productivity',
    formula: 'Output ÷ (Labour + Material + Energy + Capital + Miscellaneous)',
    explanation: 'Measures productivity using multiple inputs rather than a single factor.',
    application: 'Use when output depends on more than one input and one-factor productivity is misleading.',
    steps: ['Calculate the monetary value of output.', 'Total all input costs in a common unit.', 'Divide output by total input cost.'],
    example: 'Output valued at R100 000 divided by total input cost of R40 000 gives 2.5.',
    examTip: 'Explain that inputs must be in the same currency or unit before dividing.',
    relatedUnitIds: ['om-1'],
    relatedTheoryIds: ['om-productivity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'outputValue', label: 'Output value', placeholder: 'e.g. 100000' },
      { key: 'inputValue', label: 'Total input cost', placeholder: 'e.g. 40000' },
    ],
    useWhen: ['Assess overall resource productivity', 'Compare systems with many inputs'],
    compute: (values) => {
      const result = values.outputValue / values.inputValue;
      return Number.isFinite(result) ? `${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'productivity-growth',
    name: 'Productivity Growth',
    category: 'Productivity',
    formula: '(% change = (New − Old) ÷ Old) × 100',
    explanation: 'Calculates the percentage change in productivity over time.',
    application: 'Use to show improvement or deterioration in productivity.',
    steps: ['Identify old productivity and new productivity.', 'Subtract old from new.', 'Divide by old and multiply by 100.'],
    example: 'If productivity rises from 6 to 7.5, the growth is 25%.',
    examTip: 'Show both the formula and the substitution with numbers to score method marks.',
    relatedUnitIds: ['om-1'],
    relatedTheoryIds: ['om-productivity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'oldValue', label: 'Old productivity', placeholder: 'e.g. 6' },
      { key: 'newValue', label: 'New productivity', placeholder: 'e.g. 7.5' },
    ],
    useWhen: ['Report productivity improvement', 'Compare before and after process changes'],
    compute: (values) => {
      const result = ((values.newValue - values.oldValue) / values.oldValue) * 100;
      return Number.isFinite(result) ? `${result.toFixed(1)}%` : 'Enter valid values';
    },
  },
  {
    id: 'machine-output-rate',
    name: 'Machine Output Rate',
    category: 'Productivity',
    formula: '60 ÷ (Process time + Load/unload time)',
    explanation: 'Calculates the hourly output rate for a machine cycle.',
    application: 'Use for machine-paced production rate questions.',
    steps: ['Add process time and load/unload time per unit.', 'Divide 60 minutes by the total cycle time.'],
    example: 'If process time is 7 and load/unload time is 3, output = 6 units per hour.',
    examTip: 'Keep time units consistent and state that the result is per hour.',
    relatedUnitIds: ['om-1'],
    relatedTheoryIds: ['om-productivity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'processTime', label: 'Process time per unit (min)', placeholder: 'e.g. 7' },
      { key: 'setupTime', label: 'Load/unload time per unit (min)', placeholder: 'e.g. 3' },
    ],
    useWhen: ['Compare machine cycle times', 'Calculate hourly output rate'],
    compute: (values) => {
      const total = values.processTime + values.setupTime;
      const result = 60 / total;
      return Number.isFinite(result) ? `${result.toFixed(2)} units per hour` : 'Enter valid values';
    },
  },
  {
    id: 'naive-forecast',
    name: 'Naive Forecast',
    category: 'Forecasting',
    formula: 'Forecast for next period = Actual demand in the most recent period',
    explanation: 'Assumes tomorrow will be the same as today.',
    application: 'Use when demand is stable and no other information is available.',
    steps: ['Identify the most recent actual demand.', 'Use that value as the next period forecast.'],
    example: 'If last period demand was 500 units, the next forecast is 500 units.',
    examTip: 'This is the simplest forecast method; mention that it uses only the last actual period.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'lastDemand', label: 'Most recent actual demand', placeholder: 'e.g. 500' },
    ],
    useWhen: ['Create a quick baseline forecast', 'Compare with more advanced methods'],
    compute: (values) => {
      const result = values.lastDemand;
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'moving-average',
    name: 'Simple Moving Average',
    category: 'Forecasting',
    formula: '(Sum of demand in previous n periods) ÷ n',
    explanation: 'Smooths recent demand by averaging the last n observations.',
    application: 'Use for short-term demand with no strong trend or seasonality.',
    steps: ['Add the actual demand values from the previous n periods.', 'Divide by n to get the forecast.'],
    example: 'If the last 3 months were 460, 480 and 500, the 3-period MA is 480.',
    examTip: 'Specify the period length n and be careful to include the correct recent periods.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'sumDemand', label: 'Sum of last n demands', placeholder: 'e.g. 1440' },
      { key: 'n', label: 'Number of periods (n)', placeholder: 'e.g. 3' },
    ],
    useWhen: ['Smooth demand data', 'Generate simple short-term forecasts'],
    compute: (values) => {
      const result = values.sumDemand / values.n;
      return Number.isFinite(result) ? `${result.toFixed(2)} units` : 'Enter valid values';
    },
  },
  {
    id: 'weighted-moving-average',
    name: 'Weighted Moving Average',
    category: 'Forecasting',
    formula: 'Σ(Weight × Demand) ÷ ΣWeights',
    explanation: 'Averages past demand values with greater weight on more recent data.',
    application: 'Use when recent observations should influence the forecast more strongly.',
    steps: ['Multiply each past demand by its weight.', 'Add the weighted values.', 'Divide by the sum of weights.'],
    example: 'If weights are 0.5, 0.3, 0.2 and demands are 500, 480, 460, the forecast is 494.',
    examTip: 'Explain why weights are chosen and verify that the denominator is the sum of weights, not 1.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'weightedTotal', label: 'Weighted demand total', placeholder: 'e.g. 2470' },
      { key: 'weightTotal', label: 'Sum of weights', placeholder: 'e.g. 1.0' },
    ],
    useWhen: ['Emphasise recent demand', 'Refine moving average forecasts'],
    compute: (values) => {
      const result = values.weightedTotal / values.weightTotal;
      return Number.isFinite(result) ? `${result.toFixed(2)} units` : 'Enter valid values';
    },
  },
  {
    id: 'exponential-smoothing',
    name: 'Exponential Smoothing',
    category: 'Forecasting',
    formula: 'Fₜ = Fₜ₋₁ + α(Aₜ₋₁ − Fₜ₋₁)',
    explanation: 'Applies a smoothing constant to adjust the previous forecast toward the latest actual demand.',
    application: 'Use when forecasts should adapt to demand changes while remaining stable.',
    steps: ['Take the previous forecast.', 'Calculate the error between actual and forecast.', 'Multiply the error by α and add to the previous forecast.'],
    example: 'With α=0.3, actual 500 and forecast 480, next forecast = 486.',
    examTip: 'Define α clearly and show the substitution with the previous forecast and actual demand.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'alpha', label: 'Smoothing constant (α)', placeholder: 'e.g. 0.3' },
      { key: 'actual', label: 'Last actual demand', placeholder: 'e.g. 500' },
      { key: 'forecast', label: 'Previous forecast', placeholder: 'e.g. 480' },
    ],
    useWhen: ['Forecast with responsiveness to recent errors', 'Update forecasts period by period'],
    compute: (values) => {
      const result = values.forecast + values.alpha * (values.actual - values.forecast);
      return Number.isFinite(result) ? `${result.toFixed(2)} units` : 'Enter valid values';
    },
  },
  {
    id: 'trend-adjusted-forecast',
    name: 'Trend-adjusted Forecast (FIT)',
    category: 'Forecasting',
    formula: 'FITₜ = Fₜ + Tₜ',
    explanation: 'Adds a smoothed trend estimate to the baseline forecast.',
    application: 'Use when demand shows a systematic upward or downward trend.',
    steps: ['Calculate the smoothed forecast average (Fₜ).', 'Calculate the smoothed trend (Tₜ).', 'Add the trend to the forecast average.'],
    example: 'If the smoothed forecast is 486 and trend is 4, the adjusted forecast is 490.',
    examTip: 'Mention that FIT includes both the level and the trend component.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'forecast', label: 'Smoothed forecast Fₜ', placeholder: 'e.g. 486' },
      { key: 'trend', label: 'Smoothed trend Tₜ', placeholder: 'e.g. 4' },
    ],
    useWhen: ['Forecast trending demand', 'Combine growth with smoothing'],
    compute: (values) => {
      const result = values.forecast + values.trend;
      return Number.isFinite(result) ? `${result.toFixed(2)} units` : 'Enter valid values';
    },
  },
  {
    id: 'trend-projection',
    name: 'Trend Projection / Least-Squares',
    category: 'Forecasting',
    formula: 'ŷ = a + bx, where b = (Σxy − n·x̄·ȳ)/(Σx² − n·x̄²)',
    explanation: 'Fits a straight line to historical data and projects it forward.',
    application: 'Use for long-term forecasting when demand follows a linear trend.',
    steps: ['Calculate the slope b using the least-squares formula.', 'Calculate the intercept a = ȳ − bx̄.', 'Substitute the future period x value.'],
    example: 'If a = 89.16 and b = 10.46 for period 8, forecast for period 9 is 99.62.',
    examTip: 'State the meaning of x and y, and label the predicted value ŷ.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'a', label: 'Intercept a', placeholder: 'e.g. 89.16' },
      { key: 'b', label: 'Slope b', placeholder: 'e.g. 10.46' },
      { key: 'x', label: 'Future period x', placeholder: 'e.g. 9' },
    ],
    useWhen: ['Forecast using linear trend', 'Convert data into an algebraic model'],
    compute: (values) => {
      const result = values.a + values.b * values.x;
      return Number.isFinite(result) ? `${result.toFixed(2)} units` : 'Enter valid values';
    },
  },
  {
    id: 'seasonal-index',
    name: 'Seasonal Index',
    category: 'Forecasting',
    formula: 'Seasonal index = Average demand for that period ÷ Average demand for all periods',
    explanation: 'Measures how a particular period performs relative to the overall average.',
    application: 'Use to seasonalise a trend forecast for months or quarters.',
    steps: ['Calculate the average demand for the period.', 'Calculate the overall average demand.', 'Divide the period average by the overall average.'],
    example: 'If January average demand is 90 and overall average is 94, the index is 0.957.',
    examTip: 'Note that an index above 1 means above-average season, below 1 means below average.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'periodAverage', label: 'Average period demand', placeholder: 'e.g. 90' },
      { key: 'overallAverage', label: 'Average all periods', placeholder: 'e.g. 94' },
    ],
    useWhen: ['Adjust forecasts for seasonality', 'Compare period strength to average'],
    compute: (values) => {
      const result = values.periodAverage / values.overallAverage;
      return Number.isFinite(result) ? `${result.toFixed(3)}` : 'Enter valid values';
    },
  },
  {
    id: 'forecast-error',
    name: 'Forecast Error',
    category: 'Forecasting',
    formula: 'Actual demand − Forecast value',
    explanation: 'Measures the difference between what happened and what was forecast.',
    application: 'Use to calculate MAD, MSE, MAPE and tracking signal.',
    steps: ['Subtract the forecast from the actual demand for each period.', 'Record the sign of the error.'],
    example: 'If actual demand is 520 and forecast is 500, the error is 20.',
    examTip: 'Show that positive error means under-forecasting and negative error means over-forecasting.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'actual', label: 'Actual demand', placeholder: 'e.g. 520' },
      { key: 'forecast', label: 'Forecast demand', placeholder: 'e.g. 500' },
    ],
    useWhen: ['Calculate forecast accuracy', 'Evaluate bias'],
    compute: (values) => {
      const result = values.actual - values.forecast;
      return Number.isFinite(result) ? `${result.toFixed(2)} units` : 'Enter valid values';
    },
  },
  {
    id: 'mse',
    name: 'Mean Squared Error (MSE)',
    category: 'Forecasting',
    formula: 'Σ(Forecast errors)² ÷ n',
    explanation: 'Measures the average squared forecast error and penalises large misses.',
    application: 'Use for comparing forecast models with varying accuracy.',
    steps: ['Square each forecast error.', 'Sum the squared errors.', 'Divide by n.'],
    example: 'If squared errors total 200 over 8 periods, MSE = 25.',
    examTip: 'Always say that large errors count more because of the square.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'sqErrorSum', label: 'Sum of squared errors', placeholder: 'e.g. 200' },
      { key: 'periods', label: 'Number of periods', placeholder: 'e.g. 8' },
    ],
    useWhen: ['Compare forecast error severity', 'Choose between forecast models'],
    compute: (values) => {
      const result = values.sqErrorSum / values.periods;
      return Number.isFinite(result) ? `${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'mape',
    name: 'Mean Absolute Percent Error (MAPE)',
    category: 'Forecasting',
    formula: '100 × Σ(|Actualᵢ − Forecastᵢ| ÷ Actualᵢ) ÷ n',
    explanation: 'Measures average forecast error as a percentage of actual demand.',
    application: 'Use to compare forecast accuracy across different demand scales.',
    steps: ['Calculate absolute percentage error each period.', 'Sum the values.', 'Divide by n and multiply by 100.'],
    example: 'If the average absolute percent error is 8%, MAPE is 8%.',
    examTip: 'Mention that MAPE is useful when comparing unrelated products or services.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'totalPctError', label: 'Total percent error', placeholder: 'e.g. 32' },
      { key: 'periods', label: 'Number of periods', placeholder: 'e.g. 4' },
    ],
    useWhen: ['Compare forecast percentage accuracy', 'Assess relative error across products'],
    compute: (values) => {
      const result = (values.totalPctError / values.periods) * 100;
      return Number.isFinite(result) ? `${result.toFixed(2)}%` : 'Enter valid values';
    },
  },
  {
    id: 'tracking-signal',
    name: 'Tracking Signal',
    category: 'Forecasting',
    formula: 'RSFE ÷ MAD',
    explanation: 'Monitors whether a forecast is biased high or low.',
    application: 'Use to check if a forecast model consistently over- or under-forecasts.',
    steps: ['Sum the forecast errors to get RSFE.', 'Calculate MAD.', 'Divide RSFE by MAD.'],
    example: 'If RSFE is 12 and MAD is 3, tracking signal is 4.',
    examTip: 'Explain that values outside ±4 indicate forecast bias.',
    relatedUnitIds: ['om-4'],
    relatedTheoryIds: ['om-forecasting'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'rsfe', label: 'Running sum of forecast errors', placeholder: 'e.g. 12' },
      { key: 'mad', label: 'MAD', placeholder: 'e.g. 3' },
    ],
    useWhen: ['Detect forecast bias', 'Validate forecasting methods'],
    compute: (values) => {
      const result = values.rsfe / values.mad;
      return Number.isFinite(result) ? `${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'six-sigma',
    name: 'Six Sigma Capability',
    category: 'Quality',
    formula: '3.4 defects per million opportunities',
    explanation: 'Defines very high process capability and near-perfect quality.',
    application: 'Use to explain quality goals and benchmark process improvement.',
    steps: ['Describe the concept of defects per million opportunities.', 'Link it to variation reduction and DMAIC.', 'Compare to current process performance.'],
    example: 'A Six Sigma process produces roughly 3.4 defects per million opportunities.',
    examTip: 'State the 99.9997% reliability definition and relate it to process capability.',
    relatedUnitIds: ['om-3'],
    relatedTheoryIds: ['om-six-sigma'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'dpm', label: 'Defects per million opportunities', placeholder: 'e.g. 3.4' },
    ],
    useWhen: ['Explain quality targets', 'Describe Six Sigma improvement goals'],
    compute: (values) => {
      const result = values.dpm;
      return Number.isFinite(result) ? `${result.toFixed(1)} DPMO` : 'Enter valid values';
    },
  },
  {
    id: 'taguchi-loss',
    name: 'Taguchi Quality Loss Function',
    category: 'Quality',
    formula: 'L = D² × C',
    explanation: 'Estimates cost loss as deviation from the target value.',
    application: 'Use to explain why even in-spec production can still cause quality costs.',
    steps: ['Identify the deviation from the target.', 'Square the deviation.', 'Multiply by the cost constant C.'],
    example: 'If deviation is 2 and C is 5, loss is 20.',
    examTip: 'Explain that loss grows with the square of deviation, even inside specifications.',
    relatedUnitIds: ['om-3'],
    relatedTheoryIds: ['om-quality'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'deviation', label: 'Deviation from target', placeholder: 'e.g. 2' },
      { key: 'costConst', label: 'Cost constant (C)', placeholder: 'e.g. 5' },
    ],
    useWhen: ['Discuss quality loss and target-based quality', 'Compare off-target cost impacts'],
    compute: (values) => {
      const result = values.deviation * values.deviation * values.costConst;
      return Number.isFinite(result) ? `${result.toFixed(2)} cost units` : 'Enter valid values';
    },
  },
  {
    id: 'expected-output',
    name: 'Expected Output',
    category: 'Capacity',
    formula: 'Expected output = Effective capacity × Efficiency',
    explanation: 'Shows output based on realistic capacity and operating efficiency.',
    application: 'Use to calculate achievable production when conditions are less than ideal.',
    steps: ['Identify effective capacity.', 'Identify operational efficiency.', 'Multiply them together.'],
    example: 'If effective capacity is 480 and efficiency is 90%, expected output is 432.',
    examTip: 'Explain the difference between design capacity and effective capacity.',
    relatedUnitIds: ['om-6'],
    relatedTheoryIds: ['om-capacity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'effective', label: 'Effective capacity', placeholder: 'e.g. 480' },
      { key: 'efficiency', label: 'Efficiency (decimal)', placeholder: 'e.g. 0.9' },
    ],
    useWhen: ['Plan realistic outputs', 'Evaluate capacity under current conditions'],
    compute: (values) => {
      const result = values.effective * values.efficiency;
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'machines-required',
    name: 'Machines Required',
    category: 'Capacity',
    formula: 'Total annual processing time required ÷ Annual capacity of one machine',
    explanation: 'Calculates the number of machines needed to meet annual demand.',
    application: 'Use when deciding how many machines or workstations are required.',
    steps: ['Calculate total annual time required.', 'Find one machine’s annual capacity.', 'Divide and round up to the next whole machine.'],
    example: 'If 10 000 hours are needed and one machine can do 3 000 hours, 4 machines are required.',
    examTip: 'Remember to round up at the end because you cannot buy a fraction of a machine.',
    relatedUnitIds: ['om-6'],
    relatedTheoryIds: ['om-capacity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'totalTime', label: 'Total annual processing time', placeholder: 'e.g. 10000' },
      { key: 'machineCapacity', label: 'Annual capacity per machine', placeholder: 'e.g. 3000' },
    ],
    useWhen: ['Calculate equipment needs', 'Plan capacity investments'],
    compute: (values) => {
      const result = Math.ceil(values.totalTime / values.machineCapacity);
      return Number.isFinite(result) ? `${result} machines` : 'Enter valid values';
    },
  },
  {
    id: 'break-even-units',
    name: 'Break-even Point (Units)',
    category: 'Capacity',
    formula: 'F ÷ (P − V)',
    explanation: 'Finds the quantity where total revenue equals total cost.',
    application: 'Use to determine how many units must be sold before profit begins.',
    steps: ['Identify total fixed costs.', 'Calculate contribution per unit (price − variable cost).', 'Divide fixed cost by contribution.'],
    example: 'If F = 100 000 and contribution = 20, break-even units = 5 000.',
    examTip: 'Define fixed cost, price and variable cost before substituting values.',
    relatedUnitIds: ['om-6'],
    relatedTheoryIds: ['om-capacity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'fixedCost', label: 'Fixed cost (F)', placeholder: 'e.g. 100000' },
      { key: 'price', label: 'Price per unit (P)', placeholder: 'e.g. 50' },
      { key: 'variableCost', label: 'Variable cost per unit (V)', placeholder: 'e.g. 30' },
    ],
    useWhen: ['Calculate break-even quantity', 'Assess profitability thresholds'],
    compute: (values) => {
      const result = values.fixedCost / (values.price - values.variableCost);
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'break-even-revenue',
    name: 'Break-even Point (Revenue)',
    category: 'Capacity',
    formula: 'F ÷ (1 − V/P)',
    explanation: 'Finds the revenue needed to cover fixed and variable costs.',
    application: 'Use when you know price and variable cost as percentages of revenue.',
    steps: ['Identify fixed costs.', 'Calculate the variable cost ratio V/P.', 'Divide fixed cost by (1 − V/P).'],
    example: 'If F = 100 000, V = 30 and P = 50, revenue = 250 000.',
    examTip: 'Explain the contribution-margin ratio before doing the calculation.',
    relatedUnitIds: ['om-6'],
    relatedTheoryIds: ['om-capacity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'fixedCost', label: 'Fixed cost (F)', placeholder: 'e.g. 100000' },
      { key: 'price', label: 'Price (P)', placeholder: 'e.g. 50' },
      { key: 'variableCost', label: 'Variable cost (V)', placeholder: 'e.g. 30' },
    ],
    useWhen: ['Calculate break-even revenue', 'Work with contribution margin ratios'],
    compute: (values) => {
      const result = values.fixedCost / (1 - values.variableCost / values.price);
      return Number.isFinite(result) ? `R${result.toFixed(0)}` : 'Enter valid values';
    },
  },
  {
    id: 'future-value',
    name: 'Future Value (FV)',
    category: 'Capacity',
    formula: 'F = P × (1 + i)ⁿ',
    explanation: 'Calculates how much an investment will be worth in the future.',
    application: 'Use for strategy-driven capacity investment decisions.',
    steps: ['Identify present value P, interest rate i and periods n.', 'Apply the compound factor.', 'Multiply to get future value.'],
    example: 'If P = 1000, i = 0.1 and n = 2, future value = 1210.',
    examTip: 'Clarify whether n is years, months or another period.',
    relatedUnitIds: ['om-6'],
    relatedTheoryIds: ['om-capacity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'present', label: 'Present value (P)', placeholder: 'e.g. 1000' },
      { key: 'rate', label: 'Interest rate (i)', placeholder: 'e.g. 0.10' },
      { key: 'periods', label: 'Periods (n)', placeholder: 'e.g. 2' },
    ],
    useWhen: ['Evaluate investment returns', 'Compare future value outcomes'],
    compute: (values) => {
      const result = values.present * Math.pow(1 + values.rate, values.periods);
      return Number.isFinite(result) ? `R${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'present-value',
    name: 'Present Value (PV)',
    category: 'Capacity',
    formula: 'P = F ÷ (1 + i)ⁿ',
    explanation: 'Calculates the current worth of a future amount.',
    application: 'Use for comparing capacity investments across time.',
    steps: ['Identify future value F, interest rate i and periods n.', 'Divide by the compound factor.', 'Report the present value.'],
    example: 'If F = 1210, i = 0.1 and n = 2, present value = 1000.',
    examTip: 'Always state whether you are discounting from future to present.',
    relatedUnitIds: ['om-6'],
    relatedTheoryIds: ['om-capacity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'future', label: 'Future value (F)', placeholder: 'e.g. 1210' },
      { key: 'rate', label: 'Interest rate (i)', placeholder: 'e.g. 0.10' },
      { key: 'periods', label: 'Periods (n)', placeholder: 'e.g. 2' },
    ],
    useWhen: ['Discount future cash flows', 'Compare investment alternatives'],
    compute: (values) => {
      const result = values.future / Math.pow(1 + values.rate, values.periods);
      return Number.isFinite(result) ? `R${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'littles-law-system',
    name: 'Little’s Law — System',
    category: 'Queues',
    formula: 'Lₛ = λ × Wₛ',
    explanation: 'Relates average number in system to arrival rate and time in system.',
    application: 'Use for service operations and queue analysis under steady state.',
    steps: ['Identify average arrival rate λ.', 'Identify average time in system Wₛ.', 'Multiply to get average system population Lₛ.'],
    example: 'If λ = 20/hr and Wₛ = 0.5 hr, Lₛ = 10 customers in the system.',
    examTip: 'Mention that Little’s Law makes no distributional assumptions in steady state.',
    relatedUnitIds: ['om-6'],
    relatedTheoryIds: ['om-capacity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'arrivalRate', label: 'Arrival rate (λ)', placeholder: 'e.g. 20 per hour' },
      { key: 'timeInSystem', label: 'Time in system (Wₛ)', placeholder: 'e.g. 0.5 hours' },
    ],
    useWhen: ['Analyse queue performance', 'Estimate system population from rates and times'],
    compute: (values) => {
      const result = values.arrivalRate * values.timeInSystem;
      return Number.isFinite(result) ? `${result.toFixed(2)} units` : 'Enter valid values';
    },
  },
  {
    id: 'littles-law-queue',
    name: 'Little’s Law — Queue',
    category: 'Queues',
    formula: 'Lq = λ × Wq',
    explanation: 'Relates average queue length to arrival rate and waiting time.',
    application: 'Use for queue length or waiting time estimates when actual service times are unknown.',
    steps: ['Identify average arrival rate λ.', 'Identify average waiting time Wq.', 'Multiply to get average queue length Lq.'],
    example: 'If λ = 20/hr and Wq = 0.25 hr, Lq = 5 customers waiting.',
    examTip: 'Use the queue form when waiting-in-line data is easier to measure than system time.',
    relatedUnitIds: ['om-6'],
    relatedTheoryIds: ['om-capacity'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'arrivalRate', label: 'Arrival rate (λ)', placeholder: 'e.g. 20 per hour' },
      { key: 'waitTime', label: 'Waiting time (Wq)', placeholder: 'e.g. 0.25 hours' },
    ],
    useWhen: ['Estimate queue length', 'Convert arrival rate and waiting time to queue population'],
    compute: (values) => {
      const result = values.arrivalRate * values.waitTime;
      return Number.isFinite(result) ? `${result.toFixed(2)} customers` : 'Enter valid values';
    },
  },
  {
    id: 'expected-orders',
    name: 'Orders per Year (N)',
    category: 'Inventory',
    formula: 'N = D ÷ Q*',
    explanation: 'Calculates how many orders are placed each year at the EOQ.',
    application: 'Use to understand ordering frequency and planning. ',
    steps: ['Divide annual demand by the order quantity.', 'Round up if partial orders are not allowed.'],
    example: 'If demand is 9 600 and EOQ is 240, N = 40 orders per year.',
    examTip: 'Explain that this is the number of replenishment cycles per year.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'demand', label: 'Annual demand (D)', placeholder: 'e.g. 9600' },
      { key: 'orderQty', label: 'Order quantity (Q*)', placeholder: 'e.g. 240' },
    ],
    useWhen: ['Calculate ordering frequency', 'Plan reorder cycles'],
    compute: (values) => {
      const result = values.demand / values.orderQty;
      return Number.isFinite(result) ? `${result.toFixed(2)} orders` : 'Enter valid values';
    },
  },
  {
    id: 'order-cycle',
    name: 'Order Cycle (T)',
    category: 'Inventory',
    formula: 'T = Number of working days per year ÷ N',
    explanation: 'Calculates how often orders should be placed in days.',
    application: 'Use to convert order frequency into a practical replenishment cycle.',
    steps: ['Identify working days in the year.', 'Divide by number of orders.'],
    example: 'If 288 working days and 40 orders, T = 7.2 days.',
    examTip: 'Round the cycle to a workable ordering interval, such as weekly.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'workingDays', label: 'Working days per year', placeholder: 'e.g. 288' },
      { key: 'orders', label: 'Number of orders per year', placeholder: 'e.g. 40' },
    ],
    useWhen: ['Plan ordering intervals', 'Link orders to calendar days'],
    compute: (values) => {
      const result = values.workingDays / values.orders;
      return Number.isFinite(result) ? `${result.toFixed(1)} days` : 'Enter valid values';
    },
  },
  {
    id: 'total-inventory-cost',
    name: 'Total Annual Inventory Cost',
    category: 'Inventory',
    formula: '(D ÷ Q)×S + (Q ÷ 2)×H',
    explanation: 'Computes the sum of ordering and holding costs for a given order quantity.',
    application: 'Use to compare costs at different order quantities or confirm the EOQ result.',
    steps: ['Calculate ordering cost: (D/Q)×S.', 'Calculate holding cost: (Q/2)×H.', 'Add both components.'],
    example: 'If D=9600, Q=240, S=75 and H=16, total cost = 4 000 + 1 920 = 5 920.',
    examTip: 'Use the formula to show why EOQ minimises total cost when ordering and holding costs are balanced.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'demand', label: 'Annual demand (D)', placeholder: 'e.g. 9600' },
      { key: 'orderQty', label: 'Order quantity (Q)', placeholder: 'e.g. 240' },
      { key: 'orderCost', label: 'Ordering cost (S)', placeholder: 'e.g. 75' },
      { key: 'holdingCost', label: 'Holding cost (H)', placeholder: 'e.g. 16' },
    ],
    useWhen: ['Calculate cost trade-off', 'Evaluate order quantity decisions'],
    compute: (values) => {
      const result = values.demand / values.orderQty * values.orderCost + (values.orderQty / 2) * values.holdingCost;
      return Number.isFinite(result) ? `R${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'daily-demand-rate',
    name: 'Daily Demand Rate',
    category: 'Inventory',
    formula: 'd = D ÷ Number of working days per year',
    explanation: 'Converts annual demand into a daily demand figure.',
    application: 'Use when calculating reorder points and safety stock on a daily basis.',
    steps: ['Take annual demand.', 'Divide by the number of working days.'],
    example: 'If D = 9 600 and 240 working days, d = 40 units per day.',
    examTip: 'Always state what working days you are using in the calculation.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'demand', label: 'Annual demand (D)', placeholder: 'e.g. 9600' },
      { key: 'workingDays', label: 'Working days per year', placeholder: 'e.g. 240' },
    ],
    useWhen: ['Convert annual demand to daily rate', 'Prepare inputs for ROP calculations'],
    compute: (values) => {
      const result = values.demand / values.workingDays;
      return Number.isFinite(result) ? `${result.toFixed(2)} units/day` : 'Enter valid values';
    },
  },
  {
    id: 'rop-known-demand',
    name: 'ROP for Known Demand',
    category: 'Inventory',
    formula: 'ROP = d × L',
    explanation: 'Calculates reorder point when demand is constant and lead time is fixed.',
    application: 'Use for deterministic inventory systems with known demand and lead time.',
    steps: ['Calculate daily demand rate d.', 'Identify lead time L in days.', 'Multiply to get the reorder point.'],
    example: 'If d = 40 units/day and L = 7 days, ROP = 280 units.',
    examTip: 'Label d and L clearly and state the units of the result.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'demandRate', label: 'Daily demand rate (d)', placeholder: 'e.g. 40' },
      { key: 'leadTime', label: 'Lead time (L)', placeholder: 'e.g. 7' },
    ],
    useWhen: ['Set reorder points for constant demand', 'Plan order timing'],
    compute: (values) => {
      const result = values.demandRate * values.leadTime;
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'poq',
    name: 'Production Order Quantity (POQ)',
    category: 'Inventory',
    formula: 'Q*p = √[2DS ÷ (H(1 − d/p))]',
    explanation: 'Used when inventory builds up gradually during production rather than arriving instantly.',
    application: 'Use when production rate exceeds demand rate and stock accumulates while producing.',
    steps: ['Calculate the annual demand and setup cost.', 'Find the holding cost and production/demand rates.', 'Apply the POQ formula.'],
    example: 'If D=9600, S=75, H=16, d=40 and p=60, POQ ≈ 414 units.',
    examTip: 'Show that p (production rate) must be greater than d (demand rate).',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'demand', label: 'Annual demand (D)', placeholder: 'e.g. 9600' },
      { key: 'orderCost', label: 'Setup/ordering cost (S)', placeholder: 'e.g. 75' },
      { key: 'holdingCost', label: 'Holding cost (H)', placeholder: 'e.g. 16' },
      { key: 'demandRate', label: 'Daily demand rate (d)', placeholder: 'e.g. 40' },
      { key: 'prodRate', label: 'Daily production rate (p)', placeholder: 'e.g. 60' },
    ],
    useWhen: ['Plan production orders', 'Use EOQ logic with continuous production'],
    compute: (values) => {
      const result = Math.sqrt((2 * values.demand * values.orderCost) / (values.holdingCost * (1 - values.demandRate / values.prodRate)));
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'quantity-discount-cost',
    name: 'Quantity Discount Total Cost',
    category: 'Inventory',
    formula: '(D ÷ Q)×S + (Q ÷ 2)×H + P×D',
    explanation: 'Computes total annual cost when the unit price varies with order quantity.',
    application: 'Use for quantity discount decisions where purchase cost is part of total cost.',
    steps: ['Calculate ordering cost.', 'Calculate holding cost.', 'Add annual purchase cost.'],
    example: 'If D=9600, Q=300, S=75, H=16 and P=50, total cost = 2 400 + 2 400 + 480 000 = 484 800.',
    examTip: 'Mention that P×D now enters the formula because the item price varies with order size.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'demand', label: 'Annual demand (D)', placeholder: 'e.g. 9600' },
      { key: 'orderQty', label: 'Order quantity (Q)', placeholder: 'e.g. 300' },
      { key: 'orderCost', label: 'Ordering cost (S)', placeholder: 'e.g. 75' },
      { key: 'holdingCost', label: 'Holding cost (H)', placeholder: 'e.g. 16' },
      { key: 'price', label: 'Price per unit (P)', placeholder: 'e.g. 50' },
    ],
    useWhen: ['Compare quantity discount options', 'Evaluate total cost with price changes'],
    compute: (values) => {
      const result = values.demand / values.orderQty * values.orderCost + (values.orderQty / 2) * values.holdingCost + values.price * values.demand;
      return Number.isFinite(result) ? `R${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'quantity-discount-eoq',
    name: 'EOQ with Price Discount',
    category: 'Inventory',
    formula: 'Q* = √((2DS) ÷ (I×P))',
    explanation: 'Calculates EOQ when holding cost is a percentage of the item price.',
    application: 'Use when holding cost is stated as an annual percentage of unit price.',
    steps: ['Calculate the holding rate I as a decimal.', 'Multiply I by price P to get H.', 'Apply the EOQ formula.'],
    example: 'If D=9600, S=75, I=0.2 and P=50, Q* ≈ 426 units.',
    examTip: 'State that H = I × P before substituting into the EOQ formula.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'demand', label: 'Annual demand (D)', placeholder: 'e.g. 9600' },
      { key: 'orderCost', label: 'Ordering cost (S)', placeholder: 'e.g. 75' },
      { key: 'holdingRate', label: 'Holding rate (I)', placeholder: 'e.g. 0.20' },
      { key: 'price', label: 'Price per unit (P)', placeholder: 'e.g. 50' },
    ],
    useWhen: ['Calculate EOQ with percentage-based holding cost', 'Assess pricing discount models'],
    compute: (values) => {
      const result = Math.sqrt((2 * values.demand * values.orderCost) / (values.holdingRate * values.price));
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'rop-safety-stock',
    name: 'ROP with Safety Stock',
    category: 'Inventory',
    formula: 'ROP = d × L + ss',
    explanation: 'Adds a buffer stock allowance when demand or lead time is uncertain.',
    application: 'Use when you need a safety margin to prevent stockouts.',
    steps: ['Calculate demand during lead time.', 'Choose safety stock.', 'Add them to get the reorder point.'],
    example: 'If demand during lead time is 280 and safety stock is 40, ROP = 320.',
    examTip: 'Explain the four determinants of safety stock in the answer.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'leadDemand', label: 'Demand during lead time', placeholder: 'e.g. 280' },
      { key: 'safetyStock', label: 'Safety stock', placeholder: 'e.g. 40' },
    ],
    useWhen: ['Buffer against variability', 'Protect service level during lead time'],
    compute: (values) => {
      const result = values.leadDemand + values.safetyStock;
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'annual-stockout-cost',
    name: 'Annual Stockout Cost',
    category: 'Inventory',
    formula: 'Σ(shortage units × probability × cost shortage × number of orders)',
    explanation: 'Calculates the expected annual cost of running out of stock.',
    application: 'Use to compare stockout consequences when choosing safety stock.',
    steps: ['Identify shortage units and their probabilities.', 'Multiply by stockout cost and order frequency.', 'Sum across demand levels.'],
    example: 'If one shortage scenario costs R500 and occurs 10 times, cost = R5 000.',
    examTip: 'Use this formula when the question asks about cost-based service level decisions.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'shortageCost', label: 'Total shortage cost', placeholder: 'e.g. 5000' },
      { key: 'orders', label: 'Number of orders per year', placeholder: 'e.g. 40' },
    ],
    useWhen: ['Calculate stockout economics', 'Choose safety stock from cost trade-offs'],
    compute: (values) => {
      const result = values.shortageCost * values.orders;
      return Number.isFinite(result) ? `R${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'service-level-single-period',
    name: 'Single-period Service Level',
    category: 'Inventory',
    formula: 'Service level = Cs ÷ (Cs + Co)',
    explanation: 'Determines the optimal service level for one-time or perishable orders.',
    application: 'Use for newspaper or seasonal inventory decisions.',
    steps: ['Identify shortage cost Cs and overage cost Co.', 'Divide Cs by the sum Cs + Co.'],
    example: 'If Cs = 10 and Co = 5, service level = 0.67 or 67%.',
    examTip: 'Explain what Cs and Co mean in the exam context (shortage vs overage).',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'cs', label: 'Shortage cost (Cs)', placeholder: 'e.g. 10' },
      { key: 'co', label: 'Overage cost (Co)', placeholder: 'e.g. 5' },
    ],
    useWhen: ['Calculate service level for one-time demand', 'Balance stockout and overstock costs'],
    compute: (values) => {
      const result = values.cs / (values.cs + values.co);
      return Number.isFinite(result) ? `${(result * 100).toFixed(1)}%` : 'Enter valid values';
    },
  },
  {
    id: 'rop-variable-demand-constant-lead',
    name: 'ROP: Variable Demand, Constant Lead Time',
    category: 'Inventory',
    formula: 'ROP = (Average daily demand × Lead time) + Z × σdLT',
    explanation: 'Adds a variability allowance to the deterministic reorder point.',
    application: 'Use when demand varies but lead time is stable.',
    steps: ['Calculate average demand during lead time.', 'Find the variability term Z × σdLT.', 'Add them to get ROP.'],
    example: 'If average demand is 280 and buffer is 40, ROP = 320.',
    examTip: 'State which part is expected demand and which part is safety stock.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'avgDemand', label: 'Average daily demand × lead time', placeholder: 'e.g. 280' },
      { key: 'zSigma', label: 'Z × σdLT', placeholder: 'e.g. 40' },
    ],
    useWhen: ['Calculate ROP with demand variability', 'Set safety stock for demand uncertainty'],
    compute: (values) => {
      const result = values.avgDemand + values.zSigma;
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'rop-constant-demand-variable-lead',
    name: 'ROP: Constant Demand, Variable Lead Time',
    category: 'Inventory',
    formula: 'ROP = (Daily demand × Average lead time) + Z × d × σLT',
    explanation: 'Adds a buffer for lead time variability while demand remains constant.',
    application: 'Use when delivery lead time is uncertain but demand is steady.',
    steps: ['Calculate demand during average lead time.', 'Compute the safety stock using Z and lead-time variability.', 'Add both values.'],
    example: 'If demand × lead time is 280 and buffer is 20, ROP = 300.',
    examTip: 'Define σLT clearly as lead-time standard deviation. ',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'baseRop', label: 'Daily demand × avg lead time', placeholder: 'e.g. 280' },
      { key: 'buffer', label: 'Safety stock', placeholder: 'e.g. 20' },
    ],
    useWhen: ['Calculate ROP under variable lead time', 'Add buffer for delivery uncertainty'],
    compute: (values) => {
      const result = values.baseRop + values.buffer;
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'rop-variable-demand-variable-lead',
    name: 'ROP: Variable Demand and Variable Lead Time',
    category: 'Inventory',
    formula: 'ROP = (Avg demand × Avg lead time) + Z × σdLT',
    explanation: 'Includes both demand and lead-time variability in the reorder point.',
    application: 'Use when both demand and lead time are uncertain.',
    steps: ['Calculate expected demand during lead time.', 'Compute the combined variability term σdLT.', 'Add the safety buffer.',
    ],
    example: 'If average demand × lead time is 280 and variability buffer is 45, ROP = 325.',
    examTip: 'Explain the combined variance formula briefly if the question requires it.',
    relatedUnitIds: ['om-10'],
    relatedTheoryIds: ['om-inventory'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'baseRop', label: 'Avg demand × avg lead time', placeholder: 'e.g. 280' },
      { key: 'buffer', label: 'Safety buffer (ZσdLT)', placeholder: 'e.g. 45' },
    ],
    useWhen: ['Calculate ROP for variable demand and lead time', 'Design robust inventory buffers'],
    compute: (values) => {
      const result = values.baseRop + values.buffer;
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'net-material-requirements',
    name: 'Net Material Requirements',
    category: 'MRP',
    formula: 'Gross requirements + Allocations − (On-hand inventory + Scheduled receipts)',
    explanation: 'Calculates the quantity of material that must be planned for after accounting for existing stock and receipts.',
    application: 'Use when planning dependent demand materials in an MRP system.',
    steps: ['Identify gross requirements from the MPS/BOM.', 'Add allocations.', 'Subtract on-hand inventory and scheduled receipts.'],
    example: 'If gross requirements are 500, allocations 50, on-hand 120 and receipts 80, net requirements = 350.',
    examTip: 'State each component clearly and mention how allocations differ from scheduled receipts.',
    relatedUnitIds: ['om-12'],
    relatedTheoryIds: ['om-mrp'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'gross', label: 'Gross requirements', placeholder: 'e.g. 500' },
      { key: 'allocations', label: 'Allocations', placeholder: 'e.g. 50' },
      { key: 'onHand', label: 'On-hand inventory', placeholder: 'e.g. 120' },
      { key: 'receipts', label: 'Scheduled receipts', placeholder: 'e.g. 80' },
    ],
    useWhen: ['Plan dependent demand materials', 'Calculate planned order quantities'],
    compute: (values) => {
      const result = values.gross + values.allocations - (values.onHand + values.receipts);
      return Number.isFinite(result) ? `${result.toFixed(0)} units` : 'Enter valid values';
    },
  },
  {
    id: 'centre-of-gravity-x',
    name: 'Centre-of-Gravity x-coordinate',
    category: 'Location',
    formula: 'Σ(xᵢ × Qᵢ) ÷ ΣQᵢ',
    explanation: 'Finds the weighted x-coordinate for the ideal facility location.',
    application: 'Use when locating a distribution centre to minimise weighted shipping distance.',
    steps: ['Multiply each location x-coordinate by its shipment quantity.', 'Sum the weighted values.', 'Divide by total quantity shipped.'],
    example: 'If locations x are 10, 20 and shipments are 50, 100, x = 16.7.',
    examTip: 'Use the same units for x and ensure Q is the weight or shipment quantity.',
    relatedUnitIds: ['om-7'],
    relatedTheoryIds: ['om-location'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'weightedX', label: 'Sum of xᵢ × Qᵢ', placeholder: 'e.g. 2500' },
      { key: 'totalQ', label: 'ΣQᵢ', placeholder: 'e.g. 150' },
    ],
    useWhen: ['Choose a distribution location', 'Apply weighted distance minimisation'],
    compute: (values) => {
      const result = values.weightedX / values.totalQ;
      return Number.isFinite(result) ? `${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'centre-of-gravity-y',
    name: 'Centre-of-Gravity y-coordinate',
    category: 'Location',
    formula: 'Σ(yᵢ × Qᵢ) ÷ ΣQᵢ',
    explanation: 'Finds the weighted y-coordinate for the ideal facility location.',
    application: 'Use together with the x-coordinate to locate the optimal point.',
    steps: ['Multiply each location y-coordinate by shipment quantity.', 'Sum the weighted values.', 'Divide by total shipment quantity.'],
    example: 'If weighted y total is 1800 and ΣQᵢ is 150, y = 12.',
    examTip: 'Answer both x and y together for the centre-of-gravity method.',
    relatedUnitIds: ['om-7'],
    relatedTheoryIds: ['om-location'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'weightedY', label: 'Sum of yᵢ × Qᵢ', placeholder: 'e.g. 1800' },
      { key: 'totalQ', label: 'ΣQᵢ', placeholder: 'e.g. 150' },
    ],
    useWhen: ['Complete location calculation', 'Minimise weighted transportation cost'],
    compute: (values) => {
      const result = values.weightedY / values.totalQ;
      return Number.isFinite(result) ? `${result.toFixed(2)}` : 'Enter valid values';
    },
  },
  {
    id: 'factor-rating-score',
    name: 'Factor-Rating Method',
    category: 'Location',
    formula: 'Weighted score per site = Σ(factor weight × factor score)',
    explanation: 'Uses weighted scores to compare location alternatives.',
    application: 'Use when multiple criteria affect location decisions.',
    steps: ['Rate each site against each factor.', 'Multiply each score by its weight.', 'Sum the weighted results for each site.'],
    example: 'If factor weights sum to 1 and site scores produce 0.8, 0.72 and 0.65, choose the highest score.',
    examTip: 'State that weights must sum to 1 or 100 before comparing totals.',
    relatedUnitIds: ['om-7'],
    relatedTheoryIds: ['om-location'],
    relatedCaseIds: ['om-stockouts'],
    inputs: [
      { key: 'weightedScore', label: 'Weighted score', placeholder: 'e.g. 0.8' },
    ],
    useWhen: ['Compare location alternatives', 'Apply multi-criteria decision making'],
    compute: (values) => {
      const result = values.weightedScore;
      return Number.isFinite(result) ? `${result.toFixed(2)} score` : 'Enter valid values';
    },
  },
];

const OM_UNITS = unitsFor('om');
const CATEGORY_OPTIONS = Array.from(new Set(FORMULAS.map((formula) => formula.category))).sort();

export default function FormulasPage() {
  const { id } = useModule();
  const [selectedId, setSelectedId] = useState(FORMULAS[0].id);
  const [search, setSearch] = useState('');
  const [unitFilter, setUnitFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [inputs, setInputs] = useState<Record<string, string>>({});

  const filteredFormulas = useMemo(
    () =>
      FORMULAS.filter((formula) => {
        const matchesSearch = formula.name.toLowerCase().includes(search.toLowerCase()) || formula.formula.toLowerCase().includes(search.toLowerCase());
        const matchesUnit = !unitFilter || formula.relatedUnitIds.includes(unitFilter);
        const matchesCategory = !categoryFilter || formula.category === categoryFilter;
        return matchesSearch && matchesUnit && matchesCategory;
      }),
    [search, unitFilter, categoryFilter]
  );

  const selectedFormula = useMemo(
    () => filteredFormulas.find((formula) => formula.id === selectedId) ?? filteredFormulas[0] ?? FORMULAS[0],
    [filteredFormulas, selectedId]
  );

  const result = useMemo(() => {
    const values: Record<string, number> = {};
    selectedFormula.inputs.forEach((input) => {
      values[input.key] = parseFloat(inputs[input.key] || '');
    });
    return selectedFormula.compute(values);
  }, [inputs, selectedFormula]);

  const selectedUnits = selectedFormula.relatedUnitIds.map((unitId) => OM_UNITS.find((u) => u.id === unitId)).filter(Boolean);
  const selectedTheories = selectedFormula.relatedTheoryIds.map((theoryId) => THEORIES.find((t) => t.id === theoryId)).filter(Boolean);
  const selectedCases = selectedFormula.relatedCaseIds.map((caseId) => CASES.find((c) => c.id === caseId)).filter(Boolean);

  return (
    <div className="space-y-6">
      <PageHeading
        kicker={id === 'om' ? 'Operations Management' : 'Formulas'}
        title={id === 'om' ? 'OM Formula Dashboard' : 'Module Formula Dashboard'}
        sub={
          id === 'om'
            ? 'Interactive formula pages, unit links, concept connections, case examples and step-by-step problem solving.'
            : 'Formula and calculator support for module topics.'
        }
      />

      {id !== 'om' ? (
        <Card title="OM formulas are available only for the Operations Management module." tone="gold">
          <p>Navigate to the Operations Management dashboard from the home page to access the formula sheet and calculators.</p>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <Card title="Filter formulas" tone="white">
              <div className="space-y-4">
                <Input value={search} onChange={setSearch} placeholder="Search formulas or equations" />
                <div className="grid gap-4 md:grid-cols-2">
                  <Select
                    value={unitFilter}
                    onChange={setUnitFilter}
                    options={[
                      { value: '', label: 'All OM units' },
                      ...OM_UNITS.map((unit) => ({ value: unit.id, label: `Unit ${unit.number}: ${unit.title}` })),
                    ]}
                  />
                  <Select
                    value={categoryFilter}
                    onChange={setCategoryFilter}
                    options={[{ value: '', label: 'All categories' }, ...CATEGORY_OPTIONS.map((category) => ({ value: category, label: category }))]}
                  />
                </div>
              </div>
            </Card>

            <Card title="Selected formula" tone="white">
              <div className="space-y-2">
                <p className="text-sm text-slate-500">{filteredFormulas.length} formulas match your filters.</p>
                {filteredFormulas.length === 0 && <p className="text-sm text-red-700">No formulas match this filter. Clear search or filters to restore the list.</p>}
                {filteredFormulas.length > 0 && (
                  <div className="rounded-3xl border border-teal-200 bg-white p-4">
                    <h2 className="font-bold text-lg text-teal-900">{selectedFormula.name}</h2>
                    <Badge tone="purple">{selectedFormula.formula}</Badge>
                    <p className="mt-2 text-sm text-slate-600">{selectedFormula.category}</p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            <section className="space-y-6">
              <Card title="Formula list">
                <div className="grid gap-3">
                  {filteredFormulas.map((formula) => (
                    <button
                      key={formula.id}
                      onClick={() => setSelectedId(formula.id)}
                      className={`w-full rounded-3xl border p-4 text-left transition ${
                        selectedFormula.id === formula.id
                          ? 'border-[#3B1D6E] bg-[#F4F1FA]' 
                          : 'border-[#E6E1F2] bg-white hover:border-[#C9A24B]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-[#241349]">{formula.name}</h3>
                          <p className="mt-1 text-sm text-slate-600">{formula.category}</p>
                        </div>
                        <Badge tone="purple">{formula.formula}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </Card>

              <Card title="Formula deep dive">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">What it means</h3>
                    <p className="text-sm text-slate-600">{selectedFormula.explanation}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">When to use it</h3>
                    <BulletList items={selectedFormula.useWhen} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Steps to solve</h3>
                    <BulletList items={selectedFormula.steps} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Exam tip</h3>
                    <p className="text-sm text-slate-600">{selectedFormula.examTip}</p>
                  </div>
                </div>
              </Card>

              <Card title="Linked learning" tone="white">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Related units</h3>
                    <div className="grid gap-2">
                      {selectedUnits.map((unit) => (
                        <LinkCard
                          key={unit!.id}
                          to={`/om/units/${unit!.id}`}
                          eyebrow={`Unit ${unit!.number}`}
                          title={unit!.title}
                          text={unit!.plain}
                          tags={['OM unit']}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold">Related concepts</h3>
                    <div className="grid gap-2">
                      {selectedTheories.map((theory) => (
                        <LinkCard
                          key={theory!.id}
                          to={`/om/theories/${theory!.id}`}
                          eyebrow={theory!.category}
                          title={theory!.name}
                          text={theory!.plain}
                          tags={['Theory']}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold">Past-paper case examples</h3>
                    <div className="grid gap-2">
                      {selectedCases.length > 0 ? (
                        selectedCases.map((c) => (
                          <LinkCard
                            key={c!.id}
                            to="/om/cases"
                            eyebrow="Case example"
                            title={c!.title}
                            text={c!.scenario}
                            tags={['Past paper style']}
                          />
                        ))
                      ) : (
                        <p className="text-sm text-slate-600">No related case examples are linked yet.</p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            <aside className="space-y-6">
              <Card title="Calculator sheet" tone="gold">
                <div className="space-y-4">
                  {selectedFormula.inputs.map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-semibold text-[#241349]">{field.label}</label>
                      <Input
                        value={inputs[field.key] ?? ''}
                        onChange={(value) => setInputs((prev) => ({ ...prev, [field.key]: value }))}
                        placeholder={field.placeholder}
                      />
                      {field.suffix && <p className="mt-1 text-xs text-[#6B6580]">{field.suffix}</p>}
                    </div>
                  ))}
                  <div className="rounded-3xl border border-[#C9A24B] bg-[#FBF7EC] p-4 text-sm">
                    <p className="font-semibold">Result</p>
                    <p className="mt-2 text-lg font-bold text-[#241349]">{result}</p>
                  </div>
                </div>
              </Card>

              <Card title="OM quick actions">
                <LinkCard to="/om" eyebrow="Subject home" title="Go back to OM dashboard" text="See unit summaries, theories, cases and exam tools for Operations Management." tags={['OM']} />
                <LinkCard to="/om/exam-builder" eyebrow="Exam builder" title="Use the answer builder" text="Turn OM command words and theories into structured responses." tags={['Exam']} />
                <LinkCard to="/om/past-papers" eyebrow="Past paper intelligence" title="Explore OM question patterns" text="See likely case and command-word patterns for OM." tags={['Past papers']} />
              </Card>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}
