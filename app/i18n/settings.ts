export const fallbackLng = 'en';
export const languages = ['en', 'fr', 'de', 'ko', 'ja', 'zh'];
export const defaultNS = 'translation';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}