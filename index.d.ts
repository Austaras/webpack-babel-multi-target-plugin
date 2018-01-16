import { TransformOptions } from 'babel-core';
import { Loader, NewLoader, Plugin } from 'webpack';

declare interface BabelMultiTargetOptions {
    key: string;
    options: TransformOptions;
    plugins?: () => Plugin[]
}

declare interface BabelPresetOptions {
    spec?: boolean;
    loose?: boolean;
    modules?: 'amd' | 'umd' | 'systemjs' | 'commonjs' | false;
    debug?: boolean;
    include?: Array<string>;
    exclude?: Array<string>;
    useBuiltIns?: 'usage' | 'entry' | false;
    forceAllTransforms?: boolean;
    configPath?: string;
    ignoreBrowserslistConfig?: boolean;
    shippedProposals?: boolean;
}

declare interface BabelConfigHelperOptions {
    babelPlugins?: string[];
    babelPresetOptions?: BabelPresetOptions;
    browserList?: string[];
    exclude?: (string | RegExp)[];
}

declare class BabelConfigHelper {

    constructor(options?: BabelConfigHelperOptions);

    createTransformOptions(): TransformOptions;
    createBabelLoader(): NewLoader;
    createBabelRule(test: RegExp, loaders?: Loader[]);
    createBabelJsRule(loaders?: Loader[]);
    createBabelTsRule(loaders?: Loader[]);
    createBabelAngularRule(loaders?: Loader[]);
    browserProfiles: { [name: string]: string[] };
    profile(browserList?: string[]);

}