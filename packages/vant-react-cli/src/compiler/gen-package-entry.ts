import { join } from 'path';
import {
  pascalize,
  getComponents,
  smartOutputFile,
  normalizePath,
} from '../common/index.js';
import { SRC_DIR, getPackageJson, getVantConfig } from '../common/constant.js';

type PathResolver = (path: string) => string;

function getPathByName(name: string, pathResolver?: PathResolver) {
  let path = join(SRC_DIR, name);
  if (pathResolver) {
    path = pathResolver(path);
  }
  return normalizePath(path);
}

function genImports(
  names: string[],
  pathResolver?: PathResolver,
  namedExport?: boolean
): string {
  return names
    .map((name) => {
      const pascalName = pascalize(name);
      const importName = namedExport ? `{ ${pascalName} }` : pascalName;
      const importPath = getPathByName(name, pathResolver);

      return `import ${importName} from '${importPath}';`;
    })
    .join('\n');
}

function genExports(
  names: string[],
  pathResolver?: PathResolver,
  namedExport?: boolean
): string {
  if (namedExport) {
    const exports = names
      .map((name) => `export * from '${getPathByName(name, pathResolver)}';`)
      .join('\n');

    return `
  export {
    install,
    version,
  };
  ${exports}
`;
  }

  return `
  export {
    install,
    version,
    ${names.map(pascalize).join(',\n  ')}
  };
  `;
}

export function genPackageEntry({
  outputPath,
  pathResolver,
}: {
  outputPath: string;
  pathResolver?: PathResolver;
}) {
  const names = getComponents();
  const vantConfig = getVantConfig();

  const namedExport = vantConfig.build?.namedExport || false;

  const version = process.env.PACKAGE_VERSION || getPackageJson().version;

  const content = `${genImports(names, pathResolver, namedExport)}

const version = '${version}';


${genExports(names, pathResolver, namedExport)}

export default {
  version
};
`;

  smartOutputFile(outputPath, content);
}
