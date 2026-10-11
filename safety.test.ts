import { describe, it, expect } from 'vitest';
import { detectCrisis } from '../src/services/safety';
describe('safety', () => {
  it('detecta risco', () => expect(detectCrisis('quero morrer')).toBe(true));
  it('ignora texto comum', () => expect(detectCrisis('estou ansioso')).toBe(false));
});
