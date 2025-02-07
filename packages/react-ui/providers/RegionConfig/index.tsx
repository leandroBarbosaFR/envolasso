import React, { createContext, useContext, useEffect, useState } from 'react';
import { Translation as TranslationType } from '@agency-platform/shared-types';

interface RegionConfigProps {
  children: React.ReactNode | React.ReactNode[];
  locale: string;
  siteSettings: any;
}

interface RegionConfigContextType {
  locale: string;
  translation?: TranslationType;
  siteSettings: any;
}

const RegionConfigContext = createContext<RegionConfigContextType | undefined>(undefined);

export const RegionConfigProvider = ({ children, locale, siteSettings }: RegionConfigProps) => {
  const [translation, setTranslation] = useState<TranslationType | undefined>(undefined); // Initialize as undefined

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const { default: translations } = await import(`../../config/translations/${locale}.ts`);
        setTranslation(translations); // Set the translations without type assertion
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
  }, [locale]);

  return (
    <RegionConfigContext.Provider
      value={{
        locale,
        translation,
        siteSettings
      }}
    >
      {children}
    </RegionConfigContext.Provider>
  );
};

export const useRegionConfig = () => {
  const context = useContext(RegionConfigContext);
  if (!context) {
    throw new Error('useRegionConfig must be used within a RegionConfigProvider');
  }
  return context;
};
