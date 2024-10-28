@echo off
rem call gulp

REM call node dist\main.js --url https://shop.dyson.com.au/vacuum-cleaners/handstick/dyson-v11-absolute-pro-269144-01 --newFile --exportType json
REM call node dist\main.js --url=https://shop.dyson.com.au/vacuum-cleaners/handstick/dyson-v7-cord-free-248407-01
REM call node dist\main.js --url=https://shop.dyson.com.au/vacuum-cleaners/handstick/dyson-v8-origin-271642-01


REM call node dist\main.js --url https://www.pccasegear.com/products/40386/synology-diskstation-ds218-2-bay-nas
REM call node dist\main.js --url=https://www.pccasegear.com/products/44159/intel-core-i5-9600k-processor
REM call node dist\main.js --url=https://www.pccasegear.com/products/45192/msi-geforce-rtx-2060-aero-itx-oc-6gb
REM call node dist\main.js --url=https://www.pccasegear.com/products/37368/seagate-ironwolf-8tb-st8000vn0022-3-5in-nas-hard-drive
REM call node dist\main.js --url=https://www.pccasegear.com/products/42917/western-digital-wd-red-8tb-wd80efax-3-5in-nas-hard-drive

REM call node dist\main.js --url https://www.catch.com.au/product/logitech-mx-master-2s-wireless-mouse-black-1407282
REM call node dist\main.js --url "https://www.catch.com.au/product/asics-mens-gel-kayano-25-shoe-black-glacier-grey-3174569/?sid=ASICS&sp=8&st=37&srtrev=ag-pk3pbuywfn16aknsml5rsw.click"
REM call node dist\main.js --url "https://www.catch.com.au/event/caribee-snow-drift-jumbo-sleeping-bags-75263/product/caribee-snow-drift-jumbo-right-zip-sleeping-bag-306355"
REM call node dist\main.js --url "https://www.catch.com.au/event/caribee-snow-drift-jumbo-sleeping-bags-75263/product/caribee-snow-drift-jumbo-left-zip-sleeping-bag-306356/?e=sports-outdoor&st=1&sid=75263&sp=2&asp=&aqi="


REM call node dist\main.js --url https://www.officeworks.com.au/shop/officeworks/p/toshiba-4tb-canvio-basics-portable-hard-drive-black-tobacv4tb
REM call node dist\main.js --url https://www.officeworks.com.au/shop/officeworks/p/logitech-mx-master-2s-wireless-mouse-graphite-inlogma2s

REM call node dist\main.js --url https://www.thegoodguys.com.au/dyson-big-ball-origin-barrel-vacuum-214886-01

REM call node dist\main.js --url "https://www.apliexpress.com.au/event/caribee-snow-drift-jumbo-sleeping-bags-75263/product/caribee-snow-drift-jumbo-left-zip-sleeping-bag-306356/?e=sports-outdoor&st=1&sid=75263&sp=2&asp=&aqi="

rem call node dist\main.js --keyword "GeForce GTX 4092" --site PcCaseGear --newFile --exportType json
rem call node dist\main.js --keyword "GeForce RTX 2070" --site PcCaseGear 
rem call node dist\main.js --keyword "GeForce RTX 2080" --site PcCaseGear 
rem call node dist\main.js --keyword "GeForce RTX 2080 TI" --site PcCaseGear
REM call node dist\main.js --keyword "GeForce RTX 2060" --site PcCaseGear 
REM call node dist\main.js --keyword "GeForce RTX 2070" --site PcCaseGear 
REM call node dist\main.js --keyword "GeForce RTX 2080" --site PcCaseGear 
REM call node dist\main.js --keyword "GeForce RTX 2080 TI" --site PcCaseGear 
REM call node dist\main.js --keyword "SSD 500G" --site PcCaseGear 


REM call node dist\main.js --keyword "Nike running shoe" --site Catch 
REM @echo on


call ts-node src\main.ts --keyword "GeForce GTX 4080" --site PcCaseGear --newFile --exportType json
rem call ts-node src\main.ts --url https://www.officeworks.com.au/shop/officeworks/p/nintendo-switch-oled-model-white-nscnoledwe
