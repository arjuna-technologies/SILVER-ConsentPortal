#/bin/sh

npm update

ng version

ng build --dev

if [ -d '../consentportal-website' ]; then
    rm -rf ../consentportal-website/*
fi

if [ -d 'dist' ]; then
    mv dist/* ../consentportal-website/.
fi
