import * as CSS from "csstype"
import { createParser, Config, system } from "../core"
import { Token, Length, t } from "../utils"

const config: Config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  flexDir: t.prop("flexDirection"),
}

/**
 * Types for flexbox related CSS properties
 */
export interface FlexboxProps {
  /**
   * The CSS `align-items` property
   */
  alignItems?: Token<CSS.Property.AlignItems>
  /**
   * The CSS `align-content` property
   */
  alignContent?: Token<CSS.Property.AlignContent>
  /**
   * The CSS `justify-items` property
   */
  justifyItems?: Token<CSS.Property.JustifyItems>
  /**
   * The CSS `justify-content` property
   */
  justifyContent?: Token<CSS.Property.JustifyContent>
  /**
   * The CSS `flex-wrap` property
   */
  flexWrap?: Token<CSS.Property.FlexWrap>
  /**
   * The CSS `flex-basis` property
   */
  flexBasis?: Token<CSS.Property.FlexBasis<Length>>
  /**
   * The CSS `flex-direction` property
   */
  flexDirection?: Token<CSS.Property.FlexDirection>
  /**
   * The CSS `flex-direction` property
   */
  flexDir?: Token<CSS.Property.FlexDirection>
  /**
   * The CSS `flex` property
   */
  flex?: Token<CSS.Property.Flex<Length>>
  /**
   * The CSS `justify-self` property
   */
  justifySelf?: Token<CSS.Property.JustifySelf>
  /**
   * The CSS `align-self` property
   */
  alignSelf?: Token<CSS.Property.AlignSelf>
  /**
   * The CSS `order` property
   */
  order?: Token<CSS.Property.Order>
  /**
   * The CSS `flex-grow` property
   */
  flexGrow?: Token<CSS.Property.FlexGrow>
  /**
   * The CSS `flex-shrink` property
   */
  flexShrink?: Token<CSS.Property.FlexShrink>
}

export const flexbox = system(config)
export const flexboxParser = createParser(config)
