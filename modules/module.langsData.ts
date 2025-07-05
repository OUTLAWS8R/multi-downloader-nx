// available langs

export type LanguageItem = {
  cr_locale?: string,
  hd_locale?: string,
  adn_locale?: string,
  new_hd_locale?: string,
  ao_locale?: string,
  locale: string,
  code: string,
  name: string,
  language?: string
}

const languages: LanguageItem[] = [
  { cr_locale: 'en-US',  locale: 'en-US',  code: 'en-US',   name: 'English',                   language: 'English(US)', new_hd_locale: 'en-US', },
  { cr_locale: 'en-IN',  locale: 'en-IN',  code: 'en-IN',   name: 'English',                   language: 'English(India)'},
  { cr_locale: 'es-LA',  locale: 'es-419', code: 'spa',     name: 'Spanish',                   language: 'Spanish (Latin American) / Español (América Latina)',},
  { cr_locale: 'es-419', locale: 'es-419', code: 'spa-419', name: 'Spanish (Latin American)',  language: 'Español (América Latina)', new_hd_locale: 'es-MX', ao_locale: 'es-419'    },
  { cr_locale: 'es-ES',  locale: 'es-ES',  code: 'spa-ES',  name: 'Spanish',                   language: 'Español (España)'        },
  { cr_locale: 'fr-FR',  locale: 'fr-FR',  code: 'fr-FR',   name: 'French',                    language: 'Français (France)',  hd_locale: 'French', adn_locale: 'fr-FR',       },
  { cr_locale: 'pt-BR',  locale: 'pt-BR',  code: 'pt-BR',   name: 'Portuguese (Brazilian)',    language: 'Português (Brasil)', new_hd_locale: 'pt-BR', ao_locale: 'pt-BR'              },
  { cr_locale: 'pt-PT',  locale: 'pt-PT',  code: 'pt-PT',   name: 'Portuguese (European)',     language: 'Português (Portugal)',  },
  { cr_locale: 'ar-ME',  locale: 'ar-ME',  code: 'ar-ME',   name: 'Arabic',                    language: 'العربية',              },
  { cr_locale: 'ar-SA',  locale: 'ar-SA',  code: 'ar-SA',   name: 'Arabic',                    language: 'العربية',      hd_locale: 'Arabic',             },
  { cr_locale: 'it-IT',  locale: 'it-IT',  code: 'it-IT',   name: 'Italian',                   language: 'Italiano',      hd_locale: 'Italian',            },
  { cr_locale: 'de-DE',  locale: 'de-DE',  code: 'de-DE',   name: 'German',                    language: 'Deutsch',       hd_locale: 'German',             },
  { cr_locale: 'ru-RU',  locale: 'ru-RU',  code: 'ru-RU',   name: 'Russian',                   language: 'Русский',       hd_locale: 'Russian',              },
  { cr_locale: 'tr-TR',  locale: 'tr-TR',  code: 'tr-TR',   name: 'Turkish',                   language: 'Türkçe',        hd_locale: 'Turkish',              },
  { cr_locale: 'hi-IN',  locale: 'hi-IN',  code: 'hi-IN',   name: 'Hindi',                     language: 'हिन्द',                  },
  { cr_locale: 'ca-ES',  locale: 'ca-ES',  code: 'ca-ES',   name: 'Catalan',                   language: 'Català' ,  },
  { cr_locale: 'pl-PL',  locale: 'pl-PL',  code: 'pl-PL',   name: 'Polish',                    language: 'Polski',  },
  { cr_locale: 'th-TH',  locale: 'th-TH',  code: 'th-TH',   name: 'Thai',                      language: 'ไทย',   },
  { cr_locale: 'ta-IN',  locale: 'ta-IN',  code: 'ta-IN',   name: 'Tamil (India)',             language: 'தமிழ்', },
  { cr_locale: 'ms-MY',  locale: 'ms-MY',  code: 'ms-MY',   name: 'Malay (Malaysia)',          language: 'Bahasa Melayu', },
  { cr_locale: 'vi-VN',  locale: 'vi-VN',  code: 'vi-VN',   name: 'Vietnamese',                language: 'Tiếng Việt', },
  { cr_locale: 'id-ID',  locale: 'id-ID',  code: 'id-ID',   name: 'Indonesian',                language: 'Bahasa Indonesia', },
  { cr_locale: 'te-IN',  locale: 'te-IN',  code: 'te-IN',   name: 'Telugu (India)',            language: 'తెలుగు' },
  { locale: 'zh', code: 'cmn', name: 'Chinese (Mandarin, PRC)' },
  { cr_locale: 'zh-CN',  locale: 'zh-CN',  code: 'zh-CN',   name: 'Chinese (Mainland China)',  language: '正體字',                            },
  { cr_locale: 'zh-HK',  locale: 'zh-HK',  code: 'zh-HK',   name: 'Chinese (Hong-Kong)',       language: '中文 (粵語)',                            },
  { cr_locale: 'zh-TW',  locale: 'zh-TW',  code: 'zh-TW',   name: 'Chinese (Taiwan)',          language: '中文 (國語)',                            },
  { cr_locale: 'ko-KR',  locale: 'ko-KR',  code: 'ko-KR',   name: 'Korean',                    language: '한국어',           hd_locale: 'Korean',          },
  { cr_locale: 'ja-JP',  locale: 'ja-JP',  code: 'ja-JP',   name: 'Japanese',                  language: 'Japanese',        ao_locale: 'ja-JP',  adn_locale: 'ja-JP', hd_locale: 'Japanese'   },
];

