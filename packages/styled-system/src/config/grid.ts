import * as CSS from "csstype"
import { createParser, Config, system } from "../core"
import { Token, t } from "../utils"

const config: Config = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
  placeItems: true,
}

/**
 * Types for grid related CSS properties
 */
export interface GridProps {
  /**
   * The CSS `grid-gap` property
   */
  gridGap?: Token<CSS.Property.GridGap | number, "sizes">
  /**
   * The CSS `grid-column-gap` property
   */
  gridColumnGap?: Token<CSS.Property.GridColumnGap | number, "sizes">
  /**
   * The CSS `grid-row-gap` property
   */
  gridRowGap?: Token<CSS.Property.GridRowGap | number, "sizes">
  /**
   * The CSS `grid-column` property
   */
  gridColumnStart?: Token<CSS.Property.GridColumnStart>
  /**
   * The CSS `grid-column` property
   */
  gridColumnEnd?: Token<CSS.Property.GridColumnEnd>
  /**
   * The CSS `grid-column` property
   */
  gridColumn?: Token<CSS.Property.GridColumn>
  /**
   * The CSS `grid-row` property
   */
  gridRow?: Token<CSS.Property.GridRow>
  /**
   * The CSS `grid-auto-flow` property
   */
  gridAutoFlow?: Token<CSS.Property.GridAutoFlow>
  /**
   * The CSS `grid-auto-columns` property
   */
  gridAutoColumns?: Token<CSS.Property.GridAutoColumns | number, "sizes">
  /**
   * The CSS `grid-auto-rows` property
   */
  gridAutoRows?: Token<CSS.Property.GridAutoRows | number, "sizes">
  /**
   * The CSS `grid-template-columns` property
   */
  gridTemplateColumns?: Token<
    CSS.Property.GridTemplateColumns | number,
    "sizes"
  >
  /**
   * The CSS `grid-template-rows` property
   */
  gridTemplateRows?: Token<CSS.Property.GridTemplateRows | number, "sizes">
  /**
   * The CSS `grid-template-areas` property
   */
  gridTemplateAreas?: Token<CSS.Property.GridTemplateAreas>
  /**
   * The CSS `grid-areas` property
   */
  gridArea?: Token<CSS.Property.GridArea>
  /**
   * The CSS `place-items` property
   */
  placeItems?: Token<CSS.Property.PlaceItems>
}

export const grid = system(config)
export const gridParser = createParser(config)
