import { useCommonTranslation } from "@/lib/hooks/useCommonTranslation";

export const Prices = () => {
	const t = useCommonTranslation();
  return (
    <div className="prices-container p-4 max-w-md mx-auto bg-amber-50 rounded-3xl shadow">
      <h2 className="text-xl font-bold mb-4">{t('prices.title')}</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>{t('prices.nightForTwo')}</li>
        <li>{t('prices.nightForFour')}</li>
        <li>{t('prices.dailySwimming')}</li>
      </ul>
      <p className="text-gray-700">{t('prices.description')}</p>
    </div>
  );
};
