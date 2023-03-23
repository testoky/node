#!/bin/sh
UUID=${UUID:-'3e2150a5-6fdf-4ce3-aadd-2c8bf94d1257'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
