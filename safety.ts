const RISK = [/me matar/i, /suic[ií]d/i, /quero morrer/i, /acabar com (tudo|minha vida)/i, /me machucar/i, /automutila/i];
export const detectCrisis = (text: string): boolean => RISK.some((r) => r.test(text));
