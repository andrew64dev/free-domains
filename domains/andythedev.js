addSubDomain({
    description: 'I use this domain for my stuff, i didnt put a repo because i would use it for multiple stuff like minecraft, a website, cloudflared (the cloudflare tunnels).', // describe your project in this field
    domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
    subdomain: 'foobar', // desired subdomain name
    owner: {
      repo: '',
      email: 'externalandrew02@gmail.com', // not the same email as my github one
    },
    record: {}, // i want to set this up with cloudflare
    proxy: false
  })