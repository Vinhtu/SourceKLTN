import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import Vietnam from './translations/vi.json';
import English from './translations/en.json';

import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
  en: {
    translation: English,
  },
  vi: {
    translation: Vietnam,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
