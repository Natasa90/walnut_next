import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type ExtraProps = Record<string, any>;

export const loadTranslation = async (
  context: GetStaticPropsContext,
  extraProps: ExtraProps = {}
) => {
  const locale = context.locale || 'sr';
  const translations = await serverSideTranslations(locale, ['common']);

  return {
    props: {
      ...translations,
      ...extraProps,
    },
  };
};
