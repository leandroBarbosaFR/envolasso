export default () => `
 {
   'siteHeader':  *[_type == $siteHeader && __i18n_lang == $locale && !(_id in path('drafts.**'))][0]{
    ...,
    navigationSite {
      ...,
      naviagtionList[]{
        ...,
        content-> {
          title,
          dynamicRoute,
          slug,
        },
        navigationDropdownList[]{
          ...,
          content-> {
            title,
            dynamicRoute,
            slug
          },
        }
      }
    },
    navigationUserAccount {
      ...,
      naviagtionList[]{
        ...,
        content-> {
          title,
          dynamicRoute,
          slug,
        },
        navigationDropdownList[]{
          ...,
          content-> {
            title,
            dynamicRoute,
            slug
          },
        }
      }
    }
  },

  'siteFooter': *[_type == $siteFooter && __i18n_lang == $locale][0]{
    ...,
    columnsContent[] {
      ...,
        naviagtionList[]{
          ...,
          content-> {
            title,
            dynamicRoute,
            slug
          },
          navigationDropdownList[]{
            ...,
            content-> {
              title,
              dynamicRoute,
              slug
            },
          }
        }
    },
    navigationSocial {
      ...,
    },
    navigationFooter{
      ...,
      naviagtionList[]{
        ...,
        content-> {
          title,
          dynamicRoute,
          slug
        }, 
        navigationDropdownList[]{
          ...,
          content-> {
            title,
            dynamicRoute,
            slug
          }, 
        },
      },
    }
  }
 }
`;
