// Scoring algorithm for MBTI personality test
// Each axis: E/I, S/N, T/F, J/P
// direction: 1 = agreeing pushes toward first letter, -1 = toward second letter
// answer values: +3 (strongly agree) to -3 (strongly disagree)

import questionsData from "../data/questions.json";

export type AxisScores = {
  EI: number; // positive = E, negative = I
  SN: number; // positive = S, negative = N
  TF: number; // positive = T, negative = F
  JP: number; // positive = J, negative = P
};

export type AxisPercentages = {
  EI: { first: number; second: number; dominant: string };
  SN: { first: number; second: number; dominant: string };
  TF: { first: number; second: number; dominant: string };
  JP: { first: number; second: number; dominant: string };
};

export type PersonalityResult = {
  code: string; // e.g. "INFJ"
  percentages: AxisPercentages;
};

export function calculateResults(answers: Record<number, number>): PersonalityResult {
  const rawScores: AxisScores = { EI: 0, SN: 0, TF: 0, JP: 0 };

  for (const q of questionsData) {
    const answer = answers[q.id];
    if (answer === undefined) continue;

    // Skip identity axis (not part of 4-letter MBTI code)
    if (q.axis === "AT") continue;

    const axis = q.axis as keyof AxisScores;
    rawScores[axis] += answer * q.direction;
  }

  // Convert raw scores to percentages
  // Each axis has 12 questions (EI=12, SN=12, TF=12, JP=12)
  // Max possible per axis = 12 * 3 = 36
  const maxPerAxis = 36;

  function toPercentage(score: number, firstLetter: string, secondLetter: string) {
    // Normalize: score ranges from -maxPerAxis to +maxPerAxis
    // Map to 0-100 where 50 is neutral
    const normalized = ((score + maxPerAxis) / (2 * maxPerAxis)) * 100;
    const firstPct = Math.round(normalized);
    const secondPct = 100 - firstPct;
    return {
      first: firstPct,
      second: secondPct,
      dominant: firstPct >= 50 ? firstLetter : secondLetter,
    };
  }

  const percentages: AxisPercentages = {
    EI: toPercentage(rawScores.EI, "E", "I"),
    SN: toPercentage(rawScores.SN, "S", "N"),
    TF: toPercentage(rawScores.TF, "T", "F"),
    JP: toPercentage(rawScores.JP, "J", "P"),
  };

  const code =
    percentages.EI.dominant +
    percentages.SN.dominant +
    percentages.TF.dominant +
    percentages.JP.dominant;

  return { code, percentages };
}
