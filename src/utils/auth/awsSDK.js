import { config as AWSConfig, Lambda } from 'aws-sdk'

const AWSRegion = process.env.REACT_APP_AWS_REGION

AWSConfig.region = AWSRegion

export { AWSRegion, AWSConfig, Lambda }
