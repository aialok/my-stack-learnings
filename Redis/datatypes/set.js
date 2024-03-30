const client = require("./client");

async function init() {

    try {
        // Add a value to a set
        await client.sadd('mySet', 'value1');

        // Add multiple values to a set
        await client.sadd('mySet', 'value2', 'value3');

        // Get all members in a set
        let members = await client.smembers('mySet');
        console.log(members);

        // Remove a member from a set
        await client.srem('mySet', 'value1');

        // Check if a member exists in a set
        let isMember = await client.sismember('mySet', 'value2');
        console.log(isMember);

        // Get the number of members in a set
        let count = await client.scard('mySet');
        console.log(count);

        // Move a member from one set to another
        await client.smove('mySet', 'anotherSet', 'value2');

    } catch (error) {
        console.error(error);
    }


}

init();
