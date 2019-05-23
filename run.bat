@echo off
call gulp

call node dist\main.js --url https://shop.dyson.com.au/vacuum-cleaners/handstick/dyson-v11-absolute-pro-269144-01 --newFile --exportType json
call node dist\main.js --url=https://shop.dyson.com.au/vacuum-cleaners/handstick/dyson-v7-cord-free-248407-01
call node dist\main.js --url=https://shop.dyson.com.au/vacuum-cleaners/handstick/dyson-v8-origin-271642-01


call node dist\main.js --url https://www.pccasegear.com/products/40386/synology-diskstation-ds218-2-bay-nas
call node dist\main.js --url=https://www.pccasegear.com/products/44159/intel-core-i5-9600k-processor
call node dist\main.js --url=https://www.pccasegear.com/products/45192/msi-geforce-rtx-2060-aero-itx-oc-6gb
call node dist\main.js --url=https://www.pccasegear.com/products/37368/seagate-ironwolf-8tb-st8000vn0022-3-5in-nas-hard-drive
call node dist\main.js --url=https://www.pccasegear.com/products/42917/western-digital-wd-red-8tb-wd80efax-3-5in-nas-hard-drive

call node dist\main.js --url https://www.catch.com.au/product/logitech-mx-master-2s-wireless-mouse-black-1407282
call node dist\main.js --url "https://www.catch.com.au/product/asics-mens-gel-kayano-25-shoe-black-glacier-grey-3174569/?sid=ASICS&sp=8&st=37&srtrev=ag-pk3pbuywfn16aknsml5rsw.click"
call node dist\main.js --url "https://www.catch.com.au/event/caribee-snow-drift-jumbo-sleeping-bags-75263/product/caribee-snow-drift-jumbo-right-zip-sleeping-bag-306355"
call node dist\main.js --url "https://www.catch.com.au/event/caribee-snow-drift-jumbo-sleeping-bags-75263/product/caribee-snow-drift-jumbo-left-zip-sleeping-bag-306356/?e=sports-outdoor&st=1&sid=75263&sp=2&asp=&aqi="


call node dist\main.js --url https://www.officeworks.com.au/shop/officeworks/p/toshiba-4tb-canvio-basics-portable-hard-drive-black-tobacv4tb

call node dist\main.js --url https://www.thegoodguys.com.au/dyson-big-ball-origin-barrel-vacuum-214886-01

rem call node dist\main.js --url "https://www.apliexpress.com.au/event/caribee-snow-drift-jumbo-sleeping-bags-75263/product/caribee-snow-drift-jumbo-left-zip-sleeping-bag-306356/?e=sports-outdoor&st=1&sid=75263&sp=2&asp=&aqi="

@echo on