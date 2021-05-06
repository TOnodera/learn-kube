#!/bin/bash
#githubからコンテナにコンテンツ配送

save(){
    exit 0
}
trap save TERM


if [ -z $CONTENTS_SOURCE_URL ]
then
    exist 1
fi

#最初にクローン
git clone $CONTENTS_SOURCE_URL /data

#２回目以降は１分おきにpull
cd /data
while true
do
    date
    sleep 60
    git pull
done
