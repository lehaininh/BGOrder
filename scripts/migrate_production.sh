#!/bin/bash
#This file is used to install mysql database for the development process
#It will drop all tables in the "seaquestion" database then use file models/schema.sql to create all table again
#!!!!Warning: Question that it use only for the development process because it will drop all tables in database
#when it run

DB_NAME="crawldb"
DB_USER="crawler"
DB_PASS="crawler1234"
DB_HOST="evaniacrawlerdb.cdmandmiw5ls.ap-southeast-1.rds.amazonaws.com"

#get current version
GET_DATABASE_VERSION="SELECT name FROM version TOP 1"
#

echo "Getting data version"
version=$(mysql -h$DB_HOST -u$DB_USER -p$DB_PASS -e "USE crawldb; SELECT name FROM version")
#trim string to get current version name
version=${version:5}
x="./scripts/migration/$version"
echo $version
MIGRATION_PATH="./scripts/migration/*"
#get migration file for newer version
for filename in $MIGRATION_PATH
do
	if [[ -f $filename ]]; then
		if [[ "$filename" > "$x" ]] || [ "$filename" == "$x" ]; then
			echo "Running migration file: $filename"
			mysql -h$DB_HOST -u$DB_USER -p$DB_PASS $DB_NAME < $filename
		fi
	fi
done
