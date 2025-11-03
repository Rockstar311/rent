import { useFiltersStore } from '../../../store/use-filters-store';
import { useFormik } from 'formik';
import { priceRangeSchema, PriceRangeValues } from './price-range-schema';
import { useEffect } from 'react';

export const usePriceRangeFilter = () => {
  const { setPriceFilter } = useFiltersStore();

  const formik = useFormik<PriceRangeValues>({
    initialValues: { min: undefined, max: undefined },
    validate: (values) => {
      const parsed = priceRangeSchema.safeParse(values);
      if (parsed.success) {
        return {};
      }
      return parsed.error.flatten().fieldErrors;
    },
    onSubmit: () => undefined,
  });

  // Emit valid values whenever they change
  useEffect(() => {
    const handler = setTimeout(() => {
      console.log(formik);
      const parsed = priceRangeSchema.safeParse(formik.values);
      console.log(parsed);
      if (parsed.success) {
        setPriceFilter(formik.values.min, formik.values.max);
      }
    }, 400);

    return () => clearTimeout(handler);
  }, [formik.values]);

  return formik;
};
