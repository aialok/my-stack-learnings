## API Rate Limiting

### What is rate limiting?

Rate limiting is a strategy used to control the amount of incoming and outgoing traffic to or from a network. It is used to prevent abuse of the network by limiting the number of requests that can be made to a server. Rate limiting can be implemented at different levels of the network stack, such as at the application level, the transport level, or the network level.

### Why is rate limiting important?

Rate limiting is important because it helps to prevent abuse of a network by limiting the number of requests that can be made to a server. This can help to prevent denial of service attacks, reduce server load, and improve the performance and reliability of the network.

### Token vs Leaky Bucket Algorithm

#### Token Bucket Algorithm

The token bucket algorithm is a rate limiting algorithm that is used to control the rate at which requests are processed. In this algorithm, a token bucket is used to store tokens, which are used to control the rate at which requests are processed. When a request is received, a token is removed from the token bucket. If there are no tokens in the token bucket, the request is rejected. Tokens are added to the token bucket at a fixed rate, which determines the rate at which requests can be processed.

<img title="Token Bucket Algorithm" src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*C00OxTVEnBVXtPI9.png"   />

#### Leaky Bucket Algorithm

The leaky bucket algorithm is a rate limiting algorithm that is used to control the rate at which requests are processed. In this algorithm, a leaky bucket is used to store requests, which are processed at a fixed rate. When a request is received, it is added to the leaky bucket. If the leaky bucket is full, the request is rejected. Requests are processed at a fixed rate, which determines the rate at which requests can be processed.

<img title="Leaky Bucket Algorithm" src="https://scaler.com/topics/images/leaky-bucket-2.webp" width="300" height="300" />
