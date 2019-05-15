@echo off
call gulp

call node dist\main.js --url=https://shop.dyson.com.au/vacuum-cleaners/handstick/dyson-v11-absolute-pro-269144-01
call node dist\main.js --url=https://shop.dyson.com.au/vacuum-cleaners/handstick/dyson-v7-cord-free-248407-01
call node dist\main.js --url=https://shop.dyson.com.au/vacuum-cleaners/handstick/dyson-v8-origin-271642-01


call node dist\main.js --url=https://www.pccasegear.com/products/40386/synology-diskstation-ds218-2-bay-nas
call node dist\main.js --url=https://www.pccasegear.com/products/44159/intel-core-i5-9600k-processor
call node dist\main.js --url=https://www.pccasegear.com/products/45192/msi-geforce-rtx-2060-aero-itx-oc-6gb
call node dist\main.js --url=https://www.pccasegear.com/products/37368/seagate-ironwolf-8tb-st8000vn0022-3-5in-nas-hard-drive
call node dist\main.js --url=https://www.pccasegear.com/products/42917/western-digital-wd-red-8tb-wd80efax-3-5in-nas-hard-drive

@echo on