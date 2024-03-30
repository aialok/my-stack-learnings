# Redis 

## What is Redis?

Redis is an open-source in-memory data structure store that can be used as a database, cache, and message broker. It supports various data structures such as strings, lists, sets, sorted sets, hashes, bitmaps, hyperloglogs, and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions, and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.

## E.g Caching : 
![alt text](./assets/image.png)


### Key features of Redis:

1. **In-memory data store**: Redis stores data in memory, which allows for fast read and write operations.
2. **Data structures**: Redis supports various data structures such as strings, lists, sets, sorted sets, hashes, bitmaps, hyperloglogs, and geospatial indexes.
3. **Persistence options**: Redis provides different levels of on-disk persistence, allowing data to be saved to disk for durability.
4. **Replication**: Redis supports master-slave replication, allowing data to be replicated across multiple nodes for fault tolerance and scalability.
5. **High availability**: Redis Sentinel provides high availability by monitoring Redis instances and performing automatic failover in case of node failures.
6. **Partitioning**: Redis Cluster allows data to be partitioned across multiple nodes, enabling horizontal scaling of Redis.
7. **Lua scripting**: Redis supports Lua scripting, allowing users to write custom scripts for complex operations.
8. **Transactions**: Redis supports transactions, allowing multiple commands to be executed as a single atomic operation.
9. **Pub/Sub messaging**: Redis supports publish/subscribe messaging patterns, enabling real-time communication between clients.
10. **Built-in commands**: Redis provides a rich set of built-in commands for data manipulation, querying, and administration.

### Example Use Cases:

1. **Caching**: Storing frequently accessed data in memory to reduce latency and improve application performance.
2. **Real-time analytics**: Analyzing real-time data such as user interactions, logs, and metrics to gain insights and make data-driven decisions.
3. **Pub/Sub messaging**: Building real-time chat applications, notifications, and event-driven architectures using publish/subscribe messaging patterns.
4. **Rate limiting**: Implementing rate limiting mechanisms to control the rate of incoming requests and prevent abuse.
5. **Session storage**: Storing session data for web applications to manage user sessions efficiently and securely.

### Resources:

