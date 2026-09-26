// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname)

config.resolver.sourceExts.push('sql')
config.resolver.assetExts.push('gguf', 'raw')

// Inline requires: lazy-load modules para inicio más rápido
config.transformer = {
    ...config.transformer,
    getTransformOptions: async () => ({
        transform: {
            inlineRequires: true,
        },
    }),
}

// blockList: excluir directorios pesados del watcher
config.resolver.blockList = [
    /android\/build\/.*/,
    /android\/.gradle\/.*/,
    /ios\/build\/.*/,
    /node_modules\/.*\/android\/build\/.*/,
]

module.exports = config
