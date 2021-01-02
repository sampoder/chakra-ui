import * as CSS from "csstype"
import { createParser, Config, system } from "../core"
import { Length, ResponsiveValue, t } from "../utils"
import { ThemeTypings } from "../theming.types"

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
export interface GridProps<Theme extends ThemeTypings = ThemeTypings> {
  /**
   * The CSS `grid-gap` property
   */
  gridGap?: ResponsiveValue<CSS.Property.GridGap<Length> | Theme["sizes"]>
  /**
   * The CSS `grid-column-gap` property
   */
  gridColumnGap?: ResponsiveValue<
    CSS.Property.GridColumnGap<Length> | Theme["sizes"]
  >
  /**
   * The CSS `grid-row-gap` property
   */
  gridRowGap?: ResponsiveValue<CSS.Property.GridRowGap<Length> | Theme["sizes"]>
  /**
   * The CSS `grid-column` property
   */
  gridColumnStart?: ResponsiveValue<CSS.Property.GridColumnStart>
  /**
   * The CSS `grid-column` property
   */
  gridColumnEnd?: ResponsiveValue<CSS.Property.GridColumnEnd>
  /**
   * The CSS `grid-column` property
   */
  gridColumn?: ResponsiveValue<CSS.Property.GridColumn>
  /**
   * The CSS `grid-row` property
   */
  gridRow?: ResponsiveValue<CSS.Property.GridRow>
  /**
   * The CSS `grid-auto-flow` property
   */
  gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow>
  /**
   * The CSS `grid-auto-columns` property
   */
  gridAutoColumns?: ResponsiveValue<
    Theme["sizes"] | CSS.Property.GridAutoColumns<Length>
  >
  /**
   * The CSS `grid-auto-rows` property
   */
  gridAutoRows?: ResponsiveValue<
    Theme["sizes"] | CSS.Property.GridAutoRows<Length>
  >
  /**
   * The CSS `grid-template-columns` property
   */
  gridTemplateColumns?: ResponsiveValue<
    Theme["sizes"] | CSS.Property.GridTemplateColumns<Length>
  >
  /**
   * The CSS `grid-template-rows` property
   */
  gridTemplateRows?: ResponsiveValue<
    Theme["sizes"] | CSS.Property.GridTemplateRows<Length>
  >
  /**
   * The CSS `grid-template-areas` property
   */
  gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas>
  /**
   * The CSS `grid-areas` property
   */
  gridArea?: ResponsiveValue<CSS.Property.GridArea>
  /**
   * The CSS `place-items` property
   */
  placeItems?: ResponsiveValue<CSS.Property.PlaceItems>
}

export const grid = system(config)
export const gridParser = createParser(config)
