const {kafaka} =require("./client")
const group = process.argv[2];

async function init(){
    const consumer=kafaka.consumer({groupId:group})

    await consumer.connect()

    await consumer.subscribe({topics:["riders-updated"],fromBeginning:true})

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`${group}:${partition},${topic}:`,message.value.toString())
        },
    })


}

init()