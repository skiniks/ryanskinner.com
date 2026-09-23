import { gaId } from '@/lib/site'

const GTM_BOOTSTRAP = `(function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}function loadGTM(){if(window.__gtmLoaded)return;window.__gtmLoaded=true;gtag('js',new Date());gtag('config','${gaId}');var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=${gaId}';s.async=true;document.head.appendChild(s)}document.addEventListener('click',loadGTM,{once:true,passive:true});document.addEventListener('scroll',loadGTM,{once:true,passive:true});document.addEventListener('keydown',loadGTM,{once:true,passive:true});setTimeout(loadGTM,3000)})()`

export default function Analytics() {
  return (
    <>
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <script
        // eslint-disable-next-line react/dom-no-dangerously-set-innerhtml
        dangerouslySetInnerHTML={{ __html: GTM_BOOTSTRAP }}
      />
    </>
  )
}
