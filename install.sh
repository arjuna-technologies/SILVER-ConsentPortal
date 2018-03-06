#/bin/sh

npm update

ng version

ng build --dev

if [ -d '../health_new_towns-website' ]; then
    rm -rf ../health_new_towns-website/*
fi

if [ -d 'dist' ]; then
    mv dist/* ../health_new_towns-website/.
fi
