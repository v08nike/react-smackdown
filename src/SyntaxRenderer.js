import React from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'

export default ({ languages, theme, ...rest }) => {
  // Register required languages through lowlight

  if (languages) {
    languages.forEach(language => {
      registerLanguage(language.name, language.syntax);
    })
  }

  // Return new Code component to do the highlighting
  const Code = ({ className = '', children }) => {
    const langClass = className.split('-')[1]
    const language = langClass || undefined

    // Can pass through any props for syntax highlighting
    // https://github.com/conorhastings/react-syntax-highlighter
    const props = {
      language,
      children,
      style: theme,
      ...rest
    }

    return language ? <SyntaxHighlighter {...props} /> : <code>{children}</code>;
  }

  Code.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node
  }

  return Code;
}
