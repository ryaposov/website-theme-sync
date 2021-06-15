(function (w) {
  function setCookie(cname, cvalue, exdays, domain, path) {
    const d = new Date()
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    const expires = 'expires='+ d.toUTCString()

    document.cookie = cname + '=' + cvalue + ';' + expires + ';domain=' + domain + ';path=' + path
  }

  function getCookie(cname) {
    const name = cname + '='
    const ca = decodeURIComponent(document.cookie).split(';')

    for (var i = 0; i <ca.length; i++) {
      let c = ca[i]

      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }

    return '';
  }

  const onPreferredColorSchemeChange = (dark) => {
    const activeThemeDark = getCookie('night_mode') === '1'

    if (activeThemeDark === dark) {
      return
    } else {
      setCookie('night_mode', dark ? '1' : '0', 30, '.twitter.com', '/')
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
