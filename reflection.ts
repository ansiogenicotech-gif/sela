import { Router } from 'express';
import { detectCrisis } from '../services/safety';

export const reflectionRouter = Router();

// Fases 2/3: selecionar versículo da base verificada + gerar reflexão via IA.
reflectionRouter.post('/', (req, res) => {
  const text = String(req.body?.text ?? '').trim();
  if (!text) return res.status(400).json({ error: 'Escreva algo para continuar.' });

  if (detectCrisis(text)) {
    return res.json({
      mode: 'safety',
      message:
        'Sentimos muito que você esteja passando por isso. Você não precisa enfrentar sozinho. ' +
        'Ligue para o CVV no 188 (24h) ou procure alguém de confiança. Em perigo imediato, ligue 190 ou 192.',
    });
  }
  // Não simulamos IA nem inventamos versículos.
  res.status(501).json({ mode: 'demo', error: 'Reflexão por IA ainda não configurada (Fase 3).' });
});
