(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(2),a=n(9),s=(n(0),n(211)),c=n(213),r={id:"switching-and-gns3",title:"Switching and GNS3",sidebar_label:"Switching and GNS3"},o={id:"using-gns3/beginners/switching-and-gns3",isDocsHomePage:!1,title:"Switching and GNS3",description:"Introduction",source:"@site/docs/using-gns3/beginners/switching-and-gns3.md",permalink:"/docs/using-gns3/beginners/switching-and-gns3",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/beginners/switching-and-gns3.md",sidebar_label:"Switching and GNS3",sidebar:"someSidebar",previous:{title:"GNS3 Styles",permalink:"/docs/using-gns3/beginners/gns3-styles"},next:{title:"The console terminal",permalink:"/docs/using-gns3/beginners/the-console-terminal"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Cisco Switches",id:"cisco-switches",children:[{value:"IOSvL2",id:"iosvl2",children:[]},{value:"Etherswitch",id:"etherswitch",children:[]},{value:"IOU",id:"iou",children:[]}]},{value:"Non-Cisco",id:"non-cisco",children:[{value:"Unmanaged switching: GNS3 built in switch",id:"unmanaged-switching-gns3-built-in-switch",children:[]},{value:"Open vSwitch",id:"open-vswitch",children:[]},{value:"Others",id:"others",children:[]},{value:"Using a c3725 as an \u201cEtherswitch Router\u201d",id:"using-a-c3725-as-an-etherswitch-router",children:[]}]}],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"One common misconception about GNS3 is that GNS3 does not support advanced switching options. While this was true in the past, GNS3 now supports options such as:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Etherchannel"),Object(s.b)("li",{parentName:"ul"},"PVST+"),Object(s.b)("li",{parentName:"ul"},"RPVST+"),Object(s.b)("li",{parentName:"ul"},"MST"),Object(s.b)("li",{parentName:"ul"},"Port Security"),Object(s.b)("li",{parentName:"ul"},"DTP"),Object(s.b)("li",{parentName:"ul"},"And many others.")),Object(s.b)("p",null,"Complimentary campus technologies such as HSRP are also supported.\nYour selection of image and platform will affect what is possible. Options include:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Cisco IOSvL2"),Object(s.b)("li",{parentName:"ul"},"Etherswitch module"),Object(s.b)("li",{parentName:"ul"},"IOU"),Object(s.b)("li",{parentName:"ul"},"GNS3 built in switch"),Object(s.b)("li",{parentName:"ul"},"Openvswitch"),Object(s.b)("li",{parentName:"ul"},"Others")),Object(s.b)("h2",{id:"cisco-switches"},"Cisco Switches"),Object(s.b)("h3",{id:"iosvl2"},"IOSvL2"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Recommended_switching_platform")," Cisco VIRL IOSvL2"),Object(s.b)("p",null,"With a Cisco VIRL IOSvL2 image, you can configure and test a wide range of advanced switching features. Go here for a full list:"),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://learningnetwork.cisco.com/docs/DOC-30404"}),"https://learningnetwork.cisco.com/docs/DOC-30404")),Object(s.b)("p",null,"This is the official Cisco way of emulating a switch."),Object(s.b)("h3",{id:"etherswitch"},"Etherswitch"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Basic_switching")," Etherswitch module"),Object(s.b)("p",null,"While an Etherswitch module does not support advanced layer 2 features, it does allow you to configure basic VLANs, Spanning Tree and other options."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Instructions on configuring a c3725 router to act as an \u201cetherswitch router\u201d (or \u201cswouter\u201d), with a few basic instructions are found at the bottom of this document"))),Object(s.b)("h3",{id:"iou"},"IOU"),Object(s.b)("p",null,"IOU is a less resource intensive alternative to IOSvL2, but the images are not publicly available. You will need to get them from someone who works at Cisco. In addition, as this is a Cisco internal tool, IOU mages may be buggy and no support is available."),Object(s.b)("h2",{id:"non-cisco"},"Non-Cisco"),Object(s.b)("h3",{id:"unmanaged-switching-gns3-built-in-switch"},"Unmanaged switching: GNS3 built in switch"),Object(s.b)("p",null,"Use this if all you need is a basic switch to connect devices in a GNS3 topology. You cannot configure this switch through a CLI, but you can set the number of ports supported on the switch and other basic settings."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"It\u2019s not running a switch OS, everything is emulated from scratch. This mean some protocol could be buggy. Use it only for basic operations"))),Object(s.b)("h3",{id:"open-vswitch"},"Open vSwitch"),Object(s.b)("p",null,"By leveraging GNS3 support for Docker, you can now add Open vSwitch to your GNS3 topologies. In order to do that, use this template:"),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://gns3.com/marketplace/appliance/open-vswitch"}),"https://gns3.com/marketplace/appliance/open-vswitch")),Object(s.b)("h3",{id:"others"},"Others"),Object(s.b)("p",null,"You can also use switches from other vendors such as Cumulus, Extreme Networks and many more."),Object(s.b)("h3",{id:"using-a-c3725-as-an-etherswitch-router"},"Using a c3725 as an \u201cEtherswitch Router\u201d"),Object(s.b)("p",null,"This is a rather simple process, but be aware that your options for configuring Cisco switching while using a c3640, c3660, c3725, and c3745 for this are quite limited. ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"../../emulators/cisco-ios-images-for-dynamips#cisco-catalyst-switches"}),"Refer to the switching section of this document to see what features will be unavailable to you"),"."),Object(s.b)("p",null,"This example will use a c3725 router IOS image, but the same steps apply if using the other three platforms listed above."),Object(s.b)("p",null,"First, click ",Object(s.b)("strong",{parentName:"p"},"Edit->Preferences->IOS Routers->New")," in the GNS3 GUI."),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/1.jpg")}),Object(s.b)("p",null,"Pick ",Object(s.b)("strong",{parentName:"p"},"run this IOS image via the local computer"),", and click ",Object(s.b)("strong",{parentName:"p"},"Next >"),":"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/2.jpg")}),Object(s.b)("p",null,"(You can also run this image via the GNS3 VM)\nSelect ",Object(s.b)("strong",{parentName:"p"},"New Image"),", and click ",Object(s.b)("strong",{parentName:"p"},"Browse")," to locate the image in your filesystem (you must supply your own!)."),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/3.jpg")}),Object(s.b)("p",null,"Select the image file, and click ",Object(s.b)("strong",{parentName:"p"},"Open"),":  "),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/4.jpg")}),Object(s.b)("p",null,"You\u2019ll be asked if you\u2019d like to decompress this image. Choose ",Object(s.b)("strong",{parentName:"p"},"Yes"),", as it will load faster, instead of decompressing every time you start the image:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/5.jpg")}),Object(s.b)("p",null,"Click ",Object(s.b)("strong",{parentName:"p"},"Next >")," to continue:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/6.jpg")}),Object(s.b)("p",null," On the screen where you\u2019re asked to name the router, select the ",Object(s.b)("strong",{parentName:"p"},"\u201cThis is an Etherswitch router\u201d")," option (this is important!). It will automatically name the device ",Object(s.b)("strong",{parentName:"p"},"Etherswitch router"),", and place into the ",Object(s.b)("strong",{parentName:"p"},"Switches")," device category, instead of ",Object(s.b)("strong",{parentName:"p"},"Routers"),". Click ",Object(s.b)("strong",{parentName:"p"},"Next >"),":"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/7.jpg")}),Object(s.b)("p",null,"On the next screen, go ahead and increase the minimum amount of RAM to 256MB, and click ",Object(s.b)("strong",{parentName:"p"},"Next >"),":"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/8.jpg")}),Object(s.b)("p",null,"Notice that slot 0 is still prepopulated with the GT96100-FE Dual FastEthernet adapter, and slot 1 will have the NM-16ESW module preinstalled.  Never attempt to replace that GT96100-FE adapter with a switch module, as it will not work. You can add a second NM-16ESW,a NM-1FE-TX single FastEthernet adapter,  or an NM-4T serial port adapter to slot 2."),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/9.jpg")}),Object(s.b)("p",null,"Click ",Object(s.b)("strong",{parentName:"p"},"Next >"),":"),Object(s.b)("p",null,"You can add WIC modules on the next page, consisting of either WIC-1T or WIC-2T serial port adapters.  It\u2019s not a bad idea to add a few serial WICs to this Etherswitch Router, but you can skip this step if you choose. Whichever you decide, click ",Object(s.b)("strong",{parentName:"p"},"Next >")," to continue:."),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/10.jpg")}),Object(s.b)("p",null,"This device will should already have an Idle-PC value listed. If so, click ",Object(s.b)("strong",{parentName:"p"},"Finish"),":"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/11.jpg")}),Object(s.b)("p",null,"If the IOS image you are using does not also list an ",Object(s.b)("strong",{parentName:"p"},"Idle-PC")," value, then click the ",Object(s.b)("strong",{parentName:"p"},"Idle-PC finder")," button:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/12.jpg")}),Object(s.b)("p",null,"Without having a suitable Idle-PC value for this device, it can consume 100% of the processing time of a CPU core, while running.  With an Idle-PC value defined, this will not be the case.  "),Object(s.b)("p",null,"It will take several seconds (depending on the speed of your computer) for the ",Object(s.b)("strong",{parentName:"p"},"Idle-PC Finder")," to determine a suitable ",Object(s.b)("strong",{parentName:"p"},"Idle-PC")," value:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/13.jpg")}),Object(s.b)("p",null,"Once an Idle-PC value is found, click ",Object(s.b)("strong",{parentName:"p"},"OK")," to close the pop up window:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/14.jpg")}),Object(s.b)("p",null,"Click ",Object(s.b)("strong",{parentName:"p"},"Finish")," to complete the import and set up process:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/15.jpg")}),Object(s.b)("p",null,"Back at the main ",Object(s.b)("strong",{parentName:"p"},"IOS router template")," page, ensure that the Etherswitch router has at least ",Object(s.b)("strong",{parentName:"p"},"1MB")," specified for ",Object(s.b)("strong",{parentName:"p"},"PCMCIA disk0"),":"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/16.jpg")}),Object(s.b)("p",null,"Click ",Object(s.b)("strong",{parentName:"p"},"OK")," to return to the main GNS3 GUI:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/17.jpg")}),Object(s.b)("p",null,"When you add this Etherswitch Router to a topology in the ",Object(s.b)("strong",{parentName:"p"},"Workspace"),", there is something you must be aware of.  The first two FastEthernet ports (fa0/0 and fa0/1) provided by that GT96100-FE are routed ports only!  This is by design, and they cannot be used as switchports.  If you left the default NM-16ESW adapter installed in slot 1, the switchports will be interfaces fa1/0 and go through fa1/15:  "),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/18.jpg")}),Object(s.b)("p",null,"With that out of the way, let\u2019s see a few of the configuration quirks you\u2019ll want to be aware of.  When the Etherswitch router boots up, you\u2019ll see that you either create vlans using \u201cvlan database\u201d in exec mode, or the \u201cva ","[#]","\u201d macro in global config mode:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/19.jpg")}),Object(s.b)("p",null,"Here\u2019s an example of creating vlans 10 and 20 in vlan database:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/20.jpg")}),Object(s.b)("p",null,"We can\u2019t use the \u201csh vlan\u201d command, but we can either use the \u201csh vlan-switch brief\u201d command or the \u201cvl\u201d macro in exec mode:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/21.jpg")}),Object(s.b)("p",null,"Despite the router saying to create/delete VLANs in config mode instead of vlan database, both of those macros will take you out to the vlan database, and then return you to global config mode automatically."),Object(s.b)("p",null,"\u201cva ","[#]","\u201d in global config mode will add a vlan:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/22.jpg")}),Object(s.b)("p",null,"While \u201cvd ","[#]","\u201d in global config mode will delete a vlan:"),Object(s.b)("img",{alt:"screenshot",src:Object(c.a)("img/using-gns3/beginners/switching-and-gns3/23.jpg")}),Object(s.b)("p",null,"These are just the immediate quirks you\u2019ll need to get accustomed to, when using these Etherswitch routers, as opposed to the IOSvL2 multilayer switch VM from Cisco VIRL.  Again, for a full list of what these Etherswitch routers are and are not capable of, please refer to the link I posted at the beginning of this section.  "),Object(s.b)("p",null,"If VIRL isn\u2019t an option, but you can use the GNS3 VM in VMware Workstation Player/Pro/Fusion, ESXi, or even running GNS3 natively in Linux, there are multiple non-Cisco vendors with switch VMs available.  Some merely require registration to download, like Arista and their vEOS switch VM,  Cumulus Networks and their Cumulus VX VM, others like Extreme Networks make their virtual EXOS and VOSS VMs available for free on Github, and Juniper does have a vQFX-10K switch VM, but you must request access from a service rep to get the 90 day trial.   Only vEOS comes close to having a CLI comparable to IOS, and obviously not every feature will be functional on these VMs, and some have steep system requirements, but they are an alternate option."))}u.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=b(n),h=i,p=u["".concat(c,".").concat(h)]||u[h]||g[h]||s;return n?a.a.createElement(p,r(r({ref:t},l),{},{components:n})):a.a.createElement(p,r({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,c=new Array(s);c[0]=h;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,c[1]=r;for(var l=2;l<s;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var i=n(0),a=n(52);t.a=function(){return Object(i.useContext)(a.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(76);var i=n(212),a=n(214);function s(e,t){var n=void 0===t?{}:t,s=n.forcePrependBaseUrl,c=void 0!==s&&s,r=n.absolute,o=void 0!==r&&r,l=Object(i.a)().siteConfig,b=(l=void 0===l?{}:l).baseUrl,u=void 0===b?"/":b,g=l.url;if(!e)return e;if(c)return u+e;if(!Object(a.a)(e))return e;var h=u+e.replace(/^\//,"");return o?g+h:h}},214:function(e,t,n){"use strict";function i(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return i}))}}]);