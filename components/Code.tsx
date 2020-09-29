import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import loadable from '@loadable/component';
import theme from 'prism-react-renderer/themes/nightOwl';

import Copy from './Copy';
import { Box, styled, ThemeProvider } from 'minerva-ui';
import { customTheme } from '../pages/_app';

export type Language =
  | "markup"
  | "bash"
  | "clike"
  | "c"
  | "cpp"
  | "css"
  | "javascript"
  | "jsx"
  | "coffeescript"
  | "actionscript"
  | "css-extr"
  | "diff"
  | "git"
  | "go"
  | "graphql"
  | "handlebars"
  | "json"
  | "less"
  | "makefile"
  | "markdown"
  | "objectivec"
  | "ocaml"
  | "python"
  | "reason"
  | "sass"
  | "scss"
  | "sql"
  | "stylus"
  | "tsx"
  | "typescript"
  | "wasm"
  | "yaml"

type CodeProps = {
  codeString: string;
  language: Language
  noLineNumbers?: boolean;
  metastring?: string;
  [key: string]: any;
};

const showLineNumbers = true;
const showCopyButton = true;

function getParams(className = ``): [Language, any] {
  const [lang = ``, params = ``] = className.split(`:`);


  const parsedParams = params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`);
      // @ts-ignore
      merged[key] = value;
      return merged;
    }, {})

  return [
    // @ts-ignore
    lang.split(`language-`).pop().split(`{`).shift(),
    parsedParams
  ];
}

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false;
  }
  const lineNumbers = RE.exec(meta)![1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)));
  return (index: number) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );
    return inRange;
  };
};

const PreviewStyles = styled.div`
  padding: 18px;
  background-color: #fff;

  button {
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    color: rgb(55, 65, 81);
    font-weight: 500;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    font-size: 14px;
    line-height: 20px;
    padding: 8px 16px;
    border-radius: 5px;
    border-style: solid;
    border-color: rgb(210, 214, 220);
    border-width: 1px;
  }
`;

const LazyLiveProvider = loadable(async () => {
  const Module = await import(`react-live`);
  const { LiveProvider, LiveEditor, LiveError, LivePreview } = Module;
  return (props: any) => (
    <LiveProvider {...props}>
      {props.showCopyButton && <Copy content={props.code} />}
      <LiveEditor data-name="live-editor" />
      <LiveError />
      <PreviewStyles>
        <LivePreview data-name="live-preview" />
      </PreviewStyles>
    </LiveProvider>
  );
});

const Code = ({
  codeString,
  noLineNumbers = false,
  className: blockClassName,
  metastring = ``,
  ...props
}: CodeProps) => {
  // const { showLineNumbers, showCopyButton } = useMinimalBlogConfig()

  const [language, { title = `` }] = getParams(blockClassName);
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  const hasLineNumbers =
    !noLineNumbers && showLineNumbers;

  if (props[`react-live`]) {
    return (
      <div className="react-live-wrapper">
        <LazyLiveProvider
          code={codeString}
          noInline
          theme={theme}
          showCopyButton={showCopyButton}
        />
      </div>
    );
  }
  return (
    <ThemeProvider theme={customTheme}>
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <React.Fragment>
          {title && (
            <Box padding="8px 16px" bg="rgb(130, 170, 255)" fontFamily={`Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`}>
              {title}
            </Box>
          )}
          <div className="code-highlight" data-language={language} style={{ position: 'relative', marginBottom: '32px' }}>
            <pre
              className={className}
              style={style}
              data-linenumber={hasLineNumbers}
            >
              {showCopyButton && <Copy content={codeString} fileName={title} />}
              <code className={`language-${language}`}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`;
                  }

                  return (
                    <div {...lineProps}>
                      {hasLineNumbers && (
                        <span className="line-number-style">{i + 1}</span>
                      )}
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>
        </React.Fragment>
      )}
      </Highlight>
      </ThemeProvider>
  );
};

export default Code;
