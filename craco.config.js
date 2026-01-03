module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Находим правило oneOf, которое содержит все правила для файлов
      const oneOfRule = webpackConfig.module.rules.find(
        (rule) => rule.oneOf
      )

      if (oneOfRule && oneOfRule.oneOf) {
        // Находим правило для CSS модулей, чтобы скопировать его конфигурацию
        const cssModuleRule = oneOfRule.oneOf.find(
          (rule) =>
            rule.test &&
            rule.test.toString().includes('module') &&
            rule.test.toString().includes('css')
        )

        if (cssModuleRule && cssModuleRule.use) {
          // Создаем правило для Stylus модулей
          // Stylus-loader должен быть последним в массиве use (выполняется первым)
          const stylusModuleRule = {
            test: /\.module\.styl$/,
            use: [
              ...cssModuleRule.use,
              {
                loader: require.resolve('stylus-loader')
              }
            ]
          }

          // Находим индекс правила для CSS модулей
          const cssModuleRuleIndex = oneOfRule.oneOf.findIndex(
            (rule) =>
              rule.test &&
              rule.test.toString().includes('module') &&
              rule.test.toString().includes('css')
          )

          // Вставляем правило для Stylus модулей перед правилом для CSS модулей
          // (чтобы оно обрабатывалось первым)
          oneOfRule.oneOf.splice(cssModuleRuleIndex, 0, stylusModuleRule)
        }
      }

      return webpackConfig
    }
  }
}

