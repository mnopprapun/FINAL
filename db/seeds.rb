
User.destroy_all
Cart.destroy_all
Cartsitem.destroy_all
Item.destroy_all



# user = User.create(name:'admin', email:'admin', password_digest:'admin')

# Cart.create(user_id:user.id)

Item.create(name:'GIGABYTE Gaming GeForce RTX 3070 Ti 8GB GDDR6X PCI Express 4.0 x16 ATX Video Card GV-N307TGAMING OC-8GD',
description:'NVIDIA Ampere Streaming Multiprocessors, 2nd Generation RT Cores, 3rd Generation Tensor Cores, Powered by GeForce RTX 3070 Ti, Integrated with 8GB GDDR6X 256-bit memory interface, WINDFORCE 3X Cooling System with alternate spinning fans, RGB Fusion 2.0, Protection metal back plate, 2 x HDMI 2.1, 2 x Display Port 1.4a, Core Clock: 1830 MHz', 
price:1244.99, 
inventory:8, 
image_url:'https://c1.neweggimages.com/ProductImage/14-932-443-01.jpg')

Item.create(name:'GIGABYTE AORUS GeForce RTX 2080 Ti GDDR6 PCI Express 3.0x16 SLI ATX Video Card',
description:'11GB 352-Bit GDDR6, Core Clock 1695 MHz, 3 x HDMI 2.0b 3 x DisplayPort 1.4, 4352 CUDA Cores',
price: 2290.00,
inventory: 5 ,
image_url:'https://c1.neweggimages.com/ProductImage/A1K6S200307F0xY1.jpg')


Item.create(name:'ASRock OC Formula Radeon RX 6900 XT 16GB GDDR6 PCI Express 4.0 x16 ATX Video Card RX6900XT OCF 16G',
description:'16GB 256-Bit GDDR6, Core Clock 2125 MHz, Boost Clock 2475 MHz, 1 x HDMI 2.1 VRR 3 x DisplayPort 1.4 with DSC, 5120 Stream Processors, PCI Express 4.0 x16',
price: 2269.99,
inventory: 3 ,
image_url:'https://c1.neweggimages.com/ProductImage/14-930-057-V01.jpg')


Item.create(name:'ASRock Radeon RX 6700 XT Challenger D Gaming Graphic Card, 12GB GDDR6 VRAM, AMD RDNA2 (RX6700XT CLD 12G)',
description:'12GB 192-Bit GDDR6, 1 x HDMI 2.1 3 x DisplayPort 1.4, 2560 Stream Processors, PCI Express 4.0 x16',
price: 940.99,
inventory: 5 ,
image_url:'https://c1.neweggimages.com/ProductImage/APBUD210405THPHG.jpg')


Item.create(name:'GPVHOSO AMD Radeon RX 550 Graphics Card, 1183MHz, 4GB 128-Bit GDDR5 PCI Express 3.0 x 8, DP/HDMI/DVI-D Tri-ports, 4K Output, DirectX 12, OpenGL 4.5, Computer GPU, Desktop Gaming Video Card',
description:'4G GDDR5 video memory ensures high running speed, for smooth gaming and application using experience. 9cm heat dissipation fan delivers more airflow, provides a cool and quiet gaming experience.The high-quality electrical components and PCB plate ensure its safety and stability. 512 stream processors chip, with dual slot design, small size even compatible with ITX chassis. No external power supply, low full-load power consumption and the all-solid-state capacitor ensures low power consumption and high performance. Equipped with DP/HDMI/DVI-D output ports, native 4K H264, H265/HEVC encoding/decoding engine, support Blu-ray HD, 4K @60Hz output.',
price: 229.99,
inventory: 1 ,
image_url:'https://c1.neweggimages.com/ProductImage/ATMXS2106295gb71.jpg')


Item.create(name:'ASUS ROG Strix GeForce RTX 3080 Ti OC Edition Gaming Graphics Card (PCIe 4.0, 12GB GDDR6X, HDMI 2.1, DisplayPort 1.4a, Axial-tech Fan Design, 2.9-slot, Super Alloy Power II, GPU Tweak II), ROG-STRIX-RTX3080TI-O12G-GAMING',
description:'12GB 384-Bit GDDR6X, OC mode: 1845 MHz (Boost Clock), Gaming mode: 1815 MHz (Boost Clock), 2 x HDMI 2.1 3 x DisplayPort 1.4a, 10240 CUDA Cores, PCI Express 4.0 x16',
price: 2319.98,
inventory: 1 ,
image_url:'https://c1.neweggimages.com/ProductImage/14-126-508-V19.jpg')



# Cartsitem.create!(cart_id:'1', item_id:Item.all.first.id)