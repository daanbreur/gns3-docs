(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{183:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return l})),n.d(i,"metadata",(function(){return s})),n.d(i,"rightToc",(function(){return c})),n.d(i,"default",(function(){return d}));var t=n(2),a=n(9),r=(n(0),n(209)),o=n(211),l={id:"cisco-ios-images-for-dynamips",title:"Cisco IOS images for Dynamips",sidebar_label:"Cisco IOS images for Dynamips"},s={id:"emulators/cisco-ios-images-for-dynamips",isDocsHomePage:!1,title:"Cisco IOS images for Dynamips",description:"GNS3 offers multiple ways to emulate IOS. For older images, we use and maintain Dynamips; an emulator dedicated to emulate some Cisco hardware. Dynamips can run unmodified IOS images. In the new GNS3 1.4, there is a way to run a second category of switches and routers. These are classified as Routing and Switching virtual machines (or R+Svms) for short. What are the differences? Here are the major differences:",source:"@site/docs/emulators/cisco-ios-images-for-dynamips.md",permalink:"/gns3-docs/docs/emulators/cisco-ios-images-for-dynamips",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/emulators/cisco-ios-images-for-dynamips.md",sidebar_label:"Cisco IOS images for Dynamips",sidebar:"someSidebar",previous:{title:"Which emulator should I use?",permalink:"/gns3-docs/docs/emulators/which-emulators-should-i-use"},next:{title:"Non-Native IOU for Windows and OSX",permalink:"/gns3-docs/docs/emulators/non-native-iou-for-windows-and-osx"}},c=[{value:"Important Points",id:"important-points",children:[{value:"Availability",id:"availability",children:[]},{value:"IOS 15.x",id:"ios-15x",children:[]},{value:"Should I use a mainline and technology train image?",id:"should-i-use-a-mainline-and-technology-train-image",children:[]},{value:"Minimum memory",id:"minimum-memory",children:[]},{value:"Recommended images",id:"recommended-images",children:[]},{value:"Idle-PC value",id:"idle-pc-value",children:[]}]},{value:"C1700 Series",id:"c1700-series",children:[{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline",children:[]}]},{value:"C2600 Series",id:"c2600-series",children:[{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-1",children:[]},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train",children:[]}]},{value:"C3620",id:"c3620",children:[{value:"IOS version 12.2.26c",id:"ios-version-12226c",children:[]}]},{value:"C3640",id:"c3640",children:[{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-2",children:[]}]},{value:"C3660",id:"c3660",children:[{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-3",children:[]},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train-1",children:[]}]},{value:"C2691",id:"c2691",children:[{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-4",children:[]},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train-2",children:[]}]},{value:"C3725",id:"c3725",children:[{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-5",children:[]},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train-3",children:[]}]},{value:"C3745",id:"c3745",children:[{value:"IOS version 12.4.25d (Mainline)",id:"ios-version-12425d-mainline-6",children:[]},{value:"IOS version 12.4.15T14 (Technology train)",id:"ios-version-12415t14-technology-train-4",children:[]}]},{value:"C7200 SERIES",id:"c7200-series",children:[{value:"IOS 15 (Mainline)",id:"ios-15-mainline",children:[]},{value:"IOS 12.4.25g (Mainline)",id:"ios-12425g-mainline",children:[]},{value:"IOS 12.4.24T5 (Technology train)",id:"ios-12424t5-technology-train",children:[]}]},{value:"Cisco Catalyst Switches",id:"cisco-catalyst-switches",children:[]}],u={rightToc:c};function d(e){var i=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},u,n,{components:i,mdxType:"MDXLayout"}),Object(r.b)("p",null,"GNS3 offers multiple ways to emulate IOS. For older images, we use and maintain Dynamips; an emulator dedicated to emulate some Cisco hardware. Dynamips can run unmodified IOS images. In the new GNS3 1.4, there is a way to run a second category of switches and routers. These are classified as Routing and Switching virtual machines (or R+Svms) for short. What are the differences? Here are the major differences:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"IOS images are usually run in Dynamips however R+Svms are housed in a virtual machine."),Object(r.b)("li",{parentName:"ul"},"IOS images are lower in cpu and memory so you can fit more of them in one topology."),Object(r.b)("li",{parentName:"ul"},"R+Svms are all vendor Routing and Switching images that are larger in size but can be imported into GNS3 for real world network emulation.")),Object(r.b)("h2",{id:"important-points"},"Important Points"),Object(r.b)("h3",{id:"availability"},"Availability"),Object(r.b)("p",null,"Due to these platforms hitting End of Sale, End of Life, and End of Support status, the images are no longer available for download from Cisco\u2019s support sections. Currently, the c7200 images are the only ones still available for download for those with a support contract."),Object(r.b)("h3",{id:"ios-15x"},"IOS 15.x"),Object(r.b)("p",null,"Only the c7200 series get newer IOS 15 images. All other platforms are now end-of-life and only support IOS 12.4. Please note that the IOSv appliance is based on IOS 15 and there are IOU (IOS on UNIX) images with IOS 15."),Object(r.b)("h3",{id:"should-i-use-a-mainline-and-technology-train-image"},"Should I use a mainline and technology train image?"),Object(r.b)("p",null,"You will find the technology train images to contain the newest features but it may also contain the most bugs. We recommend Mainline over Technology train if you are interested on stability without the need of new features.Please see ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"http://www.ciscopress.com/articles/article.asp?p=2106547"}),"Cisco IOS Versions and Naming")," for more information."),Object(r.b)("h3",{id:"minimum-memory"},"Minimum memory"),Object(r.b)("p",null,"The minimum RAM is the amount of memory needed for IOS to work at maximum capacity with most feature configured and activated. From experience you can usually use a bit less RAM just fine."),Object(r.b)("h3",{id:"recommended-images"},"Recommended images"),Object(r.b)("p",null,"We really recommend using the c3640, c3660, c3725, c3745 and c7200 IOS images listed below, they have proven to be the most stable in GNS3 provided you use the right amount of RAM and Idle-PC value."),Object(r.b)("h3",{id:"idle-pc-value"},"Idle-PC value"),Object(r.b)("p",null,"When Dynamips runs an IOS image, a single instance can consume 100% of the processing time for a CPU core or thread. To remedy this, you can supply Dynamips with an Idle-PC value, to consume less CPU. This value will vary between devices/images. To help automate the process of determining a valid Idle-PC value, you can use the Idle-PC finder button when importing a supported IOS image into GNS3:"),Object(r.b)("img",{alt:"screenshot",src:Object(o.a)("img/emulators/cisco-ios-images-for-dynamips/1.jpg")}),Object(r.b)("p",null,"(Idle-PC values are not required with virtual machines or docker containers. They\u2019re only required for use by the Dynamips emulator)"),Object(r.b)("h2",{id:"c1700-series"},"C1700 Series"),Object(r.b)("p",null,"1700s have 1 FastEthernet fixed port (C1700-MB-1ETH) on its motherboard, 2 subslots for WICs (maximum of 2 Ethernet ports or 4 serial ports), and no Network Module slots. Note that interfaces do not use a slot designation (e.g. \u201cf0\u201d)"),Object(r.b)("h3",{id:"ios-version-12425d-mainline"},"IOS version 12.4.25d (Mainline)"),Object(r.b)("p",null,"File name: c1700-adventerprisek9-mz.124-25d.bin\nMD5: 3ed8d56a8757771105a56070e4147716\nMinimum RAM: 128MB\nProposed idle-PC value: 0x80358a60"),Object(r.b)("p",null,"IOS version 12.4.15T14 (Technology train)\nFile name: c1700-adventerprisek9-mz.124-15.T14.bin\nMD5: 351190de8764263e85a2b50718f394fd\nMinimum RAM: 160MB\nProposed idle-PC value: 0x824a4dc4"),Object(r.b)("h2",{id:"c2600-series"},"C2600 Series"),Object(r.b)("p",null,"2600s have one or two Ethernet or FastEthernet interfaces on its motherboard, 3 subslots for WICs (maximum of 6 serial ports) and 1 Network Module slot (maximum of 4 Ethernet ports or 16 FastEthernet ports)."),Object(r.b)("h3",{id:"ios-version-12425d-mainline-1"},"IOS version 12.4.25d (Mainline)"),Object(r.b)("p",null,"File name: c2600-adventerprisek9-mz.124-25d.bin\nMD5: 8eca1f6fe57dfb3c3cf3568c0e475853\nMinimum RAM: 128MB\nProposed idle-PC value: 0x80519c48"),Object(r.b)("h3",{id:"ios-version-12415t14-technology-train"},"IOS version 12.4.15T14 (Technology train)"),Object(r.b)("p",null,"File name: c2600-adventerprisek9-mz.124-15.T14.bin\nMD5: 12b8548b23e2ec593652ae9310ac797f\nMinimum RAM: 256MB\nProposed idle-PC value: 0x8027ec88"),Object(r.b)("h2",{id:"c3620"},"C3620"),Object(r.b)("p",null,"The c3620 supports up to 2 Network Modules (maximum of 8 Ethernet ports, 32 FastEthernet ports or 8 serial ports). Note that tt shouldn\u2019t be used since the latest available IOS image is very old."),Object(r.b)("h3",{id:"ios-version-12226c"},"IOS version 12.2.26c"),Object(r.b)("p",null,"File name: c3620-a3jk8s-mz.122-26c.bin\nMD5: dd34b958ad362ef54ba48b187f4c97b4\nMinimum RAM: 64MB\nProposed idle-PC value: 0x603a8bac"),Object(r.b)("h2",{id:"c3640"},"C3640"),Object(r.b)("p",null,"The c3640 supports up to 4 Network Modules (maximum of 16 Ethernet ports, 32 FastEthernet ports or 16 serial ports)."),Object(r.b)("h3",{id:"ios-version-12425d-mainline-2"},"IOS version 12.4.25d (Mainline)"),Object(r.b)("p",null,"File name: c3640-a3js-mz.124-25d.bin\nMD5: db9f63ca1b46d18fb835496bfffe608a\nMinimum RAM: 128MB\nProposed idle-PC value: 0x6050b114"),Object(r.b)("h2",{id:"c3660"},"C3660"),Object(r.b)("p",null,"The c3660 has 2 FastEthernet fixed ports (Leopard-2FE) and supports up to 6 Network Modules (maximum of 24 Ethernet ports, 32 FastEthernet ports or 24 serial ports)."),Object(r.b)("h3",{id:"ios-version-12425d-mainline-3"},"IOS version 12.4.25d (Mainline)"),Object(r.b)("p",null,"File name: c3660-a3jk9s-mz.124-25d.bin\nMD5: 4ac7e947f13c189d746149dc74992890\nMinimum RAM: 192MB\nProposed idle-PC value: 0x606071f8"),Object(r.b)("h3",{id:"ios-version-12415t14-technology-train-1"},"IOS version 12.4.15T14 (Technology train)"),Object(r.b)("p",null,"File name: c3660-a3jk9s-mz.124-15.T14.bin\nMD5: 39950b7a563aa08e94a168260409f1e6\nMinimum RAM: 256MB\nProposed idle-PC value: 0x6076e0b4"),Object(r.b)("h2",{id:"c2691"},"C2691"),Object(r.b)("p",null,"The c2691 has 2 FastEthernet interfaces its motherboard (GT96100-FE), 3 subslots for WICs (maximum of 6 serial ports) and 1 Network Module slot (maximum of 16 FastEthernet ports or 4 serial ports)."),Object(r.b)("h3",{id:"ios-version-12425d-mainline-4"},"IOS version 12.4.25d (Mainline)"),Object(r.b)("p",null,"File name: c2691-adventerprisek9-mz.124-25d.bin\nMD5: a8e1f5821d87456595488d6221ce42e5\nMinimum RAM: 192MB\nProposed idle-PC value: 0x60a48cb8"),Object(r.b)("h3",{id:"ios-version-12415t14-technology-train-2"},"IOS version 12.4.15T14 (Technology train)"),Object(r.b)("p",null,"File name: c2691-adventerprisek9-mz.124-15.T14.bin\nMD5: 91388104d7276ad09204e36d2dfcf52d\nMinimum RAM: 256MB\nProposed idle-PC value: 0x60bcf9f8"),Object(r.b)("h2",{id:"c3725"},"C3725"),Object(r.b)("p",null,"The c3725 has 2 FastEthernet interfaces on its motherboard (GT96100-FE), 3 subslots for WICs (maximum of 6 serial ports) and 2 Network Module slots (maximum of 32 FastEthernet ports or 8 serial ports)."),Object(r.b)("h3",{id:"ios-version-12425d-mainline-5"},"IOS version 12.4.25d (Mainline)"),Object(r.b)("p",null,"File name: c3725-adventerprisek9-mz.24-25d.bin\nMD5: ac3d313d3caff5beeee244b81d2c024c\nMinimum RAM: 128MB\nProposed idle-PC value: 0x602467a4"),Object(r.b)("h3",{id:"ios-version-12415t14-technology-train-3"},"IOS version 12.4.15T14 (Technology train)"),Object(r.b)("p",null,"File name: c3725-adventerprisek9-mz.124-15.T14.bin\nMD5: 42baf17af10d9a1471bf542f0bfd07c7\nMinimum RAM: 256MB\nProposed idle-PC value: 0x60c09aa0"),Object(r.b)("h2",{id:"c3745"},"C3745"),Object(r.b)("p",null,"The c3745 has 2 FastEthernet interfaces on its motherboard (GT96100-FE), 3 subslots for WICs (maximum of 6 serial ports) and 4 Network Module slots (maximum of 32 FastEthernet ports or 16 serial ports)."),Object(r.b)("h3",{id:"ios-version-12425d-mainline-6"},"IOS version 12.4.25d (Mainline)"),Object(r.b)("p",null,"File name: c3745-adventerprisek9-mz.124-25d.bin\nMD5: 563797308a3036337c3dee9b4ab54649\nMinimum RAM: 256MB\nProposed idle-PC value: 0x60aa1da0"),Object(r.b)("h3",{id:"ios-version-12415t14-technology-train-4"},"IOS version 12.4.15T14 (Technology train)"),Object(r.b)("p",null,"File name: c3745-adventerprisek9-mz.124-15.T14.bin\nMD5: a696619869a972ec3a27742d38031b6a\nMinimum RAM: 256 RAM\nProposed idle-PC value: 0x602701e4"),Object(r.b)("h2",{id:"c7200-series"},"C7200 SERIES"),Object(r.b)("p",null,"7200s have a different architecture. Only the 7206 is supported, it has 6 Port Adapters (PA) slots. VXR chassis, NPE-400 and C7200-IO-FE are the default settings in GNS3."),Object(r.b)("h3",{id:"ios-15-mainline"},"IOS 15 (Mainline)"),Object(r.b)("p",null,"This router series is still getting new IOS 15.x versions.\nThe last one at this date is:\nFile name: c7200-adventerprisek9-mz.152-4.M8.bin\nMinimum RAM: 512MB"),Object(r.b)("h3",{id:"ios-12425g-mainline"},"IOS 12.4.25g (Mainline)"),Object(r.b)("p",null,"MD5: 3a78cb61831b3ef1530f7402f5986556\nFile name: c7200-a3jk9s-mz.124-25g.bin\nMinimum RAM: 256MB"),Object(r.b)("h3",{id:"ios-12424t5-technology-train"},"IOS 12.4.24T5 (Technology train)"),Object(r.b)("p",null,"This one is not the latest 12.4 version but it is easier to find.\nMD5: 3c4148f62acf56602ce3b371ebae60c9\nFile name: c7200-adventerprisek9-mz.124-24.T5\nMinimum RAM: 256MB\nProposed idle-PC value: 0x606df838"),Object(r.b)("h2",{id:"cisco-catalyst-switches"},"Cisco Catalyst Switches"),Object(r.b)("p",null,"Dynamips is incapable of running IOS images from Catalyst Switches, as it\u2019s unable to  emulate the ASICs used in those type of devices."),Object(r.b)("p",null,"For switching, you can use an IOU L2 binary image, or an IOSvL2 virtual disk image with Qemu."),Object(r.b)("p",null,"However, if you want to use Dynamips you can use the EtherSwitch module with 2600s, 3600s and 3700s Series. Keep in mind that this module works differently (it uses the vlan database etc.) and does NOT support the following features:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Access Switch Device Manager (SDM) Template"),Object(r.b)("li",{parentName:"ul"},"ACL \u2013 Improved Merging Algorithm"),Object(r.b)("li",{parentName:"ul"},"ARP Optimization"),Object(r.b)("li",{parentName:"ul"},"BGP Increased Support of Numbered as-path Access Lists to 500"),Object(r.b)("li",{parentName:"ul"},"BGP Restart Neighbor Session After max-prefix Limit Reached"),Object(r.b)("li",{parentName:"ul"},"BGP Route-Map Continue Support for Outbound Policy"),Object(r.b)("li",{parentName:"ul"},"Clear Counters Per Port"),Object(r.b)("li",{parentName:"ul"},"DHCP Snooping"),Object(r.b)("li",{parentName:"ul"},"DHCP Snooping Counters"),Object(r.b)("li",{parentName:"ul"},"Diagnostics Options on bootup"),Object(r.b)("li",{parentName:"ul"},"ErrDisable Reactivation Per Port"),Object(r.b)("li",{parentName:"ul"},"ErrDisable timeout"),Object(r.b)("li",{parentName:"ul"},"EtherChannel \u2013 Flexible PAgP"),Object(r.b)("li",{parentName:"ul"},"Etherchannel Guard"),Object(r.b)("li",{parentName:"ul"},"Fallback Bridging"),Object(r.b)("li",{parentName:"ul"},"Flex Link Bi-directional Fast Convergence"),Object(r.b)("li",{parentName:"ul"},"Flex Link VLAN Load-Balancing"),Object(r.b)("li",{parentName:"ul"},"Flex Links Interface Preemption"),Object(r.b)("li",{parentName:"ul"},"GOLD \u2013 Generic Online Diagnostics"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1ab, Link Layer Discovery Protocol"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1s \u2013 Multiple Spanning Tree (MST) Standard Compliance"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1s VLAN Multiple Spanning Trees"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1t"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1W Spanning Tree Rapid Reconfiguration"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1x \u2013 Auth Fail Open"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1x \u2013 Auth Fail VLAN"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1x \u2013 VLAN Assignment"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1x \u2013 Wake on LAN Support"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1X Multi-Domain Authentication"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1x RADIUS Accounting"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.1x with Port Security"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.3ad Link Aggregation (LACP)"),Object(r.b)("li",{parentName:"ul"},"IEEE 802.3af Power over Ethernet"),Object(r.b)("li",{parentName:"ul"},"IGMP Fast Leave"),Object(r.b)("li",{parentName:"ul"},"IGMP Version 1"),Object(r.b)("li",{parentName:"ul"},"IGRP"),Object(r.b)("li",{parentName:"ul"},"IP Phone Detection Enhancements"),Object(r.b)("li",{parentName:"ul"},"IP Phone Enhancement \u2013 PHY Loop Detection"),Object(r.b)("li",{parentName:"ul"},"IPSG (IP Source Guard)"),Object(r.b)("li",{parentName:"ul"},"Jumbo Frames"),Object(r.b)("li",{parentName:"ul"},"L2PT \u2013 Layer 2 Protocol Tunneling"),Object(r.b)("li",{parentName:"ul"},"MAC Authentication Bypass"),Object(r.b)("li",{parentName:"ul"},"MLD Snooping"),Object(r.b)("li",{parentName:"ul"},"Multicast Etherchannel Load Balancing"),Object(r.b)("li",{parentName:"ul"},"NAC \u2013 L2 IEEE 802.1x"),Object(r.b)("li",{parentName:"ul"},"NAC \u2013 L2 IP"),Object(r.b)("li",{parentName:"ul"},"NAC \u2013 L2 IP with Auth Fail Open"),Object(r.b)("li",{parentName:"ul"},"Packet-Based Storm Control"),Object(r.b)("li",{parentName:"ul"},"Per Port Per VLAN Policing"),Object(r.b)("li",{parentName:"ul"},"Port Security"),Object(r.b)("li",{parentName:"ul"},"Port Security on Private VLAN Ports"),Object(r.b)("li",{parentName:"ul"},"Private VLANs"),Object(r.b)("li",{parentName:"ul"},"QoS Policy Propagation via Border Gateway Protocol (QPPB)"),Object(r.b)("li",{parentName:"ul"},"Rapid-Per-VLAN-Spanning Tree (Rapid-PVST)"),Object(r.b)("li",{parentName:"ul"},"Reduced MAC Address Usage"),Object(r.b)("li",{parentName:"ul"},"Remote SPAN (RSPAN)"),Object(r.b)("li",{parentName:"ul"},"Smart Port"),Object(r.b)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 Loop Guard"),Object(r.b)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 PortFast BPDU Filtering"),Object(r.b)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 Portfast Support for Trunks"),Object(r.b)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 Root Guard"),Object(r.b)("li",{parentName:"ul"},"Spanning Tree Protocol (STP) \u2013 Uplink Load Balancing"),Object(r.b)("li",{parentName:"ul"},"SRR (Shaped Round Robin)"),Object(r.b)("li",{parentName:"ul"},"Standby Supervisor Port Usage"),Object(r.b)("li",{parentName:"ul"},"STP Syslog Messages"),Object(r.b)("li",{parentName:"ul"},"Switching Database Manager (SDM)"),Object(r.b)("li",{parentName:"ul"},"Trunk Failover"),Object(r.b)("li",{parentName:"ul"},"Trusted boundary (extended trust for CDP devices)"),Object(r.b)("li",{parentName:"ul"},"Unicast Mac Filtering"),Object(r.b)("li",{parentName:"ul"},"UniDirectional Link Detection (UDLD)"),Object(r.b)("li",{parentName:"ul"},"VLAN Access Control List (VACL)"),Object(r.b)("li",{parentName:"ul"},"VLAN Aware Port Security"),Object(r.b)("li",{parentName:"ul"},"Weighted Tail Drop (WTD)"),Object(r.b)("li",{parentName:"ul"},"Routing and Switching Virtual machines from Vendors")),Object(r.b)("p",null,"To recap: You can import many images using Virtualbox or VMWare. ASIC based models like the Cisco Catalyst switches are impossible to import as a Routing and Switching image."),Object(r.b)("p",null,"If you require more switching features, it is recommended to use larger Virtual Machine Switches and Routers (like the ones from VIRL) that run inside your choice of Qemu, Virtualbox or VMWare. For advanced switching IOSv and/or IOU is recommended."))}d.isMDXComponent=!0},209:function(e,i,n){"use strict";n.d(i,"a",(function(){return d})),n.d(i,"b",(function(){return p}));var t=n(0),a=n.n(t);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function s(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var i=a.a.useContext(c),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},d=function(e){var i=u(e.components);return a.a.createElement(c.Provider,{value:i},e.children)},m={inlineCode:"code",wrapper:function(e){var i=e.children;return a.a.createElement(a.a.Fragment,{},i)}},b=a.a.forwardRef((function(e,i){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=t,p=d["".concat(o,".").concat(b)]||d[b]||m[b]||r;return n?a.a.createElement(p,l(l({ref:i},c),{},{components:n})):a.a.createElement(p,l({ref:i},c))}));function p(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},210:function(e,i,n){"use strict";var t=n(0),a=n(52);i.a=function(){return Object(t.useContext)(a.a)}},211:function(e,i,n){"use strict";n.d(i,"a",(function(){return r}));n(76);var t=n(210),a=n(212);function r(e,i){var n=void 0===i?{}:i,r=n.forcePrependBaseUrl,o=void 0!==r&&r,l=n.absolute,s=void 0!==l&&l,c=Object(t.a)().siteConfig,u=(c=void 0===c?{}:c).baseUrl,d=void 0===u?"/":u,m=c.url;if(!e)return e;if(o)return d+e;if(!Object(a.a)(e))return e;var b=d+e.replace(/^\//,"");return s?m+b:b}},212:function(e,i,n){"use strict";function t(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(i,"a",(function(){return t}))}}]);