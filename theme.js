//
// vim: sw=2 ts=2 et
import { code as theme} from 'mdx-deck/themes';
import styled from 'styled-components';

const BetterEmphasis = styled.h1`
  em {
    font-style: normal;
    color: orangered;
  }
`

export default {
  ...theme,
  font: "Monospace",
  components: {
    h1: BetterEmphasis
  }
};
