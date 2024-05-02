const {kafaka}=require("./client")


async function init(){
    const admin=kafaka.admin()
    console.log("admin connecting")
    await admin.connect();
    console.log("admin connected")
    console.log("creating topic")
    await admin.createTopics({
        topics:[{
            topic:"riders-updated",
            numPartitions:2
        }]
    })
    console.log("topic created")
    console.log("disconnecting admin....")
    await admin.disconnect();

}

init().catch(error => {
    console.error("Failed to initialize Kafka:", error);
});