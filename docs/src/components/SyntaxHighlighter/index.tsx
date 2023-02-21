import React, { FC } from 'react';

import ReactHighlightSyntax, {
  Language,
  Theme,
  CopyBtnTheme,
} from 'react-highlight-syntax';

type Props = {
  language: Language;
  theme?: Theme;
  copy?: boolean;
  copyBtnTheme?: CopyBtnTheme;
  children: string;
};

const SyntaxHighlighter: FC<Props> = (props) => {
  const {
    language,
    theme = 'Base16Darcula',
    copy = false,
    copyBtnTheme = 'Dark',
    children,
  } = props;
  return (
    <ReactHighlightSyntax
      language={language}
      theme={theme}
      copy={copy}
      copyBtnTheme={copyBtnTheme}
    >
      {children}
    </ReactHighlightSyntax>
  );
};

export default React.memo(SyntaxHighlighter);
