export const CtaInternal = `
  {
    _key,
    _type,
    title,
    content-> {
      dynamicRoute,
      slug
    }
  }
`;

export const CtaExternal = `
  {
    _key,
    _type,
    title,
    url,
  }
`;

export const CtaEmail = `
  {
    _key,
    _type,
    title,
    email,
  }
`;

export const CtaPhone = `
  {
    _key,
    _type,
    title,
    phoneNumber,
  }
`;

export const Cta = `
  {
    _type == "common.internalLink" => ${CtaInternal},
    _type == "common.externalLink" => ${CtaExternal},
    _type == "common.emailLink" => ${CtaEmail},
    _type == "common.telLink" => ${CtaPhone},

  }
`;
