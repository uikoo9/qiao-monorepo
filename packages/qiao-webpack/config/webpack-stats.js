'use strict';

/**
 * webpack stats
 */
module.exports = {
    colors              : true,

    // assets
    assets              : true,
    assetsSort          : '!size',
    assetsSpace         : 200,
    groupAssetsByChunk  : true,
    
    // chunks
    chunks              : false,
    chunksSort          : 'id',
    chunkModules        : false,
    chunkOrigins        : false,
    chunkGroups         : false,
    chunkRelations      : false,
    chunkModulesSpace   : 200,

    // false
    builtAt             : false,
    children            : false,
    depth               : false,
    entrypoints         : false,
    cachedAssets        : false,
    cachedModules       : false,
    dependentModules    : false,
    modules             : false,
    moduleAssets        : false,
    modulesSort         : 'id',
    modulesSpace        : 200,
    nestedModules       : false,
    nestedModulesSpace  : 200,
    relatedAssets       : false,
    runtimeModules      : false,
    groupAssetsByEmitStatus     : false,
    groupAssetsByExtension      : false,
    groupAssetsByInfo           : false,
    groupAssetsByPath           : false,
    groupModulesByAttributes    : false,
    groupModulesByCacheStatus   : false,
    groupModulesByExtension     : false,
    groupModulesByLayer         : false,
    groupModulesByPath          : false,
    groupModulesByType          : false,
    groupReasonsByOrigin        : false,
};