- [Redis Documentation](https://redis.io/documentation)
- [Redis Commands Reference](https://redis.io/commands)
- [Redis Data Types](https://redis.io/topics/data-types)

### Conclusion:

Redis is a versatile and powerful in-memory data store that can be used for a wide range of use cases, including caching, real-time analytics, pub/sub messaging, rate limiting, and session storage. Its rich set of features, data structures, and persistence options make it a popular choice for building high-performance and scalable applications. By leveraging Redis, developers can improve the speed, reliability, and efficiency of their applications while enabling real-time data processing and communication.



- Setting up Redis on Docker

```bash
 docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest 
```

- Connecting to Redis using Redis CLI

```bash
docker exec -it <container_id> bash
```

### Data types in Redis

1. **Strings**: A string is a sequence of characters that can be used to store text, numbers, or binary data. Strings are the simplest data type in Redis and can be manipulated using various commands such as `SET`, `GET`, `INCR`, `DECR`, and `APPEND`.

- SET
```bash
set key value
eg : set name "John Doe"
```
- SETNX
```bash
setnx key value
eg : setnx name "Jane Doe"
```
- GET
```bash
get key
eg : get name
```
- INCR
```bash
incr key
eg : 
```

2. **List** : Redis lists are linked lists of string values. Redis lists are frequently used to:
- Implement stacks and queues.
- Build queue management for background worker systems.

### Basic commands
- LPUSH adds a new element to the head of a list; RPUSH adds to the tail.
- LPOP removes and returns an element from the head of a list; RPOP does the same but from the tails of a list.
- LLEN returns the length of a list.
- LMOVE atomically moves elements from one list to another.
- LTRIM reduces a list to the specified range of elements.


3. **Sets** : Redis Sets are an unordered collection of strings. Sets are used to store unique elements and are optimized for membership queries. Some of the basic commands for sets are:
- SADD adds one or more members to a set.
- SREM removes one or more members from a set.
- SISMEMBER checks if a member is in a set.
- SMEMBERS returns all members of a set.
- SUNION returns the union of multiple sets.
- SINTER returns the intersection of multiple sets.
- SDIFF returns the difference between two sets.

4. **Sorted Sets** : Redis Sorted Sets are similar to Redis Sets, but every member of a Sorted Set is associated with a score, which is used to sort the elements. Sorted Sets are used to store a list of non-repeating elements with a score. Some of the basic commands for sorted sets are:
- ZADD adds one or more members to a sorted set, or updates the score of an existing member.
- ZREM removes one or more members from a sorted set.
- ZRANGE returns a range of members in a sorted set by index.
- ZRANK returns the rank of a member in a sorted set.
- ZSCORE returns the score of a member in a sorted set.
- ZRANGEBYSCORE returns a range of members in a sorted set by score.

5. **Hashes** : Redis Hashes are maps between string fields and string values, so they are great to represent objects. Some of the basic commands for hashes are:
- HSET sets the field in the hash stored at key to value.
- HGET returns the value associated with field in the hash stored at key.
- HDEL deletes one or more fields from a hash.
- HGETALL returns all fields and values of the hash stored at key.
- HKEYS returns all field names in the hash stored at key.
- HVALS returns all values in the hash stored at key.

6. **Bitmaps** : Redis Bitmaps are a special data type that is used to represent a set of bits. Bitmaps are used to perform operations on bitmaps, such as setting, clearing, and counting bits. Some of the basic commands for bitmaps are:
- SETBIT sets the bit at offset in the string value stored at key.
- GETBIT returns the bit value at offset in the string value stored at key.
- BITCOUNT counts the number of set bits in the string value stored at key.
- BITOP performs bitwise operations between multiple keys and stores the result in the destination key.

7. **HyperLogLogs** : Redis HyperLogLogs are a probabilistic data structure used to estimate the cardinality of a set. HyperLogLogs are used to perform approximate counting operations on sets. Some of the basic commands for HyperLogLogs are:
- PFADD adds the specified elements to the HyperLogLog.
- PFCOUNT returns the approximated cardinality of the HyperLogLog.
- PFMERGE merges multiple HyperLogLogs into a single one.

8. **Geospatial Indexes** : Redis Geospatial Indexes are used to store and query geospatial data. Geospatial Indexes are used to perform geospatial queries on sets of geospatial coordinates. Some of the basic commands for geospatial indexes are:
- GEOADD adds geospatial coordinates to the specified key.
- GEODIST returns the distance between two members in the geospatial index.
- GEORADIUS returns members within a given radius from a point.
- GEORADIUSBYMEMBER returns members within a given radius from a member.

9. PUB/SUB : Redis Pub/Sub is a messaging system that allows clients to subscribe to channels and receive messages published to those channels. Some of the basic commands for Pub/Sub are:
- SUBSCRIBE subscribes the client to the specified channels.
- UNSUBSCRIBE unsubscribes the client from the specified channels.
- PUBLISH publishes a message to the specified channel.
- PSUBSCRIBE subscribes the client to channels matching the specified patterns.
- PUNSUBSCRIBE unsubscribes the client from channels matching the specified patterns.

10. Transactions : Redis Transactions are used to group multiple commands into a single atomic operation. Transactions are used to ensure that a group of commands are executed together or not at all. Some of the basic commands for transactions are:
- MULTI marks the start of a transaction block.
- EXEC executes all commands issued after MULTI.
- DISCARD cancels a transaction.
- WATCH watches the given keys to determine if they have been modified by other clients.
- UNWATCH unsets all the watched keys.

### Conclusion:

Redis provides a rich set of data types and commands that enable developers to build high-performance and scalable applications. By leveraging the various data structures and persistence options provided by Redis, developers can implement a wide range of use cases, such as caching, real-time analytics, pub/sub messaging, rate limiting, and session storage. Redis's in-memory data store, replication, high availability, and partitioning capabilities make it a popular choice for building distributed systems that require fast data access and processing. With its versatile features and robust architecture, Redis is a powerful tool for building modern applications that require real-time data processing, communication, and analysis.
