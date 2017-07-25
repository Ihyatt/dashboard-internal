#!/bin/bash
set -ex

TARGET=$1

# create the bucket name based on the branch name.
# here, we replace all '_' and '/'s in the branch name with '-'.
# also, the bucket name length cannot be greater than 63 chars.
BRANCH_NAME=`echo $TARGET | tr '[_/]' '-' | tr '[:upper:]' '[:lower:]'`
BUCKET=dashboard-internal-$BRANCH_NAME.datareadings.com

# if we have a branch name that is way too long, then exit early
BUCKET_LENGTH=`echo $BUCKET | wc -c`
MAX_BUCKET_LENGTH=63

if [[ $BUCKET_LENGTH -gt $MAX_BUCKET_LENGTH ]]
then
    echo
    echo "** This branch name is too long!"
    echo
    exit 1
fi

# build production code.
ember build -prod

# if this bucket does not exist, create the bucket.
aws s3 mb s3://$BUCKET/

# copy older index.html so we can roll back if need be.
if [[ `aws s3 ls s3://$BUCKET/index.html | wc -l` -gt 0 ]]
then
    aws s3 cp s3://$BUCKET/index.html s3://$BUCKET/index-previous.html
fi

# set error handling.
aws s3 website s3://$BUCKET/ --index-document index.html --error-document index.html

# sync production code to s3.
aws s3 sync --acl public-read dist/ s3://$BUCKET/
