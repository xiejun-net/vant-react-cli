import { createSpinner } from 'nanospinner';
import color from 'picocolors';
import consola from 'consola';
import { ROOT } from './constant.js';

export function slimPath(path: string) {
  return color.yellow(path.replace(ROOT, ''));
}

export { createSpinner, consola };
