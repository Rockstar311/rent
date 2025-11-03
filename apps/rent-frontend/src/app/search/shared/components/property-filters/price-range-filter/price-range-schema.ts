import { z } from 'zod';

export const priceRangeSchema = z
  .object({
    min: z
      .number({ invalid_type_error: 'Must be a number' })
      .nonnegative('Must be ≥ 0')
      .optional(),
    max: z
      .number({ invalid_type_error: 'Must be a number' })
      .nonnegative('Must be ≥ 0')
      .optional(),
  })
  .refine((data) => !data.min || !data.max || data.min <= data.max, {
    message: 'Min cannot be greater than Max',
    path: ['max'],
  });

export type PriceRangeValues = z.infer<typeof priceRangeSchema>;