// add en language names
(() =>{
  for(const languageIndex in languages){
    if(!languages[languageIndex].language){
      languages[languageIndex].language = languages[languageIndex].name;
    }
  }
})();

// construct dub language codes
const dubLanguageCodes = (() => {
  const dubLanguageCodesArray: string[] = [];
  for(const language of languages){
    dubLanguageCodesArray.push(language.code);
  }
  return [...new Set(dubLanguageCodesArray)];
})();

// construct subtitle languages filter
const subtitleLanguagesFilter = (() => {
  const subtitleLanguagesExtraParameters = ['all', 'none'];
  return [...subtitleLanguagesExtraParameters, ...new Set(languages.map(l => { return l.locale; }))];
})();

const searchLocales = (() => {
  return ['', ...new Set(languages.map(l => { return l.cr_locale; }).slice(0, -1)), ...new Set(languages.map(l => { return l.adn_locale; }).slice(0, -1))];
})();

export const aoSearchLocales = (() => {
  return ['', ...new Set(languages.map(l => { return l.ao_locale; }).slice(0, -1))];
})();

// convert
const fixLanguageTag = (tag: string) => {
  tag = typeof tag == 'string' ? tag : 'und'; 
  const tagLangLC = tag.match(/^(\w{2})-?(\w{2})$/);
  if(tagLangLC){
    const tagLang = `${tagLangLC[1]}-${tagLangLC[2].toUpperCase()}`;
    if(findLang(tagLang).cr_locale != 'und'){
      return findLang(tagLang).cr_locale;
    }
    else{
      return tagLang;
    }
  }
  else{
    return tag;
  }
};

// find lang by cr_locale
const findLang = (cr_locale: string) => {
  const lang = languages.find(l => { return l.cr_locale == cr_locale; });
  return lang ? lang : { cr_locale: 'und', locale: 'un', code: 'und', name: '', language: '' };
};

const fixAndFindCrLC = (cr_locale: string) => {
  const str = fixLanguageTag(cr_locale);
  return findLang(str || '');
};

// rss subs lang parser
const parseRssSubtitlesString = (subs: string) => {
  const splitMap = subs.replace(/\s/g, '').split(',').map((s) => {
    return fixAndFindCrLC(s).locale;
  });
  const sort = sortTags(splitMap);
  return sort.join(', ');
};


// parse subtitles Array
const parseSubtitlesArray = (tags: string[]) => {
  const sort = sortSubtitles(tags.map((t) => {
    return { locale: fixAndFindCrLC(t).locale };
  }));
  return sort.map((t) => { return t.locale; }).join(', ');
};

// sort subtitles
const sortSubtitles = <T extends {
  [key: string]: unknown
} = Record<string, string>> (data: T[], sortkey?: keyof T) : T[] => {
  const idx: Record<string, number> = {};
  const key = sortkey || 'locale' as keyof T;
  const tags = [...new Set(Object.values(languages).map(e => e.locale))];
  for(const l of tags){
    idx[l] = Object.keys(idx).length + 1;
  }
  data.sort((a, b) => {
    const ia = idx[a[key] as string] ? idx[a[key] as string] : 50;
    const ib = idx[b[key] as string] ? idx[b[key] as string] : 50;
    return ia - ib;
  });
  return data;
};

const sortTags = (data: string[]) => {
  const retData = data.map(e => { return { locale: e }; });
  const sort = sortSubtitles(retData);
  return sort.map(e => e.locale as string);
};

const subsFile = (fnOutput:string, subsIndex: string, langItem: LanguageItem, isCC: boolean, ccTag: string, isSigns?: boolean, format?: string) => {
  subsIndex = (parseInt(subsIndex) + 1).toString().padStart(2, '0');
  return `${fnOutput}.${subsIndex}.${langItem.code}.${langItem.language}${isCC ? `.${ccTag}` : ''}${isSigns ? '.signs' : ''}.${format ? format : 'ass'}`;
};

// construct dub langs const
const dubLanguages = (() => {
  const dubDb: Record<string, string> = {};
  for(const lang of languages){
    if(!Object.keys(dubDb).includes(lang.name)){
      dubDb[lang.name] = lang.code;
    }
  }
  return dubDb;
})();

// dub regex
const dubRegExpStr =
    `\\((${Object.keys(dubLanguages).join('|')})(?: (Dub|VO))?\\)$`;
const dubRegExp = new RegExp(dubRegExpStr);

// code to lang name
const langCode2name = (code: string) => {
  const codeIdx = dubLanguageCodes.indexOf(code);
  return Object.keys(dubLanguages)[codeIdx];
};

// locale to lang name
const locale2language = (locale: string) => {
  const filteredLocale = languages.filter(l => {
    return l.locale == locale;
  });
  return filteredLocale[0];
};

// output
export {
  languages,
  dubLanguageCodes,
  dubLanguages,
  langCode2name,
  locale2language,
  dubRegExp,
  subtitleLanguagesFilter,
  searchLocales,
  fixLanguageTag,
  findLang,
  fixAndFindCrLC,
  parseRssSubtitlesString,
  parseSubtitlesArray,
  sortSubtitles,
  sortTags,
  subsFile,
};
