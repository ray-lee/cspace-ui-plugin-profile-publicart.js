import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    TermPickerInput,
    TextInput,
    StructuredDateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:places_common': {
        placeType: {
          // Replaced by publicArtPlaceTypes. Hide from search.
          [config]: {
            searchDisabled: true,
          },
        },
        placeOwnerGroupList: {
          // Replaced by publicartPlaceOwnerGroupList. Hide from search.
          [config]: {
            searchDisabled: true,
          },
        },
        ...extensions.address.fields,
      },
      'ns2:places_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/place/local/publicart',
          },
        },
        publicArtPlaceTypes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicArtPlaceType: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_publicart.publicArtPlaceType.name',
                  defaultMessage: 'Place type',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'placetypes',
                },
              },
            },
          },
        },
        placementTypes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          placementType: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_publicart.placementType.name',
                  defaultMessage: 'Placement type',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'placementtypes',
                },
              },
            },
          },
        },
        placementEnvironment: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_publicart.placementEnvironment.name',
                defaultMessage: 'Placement environment',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'placementEnvironments',
              },
            },
          },
        },
        publicartPlaceOwnerGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartPlaceOwnerGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_publicart.publicartPlaceOwnerGroup.name',
                  defaultMessage: 'Ownership',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            owner: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_publicart.owner.name',
                    defaultMessage: 'Owner',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
            ownerType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_publicart.ownerType.fullName',
                    defaultMessage: 'Owner type',
                  },
                  name: {
                    id: 'field.places_publicart.ownerType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'placeOwnerTypes',
                  },
                },
              },
            },
            ownershipDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_publicart.ownershipDateGroup.fullName',
                    defaultMessage: 'Ownership date',
                  },
                  groupName: {
                    id: 'field.places_publicart.ownershipDateGroup.groupName',
                    defaultMessage: 'Date',
                  },
                  name: {
                    id: 'field.places_publicart.ownershipDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            ownershipNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_publicart.ownershipNote.fullName',
                    defaultMessage: 'Ownership note',
                  },
                  name: {
                    id: 'field.places_publicart.ownershipNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
