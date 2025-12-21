import { ACHIEVEMENTS_VI } from './achievements.vi';
import { ACHIEVEMENTS_EN } from './achievements.en';
import { Achievement, Language } from '../../../types';

export const ACHIEVEMENTS: Record<Language, Achievement[]> = {
  vi: ACHIEVEMENTS_VI,
  en: ACHIEVEMENTS_EN
};
