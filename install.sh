#/bin/sh

npm update

ng version

ng build --dev

if [ -d '../healthy_new_towns-website' ]; then
    rm -rf ../healthy_new_towns-website/*
fi

if [ -d 'dist' ]; then
    mv dist/* ../healthy_new_towns-website/.
fi
