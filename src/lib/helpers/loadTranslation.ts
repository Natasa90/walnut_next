import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const loadTranslation = async (context: GetStaticPropsContext) => {
  const locale = context.locale || 'sr';
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
