import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    exhibition: {
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
