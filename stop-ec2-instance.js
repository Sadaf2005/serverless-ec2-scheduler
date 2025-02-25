import { EC2Client, StopInstancesCommand } from "@aws-sdk/client-ec2";

export const handler = async (event) => {
    // Initialize the EC2 client
    const ec2Client = new EC2Client({ region: "ap-south-1" }); // Replace with your region

    // Specify the instance ID of the EC2 instance you want to stop
    const instanceId = "i-0a7abd56470f2ba29"; // Replace with your instance ID

    try {
        // Stop the EC2 instance
        const command = new StopInstancesCommand({ InstanceIds: [instanceId] });
        const response = await ec2Client.send(command);

        console.log(`Stopping EC2 instance ${instanceId}...`);
        console.log("Response:", response);

        return {
            statusCode: 200,
            body: `EC2 instance ${instanceId} is being stopped.`,
        };
    } catch (error) {
        console.error(`Error stopping EC2 instance: ${error.message}`);

        return {
            statusCode: 500,
            body: `Error stopping EC2 instance: ${error.message}`,
        };
    }
};
