import Script from 'next/script';

const FixedContact = () => (
  <>
    <div className="fix_tel bg-blue-500 rounded-full w-48 flex items-center">
      <div id="app">
        <a rel="nofollow" href="tel:0987707768">
          <i className="fas fa-phone"></i>
        </a>
      </div>
      <a
        rel="nofollow"
        href="tel:0987707768"
        className="text-white text-lg font-bold z-40 relative block ml-3"
      >
        0987.707.768
      </a>
    </div>
    <>
      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/63dcdd81c2f1ac1e203132b3/1gobc2gif"
      />
      <iframe
        src="about:blank"
        frameBorder="0"
        scrolling="no"
        width="64px"
        height="60px"
        // style="outline:none !important; visibility:visible !important; resize:none !important; box-shadow:none !important; overflow:visible !important; background:none !important; opacity:1 !important; filter:alpha(opacity=100) !important; -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important; -mz-opacity:1 !important; -khtml-opacity:1 !important; top:auto !important; right:20px !important; bottom:20px !important; left:auto !important; position:fixed !important; border:0 !important; min-height:60px !important; min-width:64px !important; max-height:60px !important; max-width:64px !important; padding:0 !important; margin:0 !important; -moz-transition-property:none !important; -webkit-transition-property:none !important; -o-transition-property:none !important; transition-property:none !important; transform:none !important; -webkit-transform:none !important; -ms-transform:none !important; width:64px !important; height:60px !important; display:block !important; z-index:1000001 !important; background-color:transparent !important; cursor:none !important; float:none !important; border-radius:unset !important; pointer-events:auto !important; clip:auto !important; color-scheme:light !important;"
        id="wf7rke44ij21675412797653"
        className=""
        title="chat widget"
      ></iframe>
    </>
  </>
);

export { FixedContact };
