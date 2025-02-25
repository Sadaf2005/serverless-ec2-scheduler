import {EC2Client,StartInstancesCommand} from "@aws-sdk/client-ec2";

export const handler = async (event) => {
  // TODO implement
  const ec2Client=new EC2Client({region:"ap-south-1"});
  const instanceId="i-0a7abd56470f2ba29";
  try{
    const command = new StartInstancesCommand({
      InstanceIds: [instanceId],
    });
    const response = await ec2Client.send(command);
    console.log(Instance started successfully ${instanceId}...);
    console.log("Response:" ,response);
    return {
      statusCode: 200,
      body:EC2 instance ${instanceId} is being started,}
  
  }
  catch(error){
      console.log(Error Starting EC2 instance :${error.message});
      return{
        statusCode:500,
        body:Error Starting EC2 instance :${error.message}
      }

  }
  
};
