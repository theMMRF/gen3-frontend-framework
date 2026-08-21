import { IndexAndField } from '../guppy/types';

export type FacetType =
  | 'enum'
  | 'exact'
  | 'range'
  | 'age'
  | 'age_in_years'
  | 'year'
  | 'years'
  | 'days'
  | 'percent'
  | 'numeric_range'
  | 'datetime'
  | 'toggle'
  | 'multiselect'
  | 'upload';

// compact string representation of the enum facet sort order for config files
export type FacetSortType =
  | 'value-asc'
  | 'value-dsc'
  | 'label-asc'
  | 'label-desc';

export interface AllowableRange {
  readonly minimum: number;
  readonly maximum: number;
  readonly step?: number;
}

export interface FacetDefinition {
  readonly description?: string; //description from _mapping
  readonly field: string; // full name of field
  readonly dataField?: string; // deprecated
  readonly index: string; // what dataType is this facet for
  readonly type: FacetType; // classified type based on type + name: e.g. age, year, enumeration, etc
  readonly range?: AllowableRange; // range of value types
  readonly hasData?: boolean; // does this facet have data?
  readonly label?: string; // label for facet
  readonly sharedWithIndices?: Array<IndexAndField>; // if this filter is denormalized across indices
  readonly moveValuesToBottom?: Array<string>;
  readonly excludeValues?: Array<string>;
  /**
   * Initial sort order for the facet's values.
   *
   * @defaultValue `value-dsc`
   */
  readonly defaultSort?: FacetSortType;
  /**
   * Whether an enum facet lets users choose how multiple selected values are
   * combined: match any (`or`) or match all (`and`).
   *
   * @remarks Only meaningful when {@link FacetDefinition.type} is `enum`.
   * @defaultValue `false`
   */
  readonly showMatchModeSelector?: boolean;
  /**
   * Overrides the per-value label rendered for this facet when set.
   */
  readonly valueLabel?: string;
}
