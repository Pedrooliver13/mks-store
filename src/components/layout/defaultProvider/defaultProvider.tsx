// Packages
import { ReactElement } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

// Libs
import StyledComponentsRegistry from "lib/registry";

// Styles
import { GlobalStyle } from "styles/global";
import { defaultTheme } from "styles/theme/default";

interface DefaultProviderProps {
  children: ReactElement;
}

export const DefaultProvider = ({
  children,
}: DefaultProviderProps): ReactElement => {
  return (
    <StyledComponentsRegistry>
      <StyleSheetManager
        enableVendorPrefixes
        shouldForwardProp={(propName, elementToBeRendered) => {
          return typeof elementToBeRendered === "string"
            ? isPropValid(propName)
            : true;
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StyleSheetManager>
    </StyledComponentsRegistry>
  );
};
