#  READ A OF A FILE IN PYTHON WITH BOTO3

import boto3
# from botocore.handlers import disable_signing

s3_client = boto3.client('s3')
s3 = boto3.resource('s3')
s3_bucket_name = "coderbytechallengesandbox"
# s3.meta.client.meta.events.register('choose-signer.s3.*', disable_signing)
my_bucket = s3.Bucket(s3_bucket_name)

for file in my_bucket.objects.filter(Prefix='__cb__'):
  file_name=file.key
  print(file_name)

#   READ CONTENTS OF A FILE IN PYTHON WITH BOTO3

# import requests
import boto3
# from botocore.handlers import disable_signing

s3 = boto3.resource('s3')
s3_bucket_name = 'coderbytechallengesandbox'
# s3.meta.client.meta.events.register('choose-signer.s3.*', disable_signing)
my_bucket = s3.Bucket(s3_bucket_name)

for file in my_bucket.objects.filter(Prefix = '__cb__'):
  s3_object = s3.Bucket(s3_bucket_name).Object(file.key).get()
  data=s3_object['Body'].read();
  
print(data.decode())