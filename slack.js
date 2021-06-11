(function (w) {
  const onPreferredColorSchemeChange = (dark) => {
    const activeThemeDark = w.localStorage.getItem('slack-client-theme') === 'dark'

    if (activeThemeDark === dark) {
      return
    } else {
      w.localStorage.setItem('slack-client-theme', dark ? 'dark' : 'light')
      w.location.reload()

      return
    }
  }
  const matchCondition = w.matchMedia('(prefers-color-scheme: dark)')
  
  // Set active color scheme
  onPreferredColorSchemeChange(matchCondition.matches)

  // Watch system color-theme change
  if (matchCondition.addEventListener) matchCondition.addEventListener('change', e => onPreferredColorSchemeChange(e.matches))
})(window)
