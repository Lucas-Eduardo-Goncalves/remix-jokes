export type IDocumentProps = {
  children: React.ReactNode;
  title?: string | undefined;
};

export type IDocument = (documentProps: IDocumentProps) => JSX.Element;
