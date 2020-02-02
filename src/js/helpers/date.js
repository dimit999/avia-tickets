import { format } from 'date-fns';

/**
 *
 * @param {String} str
 * @param {String} type
 *
 */
// eslint-disable-next-line import/prefer-default-export
export function formatDate(str, type) {
  const date = new Date(str);
  return format(date, type);
}
