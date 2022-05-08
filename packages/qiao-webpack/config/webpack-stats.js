'use strict';

/**
 * webpack stats
 */
module.exports = {
    colors              : true,

    // assets
    assets              : true,
    assetsSort          : '!size',
    assetsSpace         : 20,
    groupAssetsByChunk  : true,
    
    // chunks
    chunks              : false,
    chunksSort          : 'id',
    chunkModules        : false,
    chunkOrigins        : false,
    chunkGroups         : false,
    chunkRelations      : false,
    chunkModulesSpace   : 100,

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
    modulesSpace        : 20,
    nestedModules       : false,
    nestedModulesSpace  : 20,
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