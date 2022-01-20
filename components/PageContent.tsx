import {
  ComponentPropsWithoutRef
} from "../../../.local/share/JetBrains/Toolbox/apps/WebStorm/ch-0/213.5744.224/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

const PageContent = (props: ComponentPropsWithoutRef<'div'>) => {
  const {children, className, ...rest} = props;

  return (
    <div className={'h-full overflow-auto max-w-4xl pt-20 md:pt-28 mx-auto scrollbar ' + className}
    >
      {children}
    </div>
  );
}

export default PageContent;
