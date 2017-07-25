#!/bin/bash

set -ex

TARGET=$1

# create the bucket name based on the branch name.
# here, we replace all '_' and '/'s in the branch name with '-'.
BRANCH_NAME=`echo $TARGET | tr '[_/]' '-' | tr '[:upper:]' '[:lower:]'`
BUCKET=dashboards-$BRANCH_NAME.datareadings.com

aws s3 rb s3://$BUCKET/ --force
